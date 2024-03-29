{- aleatoric quartet (jmcc) #7 -}
var amp = 0.07;
var density = MouseX(0.01, 1, 0, 0.1);
var dmul = density.reciprocal * 0.5 * amp;
var dadd = amp - dmul;
var mkSig = {
  arg ix;
  var x = PinkNoise() * (LfNoise1(8) * dmul + dadd).max(0);
  var n0 = LfNoise0(Select(IRand(0, 2), #[1, 0.5, 0.25]));
  var freq = Lag((n0 * 7 + 66 + Rand(-30, 30)).rounded, 0.2).midiCps;
  Pan2(CombC(x, 0.02, freq.reciprocal, 3), Rand(-1, 1), 1)
};
var g = 1.to(4).collect(mkSig).sum;
5.timesRepeat({ g = AllpassC(g, 0.05, { Rand(0, 0.05) }.dup, 1) });
LeakDc(g, 0.995)

{- ---- notes.md ---- -}
Mouse control.
