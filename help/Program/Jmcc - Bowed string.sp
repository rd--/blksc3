/* bowed string (jmcc) */
let root = 5;
let scale = [0, 2, 4, 5, 7, 9, 11] + root;
let oct = [24, 36, 48, 60, 72, 84];
let f0 = (scale.atRandom + oct.atRandom).midiCps;
let freq = 1.to(12).collect({ :i | f0 * i });
let a0 = rand(0.7, 0.9);
let amp = { a0 := a0 * a0 }.duplicate(12);
let x = { brownNoise() }.duplicate(2) * 0.007 * (lfNoise1(expRand(0.125, 0.5)) * 0.6 + 0.4).max(0);
let k = ringzBank(x, freq, amp, { rand(1, 3) }.duplicate(12));
(k * 0.1).softClip

# Notes

The _freq_ and _amp_ values are calculated directly,
using ⇛ and !,
rather than using `series` and `geom` methods.

