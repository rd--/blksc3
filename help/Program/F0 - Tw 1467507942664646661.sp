/* https://twitter.com/redFrik/status/1467507942664646661 */
let b = [3, 4, 5, 6, 7, 8, 1, 2];
let fb1 = { :freq | fbSineC(freq, 1, 0.1, 1.1, 0.5, 0.1, 0.1) };
let d = fb1(b / 12) > 0 / 80 + 1.051;
let c = fb1(1 / b) + 1;
let p = fbSineC(
    999 * b,
    2 ^ fb1(b / 9) * 4 - 1,
    fb1(b / 8) / 2 + 1 + (99 ^ fb1(1 / 4) / 99),
    d,
    fb1(1 / b) / 40 + 0.1,
    0.1,
    0.1);
let q = fbSineC(
    fb1(27 + b) > 0 + 2 + b * d * 1400,
    2,
    c,
    c / 2,
    2,
    2,
    0.1);
(3 ^ fb1(1 / b) / 5 * p + (q / 12) + (hpf(fb1(32) < 0, 3) * fb1(b * 70 / d) * fb1(1 / 2))).splay / 2
