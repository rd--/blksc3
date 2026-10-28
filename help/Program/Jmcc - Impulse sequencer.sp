/* impulse sequencer (jmcc) SC2 */
let t = impulse(8, 0);
let isequ = { :s | t * demand(t, 0, dseq(Infinity, s)) };
let cSq = isequ([1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0]);
let dSq = isequ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]);
let nSq = isequ([1.0, 0.1, 0.1, 1.0, 0.1, 1.0, 0.1, 0.1]);
let bSq = isequ([1, 0, 0.2, 0, 0.2, 0, 0.2, 0]);
let c = decay2(cSq, 0.001, 0.3) * sinOsc(1700, 0) * 0.1;
let d = decay2(dSq, 0.001, 0.3) * sinOsc(2400, 0) * 0.04;
let n = decay2(nSq, 0.001, 0.25) * brownNoise() * 0.1;
let b = decay2(bSq, 0.001, 0.5) * sinOsc(100, 0) * 0.2;
c + d + n + b
