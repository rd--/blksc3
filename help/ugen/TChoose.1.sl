(* TChoose ; select input at trigger *)
var x = MouseX(1, 1000, 1, 0.1);
var t = Dust(x);
var f = TiRand(48, 60, t).MidiCps;
var o = TChoose(t, [SinOsc(f, 0), Saw(f * 2), Pulse(f * 0.5, 0.1)]);
o * 0.1
