"""Build data/nyc/stations.js and data/nyc/lines.js from MTA open data.

Usage:
  curl -sS 'https://data.ny.gov/resource/39hk-dx4f.json?$limit=5000' -o stations.json
  curl -sSL https://rrgtfsfeeds.s3.amazonaws.com/gtfs_subway.zip -o gtfs.zip && unzip gtfs.zip -d gtfs
  python3 tools/build_nyc.py stations.json gtfs/ data/nyc/
"""
import csv, json, os, sys
from collections import defaultdict

BOROUGHS = {"M": "Manhattan", "Bk": "Brooklyn", "Q": "Queens", "Bx": "Bronx", "SI": "Staten Island"}
ROUTE_ORDER = "1 2 3 4 5 6 7 A C E B D F M G J Z L N Q R W S SIR".split()


def route_key(r):
    return ROUTE_ORDER.index(r) if r in ROUTE_ORDER else 99


def build_stations(path):
    rows = json.load(open(path))
    by_complex = defaultdict(list)
    for r in rows:
        by_complex[r["complex_id"]].append(r)
    out = []
    for cid, rs in by_complex.items():
        names = []
        for r in rs:
            if r["stop_name"] not in names:
                names.append(r["stop_name"])
        routes = sorted({x for r in rs for x in r["daytime_routes"].split()}, key=route_key)
        lat = sum(float(r["gtfs_latitude"]) for r in rs) / len(rs)
        lon = sum(float(r["gtfs_longitude"]) for r in rs) / len(rs)
        out.append({
            "id": cid,
            "name": "/".join(names),
            "routes": routes,
            "borough": BOROUGHS.get(rs[0]["borough"], rs[0]["borough"]),
            "lat": round(lat, 6),
            "lon": round(lon, 6),
        })
    out.sort(key=lambda s: int(s["id"]))
    return out


def perp_dist(p, a, b):
    (x, y), (x1, y1), (x2, y2) = p, a, b
    dx, dy = x2 - x1, y2 - y1
    if dx == dy == 0:
        return ((x - x1) ** 2 + (y - y1) ** 2) ** 0.5
    t = max(0, min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)))
    return ((x - x1 - t * dx) ** 2 + (y - y1 - t * dy) ** 2) ** 0.5


def simplify(pts, eps=0.00004):
    if len(pts) < 3:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        i, j = stack.pop()
        best, idx = 0, None
        for k in range(i + 1, j):
            d = perp_dist(pts[k], pts[i], pts[j])
            if d > best:
                best, idx = d, k
        if idx is not None and best > eps:
            keep[idx] = True
            stack += [(i, idx), (idx, j)]
    return [p for p, k in zip(pts, keep) if k]


def build_lines(gtfs):
    colors = {}
    for r in csv.DictReader(open(os.path.join(gtfs, "routes.txt"))):
        colors[r["route_id"]] = "#" + (r["route_color"] or "808183")
    shape_route = {}
    for t in csv.DictReader(open(os.path.join(gtfs, "trips.txt"))):
        if t["shape_id"]:
            shape_route[t["shape_id"]] = t["route_id"]
    shapes = defaultdict(list)
    for s in csv.DictReader(open(os.path.join(gtfs, "shapes.txt"))):
        shapes[s["shape_id"]].append((int(s["shape_pt_sequence"]), float(s["shape_pt_lon"]), float(s["shape_pt_lat"])))
    # Draw each track segment once: dedupe consecutive point pairs across all shapes.
    seen = set()
    lines = []
    for sid, pts in shapes.items():
        route = shape_route.get(sid)
        if not route:
            continue
        pts = [(x, y) for _, x, y in sorted(pts)]
        run = []
        for a, b in zip(pts, pts[1:]):
            key = tuple(sorted([(round(a[0], 5), round(a[1], 5)), (round(b[0], 5), round(b[1], 5))]))
            if key in seen:
                if len(run) > 1:
                    lines.append((route, run))
                run = []
                continue
            seen.add(key)
            if not run:
                run = [a]
            run.append(b)
        if len(run) > 1:
            lines.append((route, run))
    out = []
    for route, run in lines:
        pts = simplify(run)
        out.append({"c": colors.get(route, "#808183"), "p": [[round(y, 5), round(x, 5)] for x, y in pts]})
    return out


if __name__ == "__main__":
    stations_path, gtfs_dir, out_dir = sys.argv[1:4]
    stations = build_stations(stations_path)
    lines = build_lines(gtfs_dir)
    # Written as JS globals (not JSON) so index.html works when opened from file://.
    for name, var, data in [("stations.js", "STATIONS", stations), ("lines.js", "LINES", lines)]:
        with open(os.path.join(out_dir, name), "w") as f:
            f.write(f"window.{var} = {json.dumps(data, separators=(',', ':'))};\n")
    print(f"{len(stations)} stations, {len(lines)} line segments")
