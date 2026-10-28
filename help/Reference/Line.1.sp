/* Line.1 */
let src = saw([440, 443, 437] + (sinOsc(100, 0) * 100));
let amp = lfSaw(Line(3, 17, 3),0) * 0.5 + 0.5 * Line(1, 0, 10);
splay2(resonz(src, xLine(10000, 10, 10), Line(1, 0.05, 10))) * amp

# Ln

Am, Fm, Chorus,
courtesy [Nc](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) 2.5
