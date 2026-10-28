/* asr */
let tr = impulse([1, 0.75], 0);
let gt = trig(tr, tRand(0.1, 0.2, tr));
let o = blip(tRand(36, [48, 60], tr).midiCps, tRand(1, 7, tr));
let a = asr(gt, tRand(0.01, 0.2, tr), tRand(0.2, 2, tr), -4);
o * a * 0.1

# asr

⏢ (_asr_) is an attack-sustain-release envelope generator.

The ⎇ (_gate_) input begins the envelope on a rising zero crossing and holds it open until a falling zero crossing.

The ↗ (_attack_) and ⇲ (_release_) times are given in seconds.

The (implicit) _peak level_ is 1.

The ⟦𝑓⟧ (_curves_) input may be either a scalar or an array of two places.
