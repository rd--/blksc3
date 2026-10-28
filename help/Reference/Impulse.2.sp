/* impulse.3 */
let sync = 5;
let freq = [1 3 5 7 9 11 13];
let numer = [3 7 5 2 9 6 1];
let f = { :i |
	sinOsc(freq[i] * 100, 0) * decay2(impulse(numer[i] / sync, 0), 0.01, 1)
};
splay2([1 .. freq.size].collect(f/1)) * 0.1

# impulse

Synchronised impulses,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
