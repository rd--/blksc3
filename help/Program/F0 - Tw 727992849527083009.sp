/* http://twitter.com/redFrik/status/727992849527083009 */
let b = lfSaw(1 / 3, 0);
let c = [0 1];
let d = lfSaw(b, 0);
let i = lfSaw(b + 1 ^ d * (99 + c), 0);
let j = lfSaw(b * 99, c);
let k = lfSaw(1 / 32, 0);
let u = lfSaw(d * 40000 % 2000, 0);
let v = lfSaw(6, c) > 0.9 / 2;
i % j % k + (u * v) / 2
