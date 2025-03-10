/* 4.X - Mouse Control */
let o = SinOsc(
	MouseX(0.23, 2.7, 0, 0.2),
	0
) * 0.1;
EqPan2(PinkNoise() * o, o * -3)

# Annotation

The _Mouse_ unit generators do not work at the in-process synthesiser instance,
in which case a simulation is provided by writing the mouse coordinates to control buses.
