(* Formlet.1 *)
var x = MouseX(0.012, 0.19, 1, 0.1) + (LfNoise2(0.2) * 0.1 + 0.05);
var f = Formlet(Blip(10, 12), LfNoise0([20 40]) * 43 + 700, 0.005, x.Max(0));
var o = SinOsc(40, 0) * LfNoise0([5 10]);
LeakDc(f + o, 0.995).Clip2(0.75) * 0.5

(* ---- notes.md ---- *)
# Formlet

Mouse control.
