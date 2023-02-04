// https://twitter.com/headcube/status/408145586970324992 (nv)
var f = {
  arg i;
  var a = Saw(1 / i + 1 / 6);
  var p = Pluck(a, a, 1, 1 / i / (3 - LFPulse(1 / i, 0, 0.5)) / 30, 9, 0.9 / i);
  var x = 0.5 ** i * p;
  var o = SinOsc(2, 0) + [4, 9];
  CombC(x, 1, o * 0.001, 0) - x};
1.to(9).collect(f).sum / 81
