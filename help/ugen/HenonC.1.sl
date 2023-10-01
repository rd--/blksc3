(* HenonC ; as a frequency control *)
var x = MouseX(1, 1.4, 0, 0.1);
var y = MouseY(0, 0.3, 0, 0.1);
var f0 = 40;
var f = HenonC(f0, x, [y, y * 0.75], 0, 0) * 800 + 900;
SinOsc(f, 0) * 0.4
