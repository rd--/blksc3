/* pulse.1 */
{
	pulse(
		lfNoise2(rand(0.25, 1)) * 100 + 200,
		lfNoise2(rand(0.5, 2)) * 0.5 + 0.5
	) * 0.1
} !^ 9 * 0.25

# pulse

Nine quiet ⎍ (_pulse_) oscillators with randomly shifting ν (_freq_) and ↔ (_width_) inputs.
