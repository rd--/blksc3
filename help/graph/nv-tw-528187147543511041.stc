// https://twitter.com/headcube/status/528187147543511041 (nv)
var x = {
  arg j;
  var y = {
    arg i;
    1 / 4 ** (i - 1) * (LFNoise0(0.25 ** (j - 1) / 8) > 0 - LFPulse(2 ** (i - 1) / 8, 0, 0.5)).abs
  };
  var f = 32 ** 1.to(10).collect(y).sum * 30;
  Pan2(RLPF(Pulse(f, 0.3), Lag(f.sqrt, 2) * 30, 0.5), 0, 0.2)
};
1.to(4).collect(x).sum * 0.25
