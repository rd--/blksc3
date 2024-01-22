{- Vosim.2.sl -}
var f = LinExp(LfNoise2([0.35, 0.25, 0.15]), -1, 1, [110, 220, 440], 880);
var a = LinExp(LfNoise2([0.35, 0.25, 0.15]), -1, 1, 0.1, 0.15);
Splay2(Vosim(Impulse(110 + [-1, 0, 1], 0), f, [3, 5, 7], [0.77, 0.88, 0.99])) * 0.1

{- ---- notes.md ---- -}
# Vosim

This program is identical to Vosim.1 except that the _Mouse_ controls are replaced by a low frequency noise generators.
