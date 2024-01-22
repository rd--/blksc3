{- uplink (jmcc) #2 ; texture=overlap,4,1,5,inf -}
var osc = {
  LFPulse(Rand(0, 20), 0, Rand(0, 1)) * LFPulse(Rand(0, 4), 0, Rand(0, 1)) * Rand(0, 8000) + Rand(0, 2000);
};
Pan2(LFPulse(osc.dup.sum, 0, 0.5) * 0.04, Rand(0, 0.8), 1)
