{- Ln.1 -}
var src = Saw([440, 443, 437] + (SinOsc(100, 0) * 100));
var amp = LfSaw(Ln(3, 17, 3),0) * 0.5 + 0.5 * Ln(1, 0, 10);
Splay2(Resonz(src, XLn(10000, 10, 10), Ln(1, 0.05, 10))) * amp

{- ---- notes.md ---- -}
# Ln

Am, Fm, Chorus,
courtesy <https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html> 2.5
