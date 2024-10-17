/* Stepper.3 (JMcC) */
let b = [43 55 72 70 55 58 41 67 41 60 55 39 58 55 43 51].asLocalBuf;
let rate = MouseX(1, 3, 1, 0.2);
let clock = Impulse(rate, 0);
let env = Decay2(clock, 0.002, 2.5);
let index = Stepper(clock, 0, 0, 15, 1, 0);
let freq = Lag2(BufRd(1, b, index, 1, 1).MidiCps, 0.1) + [0, 0.3];
let ffreq = Lag2(freq, 0.1) + [0, 0.3];
let rev = nil;
let lfo = nil;
let out = LfPulse(freq * [1, 3 / 2, 2], 0, 0.3).sum;
out := Rlpf(out, ffreq, 0.3) * env;
out := Rlpf(out, ffreq, 0.3) * env;
out := out * 0.02;
out := CombL(out, 1, 0.66 / rate, 2) * 0.8 + out;
rev := out;
5.timesRepeat {
	rev := AllpassC(rev, 0.05, { Rand(0, 0.05) } ! 2, Rand(1.5, 2))
};
out := out + (0.3 * rev);
out := LeakDc(out, 0.995);
lfo := SinOsc(0.2, [0, 0.5 * pi]) * 0.0024 + 0.0025;
1.timesRepeat{
	out := DelayL(out, 0.1, lfo) + out
};
OnePole(out, 0.9) * 0.5

/* ---- notes.md ---- */
# Stepper

SC2 help file example (Jmcc).

Mouse control.
