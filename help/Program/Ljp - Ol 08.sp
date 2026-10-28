/* Ljp - Ol 08 */
let f = { 0.2 } ! 8;
bpf(
	pinkNoise() * 0.2,
	lfNoise1(f) * 1000 + 1040,
	lfNoise1(f) * 0.3 + 0.31
).splay2

# Notes

[No. 8](https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html)

Note that the λ argument to ! must be a λ block, unlike in the SuperCollider language, or indeed in the Simple Programming Language.
