/* 4.X - demand Rate */
[2 3 5].collect { :f |
	let t = impulse(f, 0);
	let n = dseq(Infinity, [60 63 67 69]);
	demand(t, 0, n).midiCps
}.sinOsc(0).splay * 0.1

# Notes

_demand Rate_ unit generators are not scheduled on either the audio or control rate sample clocks,
but instead calculate values when requested to.

In this program a short sequence is played simultaneously on three distinct clocks.
