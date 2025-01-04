/* https://twitter.com/redFrik/status/1509888510525857792 (f0) */
var d = #[8000, 8008];
var b = #[4, 2, 1, 8, 6];
var l = { arg freq; LorenzL(freq, 10, 28, 2.667, 0.05, 0.1, 0, 0) };
var x = l.value(LorenzL(7, 13, 10, 2.1, 0.1, 0.1, 0.1, 0) + 3 * (4 ** l.value(1) + 0.5) * d) * l.value(1) / 5;
var m = LorenzL(
    d / 4 * b,
    2 ** l.value(2 ** l.value(1)) / 12 + 10,
    Lag2(l.value(b / 3).roundTo(0.5), 0.1) * 12 + 35,
    Lag2(l.value(1 / 11).roundTo(1 / 3), 0.1) / 12 + 0.153,
    0.1,
    0.1,
    0,
    0
);
var y = 9 / b * l.value(b / 3 + 1).max(0.5) / 2 * m;
x + DelayN(y.Splay2, 13, 13)
