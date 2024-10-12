{- https://twitter.com/redFrik/status/1519791409921941507 ; f0 -}
var f = { arg freq; SinOsc(freq, #[0, 5]) };
var g = f.value(5);
var i = f.value(0.1) / 8 + 0.5 * f.value(252) * g;
var j = (g / 2 + 1).rounded / 9 ** (f.value(1) * f.value(0.005) + 1.02).rounded * 30 * (g * 3 + 40);
var h = BLowPass(i, j, 0.05);
var c = f.value(25 + f.value(50.01) * h * 50) * f.value(50.5 * f.value(50) / 5 + 0.5) * f.value(0.505) / 5;
c + PitchShift(c, 0.5, 0.5, 0, 0.5) + PitchShift(c, 0.5, (5 ** f.value(0.005)).rounded, 0.05, 0.05)
