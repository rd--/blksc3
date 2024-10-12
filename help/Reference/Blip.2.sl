{- Blip ; Nice use of blip ; https://github.com/cianoc/supercollider_fragments -}
let t = Impulse(6, 0);
let o = Blip(
	TRand(48, 72, t).MidiCps,
	TRand(1, 12, t)
) * TRand(-0.5, 0.4, t).Max(0);
let p = Pan2(
	o,
	TRand(-1, 1, t),
	Decay2(t, 0.01, 3) * 0.1
);
p + CombC(p, 2, 4 / 6, 6)
