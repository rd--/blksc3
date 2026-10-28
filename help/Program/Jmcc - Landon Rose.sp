/* modified from a patch by Landon Rose ; jmcc #8 ; graph rewrite */
let m = [[32, 43, 54, 89], [10, 34, 80, 120], [67, 88, 90, 100], [14, 23, 34, 45]];
let f = { :i |
    let s = { pinkNoise() * 0.001 }.duplicate(2);
    let e = linSeg(impulse(0.125, [0, 0.25, 0.5, 0.75].at(i)), [0, 2, 1, 2, 0]);
    ringzBank(s, m.at(i).midiCps, [1], [3]) * e
};
1.to(4).collect(f/1).sum
