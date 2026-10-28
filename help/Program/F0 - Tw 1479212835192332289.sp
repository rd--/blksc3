/* https://twitter.com/redFrik/status/1479212835192332289 (f0) */
let q = { :freq | quadC(freq, 1, -1, -0.75, 0) };
let q1 = q(5);
let b = [5, 2.5, 6];
let q2 = q(b / 15) * q1;
let e = 1 / 15;
let q3 = q(500) * q1 / 99;
let q4 = q(999 * b) * q(b / 15).max(0) / 999 * q(b);
let q5 = q([12, 16] * 99) * quadC(0.1, 1, -1, -0.75, [-0.5, -1]).max(0) * q(15).max(0) / 15;
let q6 = pan2(quadC(99 * b, 1, q(1 / b / [15, 5, 15]) > 0 * 0.375 - 1.25, -0.75, 0).tanh, 0.5 * q2, q2).sum / 2;
q3 + q4.splay + allpassC(q5 + q6, e, e, 15)
