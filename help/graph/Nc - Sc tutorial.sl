{- https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html 1.1 -}
var n = 11;
var mk = {
    var freq = Rand(50, 560.3);
    var numcps = Rand(2, 20);
    var knum = SinOsc(ExpRand(0.02, 0.2), 0) * (numcps / 2) + (numcps / 2);
    var gen = Gendy1(IRand(0, 6), IRand(0, 6), Rand(0, 1), Rand(0, 1), freq, freq, Rand(0, 1), Rand(0, 1), numcps, knum);
    Pan2(gen, Rand(-1, 1), 0.5 / n.sqrt)
};
var x = MouseX(100, 2000, 0, 0.2);
var y = MouseY(0.01, 1.0, 0, 0.2);
Resonz(mk.dup(n).sum, x, y) * 0.5

{- ---- notes.md ---- -}
Mouse control.





