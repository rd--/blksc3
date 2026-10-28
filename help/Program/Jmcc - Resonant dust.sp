/* Resonant dust (Jmcc) #2 ; Graph rewrite */
{ :tr |
    let rf1 = tRand(0, 2000, tr) + 80;
    let rf2 = rf1 + (tRand(-0.5, 0.5, tr) * rf1);
    let d = dust(50 + tRand(0, 800, tr));
    let s = resonz(d, txLine(rf1, rf2, 9, tr), 0.1);
    pan2(s, rand(-1, 1), 0.3)
}.overlapTexture(5, 2, 4).sum
