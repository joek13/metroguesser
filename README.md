# MetroGuesser

A daily NYC subway guessing game. Each day (midnight New York time) a station is picked; find it on an
unlabeled map in 6 guesses. Wrong guesses are labelled on the map with their distance from the answer.

Play: open `index.html` in a browser (no build step or server needed).

## Data

- Stations: [MTA Subway Stations](https://data.ny.gov/Transportation/MTA-Subway-Stations/39hk-dx4f), merged by station complex (445 stops).
- Track geometry: MTA subway GTFS `shapes.txt`.
- Basemap: [OpenFreeMap](https://openfreemap.org) vector tiles (OpenStreetMap data) with all label layers removed.

Regenerate `data/` with the instructions at the top of `tools/build_data.py`.
