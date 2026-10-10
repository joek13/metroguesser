# MetroGuesser

A daily NYC subway guessing game. Each day (midnight New York time) a station is picked; find it on an
unlabeled map in 6 guesses. Wrong guesses are labelled on the map with their distance from the answer.

Play: open `index.html` in a browser (no build step or server needed). Choose a metro system with
`index.html?system=<id>`; the default is the first entry in `data/systems.js` (currently only `nyc`).

## Data

- Stations: [MTA Subway Stations](https://data.ny.gov/Transportation/MTA-Subway-Stations/39hk-dx4f), merged by station complex (445 stops).
- Track geometry: MTA subway GTFS `shapes.txt`.
- Basemap: [OpenFreeMap](https://openfreemap.org) vector tiles (OpenStreetMap data) with all label layers removed.

Daily solutions and their "Did you know?" facts are in `data/nyc/funfacts.js`. Fill in facts by hand there.

Regenerate `data/nyc/` with the instructions at the top of `tools/build_nyc.py`. To add another system,
see [`data/README.md`](data/README.md).
