{- http://twitter.com/redFrik/status/727992849527083009 -}
let b = LfSaw(1 / 3, 0);
let c = [0 1];
let d = LfSaw(b, 0);
let i = LfSaw(b + 1 ^ d * (99 + c), 0);
let j = LfSaw(b * 99, c);
let k = LfSaw(1 / 32, 0);
let u = LfSaw(d * 40000 % 2000, 0);
let v = LfSaw(6, c) > 0.9 / 2;
i % j % k + (u * v) / 2
