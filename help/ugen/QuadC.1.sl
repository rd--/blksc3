(* QuadC ; as simple oscillator *)
var f1 = MouseX(110, 880, 1, 0.2);
var f2 = MouseY(110, 440, 1, 0.2);
QuadC([f1, f2], 1, -1, -0.75, 0) * 0.1
