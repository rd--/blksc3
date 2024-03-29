{- berlin 1977 (jmcc) 4 -}
var clockRate = MouseX(5, 20, 1, 0.2);
var clockTime = 1 / clockRate;
var clock = Impulse(clockRate, 0);
var patternList = [55, 60, 63, 62, 60, 67, 63, 58];
var note = Demand(clock, 0, Seq(99, patternList));
var clock16 = PulseDivider(clock, 16, 0);
var noteTrs = Demand(clock16, 0, Shuf(inf, [-12, -7, -5, 0, 2, 5])) + note;
var freq = noteTrs.midiCps;
var env = Decay2(clock, 0.05 * clockTime, 2 * clockTime);
var amp = env * 0.1 + 0.02;
var filt = env * (SinOsc(0.17, 0) * 800) + 1400;
var pw = SinOsc(0.08, [0, 0.5 * pi]) * 0.45 + 0.5;
var s = Pulse(freq, pw) * amp;
CombC(Rlpf(s, filt, 0.15), 0.2, [0.2, 0.17], 1.5)

{- ---- notes.md ---- -}
Mouse control.
