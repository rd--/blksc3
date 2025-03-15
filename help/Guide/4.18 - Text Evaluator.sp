/* 4.X - Text Evaluator */
let b = [9 .. 1];
let c = LfTri(3 ^ LfTri(1 / b, b / 9), 0);
let d = LfTri(1 / b, 0) % 1 / 9 + 0.01;
let f = 2 ^ LfTri(b / 99, 0).RoundTo(1) * 99;
let o = GrainSin(2, c, d, f * b, 0, -1, 512);
o.Tanh.Splay2.transposed.Mix / 2

# Annotation

Since block drawings are evaluated by first being translated into text programs,
it is straightforward for the system to evaluate text programs as well.
The _′_ button will play either the selected text or,
if no text is selected,
the paragraph at the cursor.
This program,
[454598285861617665](https://twitter.com/redFrik/status/454598285861617665),
is by Fredrik Olofsson.
The text in the _Notes_ area can be edited.
