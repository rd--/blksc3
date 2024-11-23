/* PanAz.1.sl */
PanAz(
	2,
	PinkNoise(),
	LfSaw(0.25, 0),
	0.1,
	2,
	0.5
)

# PanAz

Azimuth panner.
The number of channels input (_#_) tells how many consecutive channels to pan across.
This value determines the _shape_ of the signal graph and hence must be a constant value.

The input signal (_∙_) is the single channel sound to be panned.

The position input (_⌖_) has a range of _0--2_,
where _0_ is the first speaker, _1_ is the middle, and _2_ the last.
Out of range values are wrapped around,
a line _-1--1_ will traverse the speakers clockise starting at the middle speaker,
i.e. from _1--2_ and then from _0--1_.

The level input (_×_) is a multiplier for the input signal.

The width input (_↔_) decides the number of adjacent speakers the signal is sent to.

The orientation (_↻_) input tells if there is a speaker located at position _0_,
if _0.5_ the first speaker is left of the centre.

This program pans quiet pink noise across _#_ directly adjacent speakers using a low-frequency sawtooth oscillator to cycle through each output speaker in turn.
