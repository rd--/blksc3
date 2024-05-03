// AUTOGEN

import { blkUgenCodeGen } from './gen.js'

export function initCodeGenUgen(blk) {

Blockly.JavaScript.forBlock['sc3_AllpassC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'AllpassC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_AllpassL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'AllpassL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_AmpComp'] = function(block) {
	return blkUgenCodeGen(blk, block, 'AmpComp', ['FREQ', 'ROOT', 'EXP'], true);
};
Blockly.JavaScript.forBlock['sc3_Amplitude'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Amplitude', ['IN', 'ATTACKTIME', 'RELEASETIME'], true);
};
Blockly.JavaScript.forBlock['sc3_BBandPass'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BBandPass', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['sc3_BBandStop'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BBandStop', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['sc3_BLowPass'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BLowPass', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_BPF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Bpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_BPZ2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Bpz2', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_BRF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Brf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_EqBalance2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'EqBalance2', ['LEFT', 'RIGHT', 'POS'], true);
};
Blockly.JavaScript.forBlock['sc3_Blip'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Blip', ['FREQ', 'NUMHARM'], true);
};
Blockly.JavaScript.forBlock['sc3_BrownNoise'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BrownNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_BufDur'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BufDur', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_BufFrames'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BufFrames', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_BufRateScale'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BufRateScale', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_BufRd'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BufRd', ['NUMCHANNELS', 'BUFNUM', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['sc3_Clip'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Clip', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_CombC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'CombC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_CombL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'CombL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_CombN'] = function(block) {
	return blkUgenCodeGen(blk, block, 'CombN', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Crackle'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Crackle', ['CHAOSPARAM'], true);
};
Blockly.JavaScript.forBlock['sc3_Decay'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Decay', ['IN', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Decay2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Decay2', ['IN', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_DegreeToKey'] = function(block) {
	return blkUgenCodeGen(blk, block, 'DegreeToKey', ['BUFNUM', 'IN', 'OCTAVE'], true);
};
Blockly.JavaScript.forBlock['sc3_DelayC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'DelayC', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_DelayL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'DelayL', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_DelayN'] = function(block) {
	return blkUgenCodeGen(blk, block, 'DelayN', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Dust'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Dust', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dust2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Dust2', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['sc3_EqPan2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'EqPan2', ['IN', 'POS'], true);
};
Blockly.JavaScript.forBlock['sc3_ExpRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'ExpRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_FBSineC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'FbSineC', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['sc3_FBSineL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'FbSineL', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['sc3_FFT'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Fft', ['BUFFER', 'IN', 'HOP', 'WINTYPE', 'ACTIVE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_Fold'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Fold', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_Formant'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Formant', ['FUNDFREQ', 'FORMFREQ', 'BWFREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_Formlet'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Formlet', ['IN', 'FREQ', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_FreeVerb'] = function(block) {
	return blkUgenCodeGen(blk, block, 'FreeVerb', ['IN', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['sc3_FreeVerb2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'FreeVerb2', ['IN', 'IN2', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['sc3_FreqShift'] = function(block) {
	return blkUgenCodeGen(blk, block, 'FreqShift', ['IN', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_GVerb'] = function(block) {
	return blkUgenCodeGen(blk, block, 'GVerb', ['IN', 'ROOMSIZE', 'REVTIME', 'DAMPING', 'INPUTBW', 'SPREAD', 'DRYLEVEL', 'EARLYREFLEVEL', 'TAILLEVEL', 'MAXROOMSIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_Gendy1'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Gendy1', ['AMPDIST', 'DURDIST', 'ADPARAM', 'DDPARAM', 'MINFREQ', 'MAXFREQ', 'AMPSCALE', 'DURSCALE', 'INITCPS', 'KNUM'], true);
};
Blockly.JavaScript.forBlock['sc3_GrainFM'] = function(block) {
	return blkUgenCodeGen(blk, block, 'GrainFm', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'CARFREQ', 'MODFREQ', 'INDEX', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['sc3_GrainSin'] = function(block) {
	return blkUgenCodeGen(blk, block, 'GrainSin', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'FREQ', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['sc3_GrayNoise'] = function(block) {
	return blkUgenCodeGen(blk, block, 'GrayNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_HPF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Hpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_HPZ1'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Hpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Hasher'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Hasher', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_HenonC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'HenonC', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['sc3_HenonL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'HenonL', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['sc3_IFFT'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Ifft', ['BUFFER', 'WINTYPE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_IRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'IRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_Impulse'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Impulse', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_Index'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Index', ['BUFNUM', 'IN'], true);
};
Blockly.JavaScript.forBlock['sc3_K2A'] = function(block) {
	return blkUgenCodeGen(blk, block, 'K2A', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyState'] = function(block) {
	return blkUgenCodeGen(blk, block, 'KeyState', ['KEYCODE', 'MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_LFClipNoise'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfClipNoise', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFCub'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfCub', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LFDNoise1'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfdNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFDNoise3'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfdNoise3', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFGauss'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfGauss', ['DURATION', 'WIDTH', 'IPHASE', 'LOOP', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['sc3_LFNoise0'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfNoise0', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFNoise1'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFNoise2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfNoise2', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LFPar'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfPar', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LFPulse'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfPulse', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['sc3_LFSaw'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfSaw', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LFTri'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LfTri', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_LPF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Lpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_LPZ1'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Lpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Lag', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Lag2', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag3'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Lag3', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Lag3UD'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Lag3Ud', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['sc3_LagUD'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LagUd', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['sc3_Latch'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Latch', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_LeakDC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LeakDc', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['sc3_Limiter'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Limiter', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_LinExp'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LinExp', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['sc3_LinPan2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LinPan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_LinRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LinRand', ['LO', 'HI', 'MINMAX'], true);
};
Blockly.JavaScript.forBlock['sc3_LinXFade2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LinXFade2', ['INA', 'INB', 'PAN'], true);
};
Blockly.JavaScript.forBlock['sc3_Linen'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Linen', ['GATE', 'ATTACKTIME', 'SUSLEVEL', 'RELEASETIME', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['sc3_LocalIn'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LocalIn', ['NUMCHANNELS', 'DEFAULT'], true);
};
Blockly.JavaScript.forBlock['sc3_LocalOut'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LocalOut', ['CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['sc3_LorenzL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LorenzL', ['FREQ', 'S', 'R', 'B', 'H', 'XI', 'YI', 'ZI'], true);
};
Blockly.JavaScript.forBlock['sc3_MantissaMask'] = function(block) {
	return blkUgenCodeGen(blk, block, 'MantissaMask', ['IN', 'BITS'], true);
};
Blockly.JavaScript.forBlock['sc3_MoogFF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'MoogFf', ['IN', 'FREQ', 'GAIN', 'RESET'], true);
};
Blockly.JavaScript.forBlock['sc3_MouseButton'] = function(block) {
	return blkUgenCodeGen(blk, block, 'MouseButton', ['MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_MouseX'] = function(block) {
	return blkUgenCodeGen(blk, block, 'MouseX', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_MouseY'] = function(block) {
	return blkUgenCodeGen(blk, block, 'MouseY', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['sc3_NRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'NRand', ['LO', 'HI', 'N'], true);
};
Blockly.JavaScript.forBlock['sc3_Normalizer'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Normalizer', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_OnePole'] = function(block) {
	return blkUgenCodeGen(blk, block, 'OnePole', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['sc3_Osc'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Osc', ['BUFNUM', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_Out'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Out', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['sc3_PV_RandComb'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PvRandComb', ['BUFFER', 'WIPE', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_Pan2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Pan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_PanAz'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PanAz', ['NUMCHANNELS', 'IN', 'POS', 'LEVEL', 'WIDTH', 'ORIENTATION'], true);
};
Blockly.JavaScript.forBlock['sc3_Phasor'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Phasor', ['TRIG', 'RATE', 'START', 'END', 'RESETPOS'], true);
};
Blockly.JavaScript.forBlock['sc3_PinkNoise'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PinkNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_Pitch'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Pitch', ['IN', 'INITFREQ', 'MINFREQ', 'MAXFREQ', 'EXECFREQ', 'MAXBINSPEROCTAVE', 'MEDIAN', 'AMPTHRESHOLD', 'PEAKTHRESHOLD', 'DOWNSAMPLE', 'CLAR'], true);
};
Blockly.JavaScript.forBlock['sc3_PitchShift'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PitchShift', ['IN', 'WINDOWSIZE', 'PITCHRATIO', 'PITCHDISPERSION', 'TIMEDISPERSION'], true);
};
Blockly.JavaScript.forBlock['sc3_Pluck'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Pluck', ['IN', 'TRIG', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME', 'COEF'], true);
};
Blockly.JavaScript.forBlock['sc3_Pulse'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Pulse', ['FREQ', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['sc3_PulseCount'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PulseCount', ['TRIG', 'RESET'], true);
};
Blockly.JavaScript.forBlock['sc3_PulseDivider'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PulseDivider', ['TRIG', 'DIV', 'START'], true);
};
Blockly.JavaScript.forBlock['sc3_QuadC'] = function(block) {
	return blkUgenCodeGen(blk, block, 'QuadC', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['sc3_QuadL'] = function(block) {
	return blkUgenCodeGen(blk, block, 'QuadL', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['sc3_RHPF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Rhpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_RLPF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Rlpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['sc3_Rand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Rand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_ReplaceOut'] = function(block) {
	return blkUgenCodeGen(blk, block, 'ReplaceOut', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['sc3_Resonz'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Resonz', ['IN', 'FREQ', 'BWR'], true);
};
Blockly.JavaScript.forBlock['sc3_Ringz'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Ringz', ['IN', 'FREQ', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Rotate2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Rotate2', ['X', 'Y', 'POS'], true);
};
Blockly.JavaScript.forBlock['sc3_RunningMax'] = function(block) {
	return blkUgenCodeGen(blk, block, 'RunningMax', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_SampleRate'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SampleRate', [], true);
};
Blockly.JavaScript.forBlock['sc3_Saw'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Saw', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_Select'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Select', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Sequencer'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Sequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_ImpulseSequencer'] = function(block) {
	return blkUgenCodeGen(blk, block, 'ImpulseSequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_SinOsc'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SinOsc', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_SinOscFB'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SinOscFb', ['FREQ', 'FEEDBACK'], true);
};
Blockly.JavaScript.forBlock['sc3_Slew'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Slew', ['IN', 'UP', 'DN'], true);
};
Blockly.JavaScript.forBlock['sc3_Slope'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Slope', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Stepper'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Stepper', ['TRIG', 'RESET', 'MIN', 'MAX', 'STEP', 'RESETVAL'], true);
};
Blockly.JavaScript.forBlock['sc3_Sweep'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Sweep', ['TRIG', 'RATE'], true);
};
Blockly.JavaScript.forBlock['sc3_SyncSaw'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SyncSaw', ['SYNCFREQ', 'SAWFREQ'], true);
};
Blockly.JavaScript.forBlock['sc3_TExpRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TExpRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_TGrains'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TGrains', ['NUMCHANNELS', 'TRIGGER', 'BUFNUM', 'RATE', 'CENTERPOS', 'DUR', 'PAN', 'AMP', 'INTERP'], true);
};
Blockly.JavaScript.forBlock['sc3_TIRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TiRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_TRand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_ToggleFF'] = function(block) {
	return blkUgenCodeGen(blk, block, 'ToggleFf', ['TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_Trig'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Trig', ['IN', 'DUR'], true);
};
Blockly.JavaScript['sc3_TwoPole'] = function(block) {
  return blkUgenCodeGen(blk, block, 'TwoPole', ['IN', 'FREQ', 'RADIUS'], true);
};
Blockly.JavaScript.forBlock['sc3_VarLag'] = function(block) {
	return blkUgenCodeGen(blk, block, 'VarLag', ['IN', 'TIME', 'CURVATURE'], true);
};
Blockly.JavaScript.forBlock['sc3_VarSaw'] = function(block) {
	return blkUgenCodeGen(blk, block, 'VarSaw', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['sc3_WhiteNoise'] = function(block) {
	return blkUgenCodeGen(blk, block, 'WhiteNoise', [], true);
};
Blockly.JavaScript.forBlock['sc3_Wrap'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Wrap', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['sc3_XFade2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'XFade2', ['INA', 'INB', 'PAN', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_ZeroCrossing'] = function(block) {
	return blkUgenCodeGen(blk, block, 'ZeroCrossing', ['IN'], true);
};
Blockly.JavaScript.forBlock['sc3_Bezier'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Bezier', ['HALTAFTER', 'DX', 'FREQ', 'PHASE', 'PARAM'], true);
};
Blockly.JavaScript.forBlock['sc3_DWGPluckedStiff'] = function(block) {
	return blkUgenCodeGen(blk, block, 'DwgPluckedStiff', ['FREQ', 'AMP', 'GATE', 'POS', 'C1', 'C3', 'INP', 'RELEASE', 'FB'], true);
};
Blockly.JavaScript.forBlock['sc3_DustRange'] = function(block) {
	return blkUgenCodeGen(blk, block, 'DustRange', ['IOTMIN', 'IOTMAX'], true);
};
Blockly.JavaScript.forBlock['sc3_Dx7'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Dx7', ['BUFNUM', 'ON', 'OFF', 'DATA', 'VC', 'MNN', 'VEL', 'PW', 'MW', 'BC', 'FC'], true);
};
Blockly.JavaScript.forBlock['sc3_Freezer'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Freezer', ['BUFNUM', 'LEFT', 'RIGHT', 'GAIN', 'INCREMENT', 'INCREMENTOFFSET', 'INCREMENTRANDOM', 'RIGHTRANDOM', 'SYNCPHASETRIGGER', 'RANDOMIZEPHASETRIGGER', 'NUMBEROFLOOPS'], true);
};
Blockly.JavaScript.forBlock['sc3_GreyholeRaw'] = function(block) {
	return blkUgenCodeGen(blk, block, 'GreyholeRaw', ['IN1', 'IN2', 'DAMPING', 'DELAYTIME', 'DIFFUSION', 'FEEDBACK', 'MODDEPTH', 'MODFREQ', 'SIZE'], true);
};
Blockly.JavaScript.forBlock['sc3_MoogLadder'] = function(block) {
	return blkUgenCodeGen(blk, block, 'MoogLadder', ['IN', 'FFREQ', 'RES'], true);
};
Blockly.JavaScript.forBlock['sc3_ShufflerB'] = function(block) {
	return blkUgenCodeGen(blk, block, 'ShufflerB', ['BUFNUM', 'READLOCATIONMINIMA', 'READLOCATIONMAXIMA', 'READINCREMENTMINIMA', 'READINCREMENTMAXIMA', 'DURATIONMINIMA', 'DURATIONMAXIMA', 'ENVELOPEAMPLITUDEMINIMA', 'ENVELOPEAMPLITUDEMAXIMA', 'ENVELOPESHAPEMINIMA', 'ENVELOPESHAPEMAXIMA', 'ENVELOPESKEWMINIMA', 'ENVELOPESKEWMAXIMA', 'STEREOLOCATIONMINIMA', 'STEREOLOCATIONMAXIMA', 'INTEROFFSETTIMEMINIMA', 'INTEROFFSETTIMEMAXIMA', 'FTABLEREADLOCATIONINCREMENT', 'READINCREMENTQUANTA', 'INTEROFFSETTIMEQUANTA'], true);
};
Blockly.JavaScript.forBlock['sc3_SvfBp'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SvfBp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['sc3_SvfHp'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SvfHp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['sc3_SvfLp'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SvfLp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['sc3_TScramble'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TScramble', ['TRIGGER', 'INPUTS'], true);
};
Blockly.JavaScript.forBlock['sc3_VOSIM'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Vosim', ['TRIG', 'FREQ', 'NCYCLES', 'DECAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Adsr'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Adsr', ['GATE', 'ATTACKTIME', 'DECAYTIME', 'SUSTAINLEVEL', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['sc3_Asr'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Asr', ['GATE', 'ATTACKTIME', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['sc3_AudioIn'] = function(block) {
	return blkUgenCodeGen(blk, block, 'AudioIn', ['CHANNELARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_BufAlloc'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BufAlloc', ['NUMCHANNELS', 'NUMFRAMES'], true);
};
Blockly.JavaScript.forBlock['sc3_BufRec'] = function(block) {
	return blkUgenCodeGen(blk, block, 'BufRec', ['BUFNUM', 'RESET', 'INPUTARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Cc'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Cc', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['sc3_Drand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Drand', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Duty'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Duty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_TDuty'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TDuty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['sc3_Demand'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Demand', ['TRIG', 'RESET', 'DEMANDUGENS'], true);
};
Blockly.JavaScript.forBlock['sc3_InFb'] = function(block) {
	return blkUgenCodeGen(blk, block, 'InFb', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyDown'] = function(block) {
	return blkUgenCodeGen(blk, block, 'KeyDown', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyPitch'] = function(block) {
	return blkUgenCodeGen(blk, block, 'KeyPitch', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyVelocity'] = function(block) {
	return blkUgenCodeGen(blk, block, 'KeyVelocity', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_KeyTimbre'] = function(block) {
	return blkUgenCodeGen(blk, block, 'KeyTimbre', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['sc3_LinLin'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LinLin', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['sc3_LinSeg'] = function(block) {
	return blkUgenCodeGen(blk, block, 'LinSeg', ['GATE', 'COORD'], true);
};
Blockly.JavaScript.forBlock['sc3_Ln'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Line', ['START', 'END', 'DUR'], true);
};
Blockly.JavaScript.forBlock['sc3_PMOsc'] = function(block) {
	return blkUgenCodeGen(blk, block, 'PmOsc', ['CARFREQ', 'MODFREQ', 'PMINDEX', 'MODPHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_RingzBank'] = function(block) {
	return blkUgenCodeGen(blk, block, 'RingzBank', ['INPUT', 'FREQ', 'AMP', 'TIME'], true);
};
Blockly.JavaScript.forBlock['sc3_Select2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Select2', ['PREDICATE', 'IFTRUE', 'IFFALSE'], true);
};
Blockly.JavaScript.forBlock['sc3_SelectX'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SelectX', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dseq'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Dseq', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dseries'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Dseries', ['LENGTH', 'START', 'STEP'], true);
};
Blockly.JavaScript.forBlock['sc3_SfAcquire'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfAcquire', ['URLORKEY', 'NUMBEROFCHANNELS', 'CHANNELINDICES'], true);
};
Blockly.JavaScript.forBlock['sc3_SfDur'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfDur', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SfFrames'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfFrames', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SfPlay'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfPlay', ['SFBUFFERARRAY', 'RATE', 'TRIGGER', 'STARTPOS', 'LOOP'], true);
};
Blockly.JavaScript.forBlock['sc3_SfRateScale'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfRateScale', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SfRead'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfRead', ['SFBUFFERARRAY', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['sc3_SfSampleRate'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SfSampleRate', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Dshuf'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Dshuf', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_SinOscBank'] = function(block) {
	return blkUgenCodeGen(blk, block, 'SinOscBank', ['FREQ', 'AMP', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['sc3_Splay2'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Splay2', ['INPUT', 'SPREAD', 'LEVEL', 'CENTER', 'LEVELCOMP'], true);
};
Blockly.JavaScript.forBlock['sc3_Splay'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Splay', ['INARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Mix'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Mix', ['INARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_Sw'] = function(block) {
	return blkUgenCodeGen(blk, block, 'Sw', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['sc3_TChoose'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TChoose', ['TRIG', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['sc3_TLine'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_TxLine'] = function(block) {
	return blkUgenCodeGen(blk, block, 'TxLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['sc3_XLn'] = function(block) {
	return blkUgenCodeGen(blk, block, 'XLine', ['START', 'END', 'DUR'], true);
};

}
