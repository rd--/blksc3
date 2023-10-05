(* Authors, Initials *)
var n = [3,2,1,2, 3,3,3, 2,2,2, 3,5,5] ++ [3,2,1,2, 3,3,3,3, 2,2,3,2, 1];
var d = [1,1,1,1, 1,1,2, 1,1,2, 1,1,2] ++ [1,1,1,1, 1,1,1,1, 1,1,1,1, 4];
var m = [0, 2, 4, 5, 7];
var t = TDmdFor(Seq(inf, d) / 4, 0, 1);
var m = 60 + n.collect { :i | m[i] };
var f = Demand(t, 0, Seq(inf, m)).MidiCps;
Pan2(SinOsc(f, 0).Tanh, 0, Decay2(t, 0.05, 0.2) * 0.1)

(* ---- notes.md ---- *)
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
