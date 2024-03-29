{- Authors, Initials -}
let n = [3 2 1 2  3 3 3  2 2 2  3 5 5] ++ [3 2 1 2  3 3 3 3  2 2 3 2  1];
let d = [1 1 1 1  1 1 2  1 1 2  1 1 2] ++ [1 1 1 1  1 1 1 1  1 1 1 1  4];
let m = [0 2 4 5 7];
let t = TDuty(Dseq(inf, d) / 4, 0, 1);
let f = Demand(t, 0, Dseq(inf, 60 + n.collect { :i | m[i] })).MidiCps;
Pan2(SinOsc(f, 0).Tanh, 0, Decay2(t, 0.05, 0.2) * 0.1)

{- ---- notes.md ---- -}
# Authors, Initials

The authors of the graphs in the _Graph Programs_ menu are indicated by initials.

- CR is Chandrasekhar Ramakrishnan
- DS is Dan Stowell
- ES is Eric Sluyter
- F0 is [Fredrik Olofsson](https://fredrikolofsson.com/)
- JAR is Juan A. Romero
- JH is James Harkins
- JL is Jonatan Liljedahl
- JMcC is [James McCartney](https://www.audiosynth.com/)
- JR is Julian Rohrhuber
- KL is Kevin Larke
- LJP is [Lance J. Putnam](https://w2.mat.ucsb.edu/l.putnam/)
- NC is Nick Collins
- NV is Nathaniel Virgo
- PJ is Paul Jones
- TM is Thor Magnusson
- TW is Tim Walters
- ZS is Zack Scholl

This program plays a simple nursery rhyme.
