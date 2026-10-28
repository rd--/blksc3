/* 4.X - First Argument */
let s = sweep(localIn(6, 0), 1);
let i = impulse([1 0.749 6 12 3 4], 0);
let o = sinOsc(1 / runningMax(s, i), 0);
(o.splay2.tanh / 2 * 0.1) <! localOut(o)

# Annotation

Unlike in SuperCollider language,
block programs must be connected.
There is no implicit framing mechasism.
In this program,
by Fredrik Olofsson ([0041](https://fredrikolofsson.com/f0blog/more-sc-twitter/)),
the ⅄ block attaches the 𝑙↓ block to the unit generator graph.
