// Registry of playable metro systems. Each id has a folder data/<id>/ with:
//   system.js   → window.METRO_SYSTEM  (name, timezone, colors, … — see data/README.md)
//   stations.js → window.STATIONS
//   lines.js    → window.LINES
// Pick one with ?system=<id>; the first entry is the default.
window.METRO_SYSTEMS = [
  { id: "nyc", name: "New York City Subway" },
];
