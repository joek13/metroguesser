(() => {
  "use strict";

  // Load the chosen system's data files (as <script>s, so this works from file://), then start.
  const systems = window.METRO_SYSTEMS;
  const requested = new URLSearchParams(location.search).get("system");
  const systemId = systems.some((x) => x.id === requested) ? requested : systems[0].id;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = src;
      el.onload = resolve;
      el.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(el);
    });
  }

  Promise.all(["system", "stations", "lines", "funfacts"].map((f) => loadScript(`data/${systemId}/${f}.js`)))
    .then(() => main(window.METRO_SYSTEM, window.STATIONS, window.LINES, window.FUN_FACTS))
    .catch((err) => {
      document.getElementById("status").textContent = `Couldn't load map data: ${err.message}`;
    });

  function main(system, stations, lines, funFacts) {
    const MAX_GUESSES = 6;
    const TAP_RADIUS_PX = 22;
    const STORAGE_PREFIX = "metroguesser:";

    const ROUTE_COLORS = system.routeColors || {};
    const DARK_TEXT_ROUTES = new Set(system.darkTextRoutes || []);

    // Distance bands (in the system's units) → CSS class / share emoji.
    const BUCKETS = [
      { max: system.distanceBands[0], cls: "d0", emoji: "🟩" },
      { max: system.distanceBands[1], cls: "d1", emoji: "🟨" },
      { max: system.distanceBands[2], cls: "d2", emoji: "🟧" },
      { max: Infinity, cls: "d3", emoji: "🟥" },
    ];

    const byId = new Map(stations.map((s) => [s.id, s]));
    const $ = (id) => document.getElementById(id);
    const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    // ---------- Daily selection ----------

    function localDateString(d = new Date()) {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: system.timezone, year: "numeric", month: "2-digit", day: "2-digit",
      }).format(d);
    }

    function dayNumber(dateStr) {
      return Math.round((Date.parse(dateStr) - Date.parse(system.launchDate)) / 86400000);
    }

    // funfacts.js fixes the order of daily solutions: day N plays entry N, wrapping at the end.
    const schedule = funFacts.filter((f) => {
      if (byId.has(f.id)) return true;
      console.warn(`funfacts.js: unknown station id ${f.id} (${f.station})`);
      return false;
    });
    const factFor = new Map(funFacts.filter((f) => f.fact).map((f) => [f.id, f]));

    function dailyStation(dateStr) {
      const n = dayNumber(dateStr);
      const idx = ((n % schedule.length) + schedule.length) % schedule.length;
      return byId.get(schedule[idx].id);
    }

    // ---------- Geometry ----------

    function distance(a, b) {
      const R = system.units === "km" ? 6371 : 3958.8;
      const rad = Math.PI / 180;
      const dLat = (b.lat - a.lat) * rad;
      const dLon = (b.lon - a.lon) * rad;
      const h = Math.sin(dLat / 2) ** 2 +
        Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
      return 2 * R * Math.asin(Math.sqrt(h));
    }

    const bucketFor = (d) => BUCKETS.find((b) => d < b.max);
    function fmtDistance(d) {
      if (system.units === "km") return d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(d < 10 ? 2 : 1)} km`;
      return d < 0.1 ? `${Math.round(d * 5280)} ft` : `${d.toFixed(d < 10 ? 2 : 1)} mi`;
    }

    // ---------- Storage (best effort) ----------

    function load(key) {
      try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key)); } catch { return null; }
    }
    function save(key, value) {
      try { localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value)); } catch { /* ignore */ }
    }

    // ---------- Map ----------

    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const bounds = L.latLngBounds(stations.map((s) => [s.lat, s.lon]));

    const map = L.map("map", {
      zoomControl: true,
      maxBounds: bounds.pad(0.4),
      minZoom: 10,
      maxZoom: 17,
    });
    map.fitBounds(bounds, { padding: [10, 10] });
    // The map's height depends on the panel below it, which changes as guesses and results are added
    // or cleared. Leaflet only watches window resizes, so tell it about every size change, or the
    // basemap is left unrendered in the newly exposed area when the map grows.
    new ResizeObserver(() => map.invalidateSize()).observe($("map"));

    // OpenFreeMap vector tiles, with every symbol (text/icon) layer stripped so nothing is labelled
    // at any zoom. Raster basemaps bake street names into the tiles once you zoom in.
    fetch(`https://tiles.openfreemap.org/styles/${darkMode ? "dark" : "positron"}`)
      .then((r) => r.json())
      .then((style) => {
        style.layers = style.layers.filter((l) => l.type !== "symbol");
        const base = L.maplibreGL({
          style,
          attribution: '<a href="https://openfreemap.org">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · ' + escapeHtml(system.credit),
        }).addTo(map);
        base.getContainer().style.zIndex = 0; // keep it beneath the track/station overlays
      })
      .catch(() => toast("Couldn't load the map background"));

    // Tracks in neutral gray so line colors don't give the answer away.
    const trackRenderer = L.canvas({ padding: 0.5 });
    for (const seg of lines) {
      L.polyline(seg.p, { color: css("--track"), weight: 2, opacity: 0.7, interactive: false, renderer: trackRenderer }).addTo(map);
    }

    const dotLayer = L.layerGroup().addTo(map);
    const dots = new Map();
    for (const s of stations) {
      dots.set(s.id, L.circleMarker([s.lat, s.lon], {
        radius: 3.5, weight: 1.5, color: css("--dot-ring"), fillColor: css("--dot"), fillOpacity: 1,
        interactive: false,
      }).addTo(dotLayer));
    }
    // Grow dots a little as you zoom in so they're easier to hit.
    map.on("zoomend", () => {
      const r = Math.max(3, Math.min(7, map.getZoom() - 8));
      dots.forEach((d) => d.setRadius(r));
    });
    map.fire("zoomend");

    const markerLayer = L.layerGroup().addTo(map);
    let selectionRing = null;

    // Pick the station nearest the tap, in screen pixels, so tiny dots are still easy to hit.
    map.on("click", (e) => {
      if (state.done) return;
      const p = e.containerPoint;
      let best = null;
      let bestD = TAP_RADIUS_PX;
      for (const s of stations) {
        const d = map.latLngToContainerPoint([s.lat, s.lon]).distanceTo(p);
        if (d < bestD) { best = s; bestD = d; }
      }
      if (!best) { select(null); return; }
      if (state.guesses.includes(best.id)) { toast("Already guessed that one"); return; }
      select(best);
    });

    // ---------- Game state ----------

    let state; // { mode, date, targetId, guesses: [id], done, won }
    let selected = null;

    function startDaily() {
      const date = localDateString();
      const target = dailyStation(date);
      const saved = load(`${system.id}:daily:${date}`);
      state = saved && saved.targetId === target.id
        ? saved
        : { mode: "daily", date, targetId: target.id, guesses: [], done: false, won: false };
      render(true);
    }

    function startPractice() {
      const daily = dailyStation(localDateString());
      let target;
      do { target = stations[Math.floor(Math.random() * stations.length)]; } while (target.id === daily.id);
      state = { mode: "practice", date: null, targetId: target.id, guesses: [], done: false, won: false };
      render(true);
      map.flyToBounds(bounds, { padding: [10, 10], duration: 0.6 });
    }

    function persist() {
      if (state.mode === "daily") save(`${system.id}:daily:${state.date}`, state);
    }

    function select(station) {
      selected = station;
      if (selectionRing) { selectionRing.remove(); selectionRing = null; }
      if (station) {
        selectionRing = L.circleMarker([station.lat, station.lon], {
          radius: 11, weight: 3, color: css("--accent"), fill: false, interactive: false,
        }).addTo(map);
      }
      renderStatus();
    }

    function submitGuess() {
      if (!selected || state.done) return;
      const target = byId.get(state.targetId);
      state.guesses.push(selected.id);
      if (selected.id === target.id) {
        state.done = true;
        state.won = true;
      } else if (state.guesses.length >= MAX_GUESSES) {
        state.done = true;
      }
      select(null);
      persist();
      render(false);
    }

    // ---------- Rendering ----------

    function bulletsHtml(routes, small = false) {
      return routes.map((r) => {
        const cls = ["bullet", small && "small", DARK_TEXT_ROUTES.has(r) && "dark-text"].filter(Boolean).join(" ");
        const label = r === "SIR" ? "SIR" : r;
        return `<span class="${cls}" style="background:${ROUTE_COLORS[r] || "#808183"}">${label}</span>`;
      }).join("");
    }

    function escapeHtml(s) {
      return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    }

    // The post-game layout (smaller map, result above guesses) is driven by this class in style.css.
    function setFinishedLayout(finished) {
      if (document.body.classList.contains("finished") === finished) return;
      document.body.classList.toggle("finished", finished);
      map.invalidateSize();
    }

    function render(fresh) {
      const target = byId.get(state.targetId);
      setFinishedLayout(state.done);
      $("puzzle-label").textContent = state.mode === "daily" ? `#${dayNumber(state.date) + 1}` : "Practice";
      $("target-name").textContent = target.name;
      $("target-routes").innerHTML = bulletsHtml(target.routes);

      markerLayer.clearLayers();
      const list = $("guesses");
      list.innerHTML = "";

      state.guesses.forEach((id, i) => {
        const s = byId.get(id);
        const correct = id === target.id;
        const dist = distance(s, target);
        const bucket = bucketFor(dist);

        if (!correct) {
          L.circleMarker([s.lat, s.lon], {
            radius: 8, weight: 2, color: "#fff", fillColor: css(`--${bucket.cls}`), fillOpacity: 1, interactive: false,
          }).bindTooltip(`${escapeHtml(s.name)} · ${fmtDistance(dist)}`, {
            permanent: true, direction: "top", offset: [0, -8], className: "guess-label",
          }).addTo(markerLayer);
        }

        const li = document.createElement("li");
        li.innerHTML = `
          <span class="n">${i + 1}</span>
          <span class="swatch ${correct ? "win" : bucket.cls}"></span>
          <span class="name">${escapeHtml(s.name)} <span class="bullets">${bulletsHtml(s.routes, true)}</span></span>
          <span class="dist">${correct ? "✓" : fmtDistance(dist)}</span>`;
        list.appendChild(li);
      });

      if (state.done) {
        L.circleMarker([target.lat, target.lon], {
          radius: 10, weight: 3, color: "#fff", fillColor: css("--win"), fillOpacity: 1, interactive: false,
        }).bindTooltip(escapeHtml(target.name), {
          permanent: true, direction: "top", offset: [0, -10], className: "guess-label answer",
        }).addTo(markerLayer);
        if (!fresh) map.flyTo([target.lat, target.lon], Math.max(map.getZoom(), 13), { duration: 0.8 });
      }

      renderStatus();
      renderResult();
    }

    function renderStatus() {
      const left = MAX_GUESSES - state.guesses.length;
      const status = $("status");
      const btn = $("guess-btn");
      btn.hidden = state.done;
      btn.disabled = !selected;
      if (state.done) {
        status.textContent = "";
      } else if (selected) {
        status.innerHTML = `Station selected. <b>${left}</b> guess${left === 1 ? "" : "es"} left.`;
      } else {
        status.innerHTML = `Tap a station dot on the map. <b>${left}</b> guess${left === 1 ? "" : "es"} left.`;
      }
    }

    function renderResult() {
      const box = $("result");
      box.hidden = !state.done;
      if (!state.done) return;
      const n = state.guesses.length;
      $("result-text").textContent = state.won
        ? `Got it in ${n}/${MAX_GUESSES}!`
        : `Out of guesses — it was ${byId.get(state.targetId).name}.`;
      const fact = factFor.get(state.targetId);
      $("fun-fact").hidden = !fact;
      $("fun-fact-text").textContent = fact ? fact.fact : "";
      const img = $("fun-fact-img");
      img.hidden = !fact?.image;
      if (fact?.image) img.src = fact.image;
      else img.removeAttribute("src");
      $("share-btn").hidden = state.mode !== "daily";
      $("practice-btn").textContent = state.mode === "daily" ? "Play a random stop" : "Another random stop";
      $("countdown").hidden = state.mode !== "daily";
    }

    function shareText() {
      const target = byId.get(state.targetId);
      const rows = state.guesses.map((id) => {
        if (id === target.id) return "✅";
        const dist = distance(byId.get(id), target);
        return `${bucketFor(dist).emoji} ${fmtDistance(dist)}`;
      });
      const score = state.won ? state.guesses.length : "X";
      return `metroguesser ${system.id} #${dayNumber(state.date) + 1} - ${target.name} - ${score}/${MAX_GUESSES}\n${rows.join("\n")}`;
    }

    function tickCountdown() {
      const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
        timeZone: system.timezone, hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit",
      }).formatToParts(new Date()).map((p) => [p.type, Number(p.value)]));
      const secs = 86400 - (((parts.hour % 24) * 3600) + parts.minute * 60 + parts.second);
      const h = Math.floor(secs / 3600);
      const m = Math.floor((secs % 3600) / 60);
      const s = secs % 60;
      $("countdown").textContent = `Next station in ${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      // Roll over to the new daily puzzle if the player is sitting on yesterday's.
      if (state.mode === "daily" && state.date !== localDateString()) startDaily();
    }

    let toastTimer;
    function toast(msg) {
      const el = $("toast");
      el.textContent = msg;
      el.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => el.classList.remove("show"), 1600);
    }

    // ---------- Page text ----------

    document.title = `MetroGuesser · ${system.name}`;
    $("help-system").textContent = system.name;
    const bandLabels = [
      `under ${system.distanceBands[0]} ${system.units}`,
      `${system.distanceBands[0]} – ${system.distanceBands[1]} ${system.units}`,
      `${system.distanceBands[1]} – ${system.distanceBands[2]} ${system.units}`,
      `over ${system.distanceBands[2]} ${system.units}`,
    ];
    $("help-legend").innerHTML = BUCKETS.map((b, i) => `<li><span class="swatch ${b.cls}"></span> ${bandLabels[i]}</li>`).join("");
    $("help-credit").textContent = system.credit;

    // ---------- Wiring ----------

    $("guess-btn").addEventListener("click", submitGuess);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && selected && !document.querySelector("dialog[open]")) submitGuess();
      if (e.key === "Escape") select(null);
    });
    $("practice-btn").addEventListener("click", startPractice);
    $("share-btn").addEventListener("click", async () => {
      const text = shareText();
      try {
        if (navigator.share && matchMedia("(pointer: coarse)").matches) {
          await navigator.share({ text });
        } else {
          await navigator.clipboard.writeText(text);
          toast("Copied to clipboard");
        }
      } catch {
        toast("Couldn't share");
      }
    });
    $("help-btn").addEventListener("click", () => $("help").showModal());
    $("about-btn").addEventListener("click", () => $("about").showModal());

    startDaily();
    tickCountdown();
    setInterval(tickCountdown, 1000);

    if (!load("seenHelp")) {
      $("help").showModal();
      save("seenHelp", true);
    }
  }
})();
