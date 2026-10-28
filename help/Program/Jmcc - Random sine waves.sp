/* Random sine waves (Jmcc) #1 */
{ :tr |
    eqPan2(
	    sinOsc(
		    tRand(20, 2000, tr),
		    0
	    ),
	    tRand(-1, 1, tr)
    ) * 0.05
}.overlapTexture(5, 2, 9).mix
