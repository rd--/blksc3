;; Blip ; Voicer
Splay2(Voicer(16, { :e |
    Blip(e.p.UnitCps, e.y * 9) * e.w * e.z
}))

;; ---- notes.md
# Blip -- band limited impulse oscillator

_Blip(freq, numharm)_

Band Limited ImPulse generator. All harmonics have equal amplitude.  This is the equivalent of 'buzz' in MusicN languages. _Warning_: This waveform in its raw form could be damaging to your ears at high amplitudes or for long periods.

Implementation notes: It is improved from other implementations in that it will crossfade in a control period when the number of harmonics changes, so that there are no audible pops. It also eliminates the divide in the formula by using a 1/sin table (with special precautions taken for 1/0). The lookup tables are linearly interpolated for better quality.

(_Synth-O-Matic_ (1990) had an impulse generator called blip, hence that name here rather than 'buzz').

- freq: frequency in Hertz
- numharm: number of harmonics. This may be lowered internally if it would cause aliasing.
