'use strict';

// Comments should not contain newlines
Blockly.JavaScript['sc3_Comment'] = function(block) {
    return '// ' + block.getFieldValue('COMMENT') + '\n';
};

// Play is a no-op
Blockly.JavaScript['sc3_Play'] = function(block) {
    return Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
};

function blksc3_const(c) {
    switch(c) {
    case 'e': return '2.718281828459045';
    case 'inf': return '2147483647'; // maxBound Int32 (sclang knows this value)
    case 'pi': return '3.141592653589793';
    case 'twoPi': return '6.283185307179586';
    default: throw 'blksc3_const';
    }
};

Blockly.JavaScript['sc3_Constant'] = function(block) {
    return [blksc3_const(block.getFieldValue('CONST')), Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_OverlapTexture'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var sustainTime_value = Blockly.JavaScript.valueToCode(block, 'SUSTAINTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var transitionTime_value = Blockly.JavaScript.valueToCode(block, 'TRANSITIONTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var overlap_value = Blockly.JavaScript.valueToCode(block, 'OVERLAP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var OverlapTexture_code = 'OverlapTexture(' + proc_value + ', ' + sustainTime_value + ', ' + transitionTime_value + ', ' + overlap_value + ')';
    return [OverlapTexture_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_MulAdd'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var MulAdd_code = 'MulAdd(' + in_value + ', ' + mul_value + ', ' + add_value + ')';
    return [MulAdd_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Voicer'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '16';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return ['Voicer(' + count_value + ', ' + proc_value + ')', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc3_VoiceWriter'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '16';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return ['VoiceWriter(' + count_value + ', ' + proc_value + ')', Blockly.JavaScript.ORDER_NONE];
};
