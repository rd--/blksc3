/* Authors, Initials */
let n = [3 2 1 2  3 3 3  2 2 2  3 5 5] ++ [3 2 1 2  3 3 3 3  2 2 3 2  1];
let d = [1 1 1 1  1 1 2  1 1 2  1 1 2] ++ [1 1 1 1  1 1 1 1  1 1 1 1  4];
let m = [0 2 4 5 7];
let t = TDuty(Dseq(Infinity, d) / 4, 0, 1);
let f = Demand(t, 0, Dseq(Infinity, 60 + n.collect { :i | m[i] })).MidiCps;
Pan2(SinOsc(f, 0).Tanh, 0, Decay2(t, 0.05, 0.2) * 0.1)

# Authors, Initials

The authors of the graphs in the _Programs_ and _Small Programs_ menus are indicated by initials.

- Cr is Chandrasekhar Ramakrishnan
- Ds is Dan Stowell
- Es is Eric Sluyter
- F0 is [Fredrik Olofsson](https://fredrikolofsson.com/)
- Jar is Juan A. Romero
- Jh is James Harkins
- Jl is Jonatan Liljedahl
- Jmcc is [James McCartney](https://www.audiosynth.com/)
- Jr is Julian Rohrhuber
- Kl is Kevin Larke
- Ljp is [Lance J. Putnam](https://w2.mat.ucsb.edu/l.putnam/)
- Nc is Nick Collins
- Nv is Nathaniel Virgo
- Pj is Paul Jones
- Tm is Thor Magnusson
- Tw is Tim Walters
- Zs is Zack Scholl

This program plays a simple nursery rhyme.
