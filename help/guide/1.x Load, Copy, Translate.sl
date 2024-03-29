{- Load, Copy, Translate -}
let dur = 7;
OverlapTexture({ :tr |
    let cf = TRand(0, 2000, tr);
    let mf = TRand(0, 800, tr);
    let pme = TRand(0, 12, tr);
    let l1 = TRand(-1, 1, tr);
    let l2 = TRand(-1, 1, tr);
    let lc = TLine(l1, l2, dur, tr);
    let pm = TLine(0, pme, dur, tr);
    let snd = PmOsc(cf, mf, pm, 0);
    EqPan2 (snd, lc) * 0.05
}, 1, 3, 4).Mix

{- ---- notes.md ---- -}
# Load, Copy, Translate

Programs are stored as _.xml_ files.
_Load_ prompts to select an _.xml_ file and loads it into the workspace.
_Copy_ copies the _.xml_ text describing the current workspace state to the clipboard,
from where it can be pasted into an editor and saved as an _.xml_ file.

_blksc3_ also includes a translator from _.sl/.stc_ notation to the _.xml_ block notation.

This program was translated from the _.sl_ program:

```
let dur = 7;
OverlapTexture({ :tr |
    let cf = TRand(0, 2000, tr);
    let mf = TRand(0, 800, tr);
    let pme = TRand(0, 12, tr);
    let l1 = TRand(-1, 1, tr);
    let l2 = TRand(-1, 1, tr);
    let lc = TLine(l1, l2, dur, tr);
    let pm = TLine(0, pme, dur, tr);
    let snd = PmOsc(cf, mf, pm, 0);
    EqPan2 (snd, lc) * 0.05
}, 1, 3, 4).Mix
```

The program generates a simple texture of four phase modulation oscillator pairs,
with random inputs and a linear modulation index sweep.
