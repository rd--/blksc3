/* TGrains.2 */
let trate = MouseY(2, 200, 1, 0.2);
let clk = Impulse(trate, 0);
let sf = SfAcquireMono('Floating');
let rate = Dseq(Infinity, [10, 1, 1, 0.5, 0.5, 0.2, 0.1]);
let pos = MouseX(0, SfDuration(sf), 0, 0.2);
let dur = 4 / trate;
let pan = Dseq(Infinity, [-1, 1]);
TGrains(2, clk, sf, rate, pos, dur, pan, 0.25, 2)
