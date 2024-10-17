/* clustered sines ; jmcc #2 */
let n = 80;
{ :tr |
    let f1 = TRand(100, 1100, tr);
    let fn = {
        let y = f1 + TRand(0, f1 * 4, tr);
        SinOsc(y, 0) * f1 / y
    } !+ n;
    { fn } ! 2 * 0.1 / n
}.OverlapTexture(4, 4, 3).sum

/* ---- notes.md ---- */
Texture graph rewrite.
