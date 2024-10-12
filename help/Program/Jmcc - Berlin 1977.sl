{- berlin 1977 (jmcc) 4 -}
let clockRate = MouseX(5, 20, 1, 0.2);
let clockTime = 1 / clockRate;
let clock = Impulse(clockRate, 0);
let patternList = [55, 60, 63, 62, 60, 67, 63, 58];
let note = Demand(clock, 0, Dseq(99, patternList));
let clock16 = PulseDivider(clock, 16, 0);
let noteTrs = Demand(clock16, 0, Dshuf(inf, [-12, -7, -5, 0, 2, 5])) + note;
let freq = noteTrs.MidiCps;
let env = Decay2(clock, 0.05 * clockTime, 2 * clockTime);
let amp = env * 0.1 + 0.02;
let filt = env * (SinOsc(0.17, 0) * 800) + 1400;
let pw = SinOsc(0.08, [0, 0.5 * pi]) * 0.45 + 0.5;
let s = Pulse(freq, pw) * amp;
CombC(Rlpf(s, filt, 0.15), 0.2, [0.2, 0.17], 1.5)

{- ---- notes.md ---- -}
Mouse control.
