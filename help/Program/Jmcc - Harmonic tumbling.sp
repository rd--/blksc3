/* Harmonic Tumbling (Jmcc) #1 */
let t = txLine([10 11], 0.1, 60, 1);
let o = { :h |
    let e = decay2(
	    dust(t) * 0.02,
	    0.005,
	    rand(0, 0.5)
    );
    sinOsc(
	    80 * (h + 1),
	    0
    ) * e
};
0:10.collect(o:/1).sum

