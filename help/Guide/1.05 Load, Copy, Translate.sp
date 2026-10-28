/* Load, Copy, Translate */
let dur = 7;
{ :tr |
    let cf = tRand(0, 2000, tr);
    let mf = tRand(0, 800, tr);
    let pme = tRand(0, 12, tr);
    let l1 = tRand(-1, 1, tr);
    let l2 = tRand(-1, 1, tr);
    let lc = tLine(l1, l2, dur, tr);
    let pm = tLine(0, pme, dur, tr);
    let snd = pmOsc(cf, mf, pm, 0);
    eqPan2 (snd, lc) * 0.05
}.overlapTexture(1, 3, 4).mix

# Load, Copy, Translate

Programs are stored as _.json_ files.
_Load_ prompts to select a _.json_ file and loads it into the workspace.
_Copy_ copies the _.json_ text describing the current workspace state to the clipboard, from where it can be pasted into an editor and saved as a _.json_ file.

_BlkSc_ also includes a translator from _Spl_ (_.sl_) notation to the _.json_ block notation.

This program was translated from the _.sl_ program:

```
let dur = 7;
overlapTexture({ :tr |
    let cf = tRand(0, 2000, tr);
    let mf = tRand(0, 800, tr);
    let pme = tRand(0, 12, tr);
    let l1 = tRand(-1, 1, tr);
    let l2 = tRand(-1, 1, tr);
    let lc = tLine(l1, l2, dur, tr);
    let pm = tLine(0, pme, dur, tr);
    let snd = pmOsc(cf, mf, pm, 0);
    eqPan2 (snd, lc) * 0.05
}, 1, 3, 4).mix
```

The program generates a simple texture of four phase modulation oscillator pairs, with random inputs and a linear modulation index sweep.
