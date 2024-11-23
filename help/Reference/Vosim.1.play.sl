/* Vosim.1.sl */
o = Vosim(
	Impulse(110 + [-1, 0, 1], 0),
	MouseX([110, 220, 440], 880, 1, 0.2),
	[3, 5, 7],
	[0.77, 0.88, 0.99]
);
Splay2(o) * MouseY(0.01, 1, 1, 0.2)

# Vosim

Vosim pulse generator.

Starts a Vosim pulse when a transition from non-positive to positive occurs at the _trigger_ input.

A pulse is a squared sinewave at the indicated _frequency_.

The number of squared sinewaves to use in one vosim pulse is given by the _cycles_ input.

The pulse duration is given by the _decay_ input.

In this program three Vosim unit generators are modified by the _Mouse_ location.
