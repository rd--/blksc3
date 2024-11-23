/* bowed string (jmcc) */
var root = 5;
var scale = [0, 2, 4, 5, 7, 9, 11] + root;
var oct = [24, 36, 48, 60, 72, 84];
var f0 = (scale.choose + oct.choose).midiCps;
var freq = 1.to(12).collect({ arg i; f0 * i });
var a0 = Rand(0.7, 0.9);
var amp = { a0 := a0 * a0 }.dup(12);
var x = { BrownNoise() }.dup * 0.007 * (LfNoise1(ExpRand(0.125, 0.5)) * 0.6 + 0.4).max(0);
var k = RingzBank(x, freq, amp, { Rand(1, 3) }.dup(12));
(k * 0.1).SoftClip

/* ---- notes.md ---- */
The _freq_ and _amp_ values are calculated directly (using ⇛ and !) rather than using _series_ and _geom_ methods.
