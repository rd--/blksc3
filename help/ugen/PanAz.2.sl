(* PanAz.2.sl *)
{ 0 } ! 8 ++ PanAz(
	8,
	PinkNoise(),
	MouseX(0.1, 2, 0, 0.2),
	0.1,
	3,
	0.5
)

(* ---- notes.md ---- *)
# PanAz

Offset an _n_-channel panner by pre-pending an array of silent channels.

The default values for _#_ here are both eight,
