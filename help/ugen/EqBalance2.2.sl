{- EqBalance2.2 -}
var b = SinOsc(MouseX(0.25, 0.7, 0, 0.2), 0);
{
	EqBalance2(Saw(TRand(33, 55, b)), Pulse(TRand(33, 55, b), 0.5), b) * 0.05
} !+ 2

{- ---- notes.md ---- -}
# EqBalance2

In this program ⌖ (_position_) is modulated by ∿ (_SinOsc_)

The ν (_frequency_) of ∿ is controlled by the ☟ (_Mouse_) _x_ coordinate.

The _L_ and _R_ input oscillators (△ & ⎍) each have ν reset to a new random value at rightward center crossings.
