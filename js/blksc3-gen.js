// Comments should not contain newlines
Blockly.JavaScript['sc3_Comment'] = function(block) {
    return '// ' + block.getFieldValue('COMMENT') + '\n';
};

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

Blockly.JavaScript['sc3_Proc0'] = function(block) {
    var return_value = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return ['{ ' + return_value + ' }', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Value0'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return [proc_value + '.value', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Proc1'] = function(block) {
    var var_value = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    var return_value = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc1_code = '{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + return_value + ' }';
    return [proc1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Value1'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return [proc_value + '.value(' + value_value + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Proc0Stm'] = function(block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
    var return_value = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc0stm_code = '{ ' + statements_code + return_value + ' }';
    return [proc0stm_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Proc1Stm'] = function(block) {
    var var_value = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    var statements_code = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
    var return_value = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc1stm_code = '{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + statements_code + return_value + ' }';
    return [proc1stm_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_TimesRepeat'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_code = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return count_value + '.timesRepeat( ' + proc_code + ');';
};

Blockly.JavaScript['sc3_OverlapTexture'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var sustainTime_value = Blockly.JavaScript.valueToCode(block, 'SUSTAINTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var transitionTime_value = Blockly.JavaScript.valueToCode(block, 'TRANSITIONTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var overlap_value = Blockly.JavaScript.valueToCode(block, 'OVERLAP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var OverlapTexture_code = 'OverlapTexture(' + proc_value + ', ' + sustainTime_value + ', ' + transitionTime_value + ', ' + overlap_value + ')';
    return [OverlapTexture_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ArrayAt'] = function(block) {
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    var index_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    return [array_value + '.nth(' + index_value + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ArrayFromTo'] = function(block) {
    var from_value = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    var to_value = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ATOMIC) || '9';
    return [from_value + '.to(' + to_value + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ArrayFill'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return [proc_value + '.dup(' + count_value + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_ArrayCollect'] = function(block) {
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return [array_value + '.collect(' + proc_value + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return [in_value + '.' + op_value, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var BinaryOp_code = lhs_value + ' ' + op_value + ' ' + rhs_value;
    return [BinaryOp_code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['sc3_MulAdd'] = function(block) {
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var mul_value = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    var add_value = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var MulAdd_code = 'MulAdd(' + in_value + ', ' + mul_value + ', ' + add_value + ')';
    return [MulAdd_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_KeywordBinaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var KeywordBinaryOp_code = lhs_value + '.' + op_value + '(' + rhs_value + ')';
    return [KeywordBinaryOp_code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript['sc3_EventParam'] = function(block) {
    var param_value = block.getFieldValue('PARAM');
    var event_value = Blockly.JavaScript.valueToCode(block, 'EVENT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return [event_value + '.' + param_value, Blockly.JavaScript.ORDER_MEMBER];
};
