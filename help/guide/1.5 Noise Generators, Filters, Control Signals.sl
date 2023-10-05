(* Noise Generators, Filters, Control Signals *)
Resonz(
    WhiteNoise() * MouseY(0.2, 0.5, 0, 0.2),
    440,
    MouseX(0.01, 0.05, 0, 0.2)
)

(* ---- notes.md ---- *)
# Noise Generators, Filters, Control Signals

⍰𝒘 (_WhiteNoise_) is a noise generator with uniform spectral density.
It is located in the _Generator→Noise_ category of the toolbox.

⋏ (_Resonz_) is a resonant filter, it is located in the _Processor→Reson_ category.

☟𝑥 and ☟𝑦 (_MouseX_ and _MouseY_) are control signal generators, reading the _x_ and _y_ axis locations of the mouse on the screen.
They are located in the _Io->Ctl_ category.

⍰𝒘 is a signal generator and has the same colour as other signal generators such as _SinOsc_.
⋏ is a signal processor, it processes an input signal, and is coloured differently.
☟𝑥 and ☟𝑦 are control signals, and are coloured differently again.

In this program the signal generator blocks (⍰𝒘, ☟𝑥 and ☟𝑦) are drawn with _internal inputs_.
The signal processor block (⋏) is drawn with _external inputs_.
The block context menu, located by right clicking on a block, allows changing between these two drawing modes.
It also allows for a block to be _collapsed_.

This program makes a quiet filtered noise tone in the left channel.
The amplitude of the noise generator and the width of the resonant filter are controlled by the mouse location.
