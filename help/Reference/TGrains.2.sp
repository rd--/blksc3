/* tGrains.2 */
let trate = mouseY(2, 200, 1, 0.2);
let clk = impulse(trate, 0);
let sf = sfAcquireMono('Floating');
let rate = dseq(Infinity, [10, 1, 1, 0.5, 0.5, 0.2, 0.1]);
let pos = mouseX(0, sfDuration(sf), 0, 0.2);
let dur = 4 / trate;
let pan = dseq(Infinity, [-1, 1]);
tGrains(2, clk, sf, rate, pos, dur, pan, 0.25, 2)
