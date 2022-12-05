// pkt 28 (f0) - http://www.fredrikolofsson.com/f0blog/?q=node/490;
var n = 28;
var x = {
    arg i;
    var a = LFSaw(i + 1 * 5, 0) * 0.5 * pi;
    var b = SinOsc(i + 1 * 0.001, 0) * 0.5;
    var c = LFSaw(0.2 + b, i / n) * 0.4;
    var d = SinOsc(0.03, i + 1) * 0.5 + 1;
    var e = SinOsc(200 + i, 0) * d;
    var f = SinOsc(0.04, i + 2) * 0.5 + 1;
    var g = SinOsc(400 + i,0) * f;
    var h = SinOsc(0.05, i + 3) * 0.5 + 1;
    var j = SinOsc(800 + i, 0) * h;
    var k = LinExp(i, 0, n - 1, 70, 1500);
    var z = SinOsc(k, a) * c.max(0) * e * g * j;
    var l = LinLin(i, 0, n - 1, -0.925, 0.925);
    Pan2(z, l, 1 / n)
};
var y = Limiter(LeakDC(1.to(n).collect(x).sum, 0.995), 1, 0.01);
GVerb(y, 3, 5, 0.2, 0.8, 20, 0.1, 0.7, 0.5, 300) * 0.25
