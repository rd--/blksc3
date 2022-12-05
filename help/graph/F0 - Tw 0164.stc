// f0 ; tw 0164
var cm = CombC(InFb(1, #[1, 0]), 5, #[4.8, 4.7], 1);
var fr = Pitch(cm, 440, 60, 4000, 100, 16, 1, 0.01, 0.5, 1, 0).transpose.first - 4;
var ph = SinOsc(fr, 0) * 2 * pi * SinOsc(1 / 16, 0);
var o = SinOsc(#[1, 2], ph);
LeakDC(o, 0.995) / 2 / 2 / 2 / 2
