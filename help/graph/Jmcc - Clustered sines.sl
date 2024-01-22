{- clustered sines ; jmcc #2 -}
var n = 80;
OverlapTexture({ :tr |
    var f1 = TRand(100, 1100, tr);
    var fn = {
        var y = f1 + TRand(0, f1 * 4, tr);
        SinOsc(y, 0) * f1 / y
    }.dup(n).sum;
    { fn } ! 2 * 0.1 / n;
}, 4, 4, 3)

{- ---- notes.md ---- -}
Texture graph rewrite.
