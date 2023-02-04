;; CombC ; event control
var lfo = SinOsc(0.5, 0);
var osc = Voicer(16) { :e |
	SinOsc(e.p.UnitCps, 0) * lfo * e.w * e.z
};
CombC(osc.Splay2, 0.5, 0.2, 3)

;; ---- notes.md
ᚊ (_CombC_) is a comb format delay line with cubic interpolation.

The ⎵ (_delay_) and ↘ (_decay_) times are both in seconds.

The _i_ rate ⌈⎵ (_maximum delay_) time is used to allocate memory.
The time-varying ⎵ parameter should not exceed ⌈⎵.
