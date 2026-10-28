/* alien meadow (jmcc) #6 */
{ :tr |
    let z = tRand(0, 5000, tr);
    let f = sinOsc(tRand(0, 20, tr), 0) * (0.1 * z) + z;
    let a = sinOsc(tRand(0, 20, tr), 0) * 0.05 + 0.05;
    pan2(sinOsc(f, 0), tRand(-1, 1, tr), a)
}.overlapTexture(6, 2, 6).sum
