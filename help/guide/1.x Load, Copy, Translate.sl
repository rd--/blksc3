(* Load, Copy, Translate *)
var dur = 7;
OverlapTexture({ :tr |
    var cf = TrRand(tr, 0, 2000);
    var mf = TrRand(tr, 0, 800);
    var pme = TrRand(tr, 0, 12);
    var l1 = TrRand(tr, -1, 1);
    var l2 = TrRand(tr, -1, 1);
    var lc = TrLine(tr, l1, l2, dur);
    var pm = TrLine(tr, 0, pme, dur);
    var snd = PmOsc(cf, mf, pm, 0);
    EqPan2 (snd, lc) * 0.05
}, 1, 3, 4)

(* ---- notes.md ---- *)
# Load, Copy, Translate

Programs are stored as _.xml_ files.
_Load_ prompts to select an _.xml_ file and loads it into the workspace.
_Copy_ copies the _.xml_ text describing the current workspace state to the clipboard,
from where it can be pasted into an editor and saved as an _.xml_ file.

_blksc3_ also includes a translator from _.sl/.stc_ notation to the _.xml_ block notation.

This program was translated from the _.sl_ program:

```
var dur = 7;
{ :tr |
	var cf = TrRand(tr, 0, 2000);
	var mf = TrRand(tr, 0, 800);
	var pme = TrRand(tr, 0, 12);
	var l1 = TrRand(tr, -1, 1);
	var l2 = TrRand(tr, -1, 1);
	var lc = TrLine(tr, l1, l2, dur);
	var pm = TrLine(tr, 0, pme, dur);
	var snd = PmOsc(cf, mf, pm, 0);
	EqPan2(snd, lc) * 0.05
}.OverlapTexture(1, 3, 4)
```

The program generates a simple texture of four phase modulation oscillator pairs,
with random inputs and a linear modulation index sweep.
