{- tw 0225 (f0) - http://www.fredrikolofsson.com/f0blog/?q=node/617 -}
var b = 1.to(8) * 99;
var o = Blip(b / 2 + (LFSaw(-8 / b, 1) * 99), b / 4 + (LFSaw(1 / b, 1) * 99));
CombC(o * SinOsc(8 / b, LFSaw(99 / b, 0)), 0.2, 0.2, 1).Splay2.sin * 0.5
