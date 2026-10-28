/* sinOsc.1.sl */
splay2(
	{
		pan2(sinOsc(sinOsc(1 / 10, rand(0, 6)) * 200 + 600, 0), rand(0, 1), 0.05)
	} ! 15
).sum

# sinOsc

Random sine tones, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
