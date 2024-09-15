{- a bath (jr) -}
let above = MouseY(0, 2, 0, 0.2).RoundTo(1);
let aside = MouseX(1, 1.6, 0, 0.2);
let sources = [
	{ WhiteNoise() } ! 2 * 0.3,
	{ PinkNoise() } ! 2,
	LfdNoise3(10000) * 0.1
];
let u1 = SelectX(LinLin(LfdNoise1(4), -1, 1, 0, sources.size), sources) * 0.1;
let u2 = u1 + DelayC(u1, 0.1, [0.001, 0.0012]) * 0.1;
let u3 = { Rlpf(u2, { Rand(100.0, 340) * aside } ! 4, 0.2).Sum } ! 2;
let u4 = CombC(u3.reverse, 0.05, 0.05, 0.3) * 0.3 * LfNoise2(0.2).Max(0) + u3;
SelectX(above.Lag(0.4), [u2, u4]) * 2

{- ---- notes.md ---- -}
Mouse control.
