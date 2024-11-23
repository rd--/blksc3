/* Overlap Texture */
{ :tr |
    EqPan2(
        SinOsc(80 + TRand(0, 2000, tr), 0),
        LfNoise1(0.4 + TRand(0, 0.8, tr))
	) * (LfNoise1(0.4 + TRand(0, 0.8, tr)) * 0.4 + 0.5)
}.OverlapTexture(2, 8, 12).Mix * 0.05

/* ---- notes.md ---- */
# Overlap Texture

ᨏ (_OverlapTexture_) is a graph combinator, a form of _higher order function_.
ᨏ requires a one argument λ block as an input.

ᨏ makes # (_overlap_) parallel copies of the graph fragment at λ (_procedure_).
Each copy forms one voice of an evolving texture.

ᨏ applies a simple linear envelope to each voice.
The envelope is defined by two parameters, ⤢ (_transitionTime_) and ⌒ (_sustainTime_).
The duration of the envelope is: 2 × ⤢ + ⌒.

The envelopes of each voice are reset at equally spaced regular intervals.
The interval between between resets is: (2 × ⤢ + ⌒) ÷ #.

The argument to λ is a signal that indicates to the voice when its envelope is reset,
allowing voices to move to a new state for each iteration.

This program generates a texture of 12 voices, each a single ∿ (_SinOsc_).
On each envelope reset the ν (_frequency_), ⌖ (_stereo location_) and × (_amplitude_) are reset to new randomly selected values (⤴⚁).
In this program λ has no statements.
