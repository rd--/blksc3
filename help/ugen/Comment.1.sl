{- “ (Comment) -}
var f = Latch(
	WhiteNoise() * 0.5 + 0.5,
	Impulse(1 / [0.5, 1, 5, 7], 0)
) * 220 + 110;
Splay2(SinOsc(f, 0)) * 0.1

{- ---- notes.md ---- -}
# Comment

The “ (_Comment_) block has no effect in a program, it is a note to the reader.

This program has two comments, there may be any number, including none.

Both of the “ blocks may be deleted and the program will still work.

The program generates four sine tones whose frequencies are derived by applying a sample and hold function, ⍀ (_Latch_), to a noise signal.
