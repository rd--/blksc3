{- https://fredrikolofsson.com/f0blog/more-sc-twitter/ -}
var sy = Saw([3, 4]) * 32 + 64;
var sq = Dseq(99, [2, 2, 2, 2, 2, 2, 4, 3]) * (4 ** 0.to(4));
var sw = Saw([4, 3]) * 99 + Demand(Impulse(1, 0), 0, sq).transposed;
CombN(SyncSaw(sy, sw) / 9, 1, 1 / 6, 2).transposed.sum * 0.1
