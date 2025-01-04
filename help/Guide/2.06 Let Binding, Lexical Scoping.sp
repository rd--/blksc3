/* Let Binding, Lexical Scoping */
let x = 293;
let f = {
	let x = 440;
	SinOsc(x, 0)
};
let g = { :x |
	SinOsc(x, 0)
};
[
	f(),
	g(352),
	SinOsc(x, 0)
].sum

# Let Binding, Lexical Scoping

Local variables may be declared within λ (_Lambda_) blocks using the `let` (_LetBinding_) block.

In this program the λ definition at _f_ declares a `let` binding to _x_ that shadows, but does not alter, the outer binding to _x_.

In addition, the λ definition at _g_ binds its argument name to _x_, shadowing but not altering, the outer binding to _x_.

The three ∿ (_SinOsc_) blocks each read their ν (_frequency_) input from _x_.
Within _f_, _x_ has the value `440`,
within _g_, _x_ has the value `352`,
in the following statement, outside either λ block, _x_ has the value `293`.

This program plays three quiet sine tones, at intervals of a third and a fifth.
