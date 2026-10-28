/* bouncing objects ; jmcc #2 ; lightbulbs, pencils, cans, and other assorted objects ; graph rewrite */
{ :tr |
    let i = impulse(txLine(tRand(3, 7, tr), 600, 4, tr), 0);
    let s = decay(i * txLine(0.09, 0.000009, 4, tr), 0.001);
    let r = {
	    ringz(s, tRand(400, 8400, tr), tRand(0.01, 0.1, tr)) * tRand(0, 1, tr)
    } !+ 4;
    pan2(r, tRand(-1, 1, tr), 1)
}.overlapTexture(6, 0.01, 4).mix
