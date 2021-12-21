// alien froggies (jmcc) #1
OverlapTexture({
    arg tr;
    var rate = 11;
    var r = Fold(rate * TRand(-0.2, #[0.1, 0.2], tr).exp, 1, 30);
    Formant(r, TExpRand(#[200, 300], 3000, tr), TRand(#[0, 1], 9, tr) * r + r) * 0.05;
}, 0.5, 0.25, 5)
