/* Lambda, Duplicate */
let f = { Rand(110, 220) } ! 12;
let a = { SinOsc(Rand(0.1, 0.5), 0) } ! 12;
(SinOsc(f, 0) * a).Splay2 * 0.1

/* ---- notes.md ---- */
# Lambda, Duplicate

λ (_Proc_) is the anonymous procedure block.
It is located in the _Lambda_ category of the toolbox.
λ is a _value block_, it has an _output connector_ to receive the ← (_return_) value.

λ has a number of distinct shapes.
It may take zero, one (⍵) or two (⍵ & ⍺) input parameter names.
It may or may not allow a sequence of statements (…).

λ encapsulates a program fragment.
A λ block may be _evaluated_ to run the program fragment it holds and to return its result.
When evaluated, a λ block must be passed the appropriate number of arguments, one for each declared parameter.

! (_Duplicate_) is a graph combinator, a form of _higher order function_.
! requires a zero argument λ block (𝑓) and an integer (#) as inputs.
! generates a ⟦⟧ (_List_) of # places, and evaluates 𝑓 # times, once for each place, to set its values.

This program sums twelve sine oscillators,
with random frequencies in _(110, 220)_ _hz_,
amplitude modulated by sine oscillators with random frequencies in _(0.1, 0.5)_ _hz_,
and arranges them equidistantly across the stereo field.
Each time this program is played it sounds differently,
the frequencies have the same random distribution, but different values.
