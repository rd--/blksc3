{- https://twitter.com/alln4tural/status/99846300173991936 ; graph rewrite -}
OverlapTexture({
    arg tr;
    var h = TChoose(tr, [33, 38, 40]).midiCps * (2 ** TChoose(tr, 0.to(4)));
    { SinOsc(TExpRand(h - (h / 64), h + (h / 64), tr), 0) * 0.025 }.dup(8).Splay2
}, 1, 9, 40)
