// Create data/<id>/funfacts.js: the fixed order of daily solutions, with a blank (null) fun fact
// for each one to be filled in by hand. Refuses to overwrite an existing file, since that would
// lose hand-entered facts and reorder past puzzles.
//
// Usage: node tools/build_funfacts.mjs <system-id>
import fs from "node:fs";
import vm from "node:vm";

const id = process.argv[2];
if (!id) { console.error("usage: node tools/build_funfacts.mjs <system-id>"); process.exit(1); }
const dir = new URL(`../data/${id}/`, import.meta.url);
const out = new URL("funfacts.js", dir);
if (fs.existsSync(out)) { console.error(`${out.pathname} already exists; edit it by hand instead.`); process.exit(1); }

const ctx = { window: {} };
for (const f of ["system.js", "stations.js"]) vm.runInNewContext(fs.readFileSync(new URL(f, dir), "utf8"), ctx);
const { METRO_SYSTEM: system, STATIONS: stations } = ctx.window;

function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Same seeded shuffle the game originally used, so already-played puzzles keep their stations.
const order = stations.map((s) => s.id).sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
const rand = mulberry32(Number(system.launchDate.replace(/-/g, "")));
for (let i = order.length - 1; i > 0; i--) {
  const j = Math.floor(rand() * (i + 1));
  [order[i], order[j]] = [order[j], order[i]];
}

const byId = new Map(stations.map((s) => [s.id, s]));
const launch = Date.parse(system.launchDate);
const lines = order.map((sid, i) => {
  const date = new Date(launch + i * 86400000).toISOString().slice(0, 10);
  const s = byId.get(sid);
  return `  // #${i + 1} · ${date}\n  { id: ${JSON.stringify(sid)}, station: ${JSON.stringify(`${s.name} (${s.routes.join(" ")})`)}, image: null, fact: null },`;
});

fs.writeFileSync(out, `// Daily solutions for ${system.name}, in order: entry N is puzzle #N (dates in comments).
// Fill in \`fact\` with an HTML string to show it after the puzzle ends; leave it null to show nothing.
// \`image\` (optional) is shown above the fact, as a path relative to img/.
// \`image_attribution\` (optional) is shown under the image as "Source: …".
// \`station\` is only for humans; the game matches on \`id\`.
// Don't reorder or remove past entries, or old puzzles and share results will change.
// After the last entry the list starts over from #1.
window.FUN_FACTS = [
${lines.join("\n")}
];
`);
console.log(`Wrote ${out.pathname} (${order.length} days)`);
