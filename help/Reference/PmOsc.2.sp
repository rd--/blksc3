/* pmOsc.2 */
var f = latch((sinOsc([100, 200, 300, 550], 0) * 100 + 110).sum, impulse(7, 0));
var e = decay2(impulse(7, 0), 0.02, 0.2);
pmOsc(f, f * [1.25, mouseX(1, 3, 0, 0.2)], e * [5, mouseY(3, 9, 0, 0.2)], 0) * e * 0.1

# pmOsc

Envelope used also for the index, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
