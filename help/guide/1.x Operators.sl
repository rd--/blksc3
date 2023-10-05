(* Operators *)
var k = 12;
var mk = { :f |
    var a = { LfNoise2(0.25) * 0.05 } ! k;
    Splay2(SinOsc(f, 0).Tanh * a)
};
var m = { IRand(0, 12) } ! k + 48;
[m, m.reverse].collect({ :x | mk.value(x.MidiCps) }).sum

(* ---- notes.md ---- *)
# Operators

_Operator_ blocks have a menu to select the required operator.
Operator blocks are either unary or binary, accepting one or two input values respectively.
Each operator block implements a family of operators, collected by type.

Unary signal operators such as ⌈ (_ceiling_) and √ (_sqrt_), and binary signal operators such as + and ×, are at _Math_.

Unary array operators such as Σ (_sum_) and ∏ (_product_), and binary array operators such as ᴙ (_reverse_) and ++ (_append_) are at _Array_.

The toolbox can contain more than one instance of the same operator block, with different operators preselected.
Thus both ⇛ (_collect_) and ++ (_append_), which are instances of the same block, are in the _Array_ toolbox.

In this program 24 sine oscillators at 12 frequencies are arranged across the stereo field in symmetrical pairs,
each oscillator has a distinct amplitude modulator.
The program has instances of all four basic operators: 1. Σ (_sum_) & ᴙ (_reverse_), 2. ⇛ (_collect_), 3. ♩→ν (_MidiCps_) & _Tanh_ and 4. + (_Add_)
