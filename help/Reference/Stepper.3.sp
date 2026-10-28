/* stepper.3 (JMcC) */
let b = [43 55 72 70 55 58 41 67 41 60 55 39 58 55 43 51].localBuf;
let rate = mouseX(1, 3, 1, 0.2);
let clock = impulse(rate, 0);
let env = decay2(clock, 0.002, 2.5);
let index = stepper(clock, 0, 0, 15, 1, 0);
let freq = lag2(bufRd(1, b, index, 1, 1).midiCps, 0.1) + [0, 0.3];
let ffreq = lag2(freq, 0.1) + [0, 0.3];
let rev = nil;
let lfo = nil;
let out = lfPulse(freq * [1, 3 / 2, 2], 0, 0.3).sum;
out := rlpf(out, ffreq, 0.3) * env;
out := rlpf(out, ffreq, 0.3) * env;
out := out * 0.02;
out := combL(out, 1, 0.66 / rate, 2) * 0.8 + out;
rev := out;
5.timesRepeat {
	rev := allpassC(rev, 0.05, { rand(0, 0.05) } ! 2, rand(1.5, 2))
};
out := out + (0.3 * rev);
out := leakDc(out, 0.995);
lfo := sinOsc(0.2, [0, 0.5.pi]) * 0.0024 + 0.0025;
1.timesRepeat{
	out := delayL(out, 0.1, lfo) + out
};
onePole(out, 0.9) * 0.5

# stepper

SC2 help file example (Jmcc).

Mouse control.
