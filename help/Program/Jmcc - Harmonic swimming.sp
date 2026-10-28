/* Harmonic Swimming (Jmcc) #1 */
let a = 0.02;
let l = line(0, 0 - a, 60);
let o = { :h |
    let n = lfNoise1(
	    { rand(-4, 4) } ! 2 + 6
    ) * a + l;
    sinOsc(50 * h, 0) * n.max(0)
};
1:21.collect(o/1).sum
