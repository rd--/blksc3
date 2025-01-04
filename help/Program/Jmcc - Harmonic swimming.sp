/* Harmonic swimming (Jmcc) #1 */
let a = 0.02;
let l = Line(0, 0 - a, 60);
let o = { :h |
    let n = LfNoise1(
	    { Rand(-4, 4) } ! 2 + 6
    ) * a + l;
    SinOsc(50 * (h + 1), 0) * n.Max(0)
};
(0 .. 20).collect(o:/1).Sum
