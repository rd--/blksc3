/* Moto rev (Jmcc) #1 */
let f = sinOsc(0.2, 0) * 10 + 21;
let s = lfPulse(f, [0, 0.1], 0.1);
rlpf(s, 100, 0.1).bilateralClip(0.4)
