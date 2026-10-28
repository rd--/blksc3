/* eqPan2 */
eqPan2(
	pinkNoise() * 0.1 + (sinOsc(48.midiCps, 0) * 0.05),
	sinOsc(1, 0)
)

# eqPan2

Equal power stereo panner.

A quiet C3 sine tone is mixed with pink noise and panned following a one hertz sine oscillator.
