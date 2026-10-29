// AUTOGEN
// deno-fmt-ignore-file

import { ugenCodeGen } from './CodeGenerator.js'

export function initCodeGenUgen(Blockly) {

Blockly.JavaScript.forBlock['Sc_AllpassC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'allpassC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_AllpassL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'allpassL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_AmpComp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ampComp', ['FREQ', 'ROOT', 'EXP'], true);
};
Blockly.JavaScript.forBlock['Sc_Amplitude'] = function(block) {
	return ugenCodeGen(Blockly, block, 'amplitude', ['IN', 'ATTACKTIME', 'RELEASETIME'], true);
};
Blockly.JavaScript.forBlock['Sc_BBandPass'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bBandPass', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['Sc_BBandStop'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bBandStop', ['IN', 'FREQ', 'BW'], true);
};
Blockly.JavaScript.forBlock['Sc_BLowPass'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bLowPass', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_BPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_BPZ2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bpz2', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_BRF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'brf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_EqBalance2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'eqBalance2', ['LEFT', 'RIGHT', 'POS'], true);
};
Blockly.JavaScript.forBlock['Sc_Blip'] = function(block) {
	return ugenCodeGen(Blockly, block, 'blip', ['FREQ', 'NUMHARM'], true);
};
Blockly.JavaScript.forBlock['Sc_BrownNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'brownNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_BufDur'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufDur', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_BufFrames'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufFrames', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_BufRateScale'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufRateScale', ['BUFNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_BufRd'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufRd', ['NUMCHANNELS', 'BUFNUM', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['Sc_Clip'] = function(block) {
	return ugenCodeGen(Blockly, block, 'clip', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_ClipNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'clipNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_CombC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'combC', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_CombL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'combL', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_CombN'] = function(block) {
	return ugenCodeGen(Blockly, block, 'combN', ['IN', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_ControlIn'] = function(block) {
	return ugenCodeGen(Blockly, block, 'controlIn', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript.forBlock['Sc_ControlOut'] = function(block) {
	return ugenCodeGen(Blockly, block, 'controlOut', ['BUS', 'CHANNELSLIST'], false);
};
Blockly.JavaScript.forBlock['Sc_Crackle'] = function(block) {
	return ugenCodeGen(Blockly, block, 'crackle', ['CHAOSPARAM'], true);
};
Blockly.JavaScript.forBlock['Sc_Decay'] = function(block) {
	return ugenCodeGen(Blockly, block, 'decay', ['IN', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Decay2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'decay2', ['IN', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_DegreeToKey'] = function(block) {
	return ugenCodeGen(Blockly, block, 'degreeToKey', ['BUFNUM', 'IN', 'OCTAVE'], true);
};
Blockly.JavaScript.forBlock['Sc_DelayC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'delayC', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_DelayL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'delayL', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_DelayN'] = function(block) {
	return ugenCodeGen(Blockly, block, 'delayN', ['IN', 'MAXDELAYTIME', 'DELAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Dust'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dust', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dust2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dust2', ['DENSITY'], true);
};
Blockly.JavaScript.forBlock['Sc_EqPan2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'eqPan2', ['IN', 'POS'], true);
};
Blockly.JavaScript.forBlock['Sc_ExpRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'expRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_FBSineC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'fbSineC', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['Sc_FBSineL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'fbSineL', ['FREQ', 'IM', 'FB', 'A', 'C', 'XI', 'YI'], true);
};
Blockly.JavaScript.forBlock['Sc_FFT'] = function(block) {
	return ugenCodeGen(Blockly, block, 'fft', ['BUFFER', 'IN', 'HOP', 'WINTYPE', 'ACTIVE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_Fold'] = function(block) {
	return ugenCodeGen(Blockly, block, 'fold', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_Formant'] = function(block) {
	return ugenCodeGen(Blockly, block, 'formant', ['FUNDFREQ', 'FORMFREQ', 'BWFREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_Formlet'] = function(block) {
	return ugenCodeGen(Blockly, block, 'formlet', ['IN', 'FREQ', 'ATTACKTIME', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_FreeVerb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'freeVerb', ['IN', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['Sc_FreeVerb2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'freeVerb2', ['IN', 'IN2', 'MIX', 'ROOM', 'DAMP'], true);
};
Blockly.JavaScript.forBlock['Sc_FreqShift'] = function(block) {
	return ugenCodeGen(Blockly, block, 'freqShift', ['IN', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_GVerb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'gVerb', ['IN', 'ROOMSIZE', 'REVTIME', 'DAMPING', 'INPUTBW', 'SPREAD', 'DRYLEVEL', 'EARLYREFLEVEL', 'TAILLEVEL', 'MAXROOMSIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_Gendy1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'gendy1', ['AMPDIST', 'DURDIST', 'ADPARAM', 'DDPARAM', 'MINFREQ', 'MAXFREQ', 'AMPSCALE', 'DURSCALE', 'INITCPS', 'KNUM'], true);
};
Blockly.JavaScript.forBlock['Sc_GrainFM'] = function(block) {
	return ugenCodeGen(Blockly, block, 'grainFm', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'CARFREQ', 'MODFREQ', 'INDEX', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['Sc_GrainSin'] = function(block) {
	return ugenCodeGen(Blockly, block, 'grainSin', ['NUMCHANNELS', 'TRIGGER', 'DUR', 'FREQ', 'PAN', 'ENVBUFNUM', 'MAXGRAINS'], true);
};
Blockly.JavaScript.forBlock['Sc_GreyNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'greyNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_HPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'hpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_HPZ1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'hpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Hasher'] = function(block) {
	return ugenCodeGen(Blockly, block, 'hasher', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_HenonC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'henonC', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['Sc_HenonL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'henonL', ['FREQ', 'A', 'B', 'X0', 'X1'], true);
};
Blockly.JavaScript.forBlock['Sc_IFFT'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ifft', ['BUFFER', 'WINTYPE', 'WINSIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_Index'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufIndexClip', ['BUFNUM', 'IN'], true);
};
Blockly.JavaScript.forBlock['Sc_IRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'iRand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_Impulse'] = function(block) {
	return ugenCodeGen(Blockly, block, 'impulse', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_K2A'] = function(block) {
	return ugenCodeGen(Blockly, block, 'k2A', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyState'] = function(block) {
	return ugenCodeGen(Blockly, block, 'keyState', ['KEYCODE', 'MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_LFClipNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfClipNoise', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFCub'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfCub', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LFDNoise1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfdNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFDNoise3'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfdNoise3', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFGauss'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfGauss', ['DURATION', 'WIDTH', 'IPHASE', 'LOOP', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['Sc_LFNoise0'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfNoise0', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFNoise1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfNoise1', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFNoise2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfNoise2', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LFPar'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfPar', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LFPulse'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfPulse', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['Sc_LFSaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfSaw', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LFTri'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lfTri', ['FREQ', 'IPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_LPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lpf', ['IN', 'FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_LPZ1'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lpz1', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lag', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lag2', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag3'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lag3', ['IN', 'LAGTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Lag3UD'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lag3Ud', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['Sc_LagUD'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lagUd', ['IN', 'LAGTIMEU', 'LAGTIMED'], true);
};
Blockly.JavaScript.forBlock['Sc_Latch'] = function(block) {
	return ugenCodeGen(Blockly, block, 'latch', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_LeakDC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'leakDc', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['Sc_Limiter'] = function(block) {
	return ugenCodeGen(Blockly, block, 'limiter', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_LinExp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linExp', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['Sc_LinPan2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linPan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_LinRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linRand', ['LO', 'HI', 'MINMAX'], true);
};
Blockly.JavaScript.forBlock['Sc_LinXFade2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linXFade2', ['INA', 'INB', 'PAN'], true);
};
Blockly.JavaScript.forBlock['Sc_Linen'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linen', ['GATE', 'ATTACKTIME', 'SUSLEVEL', 'RELEASETIME', 'DONEACTION'], true);
};
Blockly.JavaScript.forBlock['Sc_LocalIn'] = function(block) {
	return ugenCodeGen(Blockly, block, 'localIn', ['NUMCHANNELS', 'DEFAULT'], true);
};
Blockly.JavaScript.forBlock['Sc_LocalOut'] = function(block) {
	return ugenCodeGen(Blockly, block, 'localOut', ['CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['Sc_LorenzL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'lorenzL', ['FREQ', 'S', 'R', 'B', 'H', 'XI', 'YI', 'ZI'], true);
};
Blockly.JavaScript.forBlock['Sc_MantissaMask'] = function(block) {
	return ugenCodeGen(Blockly, block, 'mantissaMask', ['IN', 'BITS'], true);
};
Blockly.JavaScript.forBlock['Sc_ModDif'] = function(block) {
	return ugenCodeGen(Blockly, block, 'modularDistance', ['X', 'Y', 'MOD'], true);
};
Blockly.JavaScript.forBlock['Sc_MoogFF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'moogFf', ['IN', 'FREQ', 'GAIN', 'RESET'], true);
};
Blockly.JavaScript.forBlock['Sc_MouseButton'] = function(block) {
	return ugenCodeGen(Blockly, block, 'mouseButton', ['MINVAL', 'MAXVAL', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_MouseX'] = function(block) {
	return ugenCodeGen(Blockly, block, 'mouseX', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_MouseY'] = function(block) {
	return ugenCodeGen(Blockly, block, 'mouseY', ['MINVAL', 'MAXVAL', 'WARP', 'LAG'], true);
};
Blockly.JavaScript.forBlock['Sc_NRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'nRand', ['LO', 'HI', 'N'], true);
};
Blockly.JavaScript.forBlock['Sc_Normalizer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'normalizer', ['IN', 'LEVEL', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_OnePole'] = function(block) {
	return ugenCodeGen(Blockly, block, 'onePole', ['IN', 'COEF'], true);
};
Blockly.JavaScript.forBlock['Sc_Osc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'osc', ['BUFNUM', 'FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_Out'] = function(block) {
	return ugenCodeGen(Blockly, block, 'out', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['Sc_PV_RandComb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pvRandComb', ['BUFFER', 'WIPE', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_Pan2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pan2', ['IN', 'POS', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_PanAz'] = function(block) {
	return ugenCodeGen(Blockly, block, 'panAz', ['NUMCHANNELS', 'IN', 'POS', 'LEVEL', 'WIDTH', 'ORIENTATION'], true);
};
Blockly.JavaScript.forBlock['Sc_Phasor'] = function(block) {
	return ugenCodeGen(Blockly, block, 'phasor', ['TRIG', 'RATE', 'START', 'END', 'RESETPOS'], true);
};
Blockly.JavaScript.forBlock['Sc_PinkNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pinkNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_Pitch'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pitchFollower', ['IN', 'INITFREQ', 'MINFREQ', 'MAXFREQ', 'EXECFREQ', 'MAXBINSPEROCTAVE', 'MEDIAN', 'AMPTHRESHOLD', 'PEAKTHRESHOLD', 'DOWNSAMPLE', 'CLAR'], true);
};
Blockly.JavaScript.forBlock['Sc_PitchShift'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pitchShift', ['IN', 'WINDOWSIZE', 'PITCHRATIO', 'PITCHDISPERSION', 'TIMEDISPERSION'], true);
};
Blockly.JavaScript.forBlock['Sc_Pluck'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pluck', ['IN', 'TRIG', 'MAXDELAYTIME', 'DELAYTIME', 'DECAYTIME', 'COEF'], true);
};
Blockly.JavaScript.forBlock['Sc_Pulse'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pulse', ['FREQ', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['Sc_PulseCount'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pulseCount', ['TRIG', 'RESET'], true);
};
Blockly.JavaScript.forBlock['Sc_PulseDivider'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pulseDivider', ['TRIG', 'DIV', 'START'], true);
};
Blockly.JavaScript.forBlock['Sc_QuadC'] = function(block) {
	return ugenCodeGen(Blockly, block, 'quadC', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['Sc_QuadL'] = function(block) {
	return ugenCodeGen(Blockly, block, 'quadL', ['FREQ', 'A', 'B', 'C', 'XI'], true);
};
Blockly.JavaScript.forBlock['Sc_RHPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'rhpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_RLPF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'rlpf', ['IN', 'FREQ', 'RQ'], true);
};
Blockly.JavaScript.forBlock['Sc_Rand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'rand', ['LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_ReplaceOut'] = function(block) {
	return ugenCodeGen(Blockly, block, 'replaceOut', ['BUS', 'CHANNELSARRAY'], false);
};
Blockly.JavaScript.forBlock['Sc_Resonz'] = function(block) {
	return ugenCodeGen(Blockly, block, 'resonz', ['IN', 'FREQ', 'BWR'], true);
};
Blockly.JavaScript.forBlock['Sc_Ringz'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ringz', ['IN', 'FREQ', 'DECAYTIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Rotate2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'rotate2', ['X', 'Y', 'POS'], true);
};
Blockly.JavaScript.forBlock['Sc_RunningMax'] = function(block) {
	return ugenCodeGen(Blockly, block, 'runningMax', ['IN', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_SampleRate'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sampleRate', [], true);
};
Blockly.JavaScript.forBlock['Sc_Saw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'saw', ['FREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_Select'] = function(block) {
	return ugenCodeGen(Blockly, block, 'selectT', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Sequencer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_ImpulseSequencer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'impulseSequencer', ['ARRAY', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_SinOsc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sinOsc', ['FREQ', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_SinOscFB'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sinOscFb', ['FREQ', 'FEEDBACK'], true);
};
Blockly.JavaScript.forBlock['Sc_Slew'] = function(block) {
	return ugenCodeGen(Blockly, block, 'slew', ['IN', 'UP', 'DN'], true);
};
Blockly.JavaScript.forBlock['Sc_Slope'] = function(block) {
	return ugenCodeGen(Blockly, block, 'slope', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Stepper'] = function(block) {
	return ugenCodeGen(Blockly, block, 'stepper', ['TRIG', 'RESET', 'MIN', 'MAX', 'STEP', 'RESETVAL'], true);
};
Blockly.JavaScript.forBlock['Sc_Sweep'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sweep', ['TRIG', 'RATE'], true);
};
Blockly.JavaScript.forBlock['Sc_SyncSaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'syncSaw', ['SYNCFREQ', 'SAWFREQ'], true);
};
Blockly.JavaScript.forBlock['Sc_TExpRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tExpRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_TGrains'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tGrains', ['NUMCHANNELS', 'TRIGGER', 'BUFNUM', 'RATE', 'CENTERPOS', 'DUR', 'PAN', 'AMP', 'INTERP'], true);
};
Blockly.JavaScript.forBlock['Sc_TIRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tiRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_TRand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tRand', ['LO', 'HI', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_ToggleFF'] = function(block) {
	return ugenCodeGen(Blockly, block, 'toggleFf', ['TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_Trig'] = function(block) {
	return ugenCodeGen(Blockly, block, 'trig', ['IN', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_TwoPole'] = function(block) {
  return ugenCodeGen(Blockly, block, 'twoPole', ['IN', 'FREQ', 'RADIUS'], true);
};
Blockly.JavaScript.forBlock['Sc_VarLag'] = function(block) {
	return ugenCodeGen(Blockly, block, 'varLag', ['IN', 'TIME', 'CURVATURE'], true);
};
Blockly.JavaScript.forBlock['Sc_VarSaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'varSaw', ['FREQ', 'IPHASE', 'WIDTH'], true);
};
Blockly.JavaScript.forBlock['Sc_WhiteNoise'] = function(block) {
	return ugenCodeGen(Blockly, block, 'whiteNoise', [], true);
};
Blockly.JavaScript.forBlock['Sc_Wrap'] = function(block) {
	return ugenCodeGen(Blockly, block, 'wrap', ['IN', 'LO', 'HI'], true);
};
Blockly.JavaScript.forBlock['Sc_XFade2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'xFade2', ['INA', 'INB', 'PAN', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_ZeroCrossing'] = function(block) {
	return ugenCodeGen(Blockly, block, 'zeroCrossing', ['IN'], true);
};
Blockly.JavaScript.forBlock['Sc_Bezier'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bezier', ['HALTAFTER', 'DX', 'FREQ', 'PHASE', 'PARAM'], true);
};
Blockly.JavaScript.forBlock['Sc_DWGPluckedStiff'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dwgPluckedStiff', ['FREQ', 'AMP', 'GATE', 'POS', 'C1', 'C3', 'INP', 'RELEASE', 'FB'], true);
};
Blockly.JavaScript.forBlock['Sc_DustRange'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dustRange', ['IOTMIN', 'IOTMAX'], true);
};
Blockly.JavaScript.forBlock['Sc_Dx7'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dx7', ['BUFNUM', 'ON', 'OFF', 'DATA', 'VC', 'MNN', 'VEL', 'PW', 'MW', 'BC', 'FC'], true);
};
Blockly.JavaScript.forBlock['Sc_Freezer'] = function(block) {
	return ugenCodeGen(Blockly, block, 'freezer', ['BUFNUM', 'LEFT', 'RIGHT', 'GAIN', 'INCREMENT', 'INCREMENTOFFSET', 'INCREMENTRANDOM', 'RIGHTRANDOM', 'SYNCPHASETRIGGER', 'RANDOMIZEPHASETRIGGER', 'NUMBEROFLOOPS'], true);
};
Blockly.JavaScript.forBlock['Sc_GreyholeRaw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'greyholeRaw', ['IN1', 'IN2', 'DAMPING', 'DELAYTIME', 'DIFFUSION', 'FEEDBACK', 'MODDEPTH', 'MODFREQ', 'SIZE'], true);
};
Blockly.JavaScript.forBlock['Sc_MoogLadder'] = function(block) {
	return ugenCodeGen(Blockly, block, 'moogLadder', ['IN', 'FFREQ', 'RES'], true);
};
Blockly.JavaScript.forBlock['Sc_ShufflerB'] = function(block) {
	return ugenCodeGen(Blockly, block, 'shufflerB', ['BUFNUM', 'READLOCATIONMINIMA', 'READLOCATIONMAXIMA', 'READINCREMENTMINIMA', 'READINCREMENTMAXIMA', 'DURATIONMINIMA', 'DURATIONMAXIMA', 'ENVELOPEAMPLITUDEMINIMA', 'ENVELOPEAMPLITUDEMAXIMA', 'ENVELOPESHAPEMINIMA', 'ENVELOPESHAPEMAXIMA', 'ENVELOPESKEWMINIMA', 'ENVELOPESKEWMAXIMA', 'STEREOLOCATIONMINIMA', 'STEREOLOCATIONMAXIMA', 'INTEROFFSETTIMEMINIMA', 'INTEROFFSETTIMEMAXIMA', 'FTABLEREADLOCATIONINCREMENT', 'READINCREMENTQUANTA', 'INTEROFFSETTIMEQUANTA'], true);
};
Blockly.JavaScript.forBlock['Sc_SvfBp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'svfBp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['Sc_SvfHp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'svfHp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['Sc_SvfLp'] = function(block) {
	return ugenCodeGen(Blockly, block, 'svfLp', ['IN', 'FREQ', 'Q'], true);
};
Blockly.JavaScript.forBlock['Sc_TScramble'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tScramble', ['TRIGGER', 'INPUTS'], true);
};
Blockly.JavaScript.forBlock['Sc_VOSIM'] = function(block) {
	return ugenCodeGen(Blockly, block, 'vosim', ['TRIG', 'FREQ', 'NCYCLES', 'DECAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Adsr'] = function(block) {
	return ugenCodeGen(Blockly, block, 'adsr', ['GATE', 'ATTACKTIME', 'DECAYTIME', 'SUSTAINLEVEL', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['Sc_Asr'] = function(block) {
	return ugenCodeGen(Blockly, block, 'asr', ['GATE', 'ATTACKTIME', 'RELEASETIME', 'CURVES'], true);
};
Blockly.JavaScript.forBlock['Sc_AudioIn'] = function(block) {
	return ugenCodeGen(Blockly, block, 'audioIn', ['CHANNELARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_BufAlloc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufAlloc', ['NUMCHANNELS', 'NUMFRAMES'], true);
};
Blockly.JavaScript.forBlock['Sc_BufRec'] = function(block) {
	return ugenCodeGen(Blockly, block, 'bufRec', ['BUFNUM', 'RESET', 'INPUTARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Cc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'cc', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['Sc_Drand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'drand', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Duty'] = function(block) {
	return ugenCodeGen(Blockly, block, 'duty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_TDuty'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tDuty', ['DUR', 'RESET', 'LEVEL'], true);
};
Blockly.JavaScript.forBlock['Sc_Demand'] = function(block) {
	return ugenCodeGen(Blockly, block, 'demand', ['TRIG', 'RESET', 'DEMANDUGENS'], true);
};
Blockly.JavaScript.forBlock['Sc_InFb'] = function(block) {
	return ugenCodeGen(Blockly, block, 'inFb', ['NUMCHANNELS', 'BUS'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyDown'] = function(block) {
	return ugenCodeGen(Blockly, block, 'keyDown', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyPitch'] = function(block) {
	return ugenCodeGen(Blockly, block, 'keyPitch', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyVelocity'] = function(block) {
	return ugenCodeGen(Blockly, block, 'keyVelocity', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_KeyTimbre'] = function(block) {
	return ugenCodeGen(Blockly, block, 'keyTimbre', ['VOICENUMBER'], true);
};
Blockly.JavaScript.forBlock['Sc_LinLin'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linLin', ['IN', 'SRCLO', 'SRCHI', 'DSTLO', 'DSTHI'], true);
};
Blockly.JavaScript.forBlock['Sc_LinSeg'] = function(block) {
	return ugenCodeGen(Blockly, block, 'linSeg', ['GATE', 'COORD'], true);
};
Blockly.JavaScript.forBlock['Sc_Line'] = function(block) {
	return ugenCodeGen(Blockly, block, 'line', ['START', 'END', 'DUR'], true);
};
Blockly.JavaScript.forBlock['Sc_PMOsc'] = function(block) {
	return ugenCodeGen(Blockly, block, 'pmOsc', ['CARFREQ', 'MODFREQ', 'PMINDEX', 'MODPHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_RingzBank'] = function(block) {
	return ugenCodeGen(Blockly, block, 'ringzBank', ['INPUT', 'FREQ', 'AMP', 'TIME'], true);
};
Blockly.JavaScript.forBlock['Sc_Select2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'select2', ['PREDICATE', 'IFTRUE', 'IFFALSE'], true);
};
Blockly.JavaScript.forBlock['Sc_SelectX'] = function(block) {
	return ugenCodeGen(Blockly, block, 'selectX', ['WHICH', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dseq'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dseq', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dseries'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dseries', ['LENGTH', 'START', 'STEP'], true);
};
Blockly.JavaScript.forBlock['Sc_SfAcquire'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfAcquire', ['URLORKEY', 'NUMBEROFCHANNELS', 'CHANNELINDICES'], true);
};
Blockly.JavaScript.forBlock['Sc_SfDuration'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfDuration', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SfFrameCount'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfFrameCount', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SfPlay'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfPlay', ['SFBUFFERARRAY', 'RATE', 'TRIGGER', 'STARTPOS', 'LOOP'], true);
};
Blockly.JavaScript.forBlock['Sc_SfRateScale'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfRateScale', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SfRead'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfRead', ['SFBUFFERARRAY', 'PHASE', 'LOOP', 'INTERPOLATION'], true);
};
Blockly.JavaScript.forBlock['Sc_SfSampleRate'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sfSampleRate', ['SFBUFFERARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Dshuf'] = function(block) {
	return ugenCodeGen(Blockly, block, 'dshuf', ['REPEATS', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_SinOscBank'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sinOscBank', ['FREQ', 'AMP', 'PHASE'], true);
};
Blockly.JavaScript.forBlock['Sc_Splay2'] = function(block) {
	return ugenCodeGen(Blockly, block, 'splay2', ['INPUT', 'SPREAD', 'LEVEL', 'CENTER', 'LEVELCOMP'], true);
};
Blockly.JavaScript.forBlock['Sc_Splay'] = function(block) {
	return ugenCodeGen(Blockly, block, 'splay', ['INARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_Sw'] = function(block) {
	return ugenCodeGen(Blockly, block, 'sw', ['INDEX'], true);
};
Blockly.JavaScript.forBlock['Sc_TChoose'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tChoose', ['TRIG', 'ARRAY'], true);
};
Blockly.JavaScript.forBlock['Sc_TLine'] = function(block) {
	return ugenCodeGen(Blockly, block, 'tLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_TxLine'] = function(block) {
	return ugenCodeGen(Blockly, block, 'txLine', ['START', 'END', 'DUR', 'TRIG'], true);
};
Blockly.JavaScript.forBlock['Sc_XLine'] = function(block) {
	return ugenCodeGen(Blockly, block, 'xLine', ['START', 'END', 'DUR'], true);
};

}
