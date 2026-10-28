/* blip.2 ; https://github.com/cianoc/supercollider_fragments */
let t = impulse(6, 0);
let o = blip(
	tRand(48, 72, t).midiCps,
	tRand(1, 12, t)
) * tRand(-0.5, 0.4, t).max(0);
let p = pan2(
	o,
	tRand(-1, 1, t),
	decay2(t, 0.01, 3) * 0.1
);
p + combC(p, 2, 4 / 6, 6)

# blip

- _blip(freq, numharm)_

Band Limited ImPulse generator. All harmonics have equal amplitude.  This is the equivalent of 'buzz' in MusicN languages. _Warning_: This waveform in its raw form could be damaging to your ears at high amplitudes or for long periods.

- freq: frequency in Hertz
- numharm: number of harmonics. This may be lowered internally if it would cause aliasing.

Implementation notes: It is improved from other implementations in that it will crossfade in a control period when the number of harmonics changes, so that there are no audible pops. It also eliminates the divide in the formula by using a 1/sin table (with special precautions taken for 1/0). The lookup tables are linearly interpolated for better quality.

(_Synth-O-Matic_ (1990) had an impulse generator called blip, hence that name here rather than 'buzz').
