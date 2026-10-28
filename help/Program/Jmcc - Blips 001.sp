/* blips 001 (jmcc) #SC3d1.5 ; graph rewrite */
let z = overlapTexture({ :tr |
    let blips = {
        let f = txLine(tExpRand(0.25, 400, tr), tExpRand(0.25, 400, tr), 4, tr);
        let nh = txLine(tExpRand(2, 100, tr), tExpRand(2, 100, tr), 4, tr);
        blip(f, nh)
    };
    eqPan2(
	    blips() * blips(),
	    tLine(tRand(-1, 1, tr), tRand(-1, 1, tr), 4, tr)
    ) * 0.1
}, 2, 1, 12).mix;
z := z.Distort;
6.timesRepeat {
	z := allpassC(z, 0.05, { rand(0, 0.05) } ! 2, 4)
};
z
