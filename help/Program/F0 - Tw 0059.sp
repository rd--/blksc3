/* F0 - Tw 0059 ; https://fredrikolofsson.com/f0blog/more-sc-twitter */
let t = lfTri(lfTri(0.1, 0) * 8 + 12, 0) * 32 + 128;
let o = sinOsc(
	saw(3) * 128 + 128,
	(saw([3, 4]) * t).sin
) / 4;
combC(o, 1, 1 / 6, lfTri(1 / 32, 0) + 1)
