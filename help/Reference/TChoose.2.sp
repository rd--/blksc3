/* tChoose.2.sl */
let a = [1 2 3; 1 2 3 4 5; 1 2 3 4 5 6 7];
let t1 = impulse(1 / 5, 0);
let t2 = impulse(5, 0);
let m = tChoose(t1, a.collect { :x | demand(t2, 0, dseq(Infinity, x)) });
let c = sinOsc(1200, 0) * decay(t1, 1) * 0.1;
sinOsc(m * 110, 0) * 0.1 + c

# tChoose

Sequences of different lengths.

A high tone indicates when the sequence is re-selected.
