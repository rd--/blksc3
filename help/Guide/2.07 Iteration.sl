/* Iteration */
let n = 10;
let x = Dust([3, 9]);
n.timesRepeat {
	x := AllpassC(
		x,
		0.05,
		{ (Rand(0, 0.05)) } ! 2,
		1
	)
};
x

/* ---- notes.md ---- }
# Iteration

The # (_TimesRepeat_) block evaluates the procedure at 𝑓 the indicated number of times.

\# is a statement block, it does not answer a value.
The ← (_Return_) value of the procedure at 𝑓 is ignored.

The procedure is therefore applied for its _effect_.

In this program the effect is to apply the block ⬜ (_AllpassC_) to the variable _x_,
with a randomly selected delay time,
and to store the modified signal back into _x_,
creating a cascade of _n_ ⬜ filters in series.

Since the ← value is ignored the ← input should either be left empty or,
equivalenty,
be set to ∅ (_Nil_).
