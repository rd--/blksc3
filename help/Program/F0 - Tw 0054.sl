/* https://fredrikolofsson.com/f0blog/more-sc-twitter/ */
let sq = Dseq(99, [2 2 2 2 2 2 4 3]);
let sy = Saw([3 4]) * 32 + 64;
let sz = Saw([4 3]) * 99;
0:4.collect { :x |
	let sw = sz + Duty(1, 0, sq * (4 ^ x));
	CombN(SyncSaw(sy, sw) / 9, 1, 1 / 6, 2) * 0.2
}.Mix
