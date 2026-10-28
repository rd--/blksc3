/* 4.X - Mouse Control */
let o = sinOsc(
	mouseX(0.23, 2.7, 0, 0.2),
	0
) * 0.1;
eqPan2(pinkNoise() * o, o * -3)

# Annotation

The _mouseX_ and _mouseY_ unit generators are not implemented at the in-process synthesiser instance,
however the system simulates them by writing the window mouse coordinates to synthesiser control buses.
