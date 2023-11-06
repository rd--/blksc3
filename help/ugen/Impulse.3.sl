(* Impulse.3 *)
var sync = 5;
var freq = [1 3 5 7 9 11 13];
var numer = [3 7 5 2 9 6 1];
var f = { :i |
	SinOsc(freq[i] * 100, 0) * Decay2(Impulse(numer[i] / sync, 0), 0.01, 1)
};
Splay2([1 .. freq.size].collect(f)) * 0.1

(* ---- notes.md ---- *)
# Impulse

Synchronised impulses,
courtesy <https://github.com/cianoc/supercollider_fragments>
