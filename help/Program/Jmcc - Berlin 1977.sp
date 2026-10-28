/* berlin 1977 (jmcc) 4 */
let clockRate = mouseX(5, 20, 1, 0.2);
let clockTime = 1 / clockRate;
let clock = impulse(clockRate, 0);
let patternList = [55, 60, 63, 62, 60, 67, 63, 58];
let note = demand(clock, 0, dseq(99, patternList));
let clock16 = pulseDivider(clock, 16, 0);
let noteTrs = demand(clock16, 0, dshuf(Infinity, [-12, -7, -5, 0, 2, 5])) + note;
let freq = noteTrs.midiCps;
let env = decay2(clock, 0.05 * clockTime, 2 * clockTime);
let amp = env * 0.1 + 0.02;
let filt = env * (sinOsc(0.17, 0) * 800) + 1400;
let pw = sinOsc(0.08, [0, 0.5.pi]) * 0.45 + 0.5;
let s = pulse(freq, pw) * amp;
combC(rlpf(s, filt, 0.15), 0.2, [0.2, 0.17], 1.5)

# Notes

Mouse control.
