/* adsr.1 */
let tr = impulse([0.75, 0.5], 0);
let gt = trig(tr, tRand(0.1, 0.2, tr));
let o = blip(tRand(36, [48, 72], tr).midiCps, tRand(1, 7, tr));
let a = adsr(
	gt,
	tRand(0.01, 0.2, tr),
	tRand(0.3, 0.6, tr),
	tRand(0.4, 0.6, tr),
	tRand(0.5, 2, tr),
	-4
);
o * a * 0.1

# adsr

_adsr_ is an attack-decay-sustain-release envelope generator.

The ⎇ (_gate_) input begins the envelope on a rising zero crossing and holds it open until a falling zero crossing.

The ↗ (_attack_), ↘ (_decay_) and ⇲ (_release_) times are all given in seconds.

The (implicit) _peak level_ is 1 and ⎺ (the _sustain level_) is relative to the peak level.

The ⟦𝑓⟧ (_curves_) input may be either a scalar or an array of three places.
