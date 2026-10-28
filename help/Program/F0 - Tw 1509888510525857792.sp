/* https://twitter.com/redFrik/status/1509888510525857792 (f0) */
let d = [8000, 8008];
let b = [4, 2, 1, 8, 6];
let l = { :freq |
	lorenzL(freq, 10, 28, 2.667, 0.05, 0.1, 0, 0)
};
let x = l(lorenzL(7, 13, 10, 2.1, 0.1, 0.1, 0.1, 0) + 3 * (4 ^ l(1) + 0.5) * d) * l(1) / 5;
let m = lorenzL(
    d / 4 * b,
    2 ^ l(2 ^ l(1)) / 12 + 10,
    lag2(l(b / 3).round(0.5), 0.1) * 12 + 35,
    lag2(l(1 / 11).round(1 / 3), 0.1) / 12 + 0.153,
    0.1,
    0.1,
    0,
    0
);
let y = 9 / b * l(b / 3 + 1).max(0.5) / 2 * m;
x + delayN(y.splay2, 13, 13)
