window.METRO_SYSTEM = {
  id: "nyc",
  name: "New York City Subway",
  timezone: "America/New_York",
  launchDate: "2026-10-09", // puzzle #1
  units: "mi",
  // Upper bounds (in `units`) of the green / yellow / orange distance bands; beyond is red.
  distanceBands: [0.5, 1.5, 4],
  credit: "Stations: MTA",
  routeColors: {
    "1": "#EE352E", "2": "#EE352E", "3": "#EE352E",
    "4": "#00933C", "5": "#00933C", "6": "#00933C",
    "7": "#B933AD",
    A: "#0039A6", C: "#0039A6", E: "#0039A6",
    B: "#FF6319", D: "#FF6319", F: "#FF6319", M: "#FF6319",
    G: "#6CBE45",
    J: "#996633", Z: "#996633",
    L: "#A7A9AC",
    N: "#FCCC0A", Q: "#FCCC0A", R: "#FCCC0A", W: "#FCCC0A",
    S: "#808183",
    SIR: "#1D2F6F",
  },
  // Routes whose bullet needs black text for contrast.
  darkTextRoutes: ["N", "Q", "R", "W"],
};
