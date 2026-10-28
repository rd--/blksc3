/* tChoose.1.sl */
let x = mouseX(1, 1000, 1, 0.1);
let t = dust(x);
let f = tiRand(48, 60, t).midiCps;
let o = tChoose(t, [sinOsc(f, 0), saw(f * 2), pulse(f * 0.5, 0.1)]);
o * 0.1

# tChoose

Select input at trigger.
