Blockly.JavaScript['sc3_AllpassC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var AllpassC_code = 'MulAdd(AllpassC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AllpassC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AllpassL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var AllpassL_code = 'MulAdd(AllpassL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AllpassL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AmpComp'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var root_value = Blockly.JavaScript.valueToCode(block, 'ROOT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var exp_value = Blockly.JavaScript.valueToCode(block, 'EXP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var AmpComp_code = 'MulAdd(AmpComp(' + freq_value + ', ' + root_value + ', ' + exp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AmpComp_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BBandPass'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var bw_value = Blockly.JavaScript.valueToCode(block, 'BW', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var BBandPass_code = 'MulAdd(BBandPass(' + in_value + ', ' + freq_value + ', ' + bw_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BBandPass_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var BPF_code = 'MulAdd(BPF(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BPZ2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var BPZ2_code = 'MulAdd(BPZ2(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BPZ2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Blip'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var numharm_value = Blockly.JavaScript.valueToCode(block, 'NUMHARM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Blip_code = 'MulAdd(Blip(' + freq_value + ', ' + numharm_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Blip_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BrownNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var BrownNoise_code = 'MulAdd(BrownNoise(), ' + mul_value + ', ' + add_value + ')';
    return [BrownNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_CombC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var CombC_code = 'MulAdd(CombC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [CombC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_CombL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var CombL_code = 'MulAdd(CombL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [CombL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Crackle'] = function(block) {
    var chaosParam_value = Blockly.JavaScript.valueToCode(block, 'CHAOSPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Crackle_code = 'MulAdd(Crackle(' + chaosParam_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Crackle_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Decay'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Decay_code = 'MulAdd(Decay(' + in_value + ', ' + decayTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Decay_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Decay2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Decay2_code = 'MulAdd(Decay2(' + in_value + ', ' + attackTime_value + ', ' + decayTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Decay2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DegreeToKey'] = function(block) {
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var octave_value = Blockly.JavaScript.valueToCode(block, 'OCTAVE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var DegreeToKey_code = 'MulAdd(DegreeToKey(' + bufnum_value + ', ' + in_value + ', ' + octave_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DegreeToKey_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DelayC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var DelayC_code = 'MulAdd(DelayC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DelayC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DelayL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var DelayL_code = 'MulAdd(DelayL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DelayL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Demand'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var demandUGens_value = Blockly.JavaScript.valueToCode(block, 'DEMANDUGENS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Demand_code = 'MulAdd(Demand(' + trig_value + ', ' + reset_value + ', ' + demandUGens_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Demand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Drand'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var list_value = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Drand_code = 'MulAdd(Drand(' + repeats_value + ', ' + list_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Drand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dseq'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var list_value = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Dseq_code = 'MulAdd(Dseq(' + repeats_value + ', ' + list_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Dseq_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dshuf'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var list_value = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Dshuf_code = 'MulAdd(Dshuf(' + repeats_value + ', ' + list_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Dshuf_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dust'] = function(block) {
    var density_value = Blockly.JavaScript.valueToCode(block, 'DENSITY', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Dust_code = 'MulAdd(Dust(' + density_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Dust_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Duty'] = function(block) {
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Duty_code = 'MulAdd(Duty(' + dur_value + ', ' + reset_value + ', ' + doneAction_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Duty_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ExpRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var ExpRand_code = 'MulAdd(ExpRand(' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [ExpRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FBSineC'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var im_value = Blockly.JavaScript.valueToCode(block, 'IM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var fb_value = Blockly.JavaScript.valueToCode(block, 'FB', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var a_value = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var c_value = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var xi_value = Blockly.JavaScript.valueToCode(block, 'XI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var yi_value = Blockly.JavaScript.valueToCode(block, 'YI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var FBSineC_code = 'MulAdd(FBSineC(' + freq_value + ', ' + im_value + ', ' + fb_value + ', ' + a_value + ', ' + c_value + ', ' + xi_value + ', ' + yi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [FBSineC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Formant'] = function(block) {
    var fundfreq_value = Blockly.JavaScript.valueToCode(block, 'FUNDFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var formfreq_value = Blockly.JavaScript.valueToCode(block, 'FORMFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var bwfreq_value = Blockly.JavaScript.valueToCode(block, 'BWFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Formant_code = 'MulAdd(Formant(' + fundfreq_value + ', ' + formfreq_value + ', ' + bwfreq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Formant_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreeVerb2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var in2_value = Blockly.JavaScript.valueToCode(block, 'IN2', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mix_value = Blockly.JavaScript.valueToCode(block, 'MIX', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var room_value = Blockly.JavaScript.valueToCode(block, 'ROOM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var damp_value = Blockly.JavaScript.valueToCode(block, 'DAMP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var FreeVerb2_code = 'MulAdd(FreeVerb2(' + in_value + ', ' + in2_value + ', ' + mix_value + ', ' + room_value + ', ' + damp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [FreeVerb2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreqShift'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var FreqShift_code = 'MulAdd(FreqShift(' + in_value + ', ' + freq_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [FreqShift_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GVerb'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var roomsize_value = Blockly.JavaScript.valueToCode(block, 'ROOMSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var revtime_value = Blockly.JavaScript.valueToCode(block, 'REVTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var damping_value = Blockly.JavaScript.valueToCode(block, 'DAMPING', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var inputbw_value = Blockly.JavaScript.valueToCode(block, 'INPUTBW', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var spread_value = Blockly.JavaScript.valueToCode(block, 'SPREAD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var drylevel_value = Blockly.JavaScript.valueToCode(block, 'DRYLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var earlyreflevel_value = Blockly.JavaScript.valueToCode(block, 'EARLYREFLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var taillevel_value = Blockly.JavaScript.valueToCode(block, 'TAILLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxroomsize_value = Blockly.JavaScript.valueToCode(block, 'MAXROOMSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var GVerb_code = 'MulAdd(GVerb(' + in_value + ', ' + roomsize_value + ', ' + revtime_value + ', ' + damping_value + ', ' + inputbw_value + ', ' + spread_value + ', ' + drylevel_value + ', ' + earlyreflevel_value + ', ' + taillevel_value + ', ' + maxroomsize_value + '), ' + mul_value + ', ' + add_value + ')';
    return [GVerb_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Gendy1'] = function(block) {
    var ampdist_value = Blockly.JavaScript.valueToCode(block, 'AMPDIST', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var durdist_value = Blockly.JavaScript.valueToCode(block, 'DURDIST', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var adparam_value = Blockly.JavaScript.valueToCode(block, 'ADPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var ddparam_value = Blockly.JavaScript.valueToCode(block, 'DDPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var minfreq_value = Blockly.JavaScript.valueToCode(block, 'MINFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxfreq_value = Blockly.JavaScript.valueToCode(block, 'MAXFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var ampscale_value = Blockly.JavaScript.valueToCode(block, 'AMPSCALE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var durscale_value = Blockly.JavaScript.valueToCode(block, 'DURSCALE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var initCPs_value = Blockly.JavaScript.valueToCode(block, 'INITCPS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var knum_value = Blockly.JavaScript.valueToCode(block, 'KNUM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Gendy1_code = 'MulAdd(Gendy1(' + ampdist_value + ', ' + durdist_value + ', ' + adparam_value + ', ' + ddparam_value + ', ' + minfreq_value + ', ' + maxfreq_value + ', ' + ampscale_value + ', ' + durscale_value + ', ' + initCPs_value + ', ' + knum_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Gendy1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GrayNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var GrayNoise_code = 'MulAdd(GrayNoise(), ' + mul_value + ', ' + add_value + ')';
    return [GrayNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_HPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var HPF_code = 'MulAdd(HPF(' + in_value + ', ' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [HPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_HPZ1'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var HPZ1_code = 'MulAdd(HPZ1(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [HPZ1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Impulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Impulse_code = 'MulAdd(Impulse(' + freq_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Impulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_InFeedback'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var bus_value = Blockly.JavaScript.valueToCode(block, 'BUS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var InFeedback_code = 'MulAdd(InFeedback(' + numChannels_value + ', ' + bus_value + '), ' + mul_value + ', ' + add_value + ')';
    return [InFeedback_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFCub'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFCub_code = 'MulAdd(LFCub(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFCub_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFGauss'] = function(block) {
    var duration_value = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var loop_value = Blockly.JavaScript.valueToCode(block, 'LOOP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFGauss_code = 'MulAdd(LFGauss(' + duration_value + ', ' + width_value + ', ' + iphase_value + ', ' + loop_value + ', ' + doneAction_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFGauss_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise0'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFNoise0_code = 'MulAdd(LFNoise0(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFNoise0_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise1'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFNoise1_code = 'MulAdd(LFNoise1(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFNoise1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise2'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFNoise2_code = 'MulAdd(LFNoise2(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFNoise2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFPar'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFPar_code = 'MulAdd(LFPar(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFPar_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFPulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFPulse_code = 'MulAdd(LFPulse(' + freq_value + ', ' + iphase_value + ', ' + width_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFPulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFSaw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFSaw_code = 'MulAdd(LFSaw(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFTri'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LFTri_code = 'MulAdd(LFTri(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFTri_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LPF_code = 'MulAdd(LPF(' + in_value + ', ' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LPZ1'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LPZ1_code = 'MulAdd(LPZ1(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LPZ1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Lag_code = 'MulAdd(Lag(' + in_value + ', ' + lagTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Lag_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LagUD'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var lagTimeU_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMEU', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var lagTimeD_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMED', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LagUD_code = 'MulAdd(LagUD(' + in_value + ', ' + lagTimeU_value + ', ' + lagTimeD_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LagUD_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Latch'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Latch_code = 'MulAdd(Latch(' + in_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Latch_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LeakDC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LeakDC_code = 'MulAdd(LeakDC(' + in_value + ', ' + coef_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LeakDC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinExp'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var srclo_value = Blockly.JavaScript.valueToCode(block, 'SRCLO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var srchi_value = Blockly.JavaScript.valueToCode(block, 'SRCHI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dstlo_value = Blockly.JavaScript.valueToCode(block, 'DSTLO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dsthi_value = Blockly.JavaScript.valueToCode(block, 'DSTHI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LinExp_code = 'MulAdd(LinExp(' + in_value + ', ' + srclo_value + ', ' + srchi_value + ', ' + dstlo_value + ', ' + dsthi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinExp_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var minmax_value = Blockly.JavaScript.valueToCode(block, 'MINMAX', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LinRand_code = 'MulAdd(LinRand(' + lo_value + ', ' + hi_value + ', ' + minmax_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinXFade2'] = function(block) {
    var inA_value = Blockly.JavaScript.valueToCode(block, 'INA', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var inB_value = Blockly.JavaScript.valueToCode(block, 'INB', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LinXFade2_code = 'MulAdd(LinXFade2(' + inA_value + ', ' + inB_value + ', ' + pan_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinXFade2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Line'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Line_code = 'MulAdd(Line(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + doneAction_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Line_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LocalBuf'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var numFrames_value = Blockly.JavaScript.valueToCode(block, 'NUMFRAMES', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LocalBuf_code = 'MulAdd(LocalBuf(' + numChannels_value + ', ' + numFrames_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LocalBuf_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LocalIn'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var default_value = Blockly.JavaScript.valueToCode(block, 'DEFAULT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LocalIn_code = 'MulAdd(LocalIn(' + numChannels_value + ', ' + default_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LocalIn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LocalOut'] = function(block) {
    var channelsArray_value = Blockly.JavaScript.valueToCode(block, 'CHANNELSARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LocalOut_code = 'LocalOut(' + channelsArray_value + ')';
    return [LocalOut_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MoogFF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var gain_value = Blockly.JavaScript.valueToCode(block, 'GAIN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var MoogFF_code = 'MulAdd(MoogFF(' + in_value + ', ' + freq_value + ', ' + gain_value + ', ' + reset_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MoogFF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseX'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var warp_value = Blockly.JavaScript.valueToCode(block, 'WARP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var MouseX_code = 'MulAdd(MouseX(' + minval_value + ', ' + maxval_value + ', ' + warp_value + ', ' + lag_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MouseX_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseY'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var warp_value = Blockly.JavaScript.valueToCode(block, 'WARP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var MouseY_code = 'MulAdd(MouseY(' + minval_value + ', ' + maxval_value + ', ' + warp_value + ', ' + lag_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MouseY_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_OnePole'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var OnePole_code = 'MulAdd(OnePole(' + in_value + ', ' + coef_value + '), ' + mul_value + ', ' + add_value + ')';
    return [OnePole_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Out'] = function(block) {
    var bus_value = Blockly.JavaScript.valueToCode(block, 'BUS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var channelsArray_value = Blockly.JavaScript.valueToCode(block, 'CHANNELSARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Out_code = 'Out(' + bus_value + ', ' + channelsArray_value + ')';
    return [Out_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pan2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Pan2_code = 'MulAdd(Pan2(' + in_value + ', ' + pos_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pan2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PinkNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var PinkNoise_code = 'MulAdd(PinkNoise(), ' + mul_value + ', ' + add_value + ')';
    return [PinkNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PitchShift'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var windowSize_value = Blockly.JavaScript.valueToCode(block, 'WINDOWSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var pitchRatio_value = Blockly.JavaScript.valueToCode(block, 'PITCHRATIO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var pitchDispersion_value = Blockly.JavaScript.valueToCode(block, 'PITCHDISPERSION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var timeDispersion_value = Blockly.JavaScript.valueToCode(block, 'TIMEDISPERSION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var PitchShift_code = 'MulAdd(PitchShift(' + in_value + ', ' + windowSize_value + ', ' + pitchRatio_value + ', ' + pitchDispersion_value + ', ' + timeDispersion_value + '), ' + mul_value + ', ' + add_value + ')';
    return [PitchShift_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pluck'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Pluck_code = 'MulAdd(Pluck(' + in_value + ', ' + trig_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ', ' + coef_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pluck_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Pulse_code = 'MulAdd(Pulse(' + freq_value + ', ' + width_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RHPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var RHPF_code = 'MulAdd(RHPF(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RHPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RLPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var RLPF_code = 'MulAdd(RLPF(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RLPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Rand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Rand_code = 'MulAdd(Rand(' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Rand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RecordBuf'] = function(block) {
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var offset_value = Blockly.JavaScript.valueToCode(block, 'OFFSET', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var recLevel_value = Blockly.JavaScript.valueToCode(block, 'RECLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var preLevel_value = Blockly.JavaScript.valueToCode(block, 'PRELEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var run_value = Blockly.JavaScript.valueToCode(block, 'RUN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var loop_value = Blockly.JavaScript.valueToCode(block, 'LOOP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var inputArray_value = Blockly.JavaScript.valueToCode(block, 'INPUTARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var RecordBuf_code = 'MulAdd(RecordBuf(' + bufnum_value + ', ' + offset_value + ', ' + recLevel_value + ', ' + preLevel_value + ', ' + run_value + ', ' + loop_value + ', ' + trigger_value + ', ' + doneAction_value + ', ' + inputArray_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RecordBuf_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Resonz'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var bwr_value = Blockly.JavaScript.valueToCode(block, 'BWR', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Resonz_code = 'MulAdd(Resonz(' + in_value + ', ' + freq_value + ', ' + bwr_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Resonz_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ringz'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Ringz_code = 'MulAdd(Ringz(' + in_value + ', ' + freq_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Ringz_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Rotate2'] = function(block) {
    var x_value = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var y_value = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Rotate2_code = 'MulAdd(Rotate2(' + x_value + ', ' + y_value + ', ' + pos_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Rotate2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RunningMax'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var RunningMax_code = 'MulAdd(RunningMax(' + in_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RunningMax_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Saw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Saw_code = 'MulAdd(Saw(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Saw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Select'] = function(block) {
    var which_value = Blockly.JavaScript.valueToCode(block, 'WHICH', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Select_code = 'MulAdd(Select(' + which_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Select_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOsc'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var SinOsc_code = 'MulAdd(SinOsc(' + freq_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SinOsc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOscFB'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var feedback_value = Blockly.JavaScript.valueToCode(block, 'FEEDBACK', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var SinOscFB_code = 'MulAdd(SinOscFB(' + freq_value + ', ' + feedback_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SinOscFB_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Stepper'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var min_value = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var max_value = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var step_value = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var resetval_value = Blockly.JavaScript.valueToCode(block, 'RESETVAL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Stepper_code = 'MulAdd(Stepper(' + trig_value + ', ' + reset_value + ', ' + min_value + ', ' + max_value + ', ' + step_value + ', ' + resetval_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Stepper_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Sweep'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Sweep_code = 'MulAdd(Sweep(' + trig_value + ', ' + rate_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Sweep_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SyncSaw'] = function(block) {
    var syncFreq_value = Blockly.JavaScript.valueToCode(block, 'SYNCFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var sawFreq_value = Blockly.JavaScript.valueToCode(block, 'SAWFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var SyncSaw_code = 'MulAdd(SyncSaw(' + syncFreq_value + ', ' + sawFreq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SyncSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TExpRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var TExpRand_code = 'MulAdd(TExpRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TExpRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TGrains'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var centerPos_value = Blockly.JavaScript.valueToCode(block, 'CENTERPOS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var interp_value = Blockly.JavaScript.valueToCode(block, 'INTERP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var TGrains_code = 'MulAdd(TGrains(' + numChannels_value + ', ' + trigger_value + ', ' + bufnum_value + ', ' + rate_value + ', ' + centerPos_value + ', ' + dur_value + ', ' + pan_value + ', ' + amp_value + ', ' + interp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TGrains_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var TRand_code = 'MulAdd(TRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_VarSaw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var VarSaw_code = 'MulAdd(VarSaw(' + freq_value + ', ' + iphase_value + ', ' + width_value + '), ' + mul_value + ', ' + add_value + ')';
    return [VarSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_WhiteNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var WhiteNoise_code = 'MulAdd(WhiteNoise(), ' + mul_value + ', ' + add_value + ')';
    return [WhiteNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_XLine'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var XLine_code = 'MulAdd(XLine(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + doneAction_value + '), ' + mul_value + ', ' + add_value + ')';
    return [XLine_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinLin'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var srclo_value = Blockly.JavaScript.valueToCode(block, 'SRCLO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var srchi_value = Blockly.JavaScript.valueToCode(block, 'SRCHI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dstlo_value = Blockly.JavaScript.valueToCode(block, 'DSTLO', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dsthi_value = Blockly.JavaScript.valueToCode(block, 'DSTHI', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var LinLin_code = 'MulAdd(LinLin(' + in_value + ', ' + srclo_value + ', ' + srchi_value + ', ' + dstlo_value + ', ' + dsthi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinLin_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RingzBank'] = function(block) {
    var input_value = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var time_value = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var RingzBank_code = 'MulAdd(RingzBank(' + input_value + ', ' + freq_value + ', ' + amp_value + ', ' + time_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RingzBank_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Select2'] = function(block) {
    var predicate_value = Blockly.JavaScript.valueToCode(block, 'PREDICATE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var ifTrue_value = Blockly.JavaScript.valueToCode(block, 'IFTRUE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var ifFalse_value = Blockly.JavaScript.valueToCode(block, 'IFFALSE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var Select2_code = 'MulAdd(Select2(' + predicate_value + ', ' + ifTrue_value + ', ' + ifFalse_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Select2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOscBank'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var SinOscBank_code = 'MulAdd(SinOscBank(' + freq_value + ', ' + amp_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SinOscBank_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TChoose'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var TChoose_code = 'MulAdd(TChoose(' + trig_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TChoose_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TLine'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var TLine_code = 'MulAdd(TLine(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TLine_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

