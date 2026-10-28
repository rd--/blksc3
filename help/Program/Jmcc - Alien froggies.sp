/* alien froggies (jmcc) #1 */
{ :tr |
    let rate = 11;
    let r = fold(rate * tRand(-0.2, [0.1, 0.2], tr).exp, 1, 30);
    formant(r, tExpRand([200, 300], 3000, tr), tRand([0, 1], 9, tr) * r + r) * 0.05
}.overlapTexture(0.5, 0.25, 5).sum
