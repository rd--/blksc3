{- Line.1 -}
let src = Saw([440, 443, 437] + (SinOsc(100, 0) * 100));
let amp = LfSaw(Line(3, 17, 3),0) * 0.5 + 0.5 * Line(1, 0, 10);
Splay2(Resonz(src, XLine(10000, 10, 10), Line(1, 0.05, 10))) * amp

{- ---- notes.md ---- -}
# Ln

Am, Fm, Chorus,
courtesy [Nc](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) 2.5
