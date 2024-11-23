/* Duplicate */
{
	SinOsc(Rand(36, 72).MidiCps, 0) * Rand(0.05, 0.1)
} !^ 12

# !

The ! (_Duplicate_) block creates an array of _n_ places by evaluating a no-argument block _n_ times.

In this program 12 quiet sine oscillators (∿), each with a randomly selected (⚁) frequency (ν) and amplitude (×), are equally spaced across the stereo spectrum (◠).

Each time the program is run a different frequency set it generated.
