// https://twitter.com/redFrik/status/1479212835192332289 (f0)
var q = { arg freq; QuadC(freq, 1, -1, -0.75, 0) };
var q1 = q.value(5);
var b = [5, 2.5, 6];
var q2 = q.value(b / 15) * q1;
var e = 1 / 15;
var q3 = q.value(500) * q1 / 99;
var q4 = q.value(999 * b) * q.value(b / 15).max(0) / 999 * q.value(b);
var q5 = q.value([12, 16] * 99) * QuadC(0.1, 1, -1, -0.75, [-0.5, -1]).max(0) * q.value(15).max(0) / 15;
var q6 = Pan2(QuadC(99 * b, 1, q.value(1 / b / [15, 5, 15]) > 0 * 0.375 - 1.25, -0.75, 0).tanh, 0.5 * q2, q2).sum / 2;
q3 + q4.splay + AllpassC(q5 + q6, e, e, 15)
