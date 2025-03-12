/* 4.X - Mouse Control */
let o = SinOsc(
	MouseX(0.23, 2.7, 0, 0.2),
	0
) * 0.1;
EqPan2(PinkNoise() * o, o * -3)

# Annotation

The _MouseX_ and _MouseY_ unit generators are not implemented at the in-process synthesiser instance,
however the system simulates them by writing the window mouse coordinates to synthesiser control buses.
