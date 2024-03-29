{- Pulse.1 -}
{
	Pulse(
		LfNoise2(Rand(0.25, 1)) * 100 + 200,
		LfNoise2(Rand(0.5, 2)) * 0.5 + 0.5
	) * 0.1
} !^ 9 * 0.25

{- ---- notes.md ---- -}
# Pulse

Nine quiet ⎍ (_Pulse_) oscillators with randomly shifting ν (_freq_) and ↔ (_width_) inputs.
