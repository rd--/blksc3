/* modal space (jmcc) #8 */
let b = [0, 2, 3.2, 5, 7, 9, 10].localBuf;
let k = degreeToKey(b, mouseX(0, 15, 0, 0.1), 12);
let n = lfNoise1([3, 3]);
let r = 48;
let o = sinOsc((r + k + (n * 0.04)).midiCps, 0) * 0.1;
let t = lfPulse([48, 55].midiCps, 0, 0.15);
let f = (sinOsc(0.1, 0) * 10 + r).midiCps;
let d = rlpf(t, f, 0.1) * 0.1;
let m = o + d;
combC(m, 0.31, 0.31, 2) + m * 0.25

# Notes

Mouse control.
