/* 4.X - Symbolic Naming Schema */
{
	Pulse(
		(
			LfNoise2(0.07) * 7 + 77
		).floor.midiCps,
		LfNoise2(5) * 0.5 + 0.5
	).Lpf(777) * 0.07
} !^ 11

# Annotation

In the _Symbolic Naming Schema_ the block,
and each of its inputs,
are named using a brief Unicode string.

Names in this program include ⎍ and λ for blocks,
ν and ← for inputs,
and 𝑚→ν and ⌊ for menu items.
