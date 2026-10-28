/* https://fredrikolofsson.com/f0blog/more-sc-twitter/ */
let sq = dseq(99, [2 2 2 2 2 2 4 3]);
let sy = saw([3 4]) * 32 + 64;
let sz = saw([4 3]) * 99;
0:4.collect { :x |
	let sw = sz + duty(1, 0, sq * (4 ^ x));
	combN(syncSaw(sy, sw) / 9, 1, 1 / 6, 2) * 0.2
}.mix
