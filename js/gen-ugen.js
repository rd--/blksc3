// AUTOGEN
// deno-fmt-ignore-file

import { blkUgenCodeGen } from './gen.js'

export function initCodeGenUgen(Blockly) {

Blockly.JavaScript.forBlock['sc3_AllpassC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'AllpassC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_AllpassL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'AllpassL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_AmpComp'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'AmpComp', ['FREQ', 'ROOT', 'EXP'], true);
};
Blockly.JavaScript.forBlock['sc3_Amplitude'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Amplitude', ['IN', 'ATTACKTIME', 'RELEASETIME'], true);
};
Blockly.JavaScript.forBlock['sc3_BBandPass'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BBandPass', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['sc3_BBandStop'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BBandStop', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['sc3_BLowPass'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BLowPass', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_BPF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Bpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_BPZ2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Bpz2', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_BRF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Brf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_EqBalance2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'EqBalance2', ['LEFT', 'RIGHT', 'POS'], true);
};
Blockly.JavaScript.forBlock['sc3_Blip'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Blip', ['FREQ', 'NUMHARM'], true);
};
Blockly.JavaScript.forBlock['sc3_BrownNoise'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BrownNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_BufDur'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BufDur', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_BufFrames'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BufFrames', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_BufRateScale'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BufRateScale', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_BufRd'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BufRd', ['NUMCHANNELS', 'BUFNUM', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['sc3_Clip'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Clip', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_CombC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'CombC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_CombL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'CombL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_CombN'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'CombN', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Crackle'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Crackle', ['CHAOSPARAM'], true);
};
Blockly.JavaScript.forBlock['sc3_Decay'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Decay', ['IN', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Decay2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Decay2', ['IN', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_DegreeToKey'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'DegreeToKey', ['BUFNUM', 'IN', 'OCTAVE'], true);
};
Blockly.JavaScript.forBlock['sc3_DelayC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'DelayC', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_DelayL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'DelayL', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_DelayN'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'DelayN', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Dust'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Dust', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dust2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Dust2', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['sc3_EqPan2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'EqPan2', ['IN', 'POS'], true);
};
Blockly.JavaScript.forBlock['sc3_ExpRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ExpRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_FBSineC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'FbSineC', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['sc3_FBSineL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'FbSineL', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['sc3_FFT'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Fft', ['BUFFER', 'IN', 'HOP', 'WINTYPE', 'ACTIVE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_Fold'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Fold', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_Formant'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Formant', ['FUNDFREQ', 'FORMFREQ', 'BWFREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_Formlet'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Formlet', ['IN', 'FREQ', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_FreeVerb'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'FreeVerb', ['IN', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['sc3_FreeVerb2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'FreeVerb2', ['IN', 'IN2', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['sc3_FreqShift'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'FreqShift', ['IN', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_GVerb'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'GVerb', ['IN', 'ROOMSIZE', 'REVTIME', 'DAMPING', 'INPUTBW', 'SPREAD', 'DRYLEVEL', 'EARLYREFLEVEL', 'TAILLEVEL', 'MAXROOMSIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_Gendy1'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Gendy1', ['AMPDIST', 'DURDIST', 'ADPARAM', 'DDPARAM', 'MINFREQ', 'MAXFREQ', 'AMPSCALE', 'DURSCALE', 'INITCPS', 'KNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_GrainFM'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'GrainFm', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'CARFREQ', 'MODFREQ', 'INDEX', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['sc3_GrainSin'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'GrainSin', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'FREQ', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['sc3_GrayNoise'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'GrayNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_HPF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Hpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_HPZ1'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Hpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Hasher'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Hasher', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_HenonC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'HenonC', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['sc3_HenonL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'HenonL', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['sc3_IFFT'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Ifft', ['BUFFER', 'WINTYPE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_IRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'IRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_Impulse'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Impulse', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_Index'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Index', ['BUFNUM', 'IN'], true);
};
Blockly.JavaScript.forBlock['sc3_K2A'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'K2A', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyState'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'KeyState', ['KEYCODE', 'MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_LFClipNoise'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfClipNoise', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFCub'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfCub', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LFDNoise1'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfdNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFDNoise3'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfdNoise3', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFGauss'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfGauss', ['DURATION', 'WIDTH', 'IPHASE', 'LOOP', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['sc3_LFNoise0'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfNoise0', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFNoise1'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFNoise2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfNoise2', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFPar'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfPar', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LFPulse'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfPulse', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['sc3_LFSaw'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfSaw', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LFTri'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LfTri', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LPF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Lpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LPZ1'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Lpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Lag', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Lag2', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag3'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Lag3', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag3UD'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Lag3Ud', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['sc3_LagUD'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LagUd', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['sc3_Latch'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Latch', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_LeakDC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LeakDc', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['sc3_Limiter'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Limiter', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_LinExp'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LinExp', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['sc3_LinPan2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LinPan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_LinRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LinRand', ['LO', 'HI', 'MINMAX'], true);
};
Blockly.JavaScript.forBlock['sc3_LinXFade2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LinXFade2', ['INA', 'INB', 'PAN'], true);
};
Blockly.JavaScript.forBlock['sc3_Linen'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Linen', ['GATE', 'ATTACKTIME', 'SUSLEVEL', 'RELEASETIME', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['sc3_LocalIn'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LocalIn', ['NUMCHANNELS', 'DEFAULT'], true);
};
Blockly.JavaScript.forBlock['sc3_LocalOut'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LocalOut', ['CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['sc3_LorenzL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LorenzL', ['FREQ', 'S', 'R', 'B', 'H', 'XI', 'YI', 'ZI'], true);
};
Blockly.JavaScript.forBlock['sc3_MantissaMask'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'MantissaMask', ['IN', 'BITS'], true);
};
Blockly.JavaScript.forBlock['sc3_ModDif'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ModDif', ['X', 'Y', 'MOD'], true);
};
Blockly.JavaScript.forBlock['sc3_MoogFF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'MoogFf', ['IN', 'FREQ', 'GAIN', 'RESET'], true);
};
Blockly.JavaScript.forBlock['sc3_MouseButton'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'MouseButton', ['MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_MouseX'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'MouseX', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_MouseY'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'MouseY', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_NRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'NRand', ['LO', 'HI', 'N'], true);
};
Blockly.JavaScript.forBlock['sc3_Normalizer'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Normalizer', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_OnePole'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'OnePole', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['sc3_Osc'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Osc', ['BUFNUM', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_Out'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Out', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['sc3_PV_RandComb'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PvRandComb', ['BUFFER', 'WIPE', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_Pan2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Pan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_PanAz'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PanAz', ['NUMCHANNELS', 'IN', 'POS', 'LEVEL', 'WIDTH', 'ORIENTATION'], true);
};
Blockly.JavaScript.forBlock['sc3_Phasor'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Phasor', ['TRIG', 'RATE', 'START', 'END', 'RESETPOS'], true);
};
Blockly.JavaScript.forBlock['sc3_PinkNoise'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PinkNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_Pitch'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Pitch', ['IN', 'INITFREQ', 'MINFREQ', 'MAXFREQ', 'EXECFREQ', 'MAXBINSPEROCTAVE', 'MEDIAN', 'AMPTHRESHOLD', 'PEAKTHRESHOLD', 'DOWNSAMPLE', 'CLAR'], true);
};
Blockly.JavaScript.forBlock['sc3_PitchShift'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PitchShift', ['IN', 'WINDOWSIZE', 'PITCHRATIO', 'PITCHDISPERSION', 'TIMEDISPERSION'], true);
};
Blockly.JavaScript.forBlock['sc3_Pluck'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Pluck', ['IN', 'TRIG', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME', 'COEF'], true);
};
Blockly.JavaScript.forBlock['sc3_Pulse'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Pulse', ['FREQ', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['sc3_PulseCount'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PulseCount', ['TRIG', 'RESET'], true);
};
Blockly.JavaScript.forBlock['sc3_PulseDivider'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PulseDivider', ['TRIG', 'DIV', 'START'], true);
};
Blockly.JavaScript.forBlock['sc3_QuadC'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'QuadC', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['sc3_QuadL'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'QuadL', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['sc3_RHPF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Rhpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_RLPF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Rlpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_Rand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Rand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_ReplaceOut'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ReplaceOut', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['sc3_Resonz'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Resonz', ['IN', 'FREQ', 'BWR'], true);
};
Blockly.JavaScript.forBlock['sc3_Ringz'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Ringz', ['IN', 'FREQ', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Rotate2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Rotate2', ['X', 'Y', 'POS'], true);
};
Blockly.JavaScript.forBlock['sc3_RunningMax'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'RunningMax', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_SampleRate'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SampleRate', [], true);
};
Blockly.JavaScript.forBlock['sc3_Saw'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Saw', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_Select'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Select', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Sequencer'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Sequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_ImpulseSequencer'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ImpulseSequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_SinOsc'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SinOsc', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_SinOscFB'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SinOscFb', ['FREQ', 'FEEDBACK'], true);
};
Blockly.JavaScript.forBlock['sc3_Slew'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Slew', ['IN', 'UP', 'DN'], true);
};
Blockly.JavaScript.forBlock['sc3_Slope'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Slope', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Stepper'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Stepper', ['TRIG', 'RESET', 'MIN', 'MAX', 'STEP', 'RESETVAL'], true);
};
Blockly.JavaScript.forBlock['sc3_Sweep'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Sweep', ['TRIG', 'RATE'], true);
};
Blockly.JavaScript.forBlock['sc3_SyncSaw'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SyncSaw', ['SYNCFREQ', 'SAWFREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_TExpRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TExpRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_TGrains'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TGrains', ['NUMCHANNELS', 'TRIGGER', 'BUFNUM', 'RATE', 'CENTERPOS', 'DUR', 'PAN', 'AMP', 'INTERP'], true);
};
Blockly.JavaScript.forBlock['sc3_TIRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TiRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_TRand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_ToggleFF'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ToggleFf', ['TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_Trig'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Trig', ['IN', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_TwoPole'] = function(block) {
  return blkUgenCodeGen(Blockly, block, 'TwoPole', ['IN', 'FREQ', 'RADIUS'], true);
};
Blockly.JavaScript.forBlock['sc3_VarLag'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'VarLag', ['IN', 'TIME', 'CURVATURE'], true);
};
Blockly.JavaScript.forBlock['sc3_VarSaw'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'VarSaw', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['sc3_WhiteNoise'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'WhiteNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_Wrap'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Wrap', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_XFade2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'XFade2', ['INA', 'INB', 'PAN', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_ZeroCrossing'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ZeroCrossing', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Bezier'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Bezier', ['HALTAFTER', 'DX', 'FREQ', 'PHASE', 'PARAM'], true);
};
Blockly.JavaScript.forBlock['sc3_DWGPluckedStiff'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'DwgPluckedStiff', ['FREQ', 'AMP', 'GATE', 'POS', 'C1', 'C3', 'INP', 'RELEASE', 'FB'], true);
};
Blockly.JavaScript.forBlock['sc3_DustRange'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'DustRange', ['IOTMIN', 'IOTMAX'], true);
};
Blockly.JavaScript.forBlock['sc3_Dx7'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Dx7', ['BUFNUM', 'ON', 'OFF', 'DATA', 'VC', 'MNN', 'VEL', 'PW', 'MW', 'BC', 'FC'], true);
};
Blockly.JavaScript.forBlock['sc3_Freezer'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Freezer', ['BUFNUM', 'LEFT', 'RIGHT', 'GAIN', 'INCREMENT', 'INCREMENTOFFSET', 'INCREMENTRANDOM', 'RIGHTRANDOM', 'SYNCPHASETRIGGER', 'RANDOMIZEPHASETRIGGER', 'NUMBEROFLOOPS'], true);
};
Blockly.JavaScript.forBlock['sc3_GreyholeRaw'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'GreyholeRaw', ['IN1', 'IN2', 'DAMPING', 'DELAYTIME', 'DIFFUSION', 'FEEDBACK', 'MODDEPTH', 'MODFREQ', 'SIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_MoogLadder'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'MoogLadder', ['IN', 'FFREQ', 'RES'], true);
};
Blockly.JavaScript.forBlock['sc3_ShufflerB'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'ShufflerB', ['BUFNUM', 'READLOCATIONMINIMA', 'READLOCATIONMAXIMA', 'READINCREMENTMINIMA', 'READINCREMENTMAXIMA', 'DURATIONMINIMA', 'DURATIONMAXIMA', 'ENVELOPEAMPLITUDEMINIMA', 'ENVELOPEAMPLITUDEMAXIMA', 'ENVELOPESHAPEMINIMA', 'ENVELOPESHAPEMAXIMA', 'ENVELOPESKEWMINIMA', 'ENVELOPESKEWMAXIMA', 'STEREOLOCATIONMINIMA', 'STEREOLOCATIONMAXIMA', 'INTEROFFSETTIMEMINIMA', 'INTEROFFSETTIMEMAXIMA', 'FTABLEREADLOCATIONINCREMENT', 'READINCREMENTQUANTA', 'INTEROFFSETTIMEQUANTA'], true);
};
Blockly.JavaScript.forBlock['sc3_SvfBp'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SvfBp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['sc3_SvfHp'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SvfHp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['sc3_SvfLp'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SvfLp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['sc3_TScramble'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TScramble', ['TRIGGER', 'INPUTS'], true);
};
Blockly.JavaScript.forBlock['sc3_VOSIM'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Vosim', ['TRIG', 'FREQ', 'NCYCLES', 'DECAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Adsr'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Adsr', ['GATE', 'ATTACKTIME', 'DECAYTIME', 'SUSTAINLEVEL', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['sc3_Asr'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Asr', ['GATE', 'ATTACKTIME', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['sc3_AudioIn'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'AudioIn', ['CHANNELARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_BufAlloc'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BufAlloc', ['NUMCHANNELS', 'NUMFRAMES'], true);
};
Blockly.JavaScript.forBlock['sc3_BufRec'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'BufRec', ['BUFNUM', 'RESET', 'INPUTARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Cc'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Cc', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['sc3_Drand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Drand', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Duty'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Duty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_TDuty'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TDuty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_Demand'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Demand', ['TRIG', 'RESET', 'DEMANDUGENS'], true);
};
Blockly.JavaScript.forBlock['sc3_InFb'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'InFb', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyDown'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'KeyDown', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyPitch'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'KeyPitch', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyVelocity'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'KeyVelocity', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyTimbre'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'KeyTimbre', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_LinLin'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LinLin', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['sc3_LinSeg'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'LinSeg', ['GATE', 'COORD'], true);
};
Blockly.JavaScript.forBlock['sc3_Line'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Line', ['START', 'END', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_PMOsc'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'PmOsc', ['CARFREQ', 'MODFREQ', 'PMINDEX', 'MODPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_RingzBank'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'RingzBank', ['INPUT', 'FREQ', 'AMP', 'TIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Select2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Select2', ['PREDICATE', 'IFTRUE', 'IFFALSE'], true);
};
Blockly.JavaScript.forBlock['sc3_SelectX'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SelectX', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dseq'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Dseq', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dseries'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Dseries', ['LENGTH', 'START', 'STEP'], true);
};
Blockly.JavaScript.forBlock['sc3_SfAcquire'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfAcquire', ['URLORKEY', 'NUMBEROFCHANNELS', 'CHANNELINDICES'], true);
};
Blockly.JavaScript.forBlock['sc3_SfDur'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfDur', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SfFrames'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfFrames', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SfPlay'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfPlay', ['SFBUFFERARRAY', 'RATE', 'TRIGGER', 'STARTPOS', 'LOOP'], true);
};
Blockly.JavaScript.forBlock['sc3_SfRateScale'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfRateScale', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SfRead'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfRead', ['SFBUFFERARRAY', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['sc3_SfSampleRate'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SfSampleRate', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dshuf'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Dshuf', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SinOscBank'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'SinOscBank', ['FREQ', 'AMP', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_Splay2'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Splay2', ['INPUT', 'SPREAD', 'LEVEL', 'CENTER', 'LEVELCOMP'], true);
};
Blockly.JavaScript.forBlock['sc3_Splay'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Splay', ['INARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Sw'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'Sw', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['sc3_TChoose'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TChoose', ['TRIG', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_TLine'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_TxLine'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'TxLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_XLine'] = function(block) {
	return blkUgenCodeGen(Blockly, block, 'XLine', ['START', 'END', 'DUR'], true);
};

}
