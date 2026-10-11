// Daily solutions for New York City Subway, in order: entry N is puzzle #N (dates in comments).
// Fill in `fact` with a string to show it after the puzzle ends; leave it null to show nothing.
// `station` is only for humans; the game matches on `id`.
// Don't reorder or remove past entries, or old puzzles and share results will change.
// After the last entry the list starts over from #1.
window.FUN_FACTS = [
  // #1 · 2026-10-09
  { id: "130", station: "Wilson Av (L)", fact: null },
  // #2 · 2026-10-10
  { id: "297", station: "215 St (1)", fact: null },
  // #3 · 2026-10-11
  { id: "213", station: "Fordham Rd (B D)", fact:
  `Fordham Road station is located just a few blocks south of the <b>Edgar Allan Poe Cottage</b>, home to the American writer.`
  , image: "poe_cottage.jpg", image_attribution: "Zoirusha / Wikimedia Commons / Public Domain" },
  // #4 · 2026-10-12
  { id: "67", station: "20 Av (D)", fact: null },
  // #5 · 2026-10-13
  { id: "620", station: "Court St/Borough Hall (2 3 4 5 R)", fact: null },
  // #6 · 2026-10-14
  { id: "623", station: "Canal St (6 J Z N Q R W)", fact: null },
  // #7 · 2026-10-15
  { id: "513", station: "Great Kills (SIR)", fact: null },
  // #8 · 2026-10-16
  { id: "202", station: "Beach 105 St (A S)", fact: null },
  // #9 · 2026-10-17
  { id: "392", station: "125 St (4 5 6)", fact: null },
  // #10 · 2026-10-18
  { id: "51", station: "Kings Hwy (B Q)", fact: null },
  // #11 · 2026-10-19
  { id: "224", station: "57 St (M)", fact: null },
  // #12 · 2026-10-20
  { id: "476", station: "86 St (Q)", fact: null },
  // #13 · 2026-10-21
  { id: "336", station: "Hoyt St (2 3)", fact: null },
  // #14 · 2026-10-22
  { id: "99", station: "Lorimer St (M J)", fact: null },
  // #15 · 2026-10-23
  { id: "146", station: "181 St (A)", fact: null },
  // #16 · 2026-10-24
  { id: "308", station: "Cathedral Pkwy (110 St) (1)", fact: null },
  // #17 · 2026-10-25
  { id: "421", station: "Gun Hill Rd (2 5)", fact: null },
  // #18 · 2026-10-26
  { id: "124", station: "Montrose Av (L)", fact: null },
  // #19 · 2026-10-27
  { id: "3", station: "30 Av (N W)", fact: null },
  // #20 · 2026-10-28
  { id: "214", station: "182-183 Sts (B D)", fact: null },
  // #21 · 2026-10-29
  { id: "298", station: "207 St (1)", fact: null },
  // #22 · 2026-10-30
  { id: "55", station: "Brighton Beach (B Q)", fact: null },
  // #23 · 2026-10-31
  { id: "288", station: "Myrtle-Willoughby Avs (G)", fact: null },
  // #24 · 2026-11-01
  { id: "514", station: "Eltingville (SIR)", fact: null },
  // #25 · 2026-11-02
  { id: "59", station: "9 Av (D)", fact: null },
  // #26 · 2026-11-03
  { id: "348", station: "Rockaway Av (3)", fact: null },
  // #27 · 2026-11-04
  { id: "616", station: "Jackson Hts-Roosevelt Av/74 St-Broadway (7 E F M R)", fact: null },
  // #28 · 2026-11-05
  { id: "69", station: "25 Av (D)", fact: null },
  // #29 · 2026-11-06
  { id: "80", station: "121 St (J Z)", fact: null },
  // #30 · 2026-11-07
  { id: "517", station: "Prince's Bay (SIR)", fact: null },
  // #31 · 2026-11-08
  { id: "235", station: "York St (F)", fact: null },
  // #32 · 2026-11-09
  { id: "9", station: "57 St-7 Av (N Q R W)", fact: null },
  // #33 · 2026-11-10
  { id: "156", station: "103 St (C B)", fact: null },
  // #34 · 2026-11-11
  { id: "291", station: "Clinton-Washington Avs (G)", fact: null },
  // #35 · 2026-11-12
  { id: "306", station: "125 St (1)", fact: null },
  // #36 · 2026-11-13
  { id: "53", station: "Neck Rd (Q)", fact: null },
  // #37 · 2026-11-14
  { id: "442", station: "Eastchester-Dyre Av (5)", fact: null },
  // #38 · 2026-11-15
  { id: "387", station: "170 St (4)", fact: null },
  // #39 · 2026-11-16
  { id: "457", station: "52 St (7)", fact: null },
  // #40 · 2026-11-17
  { id: "256", station: "Parsons Blvd (F)", fact: null },
  // #41 · 2026-11-18
  { id: "325", station: "Canal St (1)", fact: null },
  // #42 · 2026-11-19
  { id: "425", station: "Bronx Park East (2 5)", fact: null },
  // #43 · 2026-11-20
  { id: "441", station: "110 St-Malcolm X Plaza (2 3)", fact: null },
  // #44 · 2026-11-21
  { id: "428", station: "174 St (2 5)", fact: null },
  // #45 · 2026-11-22
  { id: "83", station: "Woodhaven Blvd (J Z)", fact: null },
  // #46 · 2026-11-23
  { id: "305", station: "137 St-City College (1)", fact: null },
  // #47 · 2026-11-24
  { id: "458", station: "46 St-Bliss St (7)", fact: null },
  // #48 · 2026-11-25
  { id: "58", station: "Coney Island-Stillwell Av (D F N Q)", fact: null },
  // #49 · 2026-11-26
  { id: "129", station: "Halsey St (L)", fact: null },
  // #50 · 2026-11-27
  { id: "438", station: "135 St (2 3)", fact: null },
  // #51 · 2026-11-28
  { id: "277", station: "7 Av (E B D)", fact: null },
  // #52 · 2026-11-29
  { id: "242", station: "Fort Hamilton Pkwy (F G)", fact: null },
  // #53 · 2026-11-30
  { id: "352", station: "New Lots Av (3)", fact: null },
  // #54 · 2026-12-01
  { id: "380", station: "Bedford Park Blvd-Lehman College (4)", fact: null },
  // #55 · 2026-12-02
  { id: "374", station: "E 143 St-St Mary's St (6)", fact: null },
  // #56 · 2026-12-03
  { id: "261", station: "Forest Hills-71 Av (E F M R)", fact: null },
  // #57 · 2026-12-04
  { id: "135", station: "Livonia Av (L)", fact: null },
  // #58 · 2026-12-05
  { id: "203", station: "Rockaway Park-Beach 116 St (A S)", fact: null },
  // #59 · 2026-12-06
  { id: "419", station: "225 St (2 5)", fact: null },
  // #60 · 2026-12-07
  { id: "345", station: "Crown Hts-Utica Av (3 4)", fact: null },
  // #61 · 2026-12-08
  { id: "197", station: "Aqueduct-N Conduit Av (A)", fact: null },
  // #62 · 2026-12-09
  { id: "88", station: "Norwood Av (J Z)", fact: null },
  // #63 · 2026-12-10
  { id: "220", station: "155 St (B D)", fact: null },
  // #64 · 2026-12-11
  { id: "363", station: "Westchester Sq-E Tremont Av (6)", fact: null },
  // #65 · 2026-12-12
  { id: "232", station: "2 Av (F)", fact: null },
  // #66 · 2026-12-13
  { id: "16", station: "8 St-NYU (R W)", fact: null },
  // #67 · 2026-12-14
  { id: "437", station: "145 St (3)", fact: null },
  // #68 · 2026-12-15
  { id: "110", station: "Forest Av (M)", fact: null },
  // #69 · 2026-12-16
  { id: "38", station: "86 St (R)", fact: null },
  // #70 · 2026-12-17
  { id: "510", station: "New Dorp (SIR)", fact: null },
  // #71 · 2026-12-18
  { id: "627", station: "Franklin Av (C S)", fact: null },
  // #72 · 2026-12-19
  { id: "301", station: "181 St (1)", fact: null },
  // #73 · 2026-12-20
  { id: "47", station: "Newkirk Plaza (B Q)", fact: null },
  // #74 · 2026-12-21
  { id: "198", station: "Howard Beach-JFK Airport (A)", fact: null },
  // #75 · 2026-12-22
  { id: "334", station: "Clark St (2 3)", fact: null },
  // #76 · 2026-12-23
  { id: "446", station: "Morris Park (5)", fact: null },
  // #77 · 2026-12-24
  { id: "137", station: "East 105 St (L)", fact: null },
  // #78 · 2026-12-25
  { id: "423", station: "Allerton Av (2 5)", fact: null },
  // #79 · 2026-12-26
  { id: "246", station: "Avenue I (F)", fact: null },
  // #80 · 2026-12-27
  { id: "450", station: "103 St-Corona Plaza (7)", fact: null },
  // #81 · 2026-12-28
  { id: "79", station: "86 St (N)", fact: null },
  // #82 · 2026-12-29
  { id: "39", station: "Bay Ridge-95 St (R)", fact: null },
  // #83 · 2026-12-30
  { id: "319", station: "28 St (1)", fact: null },
  // #84 · 2026-12-31
  { id: "45", station: "Beverley Rd (Q)", fact: null },
  // #85 · 2027-01-01
  { id: "388", station: "167 St (4)", fact: null },
  // #86 · 2027-01-02
  { id: "501", station: "St George (SIR)", fact: null },
  // #87 · 2027-01-03
  { id: "66", station: "18 Av (D)", fact: null },
  // #88 · 2027-01-04
  { id: "617", station: "Atlantic Av-Barclays Ctr (2 3 4 5 B D N Q R)", fact: null },
  // #89 · 2027-01-05
  { id: "201", station: "Beach 98 St (A S)", fact: null },
  // #90 · 2027-01-06
  { id: "98", station: "Flushing Av (M J)", fact: null },
  // #91 · 2027-01-07
  { id: "136", station: "New Lots Av (L)", fact: null },
  // #92 · 2027-01-08
  { id: "154", station: "116 St (C B)", fact: null },
  // #93 · 2027-01-09
  { id: "43", station: "Parkside Av (Q)", fact: null },
  // #94 · 2027-01-10
  { id: "183", station: "Rockaway Av (C)", fact: null },
  // #95 · 2027-01-11
  { id: "475", station: "96 St (Q)", fact: null },
  // #96 · 2027-01-12
  { id: "311", station: "86 St (1)", fact: null },
  // #97 · 2027-01-13
  { id: "340", station: "Grand Army Plaza (2 3)", fact: null },
  // #98 · 2027-01-14
  { id: "507", station: "Dongan Hills (SIR)", fact: null },
  // #99 · 2027-01-15
  { id: "144", station: "Dyckman St (A)", fact: null },
  // #100 · 2027-01-16
  { id: "286", station: "Broadway (G)", fact: null },
  // #101 · 2027-01-17
  { id: "629", station: "Lorimer St/Metropolitan Av (G L)", fact: null },
  // #102 · 2027-01-18
  { id: "74", station: "18 Av (N)", fact: null },
  // #103 · 2027-01-19
  { id: "46", station: "Cortelyou Rd (Q)", fact: null },
  // #104 · 2027-01-20
  { id: "4", station: "Broadway (N W)", fact: null },
  // #105 · 2027-01-21
  { id: "430", station: "Simpson St (2 5)", fact: null },
  // #106 · 2027-01-22
  { id: "337", station: "Nevins St (2 3 4 5)", fact: null },
  // #107 · 2027-01-23
  { id: "362", station: "Middletown Rd (6)", fact: null },
  // #108 · 2027-01-24
  { id: "222", station: "Roosevelt Island (M)", fact: null },
  // #109 · 2027-01-25
  { id: "57", station: "W 8 St-NY Aquarium (F Q)", fact: null },
  // #110 · 2027-01-26
  { id: "405", station: "23 St-Baruch College (6)", fact: null },
  // #111 · 2027-01-27
  { id: "177", station: "Clinton-Washington Avs (C)", fact: null },
  // #112 · 2027-01-28
  { id: "351", station: "Van Siclen Av (3)", fact: null },
  // #113 · 2027-01-29
  { id: "300", station: "191 St (1)", fact: null },
  // #114 · 2027-01-30
  { id: "160", station: "72 St (C B)", fact: null },
  // #115 · 2027-01-31
  { id: "150", station: "155 St (C)", fact: null },
  // #116 · 2027-02-01
  { id: "354", station: "Sterling St (2 5)", fact: null },
  // #117 · 2027-02-02
  { id: "44", station: "Church Av (B Q)", fact: null },
  // #118 · 2027-02-03
  { id: "309", station: "103 St (1)", fact: null },
  // #119 · 2027-02-04
  { id: "264", station: "Woodhaven Blvd (M R)", fact: null },
  // #120 · 2027-02-05
  { id: "253", station: "Neptune Av (F)", fact: null },
  // #121 · 2027-02-06
  { id: "448", station: "Mets-Willets Point (7)", fact: null },
  // #122 · 2027-02-07
  { id: "445", station: "Pelham Pkwy (5)", fact: null },
  // #123 · 2027-02-08
  { id: "111", station: "Seneca Av (M)", fact: null },
  // #124 · 2027-02-09
  { id: "26", station: "DeKalb Av (B Q R)", fact: null },
  // #125 · 2027-02-10
  { id: "376", station: "Brook Av (6)", fact: null },
  // #126 · 2027-02-11
  { id: "353", station: "President St-Medgar Evers College (2 5)", fact: null },
  // #127 · 2027-02-12
  { id: "265", station: "Grand Av-Newtown (M R)", fact: null },
  // #128 · 2027-02-13
  { id: "371", station: "Hunts Point Av (6)", fact: null },
  // #129 · 2027-02-14
  { id: "143", station: "Inwood-207 St (A)", fact: null },
  // #130 · 2027-02-15
  { id: "236", station: "Bergen St (F G)", fact: null },
  // #131 · 2027-02-16
  { id: "284", station: "Nassau Av (G)", fact: null },
  // #132 · 2027-02-17
  { id: "107", station: "Broad St (J Z)", fact: null },
  // #133 · 2027-02-18
  { id: "414", station: "Bowling Green (4 5)", fact: null },
  // #134 · 2027-02-19
  { id: "391", station: "138 St-Grand Concourse (4 5)", fact: null },
  // #135 · 2027-02-20
  { id: "71", station: "8 Av (N)", fact: null },
  // #136 · 2027-02-21
  { id: "78", station: "Avenue U (N)", fact: null },
  // #137 · 2027-02-22
  { id: "93", station: "Chauncey St (J Z)", fact: null },
  // #138 · 2027-02-23
  { id: "366", station: "Parkchester (6)", fact: null },
  // #139 · 2027-02-24
  { id: "35", station: "59 St (N R)", fact: null },
  // #140 · 2027-02-25
  { id: "403", station: "33 St (6)", fact: null },
  // #141 · 2027-02-26
  { id: "36", station: "Bay Ridge Av (R)", fact: null },
  // #142 · 2027-02-27
  { id: "290", station: "Classon Av (G)", fact: null },
  // #143 · 2027-02-28
  { id: "327", station: "Chambers St (1 2 3)", fact: null },
  // #144 · 2027-03-01
  { id: "370", station: "Whitlock Av (6)", fact: null },
  // #145 · 2027-03-02
  { id: "48", station: "Avenue H (Q)", fact: null },
  // #146 · 2027-03-03
  { id: "440", station: "116 St (2 3)", fact: null },
  // #147 · 2027-03-04
  { id: "119", station: "1 Av (L)", fact: null },
  // #148 · 2027-03-05
  { id: "109", station: "Fresh Pond Rd (M)", fact: null },
  // #149 · 2027-03-06
  { id: "221", station: "21 St-Queensbridge (M)", fact: null },
  // #150 · 2027-03-07
  { id: "333", station: "Wall St (2 3)", fact: null },
  // #151 · 2027-03-08
  { id: "271", station: "Steinway St (M R)", fact: null },
  // #152 · 2027-03-09
  { id: "605", station: "168 St/168 St-Washington Hts (1 A C)", fact: null },
  // #153 · 2027-03-10
  { id: "375", station: "Cypress Av (6)", fact: null },
  // #154 · 2027-03-11
  { id: "28", station: "Union St (R)", fact: null },
  // #155 · 2027-03-12
  { id: "326", station: "Franklin St (1)", fact: null },
  // #156 · 2027-03-13
  { id: "515", station: "Annadale (SIR)", fact: null },
  // #157 · 2027-03-14
  { id: "243", station: "Church Av (F G)", fact: null },
  // #158 · 2027-03-15
  { id: "70", station: "Bay 50 St (D)", fact: null },
  // #159 · 2027-03-16
  { id: "519", station: "Richmond Valley (SIR)", fact: null },
  // #160 · 2027-03-17
  { id: "151", station: "145 St (A C B D)", fact: null },
  // #161 · 2027-03-18
  { id: "381", station: "Kingsbridge Rd (4)", fact: null },
  // #162 · 2027-03-19
  { id: "263", station: "63 Dr-Rego Park (M R)", fact: null },
  // #163 · 2027-03-20
  { id: "114", station: "Central Av (M)", fact: null },
  // #164 · 2027-03-21
  { id: "257", station: "Sutphin Blvd (F)", fact: null },
  // #165 · 2027-03-22
  { id: "179", station: "Nostrand Av (A C)", fact: null },
  // #166 · 2027-03-23
  { id: "399", station: "68 St-Hunter College (6)", fact: null },
  // #167 · 2027-03-24
  { id: "621", station: "Broadway Junction (A C J Z L)", fact: null },
  // #168 · 2027-03-25
  { id: "444", station: "Gun Hill Rd (5)", fact: null },
  // #169 · 2027-03-26
  { id: "254", station: "Jamaica-179 St (F)", fact: null },
  // #170 · 2027-03-27
  { id: "60", station: "Fort Hamilton Pkwy (D)", fact: null },
  // #171 · 2027-03-28
  { id: "152", station: "135 St (C B)", fact: null },
  // #172 · 2027-03-29
  { id: "506", station: "Old Town (SIR)", fact: null },
  // #173 · 2027-03-30
  { id: "303", station: "157 St (1)", fact: null },
  // #174 · 2027-03-31
  { id: "181", station: "Utica Av (A C)", fact: null },
  // #175 · 2027-04-01
  { id: "255", station: "169 St (F)", fact: null },
  // #176 · 2027-04-02
  { id: "155", station: "Cathedral Pkwy (110 St) (C B)", fact: null },
  // #177 · 2027-04-03
  { id: "217", station: "170 St (B D)", fact: null },
  // #178 · 2027-04-04
  { id: "209", station: "Far Rockaway-Mott Av (A)", fact: null },
  // #179 · 2027-04-05
  { id: "509", station: "Grant City (SIR)", fact: null },
  // #180 · 2027-04-06
  { id: "199", station: "Broad Channel (A S)", fact: null },
  // #181 · 2027-04-07
  { id: "630", station: "Myrtle-Wyckoff Avs (M L)", fact: null },
  // #182 · 2027-04-08
  { id: "123", station: "Grand St (L)", fact: null },
  // #183 · 2027-04-09
  { id: "188", station: "Euclid Av (A C)", fact: null },
  // #184 · 2027-04-10
  { id: "357", station: "Beverly Rd (2 5)", fact: null },
  // #185 · 2027-04-11
  { id: "321", station: "18 St (1)", fact: null },
  // #186 · 2027-04-12
  { id: "191", station: "88 St (A)", fact: null },
  // #187 · 2027-04-13
  { id: "162", station: "50 St (C E)", fact: null },
  // #188 · 2027-04-14
  { id: "62", station: "55 St (D)", fact: null },
  // #189 · 2027-04-15
  { id: "208", station: "Beach 25 St (A)", fact: null },
  // #190 · 2027-04-16
  { id: "195", station: "Ozone Park-Lefferts Blvd (A)", fact: null },
  // #191 · 2027-04-17
  { id: "272", station: "36 St (M R)", fact: null },
  // #192 · 2027-04-18
  { id: "147", station: "175 St (A)", fact: null },
  // #193 · 2027-04-19
  { id: "364", station: "Zerega Av (6)", fact: null },
  // #194 · 2027-04-20
  { id: "398", station: "77 St (6)", fact: null },
  // #195 · 2027-04-21
  { id: "259", station: "Kew Gardens-Union Tpke (E F)", fact: null },
  // #196 · 2027-04-22
  { id: "295", station: "231 St (1)", fact: null },
  // #197 · 2027-04-23
  { id: "413", station: "Wall St (4 5)", fact: null },
  // #198 · 2027-04-24
  { id: "350", station: "Pennsylvania Av (3)", fact: null },
  // #199 · 2027-04-25
  { id: "42", station: "Prospect Park (B Q S)", fact: null },
  // #200 · 2027-04-26
  { id: "245", station: "18 Av (F)", fact: null },
  // #201 · 2027-04-27
  { id: "455", station: "69 St (7)", fact: null },
  // #202 · 2027-04-28
  { id: "522", station: "Tottenville (SIR)", fact: null },
  // #203 · 2027-04-29
  { id: "86", station: "Cypress Hills (J)", fact: null },
  // #204 · 2027-04-30
  { id: "97", station: "Myrtle Av (M J Z)", fact: null },
  // #205 · 2027-05-01
  { id: "189", station: "Grant Av (A)", fact: null },
  // #206 · 2027-05-02
  { id: "216", station: "174-175 Sts (B D)", fact: null },
  // #207 · 2027-05-03
  { id: "453", station: "82 St-Jackson Hts (7)", fact: null },
  // #208 · 2027-05-04
  { id: "282", station: "21 St (G)", fact: null },
  // #209 · 2027-05-05
  { id: "168", station: "Spring St (C E)", fact: null },
  // #210 · 2027-05-06
  { id: "603", station: "149 St-Hostos (2 4 5)", fact: null },
  // #211 · 2027-05-07
  { id: "523", station: "Arthur Kill (SIR)", fact: null },
  // #212 · 2027-05-08
  { id: "180", station: "Kingston-Throop Avs (C)", fact: null },
  // #213 · 2027-05-09
  { id: "49", station: "Avenue J (Q)", fact: null },
  // #214 · 2027-05-10
  { id: "258", station: "Briarwood (E F)", fact: null },
  // #215 · 2027-05-11
  { id: "279", station: "Sutphin Blvd-Archer Av-JFK Airport (E J Z)", fact: null },
  // #216 · 2027-05-12
  { id: "81", station: "111 St (J)", fact: null },
  // #217 · 2027-05-13
  { id: "241", station: "15 St-Prospect Park (F G)", fact: null },
  // #218 · 2027-05-14
  { id: "367", station: "St Lawrence Av (6)", fact: null },
  // #219 · 2027-05-15
  { id: "409", station: "Spring St (6)", fact: null },
  // #220 · 2027-05-16
  { id: "447", station: "Flushing-Main St (7)", fact: null },
  // #221 · 2027-05-17
  { id: "612", station: "Lexington Av/53 St/51 St (6 E F)", fact: null },
  // #222 · 2027-05-18
  { id: "193", station: "104 St (A)", fact: null },
  // #223 · 2027-05-19
  { id: "356", station: "Church Av (2 5)", fact: null },
  // #224 · 2027-05-20
  { id: "182", station: "Ralph Av (C)", fact: null },
  // #225 · 2027-05-21
  { id: "247", station: "Bay Pkwy (F)", fact: null },
  // #226 · 2027-05-22
  { id: "96", station: "Kosciuszko St (J)", fact: null },
  // #227 · 2027-05-23
  { id: "75", station: "20 Av (N)", fact: null },
  // #228 · 2027-05-24
  { id: "269", station: "Northern Blvd (M R)", fact: null },
  // #229 · 2027-05-25
  { id: "72", station: "Fort Hamilton Pkwy (N)", fact: null },
  // #230 · 2027-05-26
  { id: "344", station: "Kingston Av (3)", fact: null },
  // #231 · 2027-05-27
  { id: "50", station: "Avenue M (Q)", fact: null },
  // #232 · 2027-05-28
  { id: "159", station: "81 St-Museum of Natural History (C B)", fact: null },
  // #233 · 2027-05-29
  { id: "359", station: "Flatbush Av-Brooklyn College (2 5)", fact: null },
  // #234 · 2027-05-30
  { id: "607", station: "34 St-Herald Sq (B D F M N Q R W)", fact: null },
  // #235 · 2027-05-31
  { id: "304", station: "145 St (1)", fact: null },
  // #236 · 2027-06-01
  { id: "368", station: "Morrison Av-Soundview (6)", fact: null },
  // #237 · 2027-06-02
  { id: "32", station: "36 St (D N R)", fact: null },
  // #238 · 2027-06-03
  { id: "293", station: "Van Cortlandt Park-242 St (1)", fact: null },
  // #239 · 2027-06-04
  { id: "17", station: "Prince St (R W)", fact: null },
  // #240 · 2027-06-05
  { id: "167", station: "W 4 St-Wash Sq (A C E B D F M)", fact: null },
  // #241 · 2027-06-06
  { id: "200", station: "Beach 90 St (A S)", fact: null },
  // #242 · 2027-06-07
  { id: "502", station: "Tompkinsville (SIR)", fact: null },
  // #243 · 2027-06-08
  { id: "248", station: "Avenue N (F)", fact: null },
  // #244 · 2027-06-09
  { id: "207", station: "Beach 36 St (A)", fact: null },
  // #245 · 2027-06-10
  { id: "2", station: "Astoria Blvd (N W)", fact: null },
  // #246 · 2027-06-11
  { id: "118", station: "3 Av (L)", fact: null },
  // #247 · 2027-06-12
  { id: "635", station: "Whitehall St-South Ferry/South Ferry (1 R W)", fact: null },
  // #248 · 2027-06-13
  { id: "252", station: "Avenue X (F)", fact: null },
  // #249 · 2027-06-14
  { id: "289", station: "Bedford-Nostrand Avs (G)", fact: null },
  // #250 · 2027-06-15
  { id: "431", station: "Intervale Av (2 5)", fact: null },
  // #251 · 2027-06-16
  { id: "393", station: "116 St (6)", fact: null },
  // #252 · 2027-06-17
  { id: "194", station: "111 St (A)", fact: null },
  // #253 · 2027-06-18
  { id: "385", station: "176 St (4)", fact: null },
  // #254 · 2027-06-19
  { id: "624", station: "Cortlandt St/Chambers St/World Trade Center/Park Place (2 3 A C E R W)", fact: null },
  // #255 · 2027-06-20
  { id: "108", station: "Middle Village-Metropolitan Av (M)", fact: null },
  // #256 · 2027-06-21
  { id: "165", station: "23 St (C E)", fact: null },
  // #257 · 2027-06-22
  { id: "503", station: "Stapleton (SIR)", fact: null },
  // #258 · 2027-06-23
  { id: "379", station: "Mosholu Pkwy (4)", fact: null },
  // #259 · 2027-06-24
  { id: "396", station: "96 St (6)", fact: null },
  // #260 · 2027-06-25
  { id: "360", station: "Pelham Bay Park (6)", fact: null },
  // #261 · 2027-06-26
  { id: "329", station: "Rector St (1)", fact: null },
  // #262 · 2027-06-27
  { id: "373", station: "E 149 St (6)", fact: null },
  // #263 · 2027-06-28
  { id: "1", station: "Astoria-Ditmars Blvd (N W)", fact: null },
  // #264 · 2027-06-29
  { id: "619", station: "Broadway-Lafayette St/Bleecker St (6 B D F M)", fact: null },
  // #265 · 2027-06-30
  { id: "432", station: "Prospect Av (2 5)", fact: null },
  // #266 · 2027-07-01
  { id: "611", station: "Times Sq-42 St/42 St-Port Authority Bus Terminal (1 2 3 7 A C E N Q R W S)", fact: null },
  // #267 · 2027-07-02
  { id: "30", station: "Prospect Av (R)", fact: null },
  // #268 · 2027-07-03
  { id: "95", station: "Gates Av (J Z)", fact: null },
  // #269 · 2027-07-04
  { id: "266", station: "Elmhurst Av (M R)", fact: null },
  // #270 · 2027-07-05
  { id: "416", station: "Wakefield-241 St (2)", fact: null },
  // #271 · 2027-07-06
  { id: "14", station: "23 St (R W)", fact: null },
  // #272 · 2027-07-07
  { id: "439", station: "125 St (2 3)", fact: null },
  // #273 · 2027-07-08
  { id: "404", station: "28 St (6)", fact: null },
  // #274 · 2027-07-09
  { id: "313", station: "72 St (1 2 3)", fact: null },
  // #275 · 2027-07-10
  { id: "443", station: "Baychester Av (5)", fact: null },
  // #276 · 2027-07-11
  { id: "90", station: "Van Siclen Av (J Z)", fact: null },
  // #277 · 2027-07-12
  { id: "206", station: "Beach 44 St (A)", fact: null },
  // #278 · 2027-07-13
  { id: "512", station: "Bay Terrace (SIR)", fact: null },
  // #279 · 2027-07-14
  { id: "249", station: "Avenue P (F)", fact: null },
  // #280 · 2027-07-15
  { id: "436", station: "Harlem-148 St (3)", fact: null },
  // #281 · 2027-07-16
  { id: "608", station: "4 Av-9 St (F G R)", fact: null },
  // #282 · 2027-07-17
  { id: "394", station: "110 St (6)", fact: null },
  // #283 · 2027-07-18
  { id: "6", station: "39 Av-Dutch Kills (N W)", fact: null },
  // #284 · 2027-07-19
  { id: "347", station: "Saratoga Av (3)", fact: null },
  // #285 · 2027-07-20
  { id: "223", station: "Lexington Av/63 St (M Q)", fact: null },
  // #286 · 2027-07-21
  { id: "77", station: "Kings Hwy (N)", fact: null },
  // #287 · 2027-07-22
  { id: "614", station: "59 St-Columbus Circle (1 A C B D)", fact: null },
  // #288 · 2027-07-23
  { id: "280", station: "Jamaica-Van Wyck (E)", fact: null },
  // #289 · 2027-07-24
  { id: "397", station: "86 St (4 5 6)", fact: null },
  // #290 · 2027-07-25
  { id: "463", station: "Hunters Point Av (7)", fact: null },
  // #291 · 2027-07-26
  { id: "37", station: "77 St (R)", fact: null },
  // #292 · 2027-07-27
  { id: "427", station: "West Farms Sq-E Tremont Av (2 5)", fact: null },
  // #293 · 2027-07-28
  { id: "626", station: "Botanic Garden/Franklin Av-Medgar Evers College (2 3 4 5 S)", fact: null },
  // #294 · 2027-07-29
  { id: "22", station: "Rector St (R W)", fact: null },
  // #295 · 2027-07-30
  { id: "312", station: "79 St (1)", fact: null },
  // #296 · 2027-07-31
  { id: "310", station: "96 St (1 2 3)", fact: null },
  // #297 · 2027-08-01
  { id: "372", station: "Longwood Av (6)", fact: null },
  // #298 · 2027-08-02
  { id: "464", station: "Vernon Blvd-Jackson Av (7)", fact: null },
  // #299 · 2027-08-03
  { id: "120", station: "Bedford Av (L)", fact: null },
  // #300 · 2027-08-04
  { id: "169", station: "Canal St (A C E)", fact: null },
  // #301 · 2027-08-05
  { id: "508", station: "Jefferson Av (SIR)", fact: null },
  // #302 · 2027-08-06
  { id: "386", station: "Mt Eden Av (4)", fact: null },
  // #303 · 2027-08-07
  { id: "125", station: "Morgan Av (L)", fact: null },
  // #304 · 2027-08-08
  { id: "625", station: "Delancey St-Essex St (F M J Z)", fact: null },
  // #305 · 2027-08-09
  { id: "323", station: "Christopher St-Stonewall (1)", fact: null },
  // #306 · 2027-08-10
  { id: "477", station: "72 St (Q)", fact: null },
  // #307 · 2027-08-11
  { id: "94", station: "Halsey St (J)", fact: null },
  // #308 · 2027-08-12
  { id: "210", station: "Norwood-205 St (D)", fact: null },
  // #309 · 2027-08-13
  { id: "316", station: "50 St (1)", fact: null },
  // #310 · 2027-08-14
  { id: "65", station: "79 St (D)", fact: null },
  // #311 · 2027-08-15
  { id: "234", station: "East Broadway (F)", fact: null },
  // #312 · 2027-08-16
  { id: "341", station: "Eastern Pkwy-Brooklyn Museum (2 3)", fact: null },
  // #313 · 2027-08-17
  { id: "460", station: "33 St-Rawson St (7)", fact: null },
  // #314 · 2027-08-18
  { id: "186", station: "Van Siclen Av (C)", fact: null },
  // #315 · 2027-08-19
  { id: "505", station: "Grasmere (SIR)", fact: null },
  // #316 · 2027-08-20
  { id: "211", station: "Bedford Park Blvd (B D)", fact: null },
  // #317 · 2027-08-21
  { id: "5", station: "36 Av (N W)", fact: null },
  // #318 · 2027-08-22
  { id: "622", station: "Chambers St/Brooklyn Bridge-City Hall (4 5 6 J Z)", fact: null },
  // #319 · 2027-08-23
  { id: "68", station: "Bay Pkwy (D)", fact: null },
  // #320 · 2027-08-24
  { id: "127", station: "DeKalb Av (L)", fact: null },
  // #321 · 2027-08-25
  { id: "606", station: "Court Sq-23 St/Court Sq (7 E F G)", fact: null },
  // #322 · 2027-08-26
  { id: "628", station: "Fulton St (2 3 4 5 A C J Z)", fact: null },
  // #323 · 2027-08-27
  { id: "459", station: "40 St-Lowery St (7)", fact: null },
  // #324 · 2027-08-28
  { id: "126", station: "Jefferson St (L)", fact: null },
  // #325 · 2027-08-29
  { id: "433", station: "Jackson Av (2 5)", fact: null },
  // #326 · 2027-08-30
  { id: "56", station: "Ocean Pkwy (Q)", fact: null },
  // #327 · 2027-08-31
  { id: "89", station: "Cleveland St (J)", fact: null },
  // #328 · 2027-09-01
  { id: "158", station: "86 St (C B)", fact: null },
  // #329 · 2027-09-02
  { id: "41", station: "7 Av (B Q)", fact: null },
  // #330 · 2027-09-03
  { id: "176", station: "Lafayette Av (C)", fact: null },
  // #331 · 2027-09-04
  { id: "204", station: "Beach 67 St (A)", fact: null },
  // #332 · 2027-09-05
  { id: "296", station: "Marble Hill-225 St (1)", fact: null },
  // #333 · 2027-09-06
  { id: "365", station: "Castle Hill Av (6)", fact: null },
  // #334 · 2027-09-07
  { id: "343", station: "Nostrand Av (3)", fact: null },
  // #335 · 2027-09-08
  { id: "369", station: "Elder Av (6)", fact: null },
  // #336 · 2027-09-09
  { id: "13", station: "28 St (R W)", fact: null },
  // #337 · 2027-09-10
  { id: "452", station: "90 St-Elmhurst Av (7)", fact: null },
  // #338 · 2027-09-11
  { id: "511", station: "Oakwood Heights (SIR)", fact: null },
  // #339 · 2027-09-12
  { id: "153", station: "125 St (A C B D)", fact: null },
  // #340 · 2027-09-13
  { id: "518", station: "Pleasant Plains (SIR)", fact: null },
  // #341 · 2027-09-14
  { id: "175", station: "Hoyt-Schermerhorn Sts (A C G)", fact: null },
  // #342 · 2027-09-15
  { id: "320", station: "23 St (1)", fact: null },
  // #343 · 2027-09-16
  { id: "185", station: "Liberty Av (C)", fact: null },
  // #344 · 2027-09-17
  { id: "384", station: "Burnside Av (4)", fact: null },
  // #345 · 2027-09-18
  { id: "122", station: "Graham Av (L)", fact: null },
  // #346 · 2027-09-19
  { id: "292", station: "Fulton St (G)", fact: null },
  // #347 · 2027-09-20
  { id: "244", station: "Ditmas Av (F)", fact: null },
  // #348 · 2027-09-21
  { id: "504", station: "Clifton (SIR)", fact: null },
  // #349 · 2027-09-22
  { id: "240", station: "7 Av (F G)", fact: null },
  // #350 · 2027-09-23
  { id: "100", station: "Hewes St (M J)", fact: null },
  // #351 · 2027-09-24
  { id: "349", station: "Junius St (3)", fact: null },
  // #352 · 2027-09-25
  { id: "456", station: "61 St-Woodside (7)", fact: null },
  // #353 · 2027-09-26
  { id: "103", station: "Bowery (J Z)", fact: null },
  // #354 · 2027-09-27
  { id: "383", station: "183 St (4)", fact: null },
  // #355 · 2027-09-28
  { id: "294", station: "238 St (1)", fact: null },
  // #356 · 2027-09-29
  { id: "324", station: "Houston St (1)", fact: null },
  // #357 · 2027-09-30
  { id: "212", station: "Kingsbridge Rd (B D)", fact: null },
  // #358 · 2027-10-01
  { id: "283", station: "Greenpoint Av (G)", fact: null },
  // #359 · 2027-10-02
  { id: "429", station: "Freeman St (2 5)", fact: null },
  // #360 · 2027-10-03
  { id: "407", station: "Astor Pl (6)", fact: null },
  // #361 · 2027-10-04
  { id: "601", station: "6 Av/14 St (1 2 3 F M L)", fact: null },
  // #362 · 2027-10-05
  { id: "395", station: "103 St (6)", fact: null },
  // #363 · 2027-10-06
  { id: "278", station: "Jamaica Center-Parsons/Archer (E J Z)", fact: null },
  // #364 · 2027-10-07
  { id: "610", station: "Grand Central-42 St (4 5 6 7 S)", fact: null },
  // #365 · 2027-10-08
  { id: "87", station: "Crescent St (J Z)", fact: null },
  // #366 · 2027-10-09
  { id: "33", station: "45 St (R)", fact: null },
  // #367 · 2027-10-10
  { id: "134", station: "Sutter Av (L)", fact: null },
  // #368 · 2027-10-11
  { id: "273", station: "Queens Plaza (E F R)", fact: null },
  // #369 · 2027-10-12
  { id: "424", station: "Pelham Pkwy (2 5)", fact: null },
  // #370 · 2027-10-13
  { id: "149", station: "163 St-Amsterdam Av (C)", fact: null },
  // #371 · 2027-10-14
  { id: "377", station: "3 Av-138 St (6)", fact: null },
  // #372 · 2027-10-15
  { id: "173", station: "High St (A C)", fact: null },
  // #373 · 2027-10-16
  { id: "205", station: "Beach 60 St (A)", fact: null },
  // #374 · 2027-10-17
  { id: "131", station: "Bushwick Av-Aberdeen St (L)", fact: null },
  // #375 · 2027-10-18
  { id: "20", station: "City Hall (R W)", fact: null },
  // #376 · 2027-10-19
  { id: "196", station: "Aqueduct Racetrack (A)", fact: null },
  // #377 · 2027-10-20
  { id: "157", station: "96 St (C B)", fact: null },
  // #378 · 2027-10-21
  { id: "260", station: "75 Av (E F)", fact: null },
  // #379 · 2027-10-22
  { id: "471", station: "34 St-Hudson Yards (7)", fact: null },
  // #380 · 2027-10-23
  { id: "287", station: "Flushing Av (G)", fact: null },
  // #381 · 2027-10-24
  { id: "190", station: "80 St (A)", fact: null },
  // #382 · 2027-10-25
  { id: "434", station: "3 Av-149 St (2 5)", fact: null },
  // #383 · 2027-10-26
  { id: "422", station: "Burke Av (2 5)", fact: null },
  // #384 · 2027-10-27
  { id: "307", station: "116 St-Columbia University (1)", fact: null },
  // #385 · 2027-10-28
  { id: "461", station: "Queensboro Plaza (7 N W)", fact: null },
  // #386 · 2027-10-29
  { id: "378", station: "Woodlawn (4)", fact: null },
  // #387 · 2027-10-30
  { id: "84", station: "85 St-Forest Pkwy (J)", fact: null },
  // #388 · 2027-10-31
  { id: "276", station: "5 Av/53 St (E F)", fact: null },
  // #389 · 2027-11-01
  { id: "64", station: "71 St (D)", fact: null },
  // #390 · 2027-11-02
  { id: "451", station: "Junction Blvd (7)", fact: null },
  // #391 · 2027-11-03
  { id: "268", station: "65 St (M R)", fact: null },
  // #392 · 2027-11-04
  { id: "262", station: "67 Av (M R)", fact: null },
  // #393 · 2027-11-05
  { id: "76", station: "Bay Pkwy (N)", fact: null },
  // #394 · 2027-11-06
  { id: "618", station: "8 Av/14 St (A C E L)", fact: null },
  // #395 · 2027-11-07
  { id: "34", station: "53 St (R)", fact: null },
  // #396 · 2027-11-08
  { id: "133", station: "Atlantic Av (L)", fact: null },
  // #397 · 2027-11-09
  { id: "339", station: "Bergen St (2 3)", fact: null },
  // #398 · 2027-11-10
  { id: "613", station: "Lexington Av/59 St/59 St (4 5 6 N R W)", fact: null },
  // #399 · 2027-11-11
  { id: "54", station: "Sheepshead Bay (B Q)", fact: null },
  // #400 · 2027-11-12
  { id: "113", station: "Knickerbocker Av (M)", fact: null },
  // #401 · 2027-11-13
  { id: "228", station: "23 St (F M)", fact: null },
  // #402 · 2027-11-14
  { id: "299", station: "Dyckman St (1)", fact: null },
  // #403 · 2027-11-15
  { id: "250", station: "Kings Hwy (F)", fact: null },
  // #404 · 2027-11-16
  { id: "101", station: "Marcy Av (M J Z)", fact: null },
  // #405 · 2027-11-17
  { id: "609", station: "42 St-Bryant Pk/5 Av (7 B D F M)", fact: null },
  // #406 · 2027-11-18
  { id: "270", station: "46 St (M R)", fact: null },
  // #407 · 2027-11-19
  { id: "346", station: "Sutter Av-Rutland Rd (3)", fact: null },
  // #408 · 2027-11-20
  { id: "225", station: "47-50 Sts-Rockefeller Ctr (B D F M)", fact: null },
  // #409 · 2027-11-21
  { id: "417", station: "Nereid Av (2 5)", fact: null },
  // #410 · 2027-11-22
  { id: "516", station: "Huguenot (SIR)", fact: null },
  // #411 · 2027-11-23
  { id: "361", station: "Buhre Av (6)", fact: null },
  // #412 · 2027-11-24
  { id: "82", station: "104 St (J Z)", fact: null },
  // #413 · 2027-11-25
  { id: "449", station: "111 St (7)", fact: null },
  // #414 · 2027-11-26
  { id: "615", station: "62 St/New Utrecht Av (D N)", fact: null },
  // #415 · 2027-11-27
  { id: "218", station: "167 St (B D)", fact: null },
  // #416 · 2027-11-28
  { id: "420", station: "219 St (2 5)", fact: null },
  // #417 · 2027-11-29
  { id: "382", station: "Fordham Rd (4)", fact: null },
  // #418 · 2027-11-30
  { id: "251", station: "Avenue U (F)", fact: null },
  // #419 · 2027-12-01
  { id: "61", station: "50 St (D)", fact: null },
  // #420 · 2027-12-02
  { id: "318", station: "34 St-Penn Station (1 2 3)", fact: null },
  // #421 · 2027-12-03
  { id: "238", station: "Smith-9 Sts (F G)", fact: null },
  // #422 · 2027-12-04
  { id: "355", station: "Winthrop St (2 5)", fact: null },
  // #423 · 2027-12-05
  { id: "192", station: "Rockaway Blvd (A)", fact: null },
  // #424 · 2027-12-06
  { id: "10", station: "49 St (N R W)", fact: null },
  // #425 · 2027-12-07
  { id: "85", station: "75 St-Elderts Ln (J Z)", fact: null },
  // #426 · 2027-12-08
  { id: "358", station: "Newkirk Av-Little Haiti (2 5)", fact: null },
  // #427 · 2027-12-09
  { id: "328", station: "WTC Cortlandt (1)", fact: null },
  // #428 · 2027-12-10
  { id: "145", station: "190 St (A)", fact: null },
  // #429 · 2027-12-11
  { id: "602", station: "14 St-Union Sq (4 5 6 L N Q R W)", fact: null },
  // #430 · 2027-12-12
  { id: "604", station: "161 St-Yankee Stadium (4 B D)", fact: null },
  // #431 · 2027-12-13
  { id: "91", station: "Alabama Av (J Z)", fact: null },
  // #432 · 2027-12-14
  { id: "636", station: "Jay St-MetroTech (A C F R)", fact: null },
  // #433 · 2027-12-15
  { id: "426", station: "E 180 St (2 5)", fact: null },
  // #434 · 2027-12-16
  { id: "215", station: "Tremont Av (B D)", fact: null },
  // #435 · 2027-12-17
  { id: "237", station: "Carroll St (F G)", fact: null },
  // #436 · 2027-12-18
  { id: "8", station: "5 Av/59 St (N R W)", fact: null },
  // #437 · 2027-12-19
  { id: "187", station: "Shepherd Av (C)", fact: null },
  // #438 · 2027-12-20
  { id: "164", station: "34 St-Penn Station (A C E)", fact: null },
  // #439 · 2027-12-21
  { id: "418", station: "233 St (2 5)", fact: null },
  // #440 · 2027-12-22
  { id: "52", station: "Avenue U (Q)", fact: null },
  // #441 · 2027-12-23
  { id: "314", station: "66 St-Lincoln Center (1)", fact: null },
  // #442 · 2027-12-24
  { id: "141", station: "Park Pl (S)", fact: null },
  // #443 · 2027-12-25
  { id: "31", station: "25 St (R)", fact: null },
  // #444 · 2027-12-26
  { id: "231", station: "Grand St (B D)", fact: null },
  // #445 · 2027-12-27
  { id: "138", station: "Canarsie-Rockaway Pkwy (L)", fact: null },
];
