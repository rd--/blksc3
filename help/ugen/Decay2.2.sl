(* Decay2 ; texture *)
OverlapTexture({
    arg tr;
    var e = Decay2(Impulse({ TRand(10, 13, tr) }.dup, 0), TRand(0.001, 0.01, tr), TRand(0.005, 0.02, tr));
    var f = SinOsc({ TRand(10, 13, tr) }.dup, 0) * e * { TRand(4, 7, tr) }.dup;
    var r4 = { TRand(2220, 2227, Impulse(0.7, 0)) }.dup;
    SinOsc(r4, 0) * f * 0.15
}, 2, 4, 2)

(* ---- notes.md ---- *)
# Decay2 -- exponential decay

_Decay2(in, attackTime, decayTime)_

_Decay_ has a very sharp attack and can produce clicks. _Decay2_ rounds off the attack by subtracting one Decay from another. _Decay2(in, attackTime, decayTime)_ is equivalent to _Decay(in, decayTime) - Decay(in, attackTime)_.

- in: input signal
- attackTime: 60 dB attack time in seconds.
- decayTime: 60 dB decay time in seconds.

