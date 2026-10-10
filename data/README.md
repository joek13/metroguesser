# Metro system data

Each playable system lives in its own folder, `data/<id>/`, and is listed in `data/systems.js`.
The game loads one system per page (`index.html?system=<id>`, defaulting to the first in the list).
Files are plain JS that set globals rather than JSON, so the game still works when opened from `file://`.

## `system.js` → `window.METRO_SYSTEM`

| field            | example                | notes |
|------------------|------------------------|-------|
| `id`             | `"nyc"`                | matches the folder name; namespaces saved progress |
| `name`           | `"New York City Subway"` | shown in the page title and help |
| `timezone`       | `"America/New_York"`   | IANA zone; the daily station changes at local midnight |
| `launchDate`     | `"2026-10-09"`         | date of puzzle #1; don't change it after launch |
| `units`          | `"mi"` or `"km"`       | distance display |
| `distanceBands`  | `[0.5, 1.5, 4]`        | upper bounds of the green/yellow/orange bands, in `units` |
| `credit`         | `"Stations: MTA"`      | appended to the map attribution |
| `routeColors`    | `{ "A": "#0039A6" }`   | bullet background per route; unknown routes are gray |
| `darkTextRoutes` | `["N", "Q"]`           | routes whose bullet uses black text |

## `stations.js` → `window.STATIONS`

An array of stations, merged so that one physical station (or transfer complex) is one entry:

```js
{ "id": "1", "name": "Astoria-Ditmars Blvd", "routes": ["N", "W"], "borough": "Queens", "lat": 40.775036, "lon": -73.912034 }
```

`id` is a string unique within the system. Don't renumber ids after launch, because `funfacts.js` refers to them.
`borough` is optional.

## `lines.js` → `window.LINES`

Track geometry for drawing, as an array of polylines: `{ "c": "#D82233", "p": [[lat, lon], ...] }`.
`c` is currently unused (tracks are drawn in gray so colors don't give answers away).

## `funfacts.js` → `window.FUN_FACTS`

The fixed order of daily solutions, plus an optional hand-written fun fact for each one. Entry N is puzzle #N
(its date is in the comment above it), and the list starts over from #1 after the last entry.

```js
// #2 · 2026-10-10
{ id: "297", station: "215 St (1)", image: "img/elvis.png", fact: null },
```

- `id`: the station's id in `stations.js`.
- `station`: for humans only; the game ignores it.
- `fact`: `null`, or a string shown under "Did you know?" when the puzzle ends (won or lost). It's also shown in practice mode.
- `image`: optional path or URL to an image shown at the top of the "Did you know?" box, relative to `index.html` (e.g. `img/elvis.png`). The image only appears for entries that also have a `fact`.

To write facts, edit this file by hand. Don't reorder or delete entries that have already been played.
`node tools/build_funfacts.mjs <id>` creates the file for a new system. It refuses to overwrite an existing one.

## Adding a system

1. Write a build script, `tools/build_<id>.py`, that outputs `data/<id>/stations.js` and `lines.js` in the formats above. GTFS `stops.txt` and `shapes.txt` are a good source; see `tools/build_nyc.py`.
2. Hand-write `data/<id>/system.js`.
3. Run `node tools/build_funfacts.mjs <id>` to create the solution order with blank facts.
4. Add `{ id, name }` to `data/systems.js`.
