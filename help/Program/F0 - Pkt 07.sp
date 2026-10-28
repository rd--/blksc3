/* pkt 07 (f0) - https://fredrikolofsson.com/f0blog/pact-februari/ */
gVerb(
 leakDc(
  sinOsc(
   sinOsc(
    sinOsc(
     sinOsc(
      sinOsc(
       sinOsc(
        sinOsc(1, 0) *
         2 +
         linExp(sinOsc(1 / 2, 0), -1, 1, 1, 2),
        0) *
        8 +
        linExp(sinOsc(1 / 4, 0), -1, 1, 4, 8),
       0) *
       32 +
       linExp(sinOsc(1 / 8, 0), -1, 1, 16, 32),
      0) *
      128 +
      linExp(sinOsc(1 / 16, 0), -1, 1, 64, 128),
     0) *
     512 +
     linExp(sinOsc(1 / 32, 0), -1, 1, 256, 512),
    0) *
    2048 +
    linExp(sinOsc(1 / 64, 0), -1, 1, 1024, 2048),
   0) * 0.1,
  0.995),
 16, 8, 0.75, 0.5, 15, 1, 0.7, 0.5, 300)
* 0.25
