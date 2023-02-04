// what was i thinking? (jmcc) #2
var i = LFPulse(0.1, 0, 0.05) * Impulse(8, 0) * 500;
var f = (SinOsc(4, 0) + 80).max(Decay(i, 2));
var p = Pulse(f, LFNoise1(0.157) * 0.4 + 0.5) * 0.04;
var z = RLPF(p, LFNoise1(0.2) * 2000 + 2400, 0.2) * 0.25;
var c = { arg i; CombL(i, 0.06, LFNoise1(Rand(0, 0.3)) * 0.025 + 0.035, 1) };
var y = z * 0.6;
z + { [y, y].collect(c).sum }.dup
