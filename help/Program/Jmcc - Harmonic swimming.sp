/* Harmonic Swimming (Jmcc) #1 */
let a = 0.02;
let l = Line(0, 0 - a, 60);
let o = { :h |
    let n = LfNoise1(
	    { Rand(-4, 4) } ! 2 + 6
    ) * a + l;
    SinOsc(50 * h, 0) * n.Max(0)
};
1:21.collect(o:/1).Sum
