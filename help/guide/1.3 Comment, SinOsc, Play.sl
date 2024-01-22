{- “ (Comment) Block, ∿ (SinOsc) Block, ⊳ (Play) Block -}
SinOsc(440, 0) * 0.1

{- ---- notes.md ---- -}
# Comment, SinOsc, Play

“ (_Comment_) and ⊳ (_Play_) are located in the _Meta_ category of the toolbox.
“ and ⊳ are _statement blocks_, meaning they have _previous_ and _next_ connectors at their top and bottom edges.
In this program “ is followed by ⊳.

“ has an editable text _input field_.
Comments have no effect, they are a note to the reader of the program.
⊳ has an _input value_ connector on its right edge.
⊳ indicates that its input should be sent to the synthesiser outputs.

∿ (_SinOsc_) is a sine wave oscillator.
It is located in the _Osc_ category.
∿ is a _value block_, meaning it has an _output value_ connector on it's left edge.
In this program the output of ∿ is connected to the input of ⊳.

∿ has four labelled _input value_ connectors on it's right edge.
ν indicates the frequency input, ϕ the phase input, × the multiplier and + the adder.

In this program each input of ∿ has a _number_ block connected to it.
Number blocks are located in the _Constants_ category.

This program consists of seven blocks.
It generates a quiet sine tone at 440 _hz_ in the left channel.
