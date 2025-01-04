/* F0 - Tw 0059 ; https://fredrikolofsson.com/f0blog/more-sc-twitter */
let t = LfTri(LfTri(0.1, 0) * 8 + 12, 0) * 32 + 128;
let o = SinOsc(
	Saw(3) * 128 + 128,
	(Saw([3, 4]) * t).Sin
) / 4;
CombC(o, 1, 1 / 6, LfTri(1 / 32, 0) + 1)
