import { blk_ugen_codegen } from './blksc3-gen.js'

export function blksc3_init_codegen_ugen(blk) {

Blockly.JavaScript['sc3_AllpassC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'AllpassC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_AllpassL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'AllpassL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_AmpComp'] = function(block) {
  return blk_ugen_codegen(blk, block, 'AmpComp', ['FREQ', 'ROOT', 'EXP'], true);
};
Blockly.JavaScript['sc3_Amplitude'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Amplitude', ['IN', 'ATTACKTIME', 'RELEASETIME'], true);
};
Blockly.JavaScript['sc3_BBandPass'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BBandPass', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript['sc3_BBandStop'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BBandStop', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript['sc3_BLowPass'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BLowPass', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript['sc3_BPF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BPF', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript['sc3_BPZ2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BPZ2', ['IN'], true);
};
Blockly.JavaScript['sc3_BRF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BRF', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript['sc3_Balance2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Balance2', ['LEFT', 'RIGHT', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript['sc3_Blip'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Blip', ['FREQ', 'NUMHARM'], true);
};
Blockly.JavaScript['sc3_BrownNoise'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BrownNoise', [], true);
};
Blockly.JavaScript['sc3_BufDur'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BufDur', ['BUFNUM'], true);
};
Blockly.JavaScript['sc3_BufFrames'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BufFrames', ['BUFNUM'], true);
};
Blockly.JavaScript['sc3_BufRateScale'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BufRateScale', ['BUFNUM'], true);
};
Blockly.JavaScript['sc3_BufRd'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BufRd', ['NUMCHANNELS', 'BUFNUM', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript['sc3_Clip'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Clip', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript['sc3_CombC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'CombC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_CombL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'CombL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_CombN'] = function(block) {
  return blk_ugen_codegen(blk, block, 'CombN', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_Crackle'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Crackle', ['CHAOSPARAM'], true);
};
Blockly.JavaScript['sc3_Decay'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Decay', ['IN', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_Decay2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Decay2', ['IN', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_DegreeToKey'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DegreeToKey', ['BUFNUM', 'IN', 'OCTAVE'], true);
};
Blockly.JavaScript['sc3_DelayC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DelayC', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript['sc3_DelayL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DelayL', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript['sc3_DelayN'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DelayN', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript['sc3_Dust'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Dust', ['DENSITY'], true);
};
Blockly.JavaScript['sc3_Dust2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Dust2', ['DENSITY'], true);
};
Blockly.JavaScript['sc3_ExpRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'ExpRand', ['LO', 'HI'], true);
};
Blockly.JavaScript['sc3_FBSineC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'FBSineC', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript['sc3_FBSineL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'FBSineL', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript['sc3_FFT'] = function(block) {
  return blk_ugen_codegen(blk, block, 'FFT', ['BUFFER', 'IN', 'HOP', 'WINTYPE', 'ACTIVE', 'WINSIZE'], true);
};
Blockly.JavaScript['sc3_Fold'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Fold', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript['sc3_Formant'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Formant', ['FUNDFREQ', 'FORMFREQ', 'BWFREQ'], true);
};
Blockly.JavaScript['sc3_Formlet'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Formlet', ['IN', 'FREQ', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_FreeVerb'] = function(block) {
  return blk_ugen_codegen(blk, block, 'FreeVerb', ['IN', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript['sc3_FreeVerb2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'FreeVerb2', ['IN', 'IN2', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript['sc3_FreqShift'] = function(block) {
  return blk_ugen_codegen(blk, block, 'FreqShift', ['IN', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript['sc3_GVerb'] = function(block) {
  return blk_ugen_codegen(blk, block, 'GVerb', ['IN', 'ROOMSIZE', 'REVTIME', 'DAMPING', 'INPUTBW', 'SPREAD', 'DRYLEVEL', 'EARLYREFLEVEL', 'TAILLEVEL', 'MAXROOMSIZE'], true);
};
Blockly.JavaScript['sc3_Gendy1'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Gendy1', ['AMPDIST', 'DURDIST', 'ADPARAM', 'DDPARAM', 'MINFREQ', 'MAXFREQ', 'AMPSCALE', 'DURSCALE', 'INITCPS', 'KNUM'], true);
};
Blockly.JavaScript['sc3_GrainFM'] = function(block) {
  return blk_ugen_codegen(blk, block, 'GrainFM', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'CARFREQ', 'MODFREQ', 'INDEX', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript['sc3_GrainSin'] = function(block) {
  return blk_ugen_codegen(blk, block, 'GrainSin', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'FREQ', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript['sc3_GrayNoise'] = function(block) {
  return blk_ugen_codegen(blk, block, 'GrayNoise', [], true);
};
Blockly.JavaScript['sc3_HPF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'HPF', ['IN', 'FREQ'], true);
};
Blockly.JavaScript['sc3_HPZ1'] = function(block) {
  return blk_ugen_codegen(blk, block, 'HPZ1', ['IN'], true);
};
Blockly.JavaScript['sc3_Hasher'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Hasher', ['IN'], true);
};
Blockly.JavaScript['sc3_HenonC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'HenonC', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript['sc3_HenonL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'HenonL', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript['sc3_IFFT'] = function(block) {
  return blk_ugen_codegen(blk, block, 'IFFT', ['BUFFER', 'WINTYPE', 'WINSIZE'], true);
};
Blockly.JavaScript['sc3_IRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'IRand', ['LO', 'HI'], true);
};
Blockly.JavaScript['sc3_Impulse'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Impulse', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript['sc3_Index'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Index', ['BUFNUM', 'IN'], true);
};
Blockly.JavaScript['sc3_K2A'] = function(block) {
  return blk_ugen_codegen(blk, block, 'K2A', ['IN'], true);
};
Blockly.JavaScript['sc3_KeyState'] = function(block) {
  return blk_ugen_codegen(blk, block, 'KeyState', ['KEYCODE', 'MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript['sc3_LFClipNoise'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFClipNoise', ['FREQ'], true);
};
Blockly.JavaScript['sc3_LFCub'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFCub', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript['sc3_LFDNoise1'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFDNoise1', ['FREQ'], true);
};
Blockly.JavaScript['sc3_LFDNoise3'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFDNoise3', ['FREQ'], true);
};
Blockly.JavaScript['sc3_LFGauss'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFGauss', ['DURATION', 'WIDTH', 'IPHASE', 'LOOP', 'DONEACTION'], true);
};
Blockly.JavaScript['sc3_LFNoise0'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFNoise0', ['FREQ'], true);
};
Blockly.JavaScript['sc3_LFNoise1'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFNoise1', ['FREQ'], true);
};
Blockly.JavaScript['sc3_LFNoise2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFNoise2', ['FREQ'], true);
};
Blockly.JavaScript['sc3_LFPar'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFPar', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript['sc3_LFPulse'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFPulse', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript['sc3_LFSaw'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFSaw', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript['sc3_LFTri'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LFTri', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript['sc3_LPF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LPF', ['IN', 'FREQ'], true);
};
Blockly.JavaScript['sc3_LPZ1'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LPZ1', ['IN'], true);
};
Blockly.JavaScript['sc3_Lag'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Lag', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript['sc3_Lag2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Lag2', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript['sc3_Lag3'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Lag3', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript['sc3_Lag3UD'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Lag3UD', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript['sc3_LagUD'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LagUD', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript['sc3_Latch'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Latch', ['IN', 'TRIG'], true);
};
Blockly.JavaScript['sc3_LeakDC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LeakDC', ['IN', 'COEF'], true);
};
Blockly.JavaScript['sc3_Limiter'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Limiter', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript['sc3_LinExp'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LinExp', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript['sc3_LinPan2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LinPan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript['sc3_LinRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LinRand', ['LO', 'HI', 'MINMAX'], true);
};
Blockly.JavaScript['sc3_LinXFade2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LinXFade2', ['INA', 'INB', 'PAN'], true);
};
Blockly.JavaScript['sc3_Linen'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Linen', ['GATE', 'ATTACKTIME', 'SUSLEVEL', 'RELEASETIME', 'DONEACTION'], true);
};
Blockly.JavaScript['sc3_LocalIn'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LocalIn', ['NUMCHANNELS', 'DEFAULT'], true);
};
Blockly.JavaScript['sc3_LocalOut'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LocalOut', ['CHANNELSARRAY'], false);
};
Blockly.JavaScript['sc3_LorenzL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LorenzL', ['FREQ', 'S', 'R', 'B', 'H', 'XI', 'YI', 'ZI'], true);
};
Blockly.JavaScript['sc3_MantissaMask'] = function(block) {
  return blk_ugen_codegen(blk, block, 'MantissaMask', ['IN', 'BITS'], true);
};
Blockly.JavaScript['sc3_MoogFF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'MoogFF', ['IN', 'FREQ', 'GAIN', 'RESET'], true);
};
Blockly.JavaScript['sc3_MouseButton'] = function(block) {
  return blk_ugen_codegen(blk, block, 'MouseButton', ['MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript['sc3_MouseX'] = function(block) {
  return blk_ugen_codegen(blk, block, 'MouseX', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript['sc3_MouseY'] = function(block) {
  return blk_ugen_codegen(blk, block, 'MouseY', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript['sc3_NRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'NRand', ['LO', 'HI', 'N'], true);
};
Blockly.JavaScript['sc3_Normalizer'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Normalizer', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript['sc3_OnePole'] = function(block) {
  return blk_ugen_codegen(blk, block, 'OnePole', ['IN', 'COEF'], true);
};
Blockly.JavaScript['sc3_Osc'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Osc', ['BUFNUM', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript['sc3_Out'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Out', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript['sc3_PV_RandComb'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PV_RandComb', ['BUFFER', 'WIPE', 'TRIG'], true);
};
Blockly.JavaScript['sc3_Pan2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Pan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript['sc3_PanAz'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PanAz', ['NUMCHANNELS', 'IN', 'POS', 'LEVEL', 'WIDTH', 'ORIENTATION'], true);
};
Blockly.JavaScript['sc3_Phasor'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Phasor', ['TRIG', 'RATE', 'START', 'END', 'RESETPOS'], true);
};
Blockly.JavaScript['sc3_PinkNoise'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PinkNoise', [], true);
};
Blockly.JavaScript['sc3_Pitch'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Pitch', ['IN', 'INITFREQ', 'MINFREQ', 'MAXFREQ', 'EXECFREQ', 'MAXBINSPEROCTAVE', 'MEDIAN', 'AMPTHRESHOLD', 'PEAKTHRESHOLD', 'DOWNSAMPLE', 'CLAR'], true);
};
Blockly.JavaScript['sc3_PitchShift'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PitchShift', ['IN', 'WINDOWSIZE', 'PITCHRATIO', 'PITCHDISPERSION', 'TIMEDISPERSION'], true);
};
Blockly.JavaScript['sc3_Pluck'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Pluck', ['IN', 'TRIG', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME', 'COEF'], true);
};
Blockly.JavaScript['sc3_Pulse'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Pulse', ['FREQ', 'WIDTH'], true);
};
Blockly.JavaScript['sc3_PulseCount'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PulseCount', ['TRIG', 'RESET'], true);
};
Blockly.JavaScript['sc3_PulseDivider'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PulseDivider', ['TRIG', 'DIV', 'START'], true);
};
Blockly.JavaScript['sc3_QuadC'] = function(block) {
  return blk_ugen_codegen(blk, block, 'QuadC', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript['sc3_QuadL'] = function(block) {
  return blk_ugen_codegen(blk, block, 'QuadL', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript['sc3_RHPF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'RHPF', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript['sc3_RLPF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'RLPF', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript['sc3_Rand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Rand', ['LO', 'HI'], true);
};
Blockly.JavaScript['sc3_ReplaceOut'] = function(block) {
  return blk_ugen_codegen(blk, block, 'ReplaceOut', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript['sc3_Resonz'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Resonz', ['IN', 'FREQ', 'BWR'], true);
};
Blockly.JavaScript['sc3_Ringz'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Ringz', ['IN', 'FREQ', 'DECAYTIME'], true);
};
Blockly.JavaScript['sc3_Rotate2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Rotate2', ['X', 'Y', 'POS'], true);
};
Blockly.JavaScript['sc3_RunningMax'] = function(block) {
  return blk_ugen_codegen(blk, block, 'RunningMax', ['IN', 'TRIG'], true);
};
Blockly.JavaScript['sc3_SampleRate'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SampleRate', [], true);
};
Blockly.JavaScript['sc3_Saw'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Saw', ['FREQ'], true);
};
Blockly.JavaScript['sc3_Select'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Select', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript['sc3_SinOsc'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SinOsc', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript['sc3_SinOscFB'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SinOscFB', ['FREQ', 'FEEDBACK'], true);
};
Blockly.JavaScript['sc3_Slew'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Slew', ['IN', 'UP', 'DN'], true);
};
Blockly.JavaScript['sc3_Slope'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Slope', ['IN'], true);
};
Blockly.JavaScript['sc3_Stepper'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Stepper', ['TRIG', 'RESET', 'MIN', 'MAX', 'STEP', 'RESETVAL'], true);
};
Blockly.JavaScript['sc3_Sweep'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Sweep', ['TRIG', 'RATE'], true);
};
Blockly.JavaScript['sc3_SyncSaw'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SyncSaw', ['SYNCFREQ', 'SAWFREQ'], true);
};
Blockly.JavaScript['sc3_TExpRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TExpRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript['sc3_TGrains'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TGrains', ['NUMCHANNELS', 'TRIGGER', 'BUFNUM', 'RATE', 'CENTERPOS', 'DUR', 'PAN', 'AMP', 'INTERP'], true);
};
Blockly.JavaScript['sc3_TIRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TIRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript['sc3_TRand'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript['sc3_ToggleFF'] = function(block) {
  return blk_ugen_codegen(blk, block, 'ToggleFF', ['TRIG'], true);
};
Blockly.JavaScript['sc3_Trig'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Trig', ['IN', 'DUR'], true);
};
Blockly.JavaScript['sc3_VarSaw'] = function(block) {
  return blk_ugen_codegen(blk, block, 'VarSaw', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript['sc3_WhiteNoise'] = function(block) {
  return blk_ugen_codegen(blk, block, 'WhiteNoise', [], true);
};
Blockly.JavaScript['sc3_Wrap'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Wrap', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript['sc3_XFade2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'XFade2', ['INA', 'INB', 'PAN', 'LEVEL'], true);
};
Blockly.JavaScript['sc3_ZeroCrossing'] = function(block) {
  return blk_ugen_codegen(blk, block, 'ZeroCrossing', ['IN'], true);
};
Blockly.JavaScript['sc3_Bezier'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Bezier', ['HALTAFTER', 'DX', 'FREQ', 'PHASE', 'PARAM'], true);
};
Blockly.JavaScript['sc3_DWGPluckedStiff'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DWGPluckedStiff', ['FREQ', 'AMP', 'GATE', 'POS', 'C1', 'C3', 'INP', 'RELEASE', 'FB'], true);
};
Blockly.JavaScript['sc3_DustRange'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DustRange', ['IOTMIN', 'IOTMAX'], true);
};
Blockly.JavaScript['sc3_Dx7'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Dx7', ['BUFNUM', 'ON', 'OFF', 'DATA', 'VC', 'MNN', 'VEL', 'PW', 'MW', 'BC', 'FC'], true);
};
Blockly.JavaScript['sc3_Freezer'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Freezer', ['BUFNUM', 'LEFT', 'RIGHT', 'GAIN', 'INCREMENT', 'INCREMENTOFFSET', 'INCREMENTRANDOM', 'RIGHTRANDOM', 'SYNCPHASETRIGGER', 'RANDOMIZEPHASETRIGGER', 'NUMBEROFLOOPS'], true);
};
Blockly.JavaScript['sc3_GreyholeRaw'] = function(block) {
  return blk_ugen_codegen(blk, block, 'GreyholeRaw', ['IN1', 'IN2', 'DAMPING', 'DELAYTIME', 'DIFFUSION', 'FEEDBACK', 'MODDEPTH', 'MODFREQ', 'SIZE'], true);
};
Blockly.JavaScript['sc3_MoogLadder'] = function(block) {
  return blk_ugen_codegen(blk, block, 'MoogLadder', ['IN', 'FFREQ', 'RES'], true);
};
Blockly.JavaScript['sc3_ShufflerB'] = function(block) {
  return blk_ugen_codegen(blk, block, 'ShufflerB', ['BUFNUM', 'READLOCATIONMINIMA', 'READLOCATIONMAXIMA', 'READINCREMENTMINIMA', 'READINCREMENTMAXIMA', 'DURATIONMINIMA', 'DURATIONMAXIMA', 'ENVELOPEAMPLITUDEMINIMA', 'ENVELOPEAMPLITUDEMAXIMA', 'ENVELOPESHAPEMINIMA', 'ENVELOPESHAPEMAXIMA', 'ENVELOPESKEWMINIMA', 'ENVELOPESKEWMAXIMA', 'STEREOLOCATIONMINIMA', 'STEREOLOCATIONMAXIMA', 'INTEROFFSETTIMEMINIMA', 'INTEROFFSETTIMEMAXIMA', 'FTABLEREADLOCATIONINCREMENT', 'READINCREMENTQUANTA', 'INTEROFFSETTIMEQUANTA'], true);
};
Blockly.JavaScript['sc3_SvfBp'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SvfBp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript['sc3_SvfHp'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SvfHp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript['sc3_SvfLp'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SvfLp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript['sc3_TScramble'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TScramble', ['TRIGGER', 'INPUTS'], true);
};
Blockly.JavaScript['sc3_VOSIM'] = function(block) {
  return blk_ugen_codegen(blk, block, 'VOSIM', ['TRIG', 'FREQ', 'NCYCLES', 'DECAY'], true);
};
Blockly.JavaScript['sc3_Adsr'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Adsr', ['GATE', 'ATTACKTIME', 'DECAYTIME', 'SUSTAINLEVEL', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript['sc3_Asr'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Asr', ['GATE', 'ATTACKTIME', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript['sc3_AudioIn'] = function(block) {
  return blk_ugen_codegen(blk, block, 'AudioIn', ['CHANNELARRAY'], true);
};
Blockly.JavaScript['sc3_BufAlloc'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BufAlloc', ['NUMCHANNELS', 'NUMFRAMES'], true);
};
Blockly.JavaScript['sc3_BufRec'] = function(block) {
  return blk_ugen_codegen(blk, block, 'BufRec', ['BUFNUM', 'RESET', 'INPUTARRAY'], true);
};
Blockly.JavaScript['sc3_Cc'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Cc', ['INDEX'], true);
};
Blockly.JavaScript['sc3_Choose'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Choose', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript['sc3_DmdFor'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DmdFor', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript['sc3_TDmdFor'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TDmdFor', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript['sc3_DmdOn'] = function(block) {
  return blk_ugen_codegen(blk, block, 'DmdOn', ['TRIG', 'RESET', 'DEMANDUGENS'], true);
};
Blockly.JavaScript['sc3_InFb'] = function(block) {
  return blk_ugen_codegen(blk, block, 'InFb', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript['sc3_KeyDown'] = function(block) {
  return blk_ugen_codegen(blk, block, 'KeyDown', ['VOICENUMBER'], true);
};
Blockly.JavaScript['sc3_KeyPitch'] = function(block) {
  return blk_ugen_codegen(blk, block, 'KeyPitch', ['VOICENUMBER'], true);
};
Blockly.JavaScript['sc3_KeyVelocity'] = function(block) {
  return blk_ugen_codegen(blk, block, 'KeyVelocity', ['VOICENUMBER'], true);
};
Blockly.JavaScript['sc3_KeyTimbre'] = function(block) {
  return blk_ugen_codegen(blk, block, 'KeyTimbre', ['VOICENUMBER'], true);
};
Blockly.JavaScript['sc3_LinLin'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LinLin', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript['sc3_LinSeg'] = function(block) {
  return blk_ugen_codegen(blk, block, 'LinSeg', ['GATE', 'COORD'], true);
};
Blockly.JavaScript['sc3_Ln'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Ln', ['START', 'END', 'DUR'], true);
};
Blockly.JavaScript['sc3_PMOsc'] = function(block) {
  return blk_ugen_codegen(blk, block, 'PMOsc', ['CARFREQ', 'MODFREQ', 'PMINDEX', 'MODPHASE'], true);
};
Blockly.JavaScript['sc3_RingzBank'] = function(block) {
  return blk_ugen_codegen(blk, block, 'RingzBank', ['INPUT', 'FREQ', 'AMP', 'TIME'], true);
};
Blockly.JavaScript['sc3_Select2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Select2', ['PREDICATE', 'IFTRUE', 'IFFALSE'], true);
};
Blockly.JavaScript['sc3_SelectX'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SelectX', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript['sc3_Seq'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Seq', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript['sc3_Ser'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Ser', ['LENGTH', 'START', 'STEP'], true);
};
Blockly.JavaScript['sc3_SfAcquire'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfAcquire', ['URLORKEY', 'NUMBEROFCHANNELS', 'CHANNELINDICES'], true);
};
Blockly.JavaScript['sc3_SfDur'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfDur', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript['sc3_SfFrames'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfFrames', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript['sc3_SfPlay'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfPlay', ['SFBUFFERARRAY', 'RATE', 'TRIGGER', 'STARTPOS', 'LOOP'], true);
};
Blockly.JavaScript['sc3_SfRateScale'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfRateScale', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript['sc3_SfRead'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfRead', ['SFBUFFERARRAY', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript['sc3_SfSampleRate'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SfSampleRate', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript['sc3_Shuf'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Shuf', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript['sc3_SinOscBank'] = function(block) {
  return blk_ugen_codegen(blk, block, 'SinOscBank', ['FREQ', 'AMP', 'PHASE'], true);
};
Blockly.JavaScript['sc3_Splay'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Splay', ['INPUT', 'SPREAD', 'LEVEL', 'CENTER', 'LEVELCOMP'], true);
};
Blockly.JavaScript['sc3_Splay2'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Splay2', ['INARRAY'], true);
};
Blockly.JavaScript['sc3_Sw'] = function(block) {
  return blk_ugen_codegen(blk, block, 'Sw', ['INDEX'], true);
};
Blockly.JavaScript['sc3_TChoose'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TChoose', ['TRIG', 'ARRAY'], true);
};
Blockly.JavaScript['sc3_TLine'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript['sc3_TXLine'] = function(block) {
  return blk_ugen_codegen(blk, block, 'TXLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript['sc3_XLn'] = function(block) {
  return blk_ugen_codegen(blk, block, 'XLn', ['START', 'END', 'DUR'], true);
};

}
