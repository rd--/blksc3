{- one line (ljp) -}
var lfs = (LfSaw([1, 0.99], [0, 0.6]) * 2000 + 2000);
var sft = lfs.truncateTo([400, 600]) * [1, -1];
Pan2(SinOsc(OnePole(sft.sum, 0.98), 0), 0, 0.05)
