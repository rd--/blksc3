{- alien froggies (jmcc) #1 -}
{ :tr |
    let rate = 11;
    let r = Fold(rate * TRand(-0.2, [0.1, 0.2], tr).Exp, 1, 30);
    Formant(r, TExpRand([200, 300], 3000, tr), TRand([0, 1], 9, tr) * r + r) * 0.05
}.OverlapTexture(0.5, 0.25, 5).sum
