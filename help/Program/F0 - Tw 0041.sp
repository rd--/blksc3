/* F0 - Tw 0041 ; http://www.fredrikolofsson.com/f0blog/?q=node/537 */
let s = sweep(localIn(6, 0), 1);
let i = impulse([1 0.749 6 12 3 4], 0);
let o = sinOsc(1 / runningMax(s, i), 0);
(o.splay2.tanh / 2 * 0.1) <! localOut(o)

# Notes

⅄ attaches 𝑙↓ (`localOut`) to the graph.
