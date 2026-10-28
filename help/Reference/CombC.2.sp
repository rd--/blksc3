/* combC.2.sl ; Event control */
let lfo = sinOsc(0.5, 0);
let osc = voicer(1, 16) { :e |
	sinOsc(e.p.unitCps, 0) * lfo * e.w * e.z
};
combC(osc.splay2, 0.5, 0.2, 3)

# combC

ᚊ (_combC_) is a comb format delay line with cubic interpolation.

The ⎵ (_delay_) and ↘ (_decay_) times are both in seconds.

The _i_-rate ⌈⎵ (_maximum delay_) time is used to allocate memory.
The time-varying ⎵ parameter should not exceed ⌈⎵.
