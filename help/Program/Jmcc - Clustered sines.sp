/* clustered sines ; jmcc #2 */
let n = 80;
{ :tr |
    let f1 = tRand(100, 1100, tr);
    let fn = {
        let y = f1 + tRand(0, f1 * 4, tr);
        sinOsc(y, 0) * f1 / y
    } !+ n;
    { fn } ! 2 * 0.1 / n
}.overlapTexture(4, 4, 3).sum

# Notes

Texture graph rewrite.
