'use strict';

Blockly.JavaScript['sc3_AllpassC'] = function(block) {
  return blk_ugen_codegen(block, 'AllpassC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_AllpassL'] = function(block) {
  return blk_ugen_codegen(block, 'AllpassL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_AmpComp'] = function(block) {
  return blk_ugen_codegen(block, 'AmpComp', ['FREQ', 'ROOT', 'EXP'], true);
}
Blockly.JavaScript['sc3_Amplitude'] = function(block) {
  return blk_ugen_codegen(block, 'Amplitude', ['IN', 'ATTACKTIME', 'RELEASETIME'], true);
}
Blockly.JavaScript['sc3_BBandPass'] = function(block) {
  return blk_ugen_codegen(block, 'BBandPass', ['IN', 'FREQ', 'BW'], true);
}
Blockly.JavaScript['sc3_BBandStop'] = function(block) {
  return blk_ugen_codegen(block, 'BBandStop', ['IN', 'FREQ', 'BW'], true);
}
Blockly.JavaScript['sc3_BLowPass'] = function(block) {
  return blk_ugen_codegen(block, 'BLowPass', ['IN', 'FREQ', 'RQ'], true);
}
Blockly.JavaScript['sc3_BPF'] = function(block) {
  return blk_ugen_codegen(block, 'BPF', ['IN', 'FREQ', 'RQ'], true);
}
Blockly.JavaScript['sc3_BPZ2'] = function(block) {
  return blk_ugen_codegen(block, 'BPZ2', ['IN'], true);
}
Blockly.JavaScript['sc3_BRF'] = function(block) {
  return blk_ugen_codegen(block, 'BRF', ['IN', 'FREQ', 'RQ'], true);
}
Blockly.JavaScript['sc3_Balance2'] = function(block) {
  return blk_ugen_codegen(block, 'Balance2', ['LEFT', 'RIGHT', 'POS', 'LEVEL'], true);
}
Blockly.JavaScript['sc3_Blip'] = function(block) {
  return blk_ugen_codegen(block, 'Blip', ['FREQ', 'NUMHARM'], true);
}
Blockly.JavaScript['sc3_BrownNoise'] = function(block) {
  return blk_ugen_codegen(block, 'BrownNoise', [], true);
}
Blockly.JavaScript['sc3_BufDur'] = function(block) {
  return blk_ugen_codegen(block, 'BufDur', ['BUFNUM'], true);
}
Blockly.JavaScript['sc3_BufFrames'] = function(block) {
  return blk_ugen_codegen(block, 'BufFrames', ['BUFNUM'], true);
}
Blockly.JavaScript['sc3_BufRateScale'] = function(block) {
  return blk_ugen_codegen(block, 'BufRateScale', ['BUFNUM'], true);
}
Blockly.JavaScript['sc3_BufRd'] = function(block) {
  return blk_ugen_codegen(block, 'BufRd', ['NUMCHANNELS', 'BUFNUM', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
}
Blockly.JavaScript['sc3_Clip'] = function(block) {
  return blk_ugen_codegen(block, 'Clip', ['IN', 'LO', 'HI'], true);
}
Blockly.JavaScript['sc3_CombC'] = function(block) {
  return blk_ugen_codegen(block, 'CombC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_CombL'] = function(block) {
  return blk_ugen_codegen(block, 'CombL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_Crackle'] = function(block) {
  return blk_ugen_codegen(block, 'Crackle', ['CHAOSPARAM'], true);
}
Blockly.JavaScript['sc3_Decay'] = function(block) {
  return blk_ugen_codegen(block, 'Decay', ['IN', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_Decay2'] = function(block) {
  return blk_ugen_codegen(block, 'Decay2', ['IN', 'ATTACKTIME', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_DegreeToKey'] = function(block) {
  return blk_ugen_codegen(block, 'DegreeToKey', ['BUFNUM', 'IN', 'OCTAVE'], true);
}
Blockly.JavaScript['sc3_DelayC'] = function(block) {
  return blk_ugen_codegen(block, 'DelayC', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
}
Blockly.JavaScript['sc3_DelayL'] = function(block) {
  return blk_ugen_codegen(block, 'DelayL', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
}
Blockly.JavaScript['sc3_Dust'] = function(block) {
  return blk_ugen_codegen(block, 'Dust', ['DENSITY'], true);
}
Blockly.JavaScript['sc3_Dust2'] = function(block) {
  return blk_ugen_codegen(block, 'Dust2', ['DENSITY'], true);
}
Blockly.JavaScript['sc3_ExpRand'] = function(block) {
  return blk_ugen_codegen(block, 'ExpRand', ['LO', 'HI'], true);
}
Blockly.JavaScript['sc3_FBSineC'] = function(block) {
  return blk_ugen_codegen(block, 'FBSineC', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
}
Blockly.JavaScript['sc3_FBSineL'] = function(block) {
  return blk_ugen_codegen(block, 'FBSineL', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
}
Blockly.JavaScript['sc3_Fold'] = function(block) {
  return blk_ugen_codegen(block, 'Fold', ['IN', 'LO', 'HI'], true);
}
Blockly.JavaScript['sc3_Formant'] = function(block) {
  return blk_ugen_codegen(block, 'Formant', ['FUNDFREQ', 'FORMFREQ', 'BWFREQ'], true);
}
Blockly.JavaScript['sc3_Formlet'] = function(block) {
  return blk_ugen_codegen(block, 'Formlet', ['IN', 'FREQ', 'ATTACKTIME', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_FreeVerb'] = function(block) {
  return blk_ugen_codegen(block, 'FreeVerb', ['IN', 'MIX', 'ROOM', 'DAMP'], true);
}
Blockly.JavaScript['sc3_FreeVerb2'] = function(block) {
  return blk_ugen_codegen(block, 'FreeVerb2', ['IN', 'IN2', 'MIX', 'ROOM', 'DAMP'], true);
}
Blockly.JavaScript['sc3_FreqShift'] = function(block) {
  return blk_ugen_codegen(block, 'FreqShift', ['IN', 'FREQ', 'PHASE'], true);
}
Blockly.JavaScript['sc3_GVerb'] = function(block) {
  return blk_ugen_codegen(block, 'GVerb', ['IN', 'ROOMSIZE', 'REVTIME', 'DAMPING', 'INPUTBW', 'SPREAD', 'DRYLEVEL', 'EARLYREFLEVEL', 'TAILLEVEL', 'MAXROOMSIZE'], true);
}
Blockly.JavaScript['sc3_Gendy1'] = function(block) {
  return blk_ugen_codegen(block, 'Gendy1', ['AMPDIST', 'DURDIST', 'ADPARAM', 'DDPARAM', 'MINFREQ', 'MAXFREQ', 'AMPSCALE', 'DURSCALE', 'INITCPS', 'KNUM'], true);
}
Blockly.JavaScript['sc3_GrainFM'] = function(block) {
  return blk_ugen_codegen(block, 'GrainFM', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'CARFREQ', 'MODFREQ', 'INDEX', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
}
Blockly.JavaScript['sc3_GrainSin'] = function(block) {
  return blk_ugen_codegen(block, 'GrainSin', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'FREQ', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
}
Blockly.JavaScript['sc3_GrayNoise'] = function(block) {
  return blk_ugen_codegen(block, 'GrayNoise', [], true);
}
Blockly.JavaScript['sc3_HPF'] = function(block) {
  return blk_ugen_codegen(block, 'HPF', ['IN', 'FREQ'], true);
}
Blockly.JavaScript['sc3_HPZ1'] = function(block) {
  return blk_ugen_codegen(block, 'HPZ1', ['IN'], true);
}
Blockly.JavaScript['sc3_Hasher'] = function(block) {
  return blk_ugen_codegen(block, 'Hasher', ['IN'], true);
}
Blockly.JavaScript['sc3_HenonC'] = function(block) {
  return blk_ugen_codegen(block, 'HenonC', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
}
Blockly.JavaScript['sc3_HenonL'] = function(block) {
  return blk_ugen_codegen(block, 'HenonL', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
}
Blockly.JavaScript['sc3_IRand'] = function(block) {
  return blk_ugen_codegen(block, 'IRand', ['LO', 'HI'], true);
}
Blockly.JavaScript['sc3_Impulse'] = function(block) {
  return blk_ugen_codegen(block, 'Impulse', ['FREQ', 'PHASE'], true);
}
Blockly.JavaScript['sc3_KeyState'] = function(block) {
  return blk_ugen_codegen(block, 'KeyState', ['KEYCODE', 'MINVAL', 'MAXVAL', 'LAG'], true);
}
Blockly.JavaScript['sc3_LFClipNoise'] = function(block) {
  return blk_ugen_codegen(block, 'LFClipNoise', ['FREQ'], true);
}
Blockly.JavaScript['sc3_LFCub'] = function(block) {
  return blk_ugen_codegen(block, 'LFCub', ['FREQ', 'IPHASE'], true);
}
Blockly.JavaScript['sc3_LFDNoise1'] = function(block) {
  return blk_ugen_codegen(block, 'LFDNoise1', ['FREQ'], true);
}
Blockly.JavaScript['sc3_LFDNoise3'] = function(block) {
  return blk_ugen_codegen(block, 'LFDNoise3', ['FREQ'], true);
}
Blockly.JavaScript['sc3_LFGauss'] = function(block) {
  return blk_ugen_codegen(block, 'LFGauss', ['DURATION', 'WIDTH', 'IPHASE', 'LOOP', 'DONEACTION'], true);
}
Blockly.JavaScript['sc3_LFNoise0'] = function(block) {
  return blk_ugen_codegen(block, 'LFNoise0', ['FREQ'], true);
}
Blockly.JavaScript['sc3_LFNoise1'] = function(block) {
  return blk_ugen_codegen(block, 'LFNoise1', ['FREQ'], true);
}
Blockly.JavaScript['sc3_LFNoise2'] = function(block) {
  return blk_ugen_codegen(block, 'LFNoise2', ['FREQ'], true);
}
Blockly.JavaScript['sc3_LFPar'] = function(block) {
  return blk_ugen_codegen(block, 'LFPar', ['FREQ', 'IPHASE'], true);
}
Blockly.JavaScript['sc3_LFPulse'] = function(block) {
  return blk_ugen_codegen(block, 'LFPulse', ['FREQ', 'IPHASE', 'WIDTH'], true);
}
Blockly.JavaScript['sc3_LFSaw'] = function(block) {
  return blk_ugen_codegen(block, 'LFSaw', ['FREQ', 'IPHASE'], true);
}
Blockly.JavaScript['sc3_LFTri'] = function(block) {
  return blk_ugen_codegen(block, 'LFTri', ['FREQ', 'IPHASE'], true);
}
Blockly.JavaScript['sc3_LPF'] = function(block) {
  return blk_ugen_codegen(block, 'LPF', ['IN', 'FREQ'], true);
}
Blockly.JavaScript['sc3_LPZ1'] = function(block) {
  return blk_ugen_codegen(block, 'LPZ1', ['IN'], true);
}
Blockly.JavaScript['sc3_Lag'] = function(block) {
  return blk_ugen_codegen(block, 'Lag', ['IN', 'LAGTIME'], true);
}
Blockly.JavaScript['sc3_Lag2'] = function(block) {
  return blk_ugen_codegen(block, 'Lag2', ['IN', 'LAGTIME'], true);
}
Blockly.JavaScript['sc3_Lag3'] = function(block) {
  return blk_ugen_codegen(block, 'Lag3', ['IN', 'LAGTIME'], true);
}
Blockly.JavaScript['sc3_Lag3UD'] = function(block) {
  return blk_ugen_codegen(block, 'Lag3UD', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
}
Blockly.JavaScript['sc3_LagUD'] = function(block) {
  return blk_ugen_codegen(block, 'LagUD', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
}
Blockly.JavaScript['sc3_Latch'] = function(block) {
  return blk_ugen_codegen(block, 'Latch', ['IN', 'TRIG'], true);
}
Blockly.JavaScript['sc3_LeakDC'] = function(block) {
  return blk_ugen_codegen(block, 'LeakDC', ['IN', 'COEF'], true);
}
Blockly.JavaScript['sc3_Limiter'] = function(block) {
  return blk_ugen_codegen(block, 'Limiter', ['IN', 'LEVEL', 'DUR'], true);
}
Blockly.JavaScript['sc3_LinExp'] = function(block) {
  return blk_ugen_codegen(block, 'LinExp', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
}
Blockly.JavaScript['sc3_LinPan2'] = function(block) {
  return blk_ugen_codegen(block, 'LinPan2', ['IN', 'POS', 'LEVEL'], true);
}
Blockly.JavaScript['sc3_LinRand'] = function(block) {
  return blk_ugen_codegen(block, 'LinRand', ['LO', 'HI', 'MINMAX'], true);
}
Blockly.JavaScript['sc3_LinXFade2'] = function(block) {
  return blk_ugen_codegen(block, 'LinXFade2', ['INA', 'INB', 'PAN'], true);
}
Blockly.JavaScript['sc3_LocalIn'] = function(block) {
  return blk_ugen_codegen(block, 'LocalIn', ['NUMCHANNELS', 'DEFAULT'], true);
}
Blockly.JavaScript['sc3_LocalOut'] = function(block) {
  return blk_ugen_codegen(block, 'LocalOut', ['CHANNELSARRAY'], false);
}
Blockly.JavaScript['sc3_MantissaMask'] = function(block) {
  return blk_ugen_codegen(block, 'MantissaMask', ['IN', 'BITS'], true);
}
Blockly.JavaScript['sc3_MoogFF'] = function(block) {
  return blk_ugen_codegen(block, 'MoogFF', ['IN', 'FREQ', 'GAIN', 'RESET'], true);
}
Blockly.JavaScript['sc3_MouseButton'] = function(block) {
  return blk_ugen_codegen(block, 'MouseButton', ['MINVAL', 'MAXVAL', 'LAG'], true);
}
Blockly.JavaScript['sc3_MouseX'] = function(block) {
  return blk_ugen_codegen(block, 'MouseX', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
}
Blockly.JavaScript['sc3_MouseY'] = function(block) {
  return blk_ugen_codegen(block, 'MouseY', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
}
Blockly.JavaScript['sc3_NRand'] = function(block) {
  return blk_ugen_codegen(block, 'NRand', ['LO', 'HI', 'N'], true);
}
Blockly.JavaScript['sc3_Normalizer'] = function(block) {
  return blk_ugen_codegen(block, 'Normalizer', ['IN', 'LEVEL', 'DUR'], true);
}
Blockly.JavaScript['sc3_OnePole'] = function(block) {
  return blk_ugen_codegen(block, 'OnePole', ['IN', 'COEF'], true);
}
Blockly.JavaScript['sc3_Osc'] = function(block) {
  return blk_ugen_codegen(block, 'Osc', ['BUFNUM', 'FREQ', 'PHASE'], true);
}
Blockly.JavaScript['sc3_Out'] = function(block) {
  return blk_ugen_codegen(block, 'Out', ['BUS', 'CHANNELSARRAY'], false);
}
Blockly.JavaScript['sc3_Pan2'] = function(block) {
  return blk_ugen_codegen(block, 'Pan2', ['IN', 'POS', 'LEVEL'], true);
}
Blockly.JavaScript['sc3_Phasor'] = function(block) {
  return blk_ugen_codegen(block, 'Phasor', ['TRIG', 'RATE', 'START', 'END', 'RESETPOS'], true);
}
Blockly.JavaScript['sc3_PinkNoise'] = function(block) {
  return blk_ugen_codegen(block, 'PinkNoise', [], true);
}
Blockly.JavaScript['sc3_Pitch'] = function(block) {
  return blk_ugen_codegen(block, 'Pitch', ['IN', 'INITFREQ', 'MINFREQ', 'MAXFREQ', 'EXECFREQ', 'MAXBINSPEROCTAVE', 'MEDIAN', 'AMPTHRESHOLD', 'PEAKTHRESHOLD', 'DOWNSAMPLE', 'CLAR'], true);
}
Blockly.JavaScript['sc3_PitchShift'] = function(block) {
  return blk_ugen_codegen(block, 'PitchShift', ['IN', 'WINDOWSIZE', 'PITCHRATIO', 'PITCHDISPERSION', 'TIMEDISPERSION'], true);
}
Blockly.JavaScript['sc3_Pluck'] = function(block) {
  return blk_ugen_codegen(block, 'Pluck', ['IN', 'TRIG', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME', 'COEF'], true);
}
Blockly.JavaScript['sc3_Pulse'] = function(block) {
  return blk_ugen_codegen(block, 'Pulse', ['FREQ', 'WIDTH'], true);
}
Blockly.JavaScript['sc3_PulseCount'] = function(block) {
  return blk_ugen_codegen(block, 'PulseCount', ['TRIG', 'RESET'], true);
}
Blockly.JavaScript['sc3_PulseDivider'] = function(block) {
  return blk_ugen_codegen(block, 'PulseDivider', ['TRIG', 'DIV', 'START'], true);
}
Blockly.JavaScript['sc3_QuadC'] = function(block) {
  return blk_ugen_codegen(block, 'QuadC', ['FREQ', 'A', 'B', 'C', 'XI'], true);
}
Blockly.JavaScript['sc3_QuadL'] = function(block) {
  return blk_ugen_codegen(block, 'QuadL', ['FREQ', 'A', 'B', 'C', 'XI'], true);
}
Blockly.JavaScript['sc3_RHPF'] = function(block) {
  return blk_ugen_codegen(block, 'RHPF', ['IN', 'FREQ', 'RQ'], true);
}
Blockly.JavaScript['sc3_RLPF'] = function(block) {
  return blk_ugen_codegen(block, 'RLPF', ['IN', 'FREQ', 'RQ'], true);
}
Blockly.JavaScript['sc3_Rand'] = function(block) {
  return blk_ugen_codegen(block, 'Rand', ['LO', 'HI'], true);
}
Blockly.JavaScript['sc3_ReplaceOut'] = function(block) {
  return blk_ugen_codegen(block, 'ReplaceOut', ['BUS', 'CHANNELSARRAY'], false);
}
Blockly.JavaScript['sc3_Resonz'] = function(block) {
  return blk_ugen_codegen(block, 'Resonz', ['IN', 'FREQ', 'BWR'], true);
}
Blockly.JavaScript['sc3_Ringz'] = function(block) {
  return blk_ugen_codegen(block, 'Ringz', ['IN', 'FREQ', 'DECAYTIME'], true);
}
Blockly.JavaScript['sc3_Rotate2'] = function(block) {
  return blk_ugen_codegen(block, 'Rotate2', ['X', 'Y', 'POS'], true);
}
Blockly.JavaScript['sc3_RunningMax'] = function(block) {
  return blk_ugen_codegen(block, 'RunningMax', ['IN', 'TRIG'], true);
}
Blockly.JavaScript['sc3_SampleRate'] = function(block) {
  return blk_ugen_codegen(block, 'SampleRate', [], true);
}
Blockly.JavaScript['sc3_Saw'] = function(block) {
  return blk_ugen_codegen(block, 'Saw', ['FREQ'], true);
}
Blockly.JavaScript['sc3_Select'] = function(block) {
  return blk_ugen_codegen(block, 'Select', ['WHICH', 'ARRAY'], true);
}
Blockly.JavaScript['sc3_SinOsc'] = function(block) {
  return blk_ugen_codegen(block, 'SinOsc', ['FREQ', 'PHASE'], true);
}
Blockly.JavaScript['sc3_SinOscFB'] = function(block) {
  return blk_ugen_codegen(block, 'SinOscFB', ['FREQ', 'FEEDBACK'], true);
}
Blockly.JavaScript['sc3_Slew'] = function(block) {
  return blk_ugen_codegen(block, 'Slew', ['IN', 'UP', 'DN'], true);
}
Blockly.JavaScript['sc3_Slope'] = function(block) {
  return blk_ugen_codegen(block, 'Slope', ['IN'], true);
}
Blockly.JavaScript['sc3_Stepper'] = function(block) {
  return blk_ugen_codegen(block, 'Stepper', ['TRIG', 'RESET', 'MIN', 'MAX', 'STEP', 'RESETVAL'], true);
}
Blockly.JavaScript['sc3_Sweep'] = function(block) {
  return blk_ugen_codegen(block, 'Sweep', ['TRIG', 'RATE'], true);
}
Blockly.JavaScript['sc3_SyncSaw'] = function(block) {
  return blk_ugen_codegen(block, 'SyncSaw', ['SYNCFREQ', 'SAWFREQ'], true);
}
Blockly.JavaScript['sc3_TExpRand'] = function(block) {
  return blk_ugen_codegen(block, 'TExpRand', ['LO', 'HI', 'TRIG'], true);
}
Blockly.JavaScript['sc3_TGrains'] = function(block) {
  return blk_ugen_codegen(block, 'TGrains', ['NUMCHANNELS', 'TRIGGER', 'BUFNUM', 'RATE', 'CENTERPOS', 'DUR', 'PAN', 'AMP', 'INTERP'], true);
}
Blockly.JavaScript['sc3_TIRand'] = function(block) {
  return blk_ugen_codegen(block, 'TIRand', ['LO', 'HI', 'TRIG'], true);
}
Blockly.JavaScript['sc3_TRand'] = function(block) {
  return blk_ugen_codegen(block, 'TRand', ['LO', 'HI', 'TRIG'], true);
}
Blockly.JavaScript['sc3_ToggleFF'] = function(block) {
  return blk_ugen_codegen(block, 'ToggleFF', ['TRIG'], true);
}
Blockly.JavaScript['sc3_Trig'] = function(block) {
  return blk_ugen_codegen(block, 'Trig', ['IN', 'DUR'], true);
}
Blockly.JavaScript['sc3_VarSaw'] = function(block) {
  return blk_ugen_codegen(block, 'VarSaw', ['FREQ', 'IPHASE', 'WIDTH'], true);
}
Blockly.JavaScript['sc3_WhiteNoise'] = function(block) {
  return blk_ugen_codegen(block, 'WhiteNoise', [], true);
}
Blockly.JavaScript['sc3_Wrap'] = function(block) {
  return blk_ugen_codegen(block, 'Wrap', ['IN', 'LO', 'HI'], true);
}
Blockly.JavaScript['sc3_XFade2'] = function(block) {
  return blk_ugen_codegen(block, 'XFade2', ['INA', 'INB', 'PAN', 'LEVEL'], true);
}
Blockly.JavaScript['sc3_ZeroCrossing'] = function(block) {
  return blk_ugen_codegen(block, 'ZeroCrossing', ['IN'], true);
}
Blockly.JavaScript['sc3_DWGPluckedStiff'] = function(block) {
  return blk_ugen_codegen(block, 'DWGPluckedStiff', ['FREQ', 'AMP', 'GATE', 'POS', 'C1', 'C3', 'INP', 'RELEASE', 'FB'], true);
}
Blockly.JavaScript['sc3_GreyholeRaw'] = function(block) {
  return blk_ugen_codegen(block, 'GreyholeRaw', ['IN1', 'IN2', 'DAMPING', 'DELAYTIME', 'DIFFUSION', 'FEEDBACK', 'MODDEPTH', 'MODFREQ', 'SIZE'], true);
}
Blockly.JavaScript['sc3_MoogLadder'] = function(block) {
  return blk_ugen_codegen(block, 'MoogLadder', ['IN', 'FFREQ', 'RES'], true);
}
Blockly.JavaScript['sc3_Bezier'] = function(block) {
  return blk_ugen_codegen(block, 'Bezier', ['HALTAFTER', 'DX', 'FREQ', 'PHASE', 'PARAM'], true);
}
Blockly.JavaScript['sc3_DX7'] = function(block) {
  return blk_ugen_codegen(block, 'DX7', ['BUFNUM', 'ON', 'OFF', 'DATA', 'VC', 'MNN', 'VEL', 'PW', 'MW', 'BC', 'FC'], true);
}
Blockly.JavaScript['sc3_DustRange'] = function(block) {
  return blk_ugen_codegen(block, 'DustRange', ['IOTMIN', 'IOTMAX'], true);
}
Blockly.JavaScript['sc3_Freezer'] = function(block) {
  return blk_ugen_codegen(block, 'Freezer', ['BUFNUM', 'LEFT', 'RIGHT', 'GAIN', 'INCREMENT', 'INCREMENTOFFSET', 'INCREMENTRANDOM', 'RIGHTRANDOM', 'SYNCPHASETRIGGER', 'RANDOMIZEPHASETRIGGER', 'NUMBEROFLOOPS'], true);
}
Blockly.JavaScript['sc3_SvfBp'] = function(block) {
  return blk_ugen_codegen(block, 'SvfBp', ['IN', 'FREQ', 'Q'], true);
}
Blockly.JavaScript['sc3_SvfHp'] = function(block) {
  return blk_ugen_codegen(block, 'SvfHp', ['IN', 'FREQ', 'Q'], true);
}
Blockly.JavaScript['sc3_SvfLp'] = function(block) {
  return blk_ugen_codegen(block, 'SvfLp', ['IN', 'FREQ', 'Q'], true);
}
Blockly.JavaScript['sc3_ShufflerB'] = function(block) {
  return blk_ugen_codegen(block, 'ShufflerB', ['BUFNUM', 'READLOCATIONMINIMA', 'READLOCATIONMAXIMA', 'READINCREMENTMINIMA', 'READINCREMENTMAXIMA', 'DURATIONMINIMA', 'DURATIONMAXIMA', 'ENVELOPEAMPLITUDEMINIMA', 'ENVELOPEAMPLITUDEMAXIMA', 'ENVELOPESHAPEMINIMA', 'ENVELOPESHAPEMAXIMA', 'ENVELOPESKEWMINIMA', 'ENVELOPESKEWMAXIMA', 'STEREOLOCATIONMINIMA', 'STEREOLOCATIONMAXIMA', 'INTEROFFSETTIMEMINIMA', 'INTEROFFSETTIMEMAXIMA', 'FTABLEREADLOCATIONINCREMENT', 'READINCREMENTQUANTA', 'INTEROFFSETTIMEQUANTA'], true);
}
Blockly.JavaScript['sc3_TScramble'] = function(block) {
  return blk_ugen_codegen(block, 'TScramble', ['TRIGGER', 'INPUTS'], true);
}
Blockly.JavaScript['sc3_ADSR'] = function(block) {
  return blk_ugen_codegen(block, 'ADSR', ['GATE', 'ATTACKTIME', 'DECAYTIME', 'SUSTAINLEVEL', 'RELEASETIME', 'CURVES'], true);
}
Blockly.JavaScript['sc3_ASR'] = function(block) {
  return blk_ugen_codegen(block, 'ASR', ['GATE', 'ATTACKTIME', 'RELEASETIME', 'CURVES'], true);
}
Blockly.JavaScript['sc3_AudioIn'] = function(block) {
  return blk_ugen_codegen(block, 'AudioIn', ['CHANNELARRAY'], true);
}
Blockly.JavaScript['sc3_BufAlloc'] = function(block) {
  return blk_ugen_codegen(block, 'BufAlloc', ['NUMCHANNELS', 'NUMFRAMES'], true);
}
Blockly.JavaScript['sc3_BufRec'] = function(block) {
  return blk_ugen_codegen(block, 'BufRec', ['BUFNUM', 'RESET', 'INPUTARRAY'], true);
}
Blockly.JavaScript['sc3_Cc'] = function(block) {
  return blk_ugen_codegen(block, 'Cc', ['INDEX'], true);
}
Blockly.JavaScript['sc3_Choose'] = function(block) {
  return blk_ugen_codegen(block, 'Choose', ['REPEATS', 'ARRAY'], true);
}
Blockly.JavaScript['sc3_DmdFor'] = function(block) {
  return blk_ugen_codegen(block, 'DmdFor', ['DUR', 'RESET', 'LEVEL'], true);
}
Blockly.JavaScript['sc3_TDmdFor'] = function(block) {
  return blk_ugen_codegen(block, 'TDmdFor', ['DUR', 'RESET', 'LEVEL'], true);
}
Blockly.JavaScript['sc3_DmdOn'] = function(block) {
  return blk_ugen_codegen(block, 'DmdOn', ['TRIG', 'RESET', 'DEMANDUGENS'], true);
}
Blockly.JavaScript['sc3_InFb'] = function(block) {
  return blk_ugen_codegen(block, 'InFb', ['NUMCHANNELS', 'BUS'], true);
}
Blockly.JavaScript['sc3_LinLin'] = function(block) {
  return blk_ugen_codegen(block, 'LinLin', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
}
Blockly.JavaScript['sc3_LinSeg'] = function(block) {
  return blk_ugen_codegen(block, 'LinSeg', ['GATE', 'COORD'], true);
}
Blockly.JavaScript['sc3_Ln'] = function(block) {
  return blk_ugen_codegen(block, 'Ln', ['START', 'END', 'DUR'], true);
}
Blockly.JavaScript['sc3_PMOsc'] = function(block) {
  return blk_ugen_codegen(block, 'PMOsc', ['CARFREQ', 'MODFREQ', 'PMINDEX', 'MODPHASE'], true);
}
Blockly.JavaScript['sc3_RingzBank'] = function(block) {
  return blk_ugen_codegen(block, 'RingzBank', ['INPUT', 'FREQ', 'AMP', 'TIME'], true);
}
Blockly.JavaScript['sc3_Select2'] = function(block) {
  return blk_ugen_codegen(block, 'Select2', ['PREDICATE', 'IFTRUE', 'IFFALSE'], true);
}
Blockly.JavaScript['sc3_SelectX'] = function(block) {
  return blk_ugen_codegen(block, 'SelectX', ['WHICH', 'ARRAY'], true);
}
Blockly.JavaScript['sc3_Seq'] = function(block) {
  return blk_ugen_codegen(block, 'Seq', ['REPEATS', 'ARRAY'], true);
}
Blockly.JavaScript['sc3_Ser'] = function(block) {
  return blk_ugen_codegen(block, 'Ser', ['LENGTH', 'START', 'STEP'], true);
}
Blockly.JavaScript['sc3_SfAcquire'] = function(block) {
  return blk_ugen_codegen(block, 'SfAcquire', ['URLORKEY', 'NUMBEROFCHANNELS', 'CHANNELINDICES'], true);
}
Blockly.JavaScript['sc3_SfDur'] = function(block) {
  return blk_ugen_codegen(block, 'SfDur', ['SFBUFFERARRAY'], true);
}
Blockly.JavaScript['sc3_SfFrames'] = function(block) {
  return blk_ugen_codegen(block, 'SfFrames', ['SFBUFFERARRAY'], true);
}
Blockly.JavaScript['sc3_SfRateScale'] = function(block) {
  return blk_ugen_codegen(block, 'SfRateScale', ['SFBUFFERARRAY'], true);
}
Blockly.JavaScript['sc3_SfRead'] = function(block) {
  return blk_ugen_codegen(block, 'SfRead', ['SFBUFFERARRAY', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
}
Blockly.JavaScript['sc3_SfSampleRate'] = function(block) {
  return blk_ugen_codegen(block, 'SfSampleRate', ['SFBUFFERARRAY'], true);
}
Blockly.JavaScript['sc3_Shuf'] = function(block) {
  return blk_ugen_codegen(block, 'Shuf', ['REPEATS', 'ARRAY'], true);
}
Blockly.JavaScript['sc3_SinOscBank'] = function(block) {
  return blk_ugen_codegen(block, 'SinOscBank', ['FREQ', 'AMP', 'PHASE'], true);
}
Blockly.JavaScript['sc3_Splay'] = function(block) {
  return blk_ugen_codegen(block, 'Splay', ['INPUT', 'SPREAD', 'LEVEL', 'CENTER', 'LEVELCOMP'], true);
}
Blockly.JavaScript['sc3_Splay2'] = function(block) {
  return blk_ugen_codegen(block, 'Splay2', ['INARRAY'], true);
}
Blockly.JavaScript['sc3_Sw'] = function(block) {
  return blk_ugen_codegen(block, 'Sw', ['INDEX'], true);
}
Blockly.JavaScript['sc3_TChoose'] = function(block) {
  return blk_ugen_codegen(block, 'TChoose', ['TRIG', 'ARRAY'], true);
}
Blockly.JavaScript['sc3_TLine'] = function(block) {
  return blk_ugen_codegen(block, 'TLine', ['START', 'END', 'DUR', 'TRIG'], true);
}
Blockly.JavaScript['sc3_TXLine'] = function(block) {
  return blk_ugen_codegen(block, 'TXLine', ['START', 'END', 'DUR', 'TRIG'], true);
}
Blockly.JavaScript['sc3_XLn'] = function(block) {
  return blk_ugen_codegen(block, 'XLn', ['START', 'END', 'DUR'], true);
}
