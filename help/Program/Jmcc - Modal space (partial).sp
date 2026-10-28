/* modal space (jmcc) #8 */
var b = [0, 2, 3.2, 5, 7, 9, 10].localBuf;
var k = degreeToKey(b, mouseX(0, 15, 0, 0.1), 12);
var n = lfNoise1([3, 3]);
var r = 48;
var o = sinOsc((r + k + (n * 0.04)).midiCps, 0) * 0.1;
var t = lfPulse([48, 55].midiCps, 0, 0.15);
var f = (sinOsc(0.1, 0) * 10 + r).midiCps;
var d = rlpf(t, f, 0.1) * 0.1;
var m = o + d;
combC(m, 0.31, 0.31, 2) + m * 0.25

# Notes

Mouse control.
