;; TGrains.2
var trate = MouseY(2, 200, 1, 0.2);
var clk = Impulse(trate, 0);
var buf = SfAcquire("floating_1", 1, 1);
var rate = Seq(inf, [10, 1, 1, 0.5, 0.5, 0.2, 0.1]);
var pos = MouseX(0, BufDur(buf), 0, 0.2);
var dur = 4 / trate;
var pan = Seq(inf, [-1, 1]);
TGrains(2, clk, buf, rate, pos, dur, pan, 0.25, 2)
