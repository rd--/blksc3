/* Asr */
let tr = Impulse([1, 0.75], 0);
let gt = Trig(tr, TRand(0.1, 0.2, tr));
let o = Blip(TRand(36, [48, 60], tr).MidiCps, TRand(1, 7, tr));
let a = Asr(gt, TRand(0.01, 0.2, tr), TRand(0.2, 2, tr), -4);
o * a * 0.1

# Asr

⏢ (_Asr_) is an attack-sustain-release envelope generator.

The ⎇ (_gate_) input begins the envelope on a rising zero crossing and holds it open until a falling zero crossing.

The ↗ (_attack_) and ⇲ (_release_) times are given in seconds.

The (implicit) _peak level_ is 1.

The ⟦𝑓⟧ (_curves_) input may be either a scalar or an array of two places.
