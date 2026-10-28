/* Analog Bubbles (Jmcc) #1 */
let o = lfSaw([8 7.23], 0) * 3 + 80;
let f = lfSaw(0.4, 0) * 24 + o;
let s = sinOsc(f.midiCps, 0) * 0.04;
combC(s, 0.2, 0.2, 4) * 0.1
