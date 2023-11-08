(* TGrains.2 *)
var trate = MouseY(2, 200, 1, 0.2);
var clk = Impulse(trate, 0);
var sf = SfAcquireMono('floating_1');
var rate = Dseq(inf, [10, 1, 1, 0.5, 0.5, 0.2, 0.1]);
var pos = MouseX(0, SfDur(sf), 0, 0.2);
var dur = 4 / trate;
var pan = Dseq(inf, [-1, 1]);
TGrains(2, clk, sf, rate, pos, dur, pan, 0.25, 2)
