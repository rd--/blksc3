/* eqBalance2.2 ; Mouse control of pan rate ; Reset frequencies at rightward center crossings */
var b = sinOsc(mouseX(0.25, 0.7, 0, 0.2), 0);
{
	eqBalance2(saw(tRand(33, 55, b)), pulse(tRand(33, 55, b), 0.5), b) * 0.05
} !+ 2

# eqBalance2

In this program ⌖ (_position_) is modulated by ∿ (_sinOsc_)

The ν (_frequency_) of ∿ is controlled by the ☟ (_Mouse_) _x_ coordinate.

The _L_ and _R_ input oscillators (△ & ⎍) each have ν reset to a new random value at rightward center crossings.
