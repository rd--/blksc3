// AUTOGEN
// deno-fmt-ignore-file

import { ugenCodeGen } from './CodeGenerator.js'

export function initCodeGenUgen(Blockly) {

Blockly.JavaScript.forBlock['Sc_AllpassC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'AllpassC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_AllpassL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'AllpassL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_AmpComp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'AmpComp', ['FREQ', 'ROOT', 'EXP'], true);
};
Blockly.JavaScript.forBlock['Sc_Amplitude'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Amplitude', ['IN', 'ATTACKTIME', 'RELEASETIME'], true);
};
Blockly.JavaScript.forBlock['Sc_BBandPass'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BBandPass', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['Sc_BBandStop'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BBandStop', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['Sc_BLowPass'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BLowPass', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_BPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Bpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_BPZ2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Bpz2', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_BRF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Brf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_EqBalance2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'EqBalance2', ['LEFT', 'RIGHT', 'POS'], true);
};
Blockly.JavaScript.forBlock['Sc_Blip'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Blip', ['FREQ', 'NUMHARM'], true);
};
Blockly.JavaScript.forBlock['Sc_BrownNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BrownNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_BufDur'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BufDur', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_BufFrames'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BufFrames', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_BufRateScale'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BufRateScale', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_BufRd'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BufRd', ['NUMCHANNELS', 'BUFNUM', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['Sc_Clip'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Clip', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_CombC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'CombC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_CombL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'CombL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_CombN'] = function(block) {
	return ugenCodeGen(Blockly, block, 'CombN', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_ControlIn'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ControlIn', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript.forBlock['Sc_ControlOut'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ControlOut', ['BUS', 'CHANNELSLIST'], false);
};
Blockly.JavaScript.forBlock['Sc_Crackle'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Crackle', ['CHAOSPARAM'], true);
};
Blockly.JavaScript.forBlock['Sc_Decay'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Decay', ['IN', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Decay2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Decay2', ['IN', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_DegreeToKey'] = function(block) {
	return ugenCodeGen(Blockly, block, 'DegreeToKey', ['BUFNUM', 'IN', 'OCTAVE'], true);
};
Blockly.JavaScript.forBlock['Sc_DelayC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'DelayC', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_DelayL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'DelayL', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_DelayN'] = function(block) {
	return ugenCodeGen(Blockly, block, 'DelayN', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Dust'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Dust', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dust2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Dust2', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['Sc_EqPan2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'EqPan2', ['IN', 'POS'], true);
};
Blockly.JavaScript.forBlock['Sc_ExpRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ExpRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_FBSineC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'FbSineC', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['Sc_FBSineL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'FbSineL', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['Sc_FFT'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Fft', ['BUFFER', 'IN', 'HOP', 'WINTYPE', 'ACTIVE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_Fold'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Fold', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_Formant'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Formant', ['FUNDFREQ', 'FORMFREQ', 'BWFREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_Formlet'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Formlet', ['IN', 'FREQ', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_FreeVerb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'FreeVerb', ['IN', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['Sc_FreeVerb2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'FreeVerb2', ['IN', 'IN2', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['Sc_FreqShift'] = function(block) {
	return ugenCodeGen(Blockly, block, 'FreqShift', ['IN', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_GVerb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'GVerb', ['IN', 'ROOMSIZE', 'REVTIME', 'DAMPING', 'INPUTBW', 'SPREAD', 'DRYLEVEL', 'EARLYREFLEVEL', 'TAILLEVEL', 'MAXROOMSIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_Gendy1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Gendy1', ['AMPDIST', 'DURDIST', 'ADPARAM', 'DDPARAM', 'MINFREQ', 'MAXFREQ', 'AMPSCALE', 'DURSCALE', 'INITCPS', 'KNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_GrainFM'] = function(block) {
	return ugenCodeGen(Blockly, block, 'GrainFm', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'CARFREQ', 'MODFREQ', 'INDEX', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['Sc_GrainSin'] = function(block) {
	return ugenCodeGen(Blockly, block, 'GrainSin', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'FREQ', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['Sc_GrayNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'GrayNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_HPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Hpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_HPZ1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Hpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Hasher'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Hasher', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_HenonC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'HenonC', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['Sc_HenonL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'HenonL', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['Sc_IFFT'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Ifft', ['BUFFER', 'WINTYPE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_IRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'IRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_Impulse'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Impulse', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_Index'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Index', ['BUFNUM', 'IN'], true);
};
Blockly.JavaScript.forBlock['Sc_K2A'] = function(block) {
	return ugenCodeGen(Blockly, block, 'K2A', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyState'] = function(block) {
	return ugenCodeGen(Blockly, block, 'KeyState', ['KEYCODE', 'MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_LFClipNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfClipNoise', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFCub'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfCub', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LFDNoise1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfdNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFDNoise3'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfdNoise3', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFGauss'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfGauss', ['DURATION', 'WIDTH', 'IPHASE', 'LOOP', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['Sc_LFNoise0'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfNoise0', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFNoise1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFNoise2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfNoise2', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFPar'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfPar', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LFPulse'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfPulse', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['Sc_LFSaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfSaw', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LFTri'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LfTri', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Lpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LPZ1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Lpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Lag', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Lag2', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag3'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Lag3', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag3UD'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Lag3Ud', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['Sc_LagUD'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LagUd', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['Sc_Latch'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Latch', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_LeakDC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LeakDc', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['Sc_Limiter'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Limiter', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_LinExp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LinExp', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['Sc_LinPan2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LinPan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_LinRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LinRand', ['LO', 'HI', 'MINMAX'], true);
};
Blockly.JavaScript.forBlock['Sc_LinXFade2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LinXFade2', ['INA', 'INB', 'PAN'], true);
};
Blockly.JavaScript.forBlock['Sc_Linen'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Linen', ['GATE', 'ATTACKTIME', 'SUSLEVEL', 'RELEASETIME', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['Sc_LocalIn'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LocalIn', ['NUMCHANNELS', 'DEFAULT'], true);
};
Blockly.JavaScript.forBlock['Sc_LocalOut'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LocalOut', ['CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['Sc_LorenzL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LorenzL', ['FREQ', 'S', 'R', 'B', 'H', 'XI', 'YI', 'ZI'], true);
};
Blockly.JavaScript.forBlock['Sc_MantissaMask'] = function(block) {
	return ugenCodeGen(Blockly, block, 'MantissaMask', ['IN', 'BITS'], true);
};
Blockly.JavaScript.forBlock['Sc_ModDif'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ModDif', ['X', 'Y', 'MOD'], true);
};
Blockly.JavaScript.forBlock['Sc_MoogFF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'MoogFf', ['IN', 'FREQ', 'GAIN', 'RESET'], true);
};
Blockly.JavaScript.forBlock['Sc_MouseButton'] = function(block) {
	return ugenCodeGen(Blockly, block, 'MouseButton', ['MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_MouseX'] = function(block) {
	return ugenCodeGen(Blockly, block, 'MouseX', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_MouseY'] = function(block) {
	return ugenCodeGen(Blockly, block, 'MouseY', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_NRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'NRand', ['LO', 'HI', 'N'], true);
};
Blockly.JavaScript.forBlock['Sc_Normalizer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Normalizer', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_OnePole'] = function(block) {
	return ugenCodeGen(Blockly, block, 'OnePole', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['Sc_Osc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Osc', ['BUFNUM', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_Out'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Out', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['Sc_PV_RandComb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PvRandComb', ['BUFFER', 'WIPE', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_Pan2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Pan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_PanAz'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PanAz', ['NUMCHANNELS', 'IN', 'POS', 'LEVEL', 'WIDTH', 'ORIENTATION'], true);
};
Blockly.JavaScript.forBlock['Sc_Phasor'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Phasor', ['TRIG', 'RATE', 'START', 'END', 'RESETPOS'], true);
};
Blockly.JavaScript.forBlock['Sc_PinkNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PinkNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_Pitch'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Pitch', ['IN', 'INITFREQ', 'MINFREQ', 'MAXFREQ', 'EXECFREQ', 'MAXBINSPEROCTAVE', 'MEDIAN', 'AMPTHRESHOLD', 'PEAKTHRESHOLD', 'DOWNSAMPLE', 'CLAR'], true);
};
Blockly.JavaScript.forBlock['Sc_PitchShift'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PitchShift', ['IN', 'WINDOWSIZE', 'PITCHRATIO', 'PITCHDISPERSION', 'TIMEDISPERSION'], true);
};
Blockly.JavaScript.forBlock['Sc_Pluck'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Pluck', ['IN', 'TRIG', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME', 'COEF'], true);
};
Blockly.JavaScript.forBlock['Sc_Pulse'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Pulse', ['FREQ', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['Sc_PulseCount'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PulseCount', ['TRIG', 'RESET'], true);
};
Blockly.JavaScript.forBlock['Sc_PulseDivider'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PulseDivider', ['TRIG', 'DIV', 'START'], true);
};
Blockly.JavaScript.forBlock['Sc_QuadC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'QuadC', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['Sc_QuadL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'QuadL', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['Sc_RHPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Rhpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_RLPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Rlpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_Rand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Rand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_ReplaceOut'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ReplaceOut', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['Sc_Resonz'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Resonz', ['IN', 'FREQ', 'BWR'], true);
};
Blockly.JavaScript.forBlock['Sc_Ringz'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Ringz', ['IN', 'FREQ', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Rotate2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Rotate2', ['X', 'Y', 'POS'], true);
};
Blockly.JavaScript.forBlock['Sc_RunningMax'] = function(block) {
	return ugenCodeGen(Blockly, block, 'RunningMax', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_SampleRate'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SampleRate', [], true);
};
Blockly.JavaScript.forBlock['Sc_Saw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Saw', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_Select'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Select', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Sequencer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Sequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_ImpulseSequencer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ImpulseSequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_SinOsc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SinOsc', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_SinOscFB'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SinOscFb', ['FREQ', 'FEEDBACK'], true);
};
Blockly.JavaScript.forBlock['Sc_Slew'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Slew', ['IN', 'UP', 'DN'], true);
};
Blockly.JavaScript.forBlock['Sc_Slope'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Slope', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Stepper'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Stepper', ['TRIG', 'RESET', 'MIN', 'MAX', 'STEP', 'RESETVAL'], true);
};
Blockly.JavaScript.forBlock['Sc_Sweep'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Sweep', ['TRIG', 'RATE'], true);
};
Blockly.JavaScript.forBlock['Sc_SyncSaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SyncSaw', ['SYNCFREQ', 'SAWFREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_TExpRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TExpRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_TGrains'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TGrains', ['NUMCHANNELS', 'TRIGGER', 'BUFNUM', 'RATE', 'CENTERPOS', 'DUR', 'PAN', 'AMP', 'INTERP'], true);
};
Blockly.JavaScript.forBlock['Sc_TIRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TiRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_TRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_ToggleFF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ToggleFf', ['TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_Trig'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Trig', ['IN', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_TwoPole'] = function(block) {
  return ugenCodeGen(Blockly, block, 'TwoPole', ['IN', 'FREQ', 'RADIUS'], true);
};
Blockly.JavaScript.forBlock['Sc_VarLag'] = function(block) {
	return ugenCodeGen(Blockly, block, 'VarLag', ['IN', 'TIME', 'CURVATURE'], true);
};
Blockly.JavaScript.forBlock['Sc_VarSaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'VarSaw', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['Sc_WhiteNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'WhiteNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_Wrap'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Wrap', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_XFade2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'XFade2', ['INA', 'INB', 'PAN', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_ZeroCrossing'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ZeroCrossing', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Bezier'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Bezier', ['HALTAFTER', 'DX', 'FREQ', 'PHASE', 'PARAM'], true);
};
Blockly.JavaScript.forBlock['Sc_DWGPluckedStiff'] = function(block) {
	return ugenCodeGen(Blockly, block, 'DwgPluckedStiff', ['FREQ', 'AMP', 'GATE', 'POS', 'C1', 'C3', 'INP', 'RELEASE', 'FB'], true);
};
Blockly.JavaScript.forBlock['Sc_DustRange'] = function(block) {
	return ugenCodeGen(Blockly, block, 'DustRange', ['IOTMIN', 'IOTMAX'], true);
};
Blockly.JavaScript.forBlock['Sc_Dx7'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Dx7', ['BUFNUM', 'ON', 'OFF', 'DATA', 'VC', 'MNN', 'VEL', 'PW', 'MW', 'BC', 'FC'], true);
};
Blockly.JavaScript.forBlock['Sc_Freezer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Freezer', ['BUFNUM', 'LEFT', 'RIGHT', 'GAIN', 'INCREMENT', 'INCREMENTOFFSET', 'INCREMENTRANDOM', 'RIGHTRANDOM', 'SYNCPHASETRIGGER', 'RANDOMIZEPHASETRIGGER', 'NUMBEROFLOOPS'], true);
};
Blockly.JavaScript.forBlock['Sc_GreyholeRaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'GreyholeRaw', ['IN1', 'IN2', 'DAMPING', 'DELAYTIME', 'DIFFUSION', 'FEEDBACK', 'MODDEPTH', 'MODFREQ', 'SIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_MoogLadder'] = function(block) {
	return ugenCodeGen(Blockly, block, 'MoogLadder', ['IN', 'FFREQ', 'RES'], true);
};
Blockly.JavaScript.forBlock['Sc_ShufflerB'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ShufflerB', ['BUFNUM', 'READLOCATIONMINIMA', 'READLOCATIONMAXIMA', 'READINCREMENTMINIMA', 'READINCREMENTMAXIMA', 'DURATIONMINIMA', 'DURATIONMAXIMA', 'ENVELOPEAMPLITUDEMINIMA', 'ENVELOPEAMPLITUDEMAXIMA', 'ENVELOPESHAPEMINIMA', 'ENVELOPESHAPEMAXIMA', 'ENVELOPESKEWMINIMA', 'ENVELOPESKEWMAXIMA', 'STEREOLOCATIONMINIMA', 'STEREOLOCATIONMAXIMA', 'INTEROFFSETTIMEMINIMA', 'INTEROFFSETTIMEMAXIMA', 'FTABLEREADLOCATIONINCREMENT', 'READINCREMENTQUANTA', 'INTEROFFSETTIMEQUANTA'], true);
};
Blockly.JavaScript.forBlock['Sc_SvfBp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SvfBp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['Sc_SvfHp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SvfHp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['Sc_SvfLp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SvfLp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['Sc_TScramble'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TScramble', ['TRIGGER', 'INPUTS'], true);
};
Blockly.JavaScript.forBlock['Sc_VOSIM'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Vosim', ['TRIG', 'FREQ', 'NCYCLES', 'DECAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Adsr'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Adsr', ['GATE', 'ATTACKTIME', 'DECAYTIME', 'SUSTAINLEVEL', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['Sc_Asr'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Asr', ['GATE', 'ATTACKTIME', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['Sc_AudioIn'] = function(block) {
	return ugenCodeGen(Blockly, block, 'AudioIn', ['CHANNELARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_BufAlloc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BufAlloc', ['NUMCHANNELS', 'NUMFRAMES'], true);
};
Blockly.JavaScript.forBlock['Sc_BufRec'] = function(block) {
	return ugenCodeGen(Blockly, block, 'BufRec', ['BUFNUM', 'RESET', 'INPUTARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Cc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Cc', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['Sc_Drand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Drand', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Duty'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Duty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_TDuty'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TDuty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_Demand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Demand', ['TRIG', 'RESET', 'DEMANDUGENS'], true);
};
Blockly.JavaScript.forBlock['Sc_InFb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'InFb', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyDown'] = function(block) {
	return ugenCodeGen(Blockly, block, 'KeyDown', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyPitch'] = function(block) {
	return ugenCodeGen(Blockly, block, 'KeyPitch', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyVelocity'] = function(block) {
	return ugenCodeGen(Blockly, block, 'KeyVelocity', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyTimbre'] = function(block) {
	return ugenCodeGen(Blockly, block, 'KeyTimbre', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_LinLin'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LinLin', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['Sc_LinSeg'] = function(block) {
	return ugenCodeGen(Blockly, block, 'LinSeg', ['GATE', 'COORD'], true);
};
Blockly.JavaScript.forBlock['Sc_Line'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Line', ['START', 'END', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_PMOsc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'PmOsc', ['CARFREQ', 'MODFREQ', 'PMINDEX', 'MODPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_RingzBank'] = function(block) {
	return ugenCodeGen(Blockly, block, 'RingzBank', ['INPUT', 'FREQ', 'AMP', 'TIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Select2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Select2', ['PREDICATE', 'IFTRUE', 'IFFALSE'], true);
};
Blockly.JavaScript.forBlock['Sc_SelectX'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SelectX', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dseq'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Dseq', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dseries'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Dseries', ['LENGTH', 'START', 'STEP'], true);
};
Blockly.JavaScript.forBlock['Sc_SfAcquire'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfAcquire', ['URLORKEY', 'NUMBEROFCHANNELS', 'CHANNELINDICES'], true);
};
Blockly.JavaScript.forBlock['Sc_SfDuration'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfDuration', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SfFrames'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfFrames', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SfPlay'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfPlay', ['SFBUFFERARRAY', 'RATE', 'TRIGGER', 'STARTPOS', 'LOOP'], true);
};
Blockly.JavaScript.forBlock['Sc_SfRateScale'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfRateScale', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SfRead'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfRead', ['SFBUFFERARRAY', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['Sc_SfSampleRate'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SfSampleRate', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dshuf'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Dshuf', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SinOscBank'] = function(block) {
	return ugenCodeGen(Blockly, block, 'SinOscBank', ['FREQ', 'AMP', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_Splay2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Splay2', ['INPUT', 'SPREAD', 'LEVEL', 'CENTER', 'LEVELCOMP'], true);
};
Blockly.JavaScript.forBlock['Sc_Splay'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Splay', ['INARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Sw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'Sw', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['Sc_TChoose'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TChoose', ['TRIG', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_TLine'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_TxLine'] = function(block) {
	return ugenCodeGen(Blockly, block, 'TxLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_XLine'] = function(block) {
	return ugenCodeGen(Blockly, block, 'XLine', ['START', 'END', 'DUR'], true);
};

}
