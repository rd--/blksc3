'use strict';

Blockly.JavaScript['sc3_AllpassC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var AllpassC_code = blk_append_mul_add(block, 'AllpassC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ')');
    return [AllpassC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AllpassL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var AllpassL_code = blk_append_mul_add(block, 'AllpassL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ')');
    return [AllpassL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AmpComp'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var root_value = Blockly.JavaScript.valueToCode(block, 'ROOT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var exp_value = Blockly.JavaScript.valueToCode(block, 'EXP', Blockly.JavaScript.ORDER_ATOMIC) || '0.3333';
    var AmpComp_code = blk_append_mul_add(block, 'AmpComp(' + freq_value + ', ' + root_value + ', ' + exp_value + ')');
    return [AmpComp_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Amplitude'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var releaseTime_value = Blockly.JavaScript.valueToCode(block, 'RELEASETIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var Amplitude_code = blk_append_mul_add(block, 'Amplitude(' + in_value + ', ' + attackTime_value + ', ' + releaseTime_value + ')');
    return [Amplitude_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BBandPass'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1200.0';
    var bw_value = Blockly.JavaScript.valueToCode(block, 'BW', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var BBandPass_code = blk_append_mul_add(block, 'BBandPass(' + in_value + ', ' + freq_value + ', ' + bw_value + ')');
    return [BBandPass_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BBandStop'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1200.0';
    var bw_value = Blockly.JavaScript.valueToCode(block, 'BW', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var BBandStop_code = blk_append_mul_add(block, 'BBandStop(' + in_value + ', ' + freq_value + ', ' + bw_value + ')');
    return [BBandStop_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BLowPass'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1200.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var BLowPass_code = blk_append_mul_add(block, 'BLowPass(' + in_value + ', ' + freq_value + ', ' + rq_value + ')');
    return [BLowPass_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var BPF_code = blk_append_mul_add(block, 'BPF(' + in_value + ', ' + freq_value + ', ' + rq_value + ')');
    return [BPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BPZ2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BPZ2_code = blk_append_mul_add(block, 'BPZ2(' + in_value + ')');
    return [BPZ2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BRF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var BRF_code = blk_append_mul_add(block, 'BRF(' + in_value + ', ' + freq_value + ', ' + rq_value + ')');
    return [BRF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Balance2'] = function(block) {
    var left_value = Blockly.JavaScript.valueToCode(block, 'LEFT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var right_value = Blockly.JavaScript.valueToCode(block, 'RIGHT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Balance2_code = blk_append_mul_add(block, 'Balance2(' + left_value + ', ' + right_value + ', ' + pos_value + ', ' + level_value + ')');
    return [Balance2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Blip'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var numharm_value = Blockly.JavaScript.valueToCode(block, 'NUMHARM', Blockly.JavaScript.ORDER_ATOMIC) || '200.0';
    var Blip_code = blk_append_mul_add(block, 'Blip(' + freq_value + ', ' + numharm_value + ')');
    return [Blip_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BrownNoise'] = function(block) {
    var BrownNoise_code = blk_append_mul_add(block, 'BrownNoise()');
    return [BrownNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Clip'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Clip_code = blk_append_mul_add(block, 'Clip(' + in_value + ', ' + lo_value + ', ' + hi_value + ')');
    return [Clip_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_CombC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var CombC_code = blk_append_mul_add(block, 'CombC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ')');
    return [CombC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_CombL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var CombL_code = blk_append_mul_add(block, 'CombL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ')');
    return [CombL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Crackle'] = function(block) {
    var chaosParam_value = Blockly.JavaScript.valueToCode(block, 'CHAOSPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '1.5';
    var Crackle_code = blk_append_mul_add(block, 'Crackle(' + chaosParam_value + ')');
    return [Crackle_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Decay'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Decay_code = blk_append_mul_add(block, 'Decay(' + in_value + ', ' + decayTime_value + ')');
    return [Decay_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Decay2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Decay2_code = blk_append_mul_add(block, 'Decay2(' + in_value + ', ' + attackTime_value + ', ' + decayTime_value + ')');
    return [Decay2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DegreeToKey'] = function(block) {
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var octave_value = Blockly.JavaScript.valueToCode(block, 'OCTAVE', Blockly.JavaScript.ORDER_ATOMIC) || '12.0';
    var DegreeToKey_code = blk_append_mul_add(block, 'DegreeToKey(' + bufnum_value + ', ' + in_value + ', ' + octave_value + ')');
    return [DegreeToKey_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DelayC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var DelayC_code = blk_append_mul_add(block, 'DelayC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ')');
    return [DelayC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DelayL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var DelayL_code = blk_append_mul_add(block, 'DelayL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ')');
    return [DelayL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dust'] = function(block) {
    var density_value = Blockly.JavaScript.valueToCode(block, 'DENSITY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Dust_code = blk_append_mul_add(block, 'Dust(' + density_value + ')');
    return [Dust_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dust2'] = function(block) {
    var density_value = Blockly.JavaScript.valueToCode(block, 'DENSITY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Dust2_code = blk_append_mul_add(block, 'Dust2(' + density_value + ')');
    return [Dust2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ExpRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ExpRand_code = blk_append_mul_add(block, 'ExpRand(' + lo_value + ', ' + hi_value + ')');
    return [ExpRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FBSineC'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '22050.0';
    var im_value = Blockly.JavaScript.valueToCode(block, 'IM', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var fb_value = Blockly.JavaScript.valueToCode(block, 'FB', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var a_value = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '1.1';
    var c_value = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var xi_value = Blockly.JavaScript.valueToCode(block, 'XI', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var yi_value = Blockly.JavaScript.valueToCode(block, 'YI', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var FBSineC_code = blk_append_mul_add(block, 'FBSineC(' + freq_value + ', ' + im_value + ', ' + fb_value + ', ' + a_value + ', ' + c_value + ', ' + xi_value + ', ' + yi_value + ')');
    return [FBSineC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Fold'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Fold_code = blk_append_mul_add(block, 'Fold(' + in_value + ', ' + lo_value + ', ' + hi_value + ')');
    return [Fold_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Formant'] = function(block) {
    var fundfreq_value = Blockly.JavaScript.valueToCode(block, 'FUNDFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var formfreq_value = Blockly.JavaScript.valueToCode(block, 'FORMFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1760.0';
    var bwfreq_value = Blockly.JavaScript.valueToCode(block, 'BWFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '880.0';
    var Formant_code = blk_append_mul_add(block, 'Formant(' + fundfreq_value + ', ' + formfreq_value + ', ' + bwfreq_value + ')');
    return [Formant_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Formlet'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var attacktime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Formlet_code = blk_append_mul_add(block, 'Formlet(' + in_value + ', ' + freq_value + ', ' + attacktime_value + ', ' + decaytime_value + ')');
    return [Formlet_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreeVerb'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mix_value = Blockly.JavaScript.valueToCode(block, 'MIX', Blockly.JavaScript.ORDER_ATOMIC) || '0.33';
    var room_value = Blockly.JavaScript.valueToCode(block, 'ROOM', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var damp_value = Blockly.JavaScript.valueToCode(block, 'DAMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var FreeVerb_code = blk_append_mul_add(block, 'FreeVerb(' + in_value + ', ' + mix_value + ', ' + room_value + ', ' + damp_value + ')');
    return [FreeVerb_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreeVerb2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var in2_value = Blockly.JavaScript.valueToCode(block, 'IN2', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mix_value = Blockly.JavaScript.valueToCode(block, 'MIX', Blockly.JavaScript.ORDER_ATOMIC) || '0.33';
    var room_value = Blockly.JavaScript.valueToCode(block, 'ROOM', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var damp_value = Blockly.JavaScript.valueToCode(block, 'DAMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var FreeVerb2_code = blk_append_mul_add(block, 'FreeVerb2(' + in_value + ', ' + in2_value + ', ' + mix_value + ', ' + room_value + ', ' + damp_value + ')');
    return [FreeVerb2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreqShift'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var FreqShift_code = blk_append_mul_add(block, 'FreqShift(' + in_value + ', ' + freq_value + ', ' + phase_value + ')');
    return [FreqShift_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GVerb'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var roomsize_value = Blockly.JavaScript.valueToCode(block, 'ROOMSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '10.0';
    var revtime_value = Blockly.JavaScript.valueToCode(block, 'REVTIME', Blockly.JavaScript.ORDER_ATOMIC) || '3.0';
    var damping_value = Blockly.JavaScript.valueToCode(block, 'DAMPING', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var inputbw_value = Blockly.JavaScript.valueToCode(block, 'INPUTBW', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var spread_value = Blockly.JavaScript.valueToCode(block, 'SPREAD', Blockly.JavaScript.ORDER_ATOMIC) || '15.0';
    var drylevel_value = Blockly.JavaScript.valueToCode(block, 'DRYLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var earlyreflevel_value = Blockly.JavaScript.valueToCode(block, 'EARLYREFLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.7';
    var taillevel_value = Blockly.JavaScript.valueToCode(block, 'TAILLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var maxroomsize_value = Blockly.JavaScript.valueToCode(block, 'MAXROOMSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '300.0';
    var GVerb_code = blk_append_mul_add(block, 'GVerb(' + in_value + ', ' + roomsize_value + ', ' + revtime_value + ', ' + damping_value + ', ' + inputbw_value + ', ' + spread_value + ', ' + drylevel_value + ', ' + earlyreflevel_value + ', ' + taillevel_value + ', ' + maxroomsize_value + ')');
    return [GVerb_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Gendy1'] = function(block) {
    var ampdist_value = Blockly.JavaScript.valueToCode(block, 'AMPDIST', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var durdist_value = Blockly.JavaScript.valueToCode(block, 'DURDIST', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var adparam_value = Blockly.JavaScript.valueToCode(block, 'ADPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ddparam_value = Blockly.JavaScript.valueToCode(block, 'DDPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var minfreq_value = Blockly.JavaScript.valueToCode(block, 'MINFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var maxfreq_value = Blockly.JavaScript.valueToCode(block, 'MAXFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '660.0';
    var ampscale_value = Blockly.JavaScript.valueToCode(block, 'AMPSCALE', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var durscale_value = Blockly.JavaScript.valueToCode(block, 'DURSCALE', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var initCPs_value = Blockly.JavaScript.valueToCode(block, 'INITCPS', Blockly.JavaScript.ORDER_ATOMIC) || '12.0';
    var knum_value = Blockly.JavaScript.valueToCode(block, 'KNUM', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Gendy1_code = blk_append_mul_add(block, 'Gendy1(' + ampdist_value + ', ' + durdist_value + ', ' + adparam_value + ', ' + ddparam_value + ', ' + minfreq_value + ', ' + maxfreq_value + ', ' + ampscale_value + ', ' + durscale_value + ', ' + initCPs_value + ', ' + knum_value + ')');
    return [Gendy1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GrainFM'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var carfreq_value = Blockly.JavaScript.valueToCode(block, 'CARFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var modfreq_value = Blockly.JavaScript.valueToCode(block, 'MODFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '200.0';
    var index_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var envbufnum_value = Blockly.JavaScript.valueToCode(block, 'ENVBUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '-1.0';
    var maxGrains_value = Blockly.JavaScript.valueToCode(block, 'MAXGRAINS', Blockly.JavaScript.ORDER_ATOMIC) || '512.0';
    var GrainFM_code = blk_append_mul_add(block, 'GrainFM(' + numChannels_value + ', ' + trigger_value + ', ' + dur_value + ', ' + carfreq_value + ', ' + modfreq_value + ', ' + index_value + ', ' + pan_value + ', ' + envbufnum_value + ', ' + maxGrains_value + ')');
    return [GrainFM_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GrainSin'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var envbufnum_value = Blockly.JavaScript.valueToCode(block, 'ENVBUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '-1.0';
    var maxGrains_value = Blockly.JavaScript.valueToCode(block, 'MAXGRAINS', Blockly.JavaScript.ORDER_ATOMIC) || '512.0';
    var GrainSin_code = blk_append_mul_add(block, 'GrainSin(' + numChannels_value + ', ' + trigger_value + ', ' + dur_value + ', ' + freq_value + ', ' + pan_value + ', ' + envbufnum_value + ', ' + maxGrains_value + ')');
    return [GrainSin_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GrayNoise'] = function(block) {
    var GrayNoise_code = blk_append_mul_add(block, 'GrayNoise()');
    return [GrayNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_HPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var HPF_code = blk_append_mul_add(block, 'HPF(' + in_value + ', ' + freq_value + ')');
    return [HPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_HPZ1'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var HPZ1_code = blk_append_mul_add(block, 'HPZ1(' + in_value + ')');
    return [HPZ1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Hasher'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Hasher_code = blk_append_mul_add(block, 'Hasher(' + in_value + ')');
    return [Hasher_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_IRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '127.0';
    var IRand_code = blk_append_mul_add(block, 'IRand(' + lo_value + ', ' + hi_value + ')');
    return [IRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Impulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Impulse_code = blk_append_mul_add(block, 'Impulse(' + freq_value + ', ' + phase_value + ')');
    return [Impulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_KeyState'] = function(block) {
    var keycode_value = Blockly.JavaScript.valueToCode(block, 'KEYCODE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var KeyState_code = blk_append_mul_add(block, 'KeyState(' + keycode_value + ', ' + minval_value + ', ' + maxval_value + ', ' + lag_value + ')');
    return [KeyState_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFCub'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFCub_code = blk_append_mul_add(block, 'LFCub(' + freq_value + ', ' + iphase_value + ')');
    return [LFCub_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFDNoise1'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var LFDNoise1_code = blk_append_mul_add(block, 'LFDNoise1(' + freq_value + ')');
    return [LFDNoise1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFDNoise3'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var LFDNoise3_code = blk_append_mul_add(block, 'LFDNoise3(' + freq_value + ')');
    return [LFDNoise3_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFGauss'] = function(block) {
    var duration_value = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var loop_value = Blockly.JavaScript.valueToCode(block, 'LOOP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFGauss_code = blk_append_mul_add(block, 'LFGauss(' + duration_value + ', ' + width_value + ', ' + iphase_value + ', ' + loop_value + ', ' + doneAction_value + ')');
    return [LFGauss_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise0'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var LFNoise0_code = blk_append_mul_add(block, 'LFNoise0(' + freq_value + ')');
    return [LFNoise0_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise1'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var LFNoise1_code = blk_append_mul_add(block, 'LFNoise1(' + freq_value + ')');
    return [LFNoise1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise2'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var LFNoise2_code = blk_append_mul_add(block, 'LFNoise2(' + freq_value + ')');
    return [LFNoise2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFPar'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFPar_code = blk_append_mul_add(block, 'LFPar(' + freq_value + ', ' + iphase_value + ')');
    return [LFPar_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFPulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var LFPulse_code = blk_append_mul_add(block, 'LFPulse(' + freq_value + ', ' + iphase_value + ', ' + width_value + ')');
    return [LFPulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFSaw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFSaw_code = blk_append_mul_add(block, 'LFSaw(' + freq_value + ', ' + iphase_value + ')');
    return [LFSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFTri'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFTri_code = blk_append_mul_add(block, 'LFTri(' + freq_value + ', ' + iphase_value + ')');
    return [LFTri_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var LPF_code = blk_append_mul_add(block, 'LPF(' + in_value + ', ' + freq_value + ')');
    return [LPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LPZ1'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LPZ1_code = blk_append_mul_add(block, 'LPZ1(' + in_value + ')');
    return [LPZ1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var Lag_code = blk_append_mul_add(block, 'Lag(' + in_value + ', ' + lagTime_value + ')');
    return [Lag_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var Lag2_code = blk_append_mul_add(block, 'Lag2(' + in_value + ', ' + lagTime_value + ')');
    return [Lag2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag3'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var Lag3_code = blk_append_mul_add(block, 'Lag3(' + in_value + ', ' + lagTime_value + ')');
    return [Lag3_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag3UD'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTimeU_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMEU', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var lagTimeD_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMED', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var Lag3UD_code = blk_append_mul_add(block, 'Lag3UD(' + in_value + ', ' + lagTimeU_value + ', ' + lagTimeD_value + ')');
    return [Lag3UD_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LagUD'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTimeU_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMEU', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var lagTimeD_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMED', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var LagUD_code = blk_append_mul_add(block, 'LagUD(' + in_value + ', ' + lagTimeU_value + ', ' + lagTimeD_value + ')');
    return [LagUD_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Latch'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Latch_code = blk_append_mul_add(block, 'Latch(' + in_value + ', ' + trig_value + ')');
    return [Latch_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LeakDC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '0.995';
    var LeakDC_code = blk_append_mul_add(block, 'LeakDC(' + in_value + ', ' + coef_value + ')');
    return [LeakDC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Limiter'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var Limiter_code = blk_append_mul_add(block, 'Limiter(' + in_value + ', ' + level_value + ', ' + dur_value + ')');
    return [Limiter_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinExp'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var srclo_value = Blockly.JavaScript.valueToCode(block, 'SRCLO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var srchi_value = Blockly.JavaScript.valueToCode(block, 'SRCHI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dstlo_value = Blockly.JavaScript.valueToCode(block, 'DSTLO', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dsthi_value = Blockly.JavaScript.valueToCode(block, 'DSTHI', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var LinExp_code = blk_append_mul_add(block, 'LinExp(' + in_value + ', ' + srclo_value + ', ' + srchi_value + ', ' + dstlo_value + ', ' + dsthi_value + ')');
    return [LinExp_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var minmax_value = Blockly.JavaScript.valueToCode(block, 'MINMAX', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinRand_code = blk_append_mul_add(block, 'LinRand(' + lo_value + ', ' + hi_value + ', ' + minmax_value + ')');
    return [LinRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinXFade2'] = function(block) {
    var inA_value = Blockly.JavaScript.valueToCode(block, 'INA', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inB_value = Blockly.JavaScript.valueToCode(block, 'INB', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinXFade2_code = blk_append_mul_add(block, 'LinXFade2(' + inA_value + ', ' + inB_value + ', ' + pan_value + ')');
    return [LinXFade2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LocalIn'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var default_value = Blockly.JavaScript.valueToCode(block, 'DEFAULT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LocalIn_code = blk_append_mul_add(block, 'LocalIn(' + numChannels_value + ', ' + default_value + ')');
    return [LocalIn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LocalOut'] = function(block) {
    var channelsArray_value = Blockly.JavaScript.valueToCode(block, 'CHANNELSARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LocalOut_code = 'LocalOut(' + channelsArray_value + ')';
    return [LocalOut_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MantissaMask'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var bits_value = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_ATOMIC) || '3.0';
    var MantissaMask_code = blk_append_mul_add(block, 'MantissaMask(' + in_value + ', ' + bits_value + ')');
    return [MantissaMask_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MoogFF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '100.0';
    var gain_value = Blockly.JavaScript.valueToCode(block, 'GAIN', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var MoogFF_code = blk_append_mul_add(block, 'MoogFF(' + in_value + ', ' + freq_value + ', ' + gain_value + ', ' + reset_value + ')');
    return [MoogFF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseButton'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var MouseButton_code = blk_append_mul_add(block, 'MouseButton(' + minval_value + ', ' + maxval_value + ', ' + lag_value + ')');
    return [MouseButton_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseX'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var warp_value = Blockly.JavaScript.valueToCode(block, 'WARP', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var MouseX_code = blk_append_mul_add(block, 'MouseX(' + minval_value + ', ' + maxval_value + ', ' + warp_value + ', ' + lag_value + ')');
    return [MouseX_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseY'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var warp_value = Blockly.JavaScript.valueToCode(block, 'WARP', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var MouseY_code = blk_append_mul_add(block, 'MouseY(' + minval_value + ', ' + maxval_value + ', ' + warp_value + ', ' + lag_value + ')');
    return [MouseY_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Normalizer'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var Normalizer_code = blk_append_mul_add(block, 'Normalizer(' + in_value + ', ' + level_value + ', ' + dur_value + ')');
    return [Normalizer_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_OnePole'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var OnePole_code = blk_append_mul_add(block, 'OnePole(' + in_value + ', ' + coef_value + ')');
    return [OnePole_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Out'] = function(block) {
    var bus_value = Blockly.JavaScript.valueToCode(block, 'BUS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var channelsArray_value = Blockly.JavaScript.valueToCode(block, 'CHANNELSARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Out_code = 'Out(' + bus_value + ', ' + channelsArray_value + ')';
    return [Out_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pan2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Pan2_code = blk_append_mul_add(block, 'Pan2(' + in_value + ', ' + pos_value + ', ' + level_value + ')');
    return [Pan2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Phasor'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var resetPos_value = Blockly.JavaScript.valueToCode(block, 'RESETPOS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Phasor_code = blk_append_mul_add(block, 'Phasor(' + trig_value + ', ' + rate_value + ', ' + start_value + ', ' + end_value + ', ' + resetPos_value + ')');
    return [Phasor_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PinkNoise'] = function(block) {
    var PinkNoise_code = blk_append_mul_add(block, 'PinkNoise()');
    return [PinkNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pitch'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var initFreq_value = Blockly.JavaScript.valueToCode(block, 'INITFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var minFreq_value = Blockly.JavaScript.valueToCode(block, 'MINFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '60.0';
    var maxFreq_value = Blockly.JavaScript.valueToCode(block, 'MAXFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '4000.0';
    var execFreq_value = Blockly.JavaScript.valueToCode(block, 'EXECFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '100.0';
    var maxBinsPerOctave_value = Blockly.JavaScript.valueToCode(block, 'MAXBINSPEROCTAVE', Blockly.JavaScript.ORDER_ATOMIC) || '16.0';
    var median_value = Blockly.JavaScript.valueToCode(block, 'MEDIAN', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ampThreshold_value = Blockly.JavaScript.valueToCode(block, 'AMPTHRESHOLD', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var peakThreshold_value = Blockly.JavaScript.valueToCode(block, 'PEAKTHRESHOLD', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var downSample_value = Blockly.JavaScript.valueToCode(block, 'DOWNSAMPLE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var clar_value = Blockly.JavaScript.valueToCode(block, 'CLAR', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Pitch_code = blk_append_mul_add(block, 'Pitch(' + in_value + ', ' + initFreq_value + ', ' + minFreq_value + ', ' + maxFreq_value + ', ' + execFreq_value + ', ' + maxBinsPerOctave_value + ', ' + median_value + ', ' + ampThreshold_value + ', ' + peakThreshold_value + ', ' + downSample_value + ', ' + clar_value + ')');
    return [Pitch_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PitchShift'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var windowSize_value = Blockly.JavaScript.valueToCode(block, 'WINDOWSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var pitchRatio_value = Blockly.JavaScript.valueToCode(block, 'PITCHRATIO', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var pitchDispersion_value = Blockly.JavaScript.valueToCode(block, 'PITCHDISPERSION', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var timeDispersion_value = Blockly.JavaScript.valueToCode(block, 'TIMEDISPERSION', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PitchShift_code = blk_append_mul_add(block, 'PitchShift(' + in_value + ', ' + windowSize_value + ', ' + pitchRatio_value + ', ' + pitchDispersion_value + ', ' + timeDispersion_value + ')');
    return [PitchShift_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pluck'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var Pluck_code = blk_append_mul_add(block, 'Pluck(' + in_value + ', ' + trig_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ', ' + coef_value + ')');
    return [Pluck_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var Pulse_code = blk_append_mul_add(block, 'Pulse(' + freq_value + ', ' + width_value + ')');
    return [Pulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PulseCount'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PulseCount_code = blk_append_mul_add(block, 'PulseCount(' + trig_value + ', ' + reset_value + ')');
    return [PulseCount_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PulseDivider'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var div_value = Blockly.JavaScript.valueToCode(block, 'DIV', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PulseDivider_code = blk_append_mul_add(block, 'PulseDivider(' + trig_value + ', ' + div_value + ', ' + start_value + ')');
    return [PulseDivider_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_QuadC'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '22050.0';
    var a_value = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var b_value = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '-1.0';
    var c_value = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC) || '-0.75';
    var xi_value = Blockly.JavaScript.valueToCode(block, 'XI', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var QuadC_code = blk_append_mul_add(block, 'QuadC(' + freq_value + ', ' + a_value + ', ' + b_value + ', ' + c_value + ', ' + xi_value + ')');
    return [QuadC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RHPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var RHPF_code = blk_append_mul_add(block, 'RHPF(' + in_value + ', ' + freq_value + ', ' + rq_value + ')');
    return [RHPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RLPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var RLPF_code = blk_append_mul_add(block, 'RLPF(' + in_value + ', ' + freq_value + ', ' + rq_value + ')');
    return [RLPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Rand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Rand_code = blk_append_mul_add(block, 'Rand(' + lo_value + ', ' + hi_value + ')');
    return [Rand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ReplaceOut'] = function(block) {
    var bus_value = Blockly.JavaScript.valueToCode(block, 'BUS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var channelsArray_value = Blockly.JavaScript.valueToCode(block, 'CHANNELSARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var ReplaceOut_code = 'ReplaceOut(' + bus_value + ', ' + channelsArray_value + ')';
    return [ReplaceOut_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Resonz'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var bwr_value = Blockly.JavaScript.valueToCode(block, 'BWR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Resonz_code = blk_append_mul_add(block, 'Resonz(' + in_value + ', ' + freq_value + ', ' + bwr_value + ')');
    return [Resonz_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ringz'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Ringz_code = blk_append_mul_add(block, 'Ringz(' + in_value + ', ' + freq_value + ', ' + decaytime_value + ')');
    return [Ringz_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Rotate2'] = function(block) {
    var x_value = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var y_value = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Rotate2_code = blk_append_mul_add(block, 'Rotate2(' + x_value + ', ' + y_value + ', ' + pos_value + ')');
    return [Rotate2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RunningMax'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var RunningMax_code = blk_append_mul_add(block, 'RunningMax(' + in_value + ', ' + trig_value + ')');
    return [RunningMax_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SampleRate'] = function(block) {
    var SampleRate_code = blk_append_mul_add(block, 'SampleRate()');
    return [SampleRate_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Saw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var Saw_code = blk_append_mul_add(block, 'Saw(' + freq_value + ')');
    return [Saw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Select'] = function(block) {
    var which_value = Blockly.JavaScript.valueToCode(block, 'WHICH', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Select_code = blk_append_mul_add(block, 'Select(' + which_value + ', ' + array_value + ')');
    return [Select_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOsc'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SinOsc_code = blk_append_mul_add(block, 'SinOsc(' + freq_value + ', ' + phase_value + ')');
    return [SinOsc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOscFB'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var feedback_value = Blockly.JavaScript.valueToCode(block, 'FEEDBACK', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SinOscFB_code = blk_append_mul_add(block, 'SinOscFB(' + freq_value + ', ' + feedback_value + ')');
    return [SinOscFB_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Slew'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var up_value = Blockly.JavaScript.valueToCode(block, 'UP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dn_value = Blockly.JavaScript.valueToCode(block, 'DN', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Slew_code = blk_append_mul_add(block, 'Slew(' + in_value + ', ' + up_value + ', ' + dn_value + ')');
    return [Slew_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Slope'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Slope_code = blk_append_mul_add(block, 'Slope(' + in_value + ')');
    return [Slope_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Stepper'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var min_value = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var max_value = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '7.0';
    var step_value = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var resetval_value = Blockly.JavaScript.valueToCode(block, 'RESETVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Stepper_code = blk_append_mul_add(block, 'Stepper(' + trig_value + ', ' + reset_value + ', ' + min_value + ', ' + max_value + ', ' + step_value + ', ' + resetval_value + ')');
    return [Stepper_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Sweep'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Sweep_code = blk_append_mul_add(block, 'Sweep(' + trig_value + ', ' + rate_value + ')');
    return [Sweep_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SyncSaw'] = function(block) {
    var syncFreq_value = Blockly.JavaScript.valueToCode(block, 'SYNCFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var sawFreq_value = Blockly.JavaScript.valueToCode(block, 'SAWFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var SyncSaw_code = blk_append_mul_add(block, 'SyncSaw(' + syncFreq_value + ', ' + sawFreq_value + ')');
    return [SyncSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TExpRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TExpRand_code = blk_append_mul_add(block, 'TExpRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + ')');
    return [TExpRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TGrains'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var centerPos_value = Blockly.JavaScript.valueToCode(block, 'CENTERPOS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var interp_value = Blockly.JavaScript.valueToCode(block, 'INTERP', Blockly.JavaScript.ORDER_ATOMIC) || '4.0';
    var TGrains_code = blk_append_mul_add(block, 'TGrains(' + numChannels_value + ', ' + trigger_value + ', ' + bufnum_value + ', ' + rate_value + ', ' + centerPos_value + ', ' + dur_value + ', ' + pan_value + ', ' + amp_value + ', ' + interp_value + ')');
    return [TGrains_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TIRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '127.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TIRand_code = blk_append_mul_add(block, 'TIRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + ')');
    return [TIRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TRand_code = blk_append_mul_add(block, 'TRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + ')');
    return [TRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ToggleFF'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var ToggleFF_code = blk_append_mul_add(block, 'ToggleFF(' + trig_value + ')');
    return [ToggleFF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Trig'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var Trig_code = blk_append_mul_add(block, 'Trig(' + in_value + ', ' + dur_value + ')');
    return [Trig_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_VarSaw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var VarSaw_code = blk_append_mul_add(block, 'VarSaw(' + freq_value + ', ' + iphase_value + ', ' + width_value + ')');
    return [VarSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_WhiteNoise'] = function(block) {
    var WhiteNoise_code = blk_append_mul_add(block, 'WhiteNoise()');
    return [WhiteNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Wrap'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Wrap_code = blk_append_mul_add(block, 'Wrap(' + in_value + ', ' + lo_value + ', ' + hi_value + ')');
    return [Wrap_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_XFade2'] = function(block) {
    var inA_value = Blockly.JavaScript.valueToCode(block, 'INA', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inB_value = Blockly.JavaScript.valueToCode(block, 'INB', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var XFade2_code = blk_append_mul_add(block, 'XFade2(' + inA_value + ', ' + inB_value + ', ' + pan_value + ', ' + level_value + ')');
    return [XFade2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ZeroCrossing'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var ZeroCrossing_code = blk_append_mul_add(block, 'ZeroCrossing(' + in_value + ')');
    return [ZeroCrossing_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GreyholeRaw'] = function(block) {
    var in1_value = Blockly.JavaScript.valueToCode(block, 'IN1', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var in2_value = Blockly.JavaScript.valueToCode(block, 'IN2', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var damping_value = Blockly.JavaScript.valueToCode(block, 'DAMPING', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var diffusion_value = Blockly.JavaScript.valueToCode(block, 'DIFFUSION', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var feedback_value = Blockly.JavaScript.valueToCode(block, 'FEEDBACK', Blockly.JavaScript.ORDER_ATOMIC) || '0.9';
    var moddepth_value = Blockly.JavaScript.valueToCode(block, 'MODDEPTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var modfreq_value = Blockly.JavaScript.valueToCode(block, 'MODFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var size_value = Blockly.JavaScript.valueToCode(block, 'SIZE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var GreyholeRaw_code = blk_append_mul_add(block, 'GreyholeRaw(' + in1_value + ', ' + in2_value + ', ' + damping_value + ', ' + delaytime_value + ', ' + diffusion_value + ', ' + feedback_value + ', ' + moddepth_value + ', ' + modfreq_value + ', ' + size_value + ')');
    return [GreyholeRaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TScramble'] = function(block) {
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inputs_value = Blockly.JavaScript.valueToCode(block, 'INPUTS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TScramble_code = blk_append_mul_add(block, 'TScramble(' + trigger_value + ', ' + inputs_value + ')');
    return [TScramble_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ADSR'] = function(block) {
    var gate_value = Blockly.JavaScript.valueToCode(block, 'GATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.3';
    var sustainLevel_value = Blockly.JavaScript.valueToCode(block, 'SUSTAINLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var releaseTime_value = Blockly.JavaScript.valueToCode(block, 'RELEASETIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var curves_value = Blockly.JavaScript.valueToCode(block, 'CURVES', Blockly.JavaScript.ORDER_ATOMIC) || '-4.0';
    var ADSR_code = blk_append_mul_add(block, 'ADSR(' + gate_value + ', ' + attackTime_value + ', ' + decayTime_value + ', ' + sustainLevel_value + ', ' + releaseTime_value + ', ' + curves_value + ')');
    return [ADSR_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AR'] = function(block) {
    var gate_value = Blockly.JavaScript.valueToCode(block, 'GATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var releaseTime_value = Blockly.JavaScript.valueToCode(block, 'RELEASETIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var curves_value = Blockly.JavaScript.valueToCode(block, 'CURVES', Blockly.JavaScript.ORDER_ATOMIC) || '-4.0';
    var AR_code = blk_append_mul_add(block, 'AR(' + gate_value + ', ' + attackTime_value + ', ' + releaseTime_value + ', ' + curves_value + ')');
    return [AR_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AudioIn'] = function(block) {
    var channelArray_value = Blockly.JavaScript.valueToCode(block, 'CHANNELARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var AudioIn_code = blk_append_mul_add(block, 'AudioIn(' + channelArray_value + ')');
    return [AudioIn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BufAlloc'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var numFrames_value = Blockly.JavaScript.valueToCode(block, 'NUMFRAMES', Blockly.JavaScript.ORDER_ATOMIC) || '9.0';
    var BufAlloc_code = blk_append_mul_add(block, 'BufAlloc(' + numChannels_value + ', ' + numFrames_value + ')');
    return [BufAlloc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BufRec'] = function(block) {
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inputArray_value = Blockly.JavaScript.valueToCode(block, 'INPUTARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BufRec_code = blk_append_mul_add(block, 'BufRec(' + bufnum_value + ', ' + reset_value + ', ' + inputArray_value + ')');
    return [BufRec_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Cc'] = function(block) {
    var index_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Cc_code = blk_append_mul_add(block, 'Cc(' + index_value + ')');
    return [Cc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Choose'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Choose_code = blk_append_mul_add(block, 'Choose(' + repeats_value + ', ' + array_value + ')');
    return [Choose_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DmdFor'] = function(block) {
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DmdFor_code = blk_append_mul_add(block, 'DmdFor(' + dur_value + ', ' + reset_value + ', ' + level_value + ')');
    return [DmdFor_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TDmdFor'] = function(block) {
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TDmdFor_code = blk_append_mul_add(block, 'TDmdFor(' + dur_value + ', ' + reset_value + ', ' + level_value + ')');
    return [TDmdFor_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DmdOn'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var demandUGens_value = Blockly.JavaScript.valueToCode(block, 'DEMANDUGENS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DmdOn_code = blk_append_mul_add(block, 'DmdOn(' + trig_value + ', ' + reset_value + ', ' + demandUGens_value + ')');
    return [DmdOn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_InFb'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var bus_value = Blockly.JavaScript.valueToCode(block, 'BUS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var InFb_code = blk_append_mul_add(block, 'InFb(' + numChannels_value + ', ' + bus_value + ')');
    return [InFb_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinLin'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var srclo_value = Blockly.JavaScript.valueToCode(block, 'SRCLO', Blockly.JavaScript.ORDER_ATOMIC) || '-1.0';
    var srchi_value = Blockly.JavaScript.valueToCode(block, 'SRCHI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dstlo_value = Blockly.JavaScript.valueToCode(block, 'DSTLO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dsthi_value = Blockly.JavaScript.valueToCode(block, 'DSTHI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var LinLin_code = blk_append_mul_add(block, 'LinLin(' + in_value + ', ' + srclo_value + ', ' + srchi_value + ', ' + dstlo_value + ', ' + dsthi_value + ')');
    return [LinLin_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinSeg'] = function(block) {
    var gate_value = Blockly.JavaScript.valueToCode(block, 'GATE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var coord_value = Blockly.JavaScript.valueToCode(block, 'COORD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinSeg_code = blk_append_mul_add(block, 'LinSeg(' + gate_value + ', ' + coord_value + ')');
    return [LinSeg_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ln'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Ln_code = blk_append_mul_add(block, 'Ln(' + start_value + ', ' + end_value + ', ' + dur_value + ')');
    return [Ln_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PMOsc'] = function(block) {
    var carfreq_value = Blockly.JavaScript.valueToCode(block, 'CARFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var modfreq_value = Blockly.JavaScript.valueToCode(block, 'MODFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var pmindex_value = Blockly.JavaScript.valueToCode(block, 'PMINDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var modphase_value = Blockly.JavaScript.valueToCode(block, 'MODPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PMOsc_code = blk_append_mul_add(block, 'PMOsc(' + carfreq_value + ', ' + modfreq_value + ', ' + pmindex_value + ', ' + modphase_value + ')');
    return [PMOsc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RingzBank'] = function(block) {
    var input_value = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var time_value = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var RingzBank_code = blk_append_mul_add(block, 'RingzBank(' + input_value + ', ' + freq_value + ', ' + amp_value + ', ' + time_value + ')');
    return [RingzBank_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Select2'] = function(block) {
    var predicate_value = Blockly.JavaScript.valueToCode(block, 'PREDICATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ifTrue_value = Blockly.JavaScript.valueToCode(block, 'IFTRUE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ifFalse_value = Blockly.JavaScript.valueToCode(block, 'IFFALSE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Select2_code = blk_append_mul_add(block, 'Select2(' + predicate_value + ', ' + ifTrue_value + ', ' + ifFalse_value + ')');
    return [Select2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SelectX'] = function(block) {
    var which_value = Blockly.JavaScript.valueToCode(block, 'WHICH', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SelectX_code = blk_append_mul_add(block, 'SelectX(' + which_value + ', ' + array_value + ')');
    return [SelectX_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Seq'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Seq_code = blk_append_mul_add(block, 'Seq(' + repeats_value + ', ' + array_value + ')');
    return [Seq_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ser'] = function(block) {
    var length_value = Blockly.JavaScript.valueToCode(block, 'LENGTH', Blockly.JavaScript.ORDER_ATOMIC) || '9.0';
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var step_value = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Ser_code = blk_append_mul_add(block, 'Ser(' + length_value + ', ' + start_value + ', ' + step_value + ')');
    return [Ser_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Shuf'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Shuf_code = blk_append_mul_add(block, 'Shuf(' + repeats_value + ', ' + array_value + ')');
    return [Shuf_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOscBank'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SinOscBank_code = blk_append_mul_add(block, 'SinOscBank(' + freq_value + ', ' + amp_value + ', ' + phase_value + ')');
    return [SinOscBank_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Splay'] = function(block) {
    var input_value = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var spread_value = Blockly.JavaScript.valueToCode(block, 'SPREAD', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var center_value = Blockly.JavaScript.valueToCode(block, 'CENTER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var levelComp_value = Blockly.JavaScript.valueToCode(block, 'LEVELCOMP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Splay_code = blk_append_mul_add(block, 'Splay(' + input_value + ', ' + spread_value + ', ' + level_value + ', ' + center_value + ', ' + levelComp_value + ')');
    return [Splay_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Splay2'] = function(block) {
    var inArray_value = Blockly.JavaScript.valueToCode(block, 'INARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Splay2_code = blk_append_mul_add(block, 'Splay2(' + inArray_value + ')');
    return [Splay2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Sw'] = function(block) {
    var index_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Sw_code = blk_append_mul_add(block, 'Sw(' + index_value + ')');
    return [Sw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TChoose'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TChoose_code = blk_append_mul_add(block, 'TChoose(' + trig_value + ', ' + array_value + ')');
    return [TChoose_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TLine'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var TLine_code = blk_append_mul_add(block, 'TLine(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + trig_value + ')');
    return [TLine_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TXLine'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.001';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var TXLine_code = blk_append_mul_add(block, 'TXLine(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + trig_value + ')');
    return [TXLine_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_XLn'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var XLn_code = blk_append_mul_add(block, 'XLn(' + start_value + ', ' + end_value + ', ' + dur_value + ')');
    return [XLn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

