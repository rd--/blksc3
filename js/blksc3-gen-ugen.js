Blockly.JavaScript['sc3_AllpassC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var AllpassC_code = 'MulAdd(AllpassC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AllpassC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AllpassL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var AllpassL_code = 'MulAdd(AllpassL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AllpassL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AmpComp'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var root_value = Blockly.JavaScript.valueToCode(block, 'ROOT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var exp_value = Blockly.JavaScript.valueToCode(block, 'EXP', Blockly.JavaScript.ORDER_ATOMIC) || '0.3333';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var AmpComp_code = 'MulAdd(AmpComp(' + freq_value + ', ' + root_value + ', ' + exp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AmpComp_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Amplitude'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var releaseTime_value = Blockly.JavaScript.valueToCode(block, 'RELEASETIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Amplitude_code = 'MulAdd(Amplitude(' + in_value + ', ' + attackTime_value + ', ' + releaseTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Amplitude_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BBandPass'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1200.0';
    var bw_value = Blockly.JavaScript.valueToCode(block, 'BW', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BBandPass_code = 'MulAdd(BBandPass(' + in_value + ', ' + freq_value + ', ' + bw_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BBandPass_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BBandStop'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1200.0';
    var bw_value = Blockly.JavaScript.valueToCode(block, 'BW', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BBandStop_code = 'MulAdd(BBandStop(' + in_value + ', ' + freq_value + ', ' + bw_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BBandStop_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BLowPass'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1200.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BLowPass_code = 'MulAdd(BLowPass(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BLowPass_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BPF_code = 'MulAdd(BPF(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BPZ2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BPZ2_code = 'MulAdd(BPZ2(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BPZ2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Balance2'] = function(block) {
    var left_value = Blockly.JavaScript.valueToCode(block, 'LEFT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var right_value = Blockly.JavaScript.valueToCode(block, 'RIGHT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Balance2_code = 'MulAdd(Balance2(' + left_value + ', ' + right_value + ', ' + pos_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Balance2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Blip'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var numharm_value = Blockly.JavaScript.valueToCode(block, 'NUMHARM', Blockly.JavaScript.ORDER_ATOMIC) || '200.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Blip_code = 'MulAdd(Blip(' + freq_value + ', ' + numharm_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Blip_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BrownNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BrownNoise_code = 'MulAdd(BrownNoise(), ' + mul_value + ', ' + add_value + ')';
    return [BrownNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Clip'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Clip_code = 'MulAdd(Clip(' + in_value + ', ' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Clip_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_CombC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var CombC_code = 'MulAdd(CombC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [CombC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_CombL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var CombL_code = 'MulAdd(CombL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [CombL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Crackle'] = function(block) {
    var chaosParam_value = Blockly.JavaScript.valueToCode(block, 'CHAOSPARAM', Blockly.JavaScript.ORDER_ATOMIC) || '1.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Crackle_code = 'MulAdd(Crackle(' + chaosParam_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Crackle_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Decay'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Decay_code = 'MulAdd(Decay(' + in_value + ', ' + decayTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Decay_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Decay2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Decay2_code = 'MulAdd(Decay2(' + in_value + ', ' + attackTime_value + ', ' + decayTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Decay2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DegreeToKey'] = function(block) {
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var octave_value = Blockly.JavaScript.valueToCode(block, 'OCTAVE', Blockly.JavaScript.ORDER_ATOMIC) || '12.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DegreeToKey_code = 'MulAdd(DegreeToKey(' + bufnum_value + ', ' + in_value + ', ' + octave_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DegreeToKey_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DelayC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DelayC_code = 'MulAdd(DelayC(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DelayC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DelayL'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DelayL_code = 'MulAdd(DelayL(' + in_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DelayL_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dust'] = function(block) {
    var density_value = Blockly.JavaScript.valueToCode(block, 'DENSITY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Dust_code = 'MulAdd(Dust(' + density_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Dust_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Dust2'] = function(block) {
    var density_value = Blockly.JavaScript.valueToCode(block, 'DENSITY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Dust2_code = 'MulAdd(Dust2(' + density_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Dust2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ExpRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var ExpRand_code = 'MulAdd(ExpRand(' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var FBSineC_code = 'MulAdd(FBSineC(' + freq_value + ', ' + im_value + ', ' + fb_value + ', ' + a_value + ', ' + c_value + ', ' + xi_value + ', ' + yi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [FBSineC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Fold'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Fold_code = 'MulAdd(Fold(' + in_value + ', ' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Fold_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Formant'] = function(block) {
    var fundfreq_value = Blockly.JavaScript.valueToCode(block, 'FUNDFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var formfreq_value = Blockly.JavaScript.valueToCode(block, 'FORMFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1760.0';
    var bwfreq_value = Blockly.JavaScript.valueToCode(block, 'BWFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '880.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Formant_code = 'MulAdd(Formant(' + fundfreq_value + ', ' + formfreq_value + ', ' + bwfreq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Formant_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Formlet'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var attacktime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Formlet_code = 'MulAdd(Formlet(' + in_value + ', ' + freq_value + ', ' + attacktime_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Formlet_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreeVerb'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mix_value = Blockly.JavaScript.valueToCode(block, 'MIX', Blockly.JavaScript.ORDER_ATOMIC) || '0.33';
    var room_value = Blockly.JavaScript.valueToCode(block, 'ROOM', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var damp_value = Blockly.JavaScript.valueToCode(block, 'DAMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var FreeVerb_code = 'MulAdd(FreeVerb(' + in_value + ', ' + mix_value + ', ' + room_value + ', ' + damp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [FreeVerb_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreeVerb2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var in2_value = Blockly.JavaScript.valueToCode(block, 'IN2', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mix_value = Blockly.JavaScript.valueToCode(block, 'MIX', Blockly.JavaScript.ORDER_ATOMIC) || '0.33';
    var room_value = Blockly.JavaScript.valueToCode(block, 'ROOM', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var damp_value = Blockly.JavaScript.valueToCode(block, 'DAMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var FreeVerb2_code = 'MulAdd(FreeVerb2(' + in_value + ', ' + in2_value + ', ' + mix_value + ', ' + room_value + ', ' + damp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [FreeVerb2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_FreqShift'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var FreqShift_code = 'MulAdd(FreqShift(' + in_value + ', ' + freq_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var GVerb_code = 'MulAdd(GVerb(' + in_value + ', ' + roomsize_value + ', ' + revtime_value + ', ' + damping_value + ', ' + inputbw_value + ', ' + spread_value + ', ' + drylevel_value + ', ' + earlyreflevel_value + ', ' + taillevel_value + ', ' + maxroomsize_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Gendy1_code = 'MulAdd(Gendy1(' + ampdist_value + ', ' + durdist_value + ', ' + adparam_value + ', ' + ddparam_value + ', ' + minfreq_value + ', ' + maxfreq_value + ', ' + ampscale_value + ', ' + durscale_value + ', ' + initCPs_value + ', ' + knum_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var GrainFM_code = 'MulAdd(GrainFM(' + numChannels_value + ', ' + trigger_value + ', ' + dur_value + ', ' + carfreq_value + ', ' + modfreq_value + ', ' + index_value + ', ' + pan_value + ', ' + envbufnum_value + ', ' + maxGrains_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var GrainSin_code = 'MulAdd(GrainSin(' + numChannels_value + ', ' + trigger_value + ', ' + dur_value + ', ' + freq_value + ', ' + pan_value + ', ' + envbufnum_value + ', ' + maxGrains_value + '), ' + mul_value + ', ' + add_value + ')';
    return [GrainSin_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_GrayNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var GrayNoise_code = 'MulAdd(GrayNoise(), ' + mul_value + ', ' + add_value + ')';
    return [GrayNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_HPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var HPF_code = 'MulAdd(HPF(' + in_value + ', ' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [HPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_HPZ1'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var HPZ1_code = 'MulAdd(HPZ1(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [HPZ1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Hasher'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Hasher_code = 'MulAdd(Hasher(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Hasher_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_IRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '127.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var IRand_code = 'MulAdd(IRand(' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [IRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Impulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Impulse_code = 'MulAdd(Impulse(' + freq_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Impulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_KeyState'] = function(block) {
    var keycode_value = Blockly.JavaScript.valueToCode(block, 'KEYCODE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var KeyState_code = 'MulAdd(KeyState(' + keycode_value + ', ' + minval_value + ', ' + maxval_value + ', ' + lag_value + '), ' + mul_value + ', ' + add_value + ')';
    return [KeyState_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFCub'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFCub_code = 'MulAdd(LFCub(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFCub_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFDNoise1'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFDNoise1_code = 'MulAdd(LFDNoise1(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFDNoise1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFDNoise3'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFDNoise3_code = 'MulAdd(LFDNoise3(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFDNoise3_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFGauss'] = function(block) {
    var duration_value = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var loop_value = Blockly.JavaScript.valueToCode(block, 'LOOP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var doneAction_value = Blockly.JavaScript.valueToCode(block, 'DONEACTION', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFGauss_code = 'MulAdd(LFGauss(' + duration_value + ', ' + width_value + ', ' + iphase_value + ', ' + loop_value + ', ' + doneAction_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFGauss_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise0'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFNoise0_code = 'MulAdd(LFNoise0(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFNoise0_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise1'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFNoise1_code = 'MulAdd(LFNoise1(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFNoise1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFNoise2'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '500.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFNoise2_code = 'MulAdd(LFNoise2(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFNoise2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFPar'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFPar_code = 'MulAdd(LFPar(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFPar_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFPulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFPulse_code = 'MulAdd(LFPulse(' + freq_value + ', ' + iphase_value + ', ' + width_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFPulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFSaw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFSaw_code = 'MulAdd(LFSaw(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LFTri'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LFTri_code = 'MulAdd(LFTri(' + freq_value + ', ' + iphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LFTri_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LPF_code = 'MulAdd(LPF(' + in_value + ', ' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LPZ1'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LPZ1_code = 'MulAdd(LPZ1(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LPZ1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Lag_code = 'MulAdd(Lag(' + in_value + ', ' + lagTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Lag_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag2'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Lag2_code = 'MulAdd(Lag2(' + in_value + ', ' + lagTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Lag2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag3'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTime_value = Blockly.JavaScript.valueToCode(block, 'LAGTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Lag3_code = 'MulAdd(Lag3(' + in_value + ', ' + lagTime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Lag3_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Lag3UD'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTimeU_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMEU', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var lagTimeD_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMED', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Lag3UD_code = 'MulAdd(Lag3UD(' + in_value + ', ' + lagTimeU_value + ', ' + lagTimeD_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Lag3UD_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LagUD'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lagTimeU_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMEU', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var lagTimeD_value = Blockly.JavaScript.valueToCode(block, 'LAGTIMED', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LagUD_code = 'MulAdd(LagUD(' + in_value + ', ' + lagTimeU_value + ', ' + lagTimeD_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LagUD_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Latch'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Latch_code = 'MulAdd(Latch(' + in_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Latch_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LeakDC'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '0.995';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LeakDC_code = 'MulAdd(LeakDC(' + in_value + ', ' + coef_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LeakDC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Limiter'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Limiter_code = 'MulAdd(Limiter(' + in_value + ', ' + level_value + ', ' + dur_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Limiter_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinExp'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var srclo_value = Blockly.JavaScript.valueToCode(block, 'SRCLO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var srchi_value = Blockly.JavaScript.valueToCode(block, 'SRCHI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dstlo_value = Blockly.JavaScript.valueToCode(block, 'DSTLO', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dsthi_value = Blockly.JavaScript.valueToCode(block, 'DSTHI', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinExp_code = 'MulAdd(LinExp(' + in_value + ', ' + srclo_value + ', ' + srchi_value + ', ' + dstlo_value + ', ' + dsthi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinExp_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var minmax_value = Blockly.JavaScript.valueToCode(block, 'MINMAX', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinRand_code = 'MulAdd(LinRand(' + lo_value + ', ' + hi_value + ', ' + minmax_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinXFade2'] = function(block) {
    var inA_value = Blockly.JavaScript.valueToCode(block, 'INA', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inB_value = Blockly.JavaScript.valueToCode(block, 'INB', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinXFade2_code = 'MulAdd(LinXFade2(' + inA_value + ', ' + inB_value + ', ' + pan_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinXFade2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LocalIn'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var default_value = Blockly.JavaScript.valueToCode(block, 'DEFAULT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LocalIn_code = 'MulAdd(LocalIn(' + numChannels_value + ', ' + default_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var MantissaMask_code = 'MulAdd(MantissaMask(' + in_value + ', ' + bits_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MantissaMask_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MoogFF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '100.0';
    var gain_value = Blockly.JavaScript.valueToCode(block, 'GAIN', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var MoogFF_code = 'MulAdd(MoogFF(' + in_value + ', ' + freq_value + ', ' + gain_value + ', ' + reset_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MoogFF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseX'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var warp_value = Blockly.JavaScript.valueToCode(block, 'WARP', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var MouseX_code = 'MulAdd(MouseX(' + minval_value + ', ' + maxval_value + ', ' + warp_value + ', ' + lag_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MouseX_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MouseY'] = function(block) {
    var minval_value = Blockly.JavaScript.valueToCode(block, 'MINVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var maxval_value = Blockly.JavaScript.valueToCode(block, 'MAXVAL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var warp_value = Blockly.JavaScript.valueToCode(block, 'WARP', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var lag_value = Blockly.JavaScript.valueToCode(block, 'LAG', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var MouseY_code = 'MulAdd(MouseY(' + minval_value + ', ' + maxval_value + ', ' + warp_value + ', ' + lag_value + '), ' + mul_value + ', ' + add_value + ')';
    return [MouseY_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Normalizer'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Normalizer_code = 'MulAdd(Normalizer(' + in_value + ', ' + level_value + ', ' + dur_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Normalizer_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_OnePole'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var OnePole_code = 'MulAdd(OnePole(' + in_value + ', ' + coef_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Pan2_code = 'MulAdd(Pan2(' + in_value + ', ' + pos_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pan2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Phasor'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var resetPos_value = Blockly.JavaScript.valueToCode(block, 'RESETPOS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Phasor_code = 'MulAdd(Phasor(' + trig_value + ', ' + rate_value + ', ' + start_value + ', ' + end_value + ', ' + resetPos_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Phasor_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PinkNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PinkNoise_code = 'MulAdd(PinkNoise(), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Pitch_code = 'MulAdd(Pitch(' + in_value + ', ' + initFreq_value + ', ' + minFreq_value + ', ' + maxFreq_value + ', ' + execFreq_value + ', ' + maxBinsPerOctave_value + ', ' + median_value + ', ' + ampThreshold_value + ', ' + peakThreshold_value + ', ' + downSample_value + ', ' + clar_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pitch_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PitchShift'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var windowSize_value = Blockly.JavaScript.valueToCode(block, 'WINDOWSIZE', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var pitchRatio_value = Blockly.JavaScript.valueToCode(block, 'PITCHRATIO', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var pitchDispersion_value = Blockly.JavaScript.valueToCode(block, 'PITCHDISPERSION', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var timeDispersion_value = Blockly.JavaScript.valueToCode(block, 'TIMEDISPERSION', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PitchShift_code = 'MulAdd(PitchShift(' + in_value + ', ' + windowSize_value + ', ' + pitchRatio_value + ', ' + pitchDispersion_value + ', ' + timeDispersion_value + '), ' + mul_value + ', ' + add_value + ')';
    return [PitchShift_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pluck'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var maxdelaytime_value = Blockly.JavaScript.valueToCode(block, 'MAXDELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var delaytime_value = Blockly.JavaScript.valueToCode(block, 'DELAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.2';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var coef_value = Blockly.JavaScript.valueToCode(block, 'COEF', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Pluck_code = 'MulAdd(Pluck(' + in_value + ', ' + trig_value + ', ' + maxdelaytime_value + ', ' + delaytime_value + ', ' + decaytime_value + ', ' + coef_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pluck_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Pulse'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Pulse_code = 'MulAdd(Pulse(' + freq_value + ', ' + width_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Pulse_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PulseCount'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PulseCount_code = 'MulAdd(PulseCount(' + trig_value + ', ' + reset_value + '), ' + mul_value + ', ' + add_value + ')';
    return [PulseCount_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PulseDivider'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var div_value = Blockly.JavaScript.valueToCode(block, 'DIV', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PulseDivider_code = 'MulAdd(PulseDivider(' + trig_value + ', ' + div_value + ', ' + start_value + '), ' + mul_value + ', ' + add_value + ')';
    return [PulseDivider_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_QuadC'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '22050.0';
    var a_value = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var b_value = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '-1.0';
    var c_value = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC) || '-0.75';
    var xi_value = Blockly.JavaScript.valueToCode(block, 'XI', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var QuadC_code = 'MulAdd(QuadC(' + freq_value + ', ' + a_value + ', ' + b_value + ', ' + c_value + ', ' + xi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [QuadC_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RHPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var RHPF_code = 'MulAdd(RHPF(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RHPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RLPF'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var rq_value = Blockly.JavaScript.valueToCode(block, 'RQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var RLPF_code = 'MulAdd(RLPF(' + in_value + ', ' + freq_value + ', ' + rq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RLPF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Rand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Rand_code = 'MulAdd(Rand(' + lo_value + ', ' + hi_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Resonz_code = 'MulAdd(Resonz(' + in_value + ', ' + freq_value + ', ' + bwr_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Resonz_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ringz'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var decaytime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Ringz_code = 'MulAdd(Ringz(' + in_value + ', ' + freq_value + ', ' + decaytime_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Ringz_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Rotate2'] = function(block) {
    var x_value = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var y_value = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pos_value = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Rotate2_code = 'MulAdd(Rotate2(' + x_value + ', ' + y_value + ', ' + pos_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Rotate2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RunningMax'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var RunningMax_code = 'MulAdd(RunningMax(' + in_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RunningMax_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SampleRate'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SampleRate_code = 'MulAdd(SampleRate(), ' + mul_value + ', ' + add_value + ')';
    return [SampleRate_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Saw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Saw_code = 'MulAdd(Saw(' + freq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Saw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Select'] = function(block) {
    var which_value = Blockly.JavaScript.valueToCode(block, 'WHICH', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Select_code = 'MulAdd(Select(' + which_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Select_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOsc'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SinOsc_code = 'MulAdd(SinOsc(' + freq_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SinOsc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOscFB'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var feedback_value = Blockly.JavaScript.valueToCode(block, 'FEEDBACK', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SinOscFB_code = 'MulAdd(SinOscFB(' + freq_value + ', ' + feedback_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SinOscFB_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Slew'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var up_value = Blockly.JavaScript.valueToCode(block, 'UP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dn_value = Blockly.JavaScript.valueToCode(block, 'DN', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var Slew_code = 'Slew(' + in_value + ', ' + up_value + ', ' + dn_value + ')';
    return [Slew_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Slope'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Slope_code = 'MulAdd(Slope(' + in_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Slope_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Stepper'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var min_value = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var max_value = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '7.0';
    var step_value = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var resetval_value = Blockly.JavaScript.valueToCode(block, 'RESETVAL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Stepper_code = 'MulAdd(Stepper(' + trig_value + ', ' + reset_value + ', ' + min_value + ', ' + max_value + ', ' + step_value + ', ' + resetval_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Stepper_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Sweep'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var rate_value = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Sweep_code = 'MulAdd(Sweep(' + trig_value + ', ' + rate_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Sweep_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SyncSaw'] = function(block) {
    var syncFreq_value = Blockly.JavaScript.valueToCode(block, 'SYNCFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var sawFreq_value = Blockly.JavaScript.valueToCode(block, 'SAWFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SyncSaw_code = 'MulAdd(SyncSaw(' + syncFreq_value + ', ' + sawFreq_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SyncSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TExpRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TExpRand_code = 'MulAdd(TExpRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TGrains_code = 'MulAdd(TGrains(' + numChannels_value + ', ' + trigger_value + ', ' + bufnum_value + ', ' + rate_value + ', ' + centerPos_value + ', ' + dur_value + ', ' + pan_value + ', ' + amp_value + ', ' + interp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TGrains_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TIRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '127.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TIRand_code = 'MulAdd(TIRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TIRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TRand'] = function(block) {
    var lo_value = Blockly.JavaScript.valueToCode(block, 'LO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var hi_value = Blockly.JavaScript.valueToCode(block, 'HI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TRand_code = 'MulAdd(TRand(' + lo_value + ', ' + hi_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TRand_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ToggleFF'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var ToggleFF_code = 'MulAdd(ToggleFF(' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [ToggleFF_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Trig'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Trig_code = 'MulAdd(Trig(' + in_value + ', ' + dur_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Trig_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_VarSaw'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var iphase_value = Blockly.JavaScript.valueToCode(block, 'IPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var width_value = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var VarSaw_code = 'MulAdd(VarSaw(' + freq_value + ', ' + iphase_value + ', ' + width_value + '), ' + mul_value + ', ' + add_value + ')';
    return [VarSaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_WhiteNoise'] = function(block) {
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var WhiteNoise_code = 'MulAdd(WhiteNoise(), ' + mul_value + ', ' + add_value + ')';
    return [WhiteNoise_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_XFade2'] = function(block) {
    var inA_value = Blockly.JavaScript.valueToCode(block, 'INA', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inB_value = Blockly.JavaScript.valueToCode(block, 'INB', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var pan_value = Blockly.JavaScript.valueToCode(block, 'PAN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var XFade2_code = 'MulAdd(XFade2(' + inA_value + ', ' + inB_value + ', ' + pan_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [XFade2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
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
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var GreyholeRaw_code = 'MulAdd(GreyholeRaw(' + in1_value + ', ' + in2_value + ', ' + damping_value + ', ' + delaytime_value + ', ' + diffusion_value + ', ' + feedback_value + ', ' + moddepth_value + ', ' + modfreq_value + ', ' + size_value + '), ' + mul_value + ', ' + add_value + ')';
    return [GreyholeRaw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TScramble'] = function(block) {
    var trigger_value = Blockly.JavaScript.valueToCode(block, 'TRIGGER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inputs_value = Blockly.JavaScript.valueToCode(block, 'INPUTS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TScramble_code = 'MulAdd(TScramble(' + trigger_value + ', ' + inputs_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TScramble_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ADSR'] = function(block) {
    var gate_value = Blockly.JavaScript.valueToCode(block, 'GATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var decayTime_value = Blockly.JavaScript.valueToCode(block, 'DECAYTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.3';
    var sustainLevel_value = Blockly.JavaScript.valueToCode(block, 'SUSTAINLEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.5';
    var releaseTime_value = Blockly.JavaScript.valueToCode(block, 'RELEASETIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var curves_value = Blockly.JavaScript.valueToCode(block, 'CURVES', Blockly.JavaScript.ORDER_ATOMIC) || '-4.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var ADSR_code = 'MulAdd(ADSR(' + gate_value + ', ' + attackTime_value + ', ' + decayTime_value + ', ' + sustainLevel_value + ', ' + releaseTime_value + ', ' + curves_value + '), ' + mul_value + ', ' + add_value + ')';
    return [ADSR_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_AR'] = function(block) {
    var gate_value = Blockly.JavaScript.valueToCode(block, 'GATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var attackTime_value = Blockly.JavaScript.valueToCode(block, 'ATTACKTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0.01';
    var releaseTime_value = Blockly.JavaScript.valueToCode(block, 'RELEASETIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var curves_value = Blockly.JavaScript.valueToCode(block, 'CURVES', Blockly.JavaScript.ORDER_ATOMIC) || '-4.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var AR_code = 'MulAdd(AR(' + gate_value + ', ' + attackTime_value + ', ' + releaseTime_value + ', ' + curves_value + '), ' + mul_value + ', ' + add_value + ')';
    return [AR_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BufAlloc'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var numFrames_value = Blockly.JavaScript.valueToCode(block, 'NUMFRAMES', Blockly.JavaScript.ORDER_ATOMIC) || '9.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BufAlloc_code = 'MulAdd(BufAlloc(' + numChannels_value + ', ' + numFrames_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BufAlloc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_BufRec'] = function(block) {
    var bufnum_value = Blockly.JavaScript.valueToCode(block, 'BUFNUM', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var inputArray_value = Blockly.JavaScript.valueToCode(block, 'INPUTARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var BufRec_code = 'MulAdd(BufRec(' + bufnum_value + ', ' + reset_value + ', ' + inputArray_value + '), ' + mul_value + ', ' + add_value + ')';
    return [BufRec_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Cc'] = function(block) {
    var index_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Cc_code = 'MulAdd(Cc(' + index_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Cc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Choose'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Choose_code = 'MulAdd(Choose(' + repeats_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Choose_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DmdFor'] = function(block) {
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DmdFor_code = 'MulAdd(DmdFor(' + dur_value + ', ' + reset_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DmdFor_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TDmdFor'] = function(block) {
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TDmdFor_code = 'MulAdd(TDmdFor(' + dur_value + ', ' + reset_value + ', ' + level_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TDmdFor_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_DmdOn'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reset_value = Blockly.JavaScript.valueToCode(block, 'RESET', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var demandUGens_value = Blockly.JavaScript.valueToCode(block, 'DEMANDUGENS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var DmdOn_code = 'MulAdd(DmdOn(' + trig_value + ', ' + reset_value + ', ' + demandUGens_value + '), ' + mul_value + ', ' + add_value + ')';
    return [DmdOn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_InFb'] = function(block) {
    var numChannels_value = Blockly.JavaScript.valueToCode(block, 'NUMCHANNELS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var bus_value = Blockly.JavaScript.valueToCode(block, 'BUS', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var InFb_code = 'MulAdd(InFb(' + numChannels_value + ', ' + bus_value + '), ' + mul_value + ', ' + add_value + ')';
    return [InFb_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinLin'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var srclo_value = Blockly.JavaScript.valueToCode(block, 'SRCLO', Blockly.JavaScript.ORDER_ATOMIC) || '-1.0';
    var srchi_value = Blockly.JavaScript.valueToCode(block, 'SRCHI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dstlo_value = Blockly.JavaScript.valueToCode(block, 'DSTLO', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var dsthi_value = Blockly.JavaScript.valueToCode(block, 'DSTHI', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinLin_code = 'MulAdd(LinLin(' + in_value + ', ' + srclo_value + ', ' + srchi_value + ', ' + dstlo_value + ', ' + dsthi_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinLin_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_LinSeg'] = function(block) {
    var gate_value = Blockly.JavaScript.valueToCode(block, 'GATE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var coord_value = Blockly.JavaScript.valueToCode(block, 'COORD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var LinSeg_code = 'MulAdd(LinSeg(' + gate_value + ', ' + coord_value + '), ' + mul_value + ', ' + add_value + ')';
    return [LinSeg_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ln'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Ln_code = 'MulAdd(Ln(' + start_value + ', ' + end_value + ', ' + dur_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Ln_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_PMOsc'] = function(block) {
    var carfreq_value = Blockly.JavaScript.valueToCode(block, 'CARFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var modfreq_value = Blockly.JavaScript.valueToCode(block, 'MODFREQ', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var pmindex_value = Blockly.JavaScript.valueToCode(block, 'PMINDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var modphase_value = Blockly.JavaScript.valueToCode(block, 'MODPHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var PMOsc_code = 'MulAdd(PMOsc(' + carfreq_value + ', ' + modfreq_value + ', ' + pmindex_value + ', ' + modphase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [PMOsc_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_RingzBank'] = function(block) {
    var input_value = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var time_value = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var RingzBank_code = 'MulAdd(RingzBank(' + input_value + ', ' + freq_value + ', ' + amp_value + ', ' + time_value + '), ' + mul_value + ', ' + add_value + ')';
    return [RingzBank_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Select2'] = function(block) {
    var predicate_value = Blockly.JavaScript.valueToCode(block, 'PREDICATE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ifTrue_value = Blockly.JavaScript.valueToCode(block, 'IFTRUE', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var ifFalse_value = Blockly.JavaScript.valueToCode(block, 'IFFALSE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Select2_code = 'MulAdd(Select2(' + predicate_value + ', ' + ifTrue_value + ', ' + ifFalse_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Select2_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SelectX'] = function(block) {
    var which_value = Blockly.JavaScript.valueToCode(block, 'WHICH', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SelectX_code = 'MulAdd(SelectX(' + which_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SelectX_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Seq'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Seq_code = 'MulAdd(Seq(' + repeats_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Seq_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Ser'] = function(block) {
    var length_value = Blockly.JavaScript.valueToCode(block, 'LENGTH', Blockly.JavaScript.ORDER_ATOMIC) || '9.0';
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var step_value = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Ser_code = 'MulAdd(Ser(' + length_value + ', ' + start_value + ', ' + step_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Ser_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Shuf'] = function(block) {
    var repeats_value = Blockly.JavaScript.valueToCode(block, 'REPEATS', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Shuf_code = 'MulAdd(Shuf(' + repeats_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Shuf_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_SinOscBank'] = function(block) {
    var freq_value = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC) || '440.0';
    var amp_value = Blockly.JavaScript.valueToCode(block, 'AMP', Blockly.JavaScript.ORDER_ATOMIC) || '0.1';
    var phase_value = Blockly.JavaScript.valueToCode(block, 'PHASE', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var SinOscBank_code = 'MulAdd(SinOscBank(' + freq_value + ', ' + amp_value + ', ' + phase_value + '), ' + mul_value + ', ' + add_value + ')';
    return [SinOscBank_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Splay'] = function(block) {
    var input_value = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var spread_value = Blockly.JavaScript.valueToCode(block, 'SPREAD', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var level_value = Blockly.JavaScript.valueToCode(block, 'LEVEL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var center_value = Blockly.JavaScript.valueToCode(block, 'CENTER', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var levelComp_value = Blockly.JavaScript.valueToCode(block, 'LEVELCOMP', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Splay_code = 'MulAdd(Splay(' + input_value + ', ' + spread_value + ', ' + level_value + ', ' + center_value + ', ' + levelComp_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Splay_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Sw'] = function(block) {
    var index_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var Sw_code = 'MulAdd(Sw(' + index_value + '), ' + mul_value + ', ' + add_value + ')';
    return [Sw_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TChoose'] = function(block) {
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TChoose_code = 'MulAdd(TChoose(' + trig_value + ', ' + array_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TChoose_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TLine'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TLine_code = 'MulAdd(TLine(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TLine_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TXLine'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0.001';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var trig_value = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var TXLine_code = 'MulAdd(TXLine(' + start_value + ', ' + end_value + ', ' + dur_value + ', ' + trig_value + '), ' + mul_value + ', ' + add_value + ')';
    return [TXLine_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_XLn'] = function(block) {
    var start_value = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var end_value = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '2.0';
    var dur_value = Blockly.JavaScript.valueToCode(block, 'DUR', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var XLn_code = 'MulAdd(XLn(' + start_value + ', ' + end_value + ', ' + dur_value + '), ' + mul_value + ', ' + add_value + ')';
    return [XLn_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

