Blockly.JavaScript['sc3_Comment'] = function(block) {
    return '/* ' + block.getFieldValue('COMMENT') + ' */\n';
};

Blockly.JavaScript['sc3_Play'] = function(block) {
    return Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
};

Blockly.JavaScript['sc3_Proc0'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc0_code = '{ ' + proc_value + ' }';
    return [proc0_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_Proc1'] = function(block) {
    var var_value = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc1_code = '{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + proc_value + ' }';
    return [proc1_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_timesRepeat'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_code = Blockly.JavaScript.statementToCode(block, 'PROC');
    var timesRepeat_code = count_value + '.timesRepeat({ ' + proc_code + '});';
    return timesRepeat_code;
};

Blockly.JavaScript['sc3_overlapTexture'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var sustainTime_value = Blockly.JavaScript.valueToCode(block, 'SUSTAINTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var transitionTime_value = Blockly.JavaScript.valueToCode(block, 'TRANSITIONTIME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var overlap_value = Blockly.JavaScript.valueToCode(block, 'OVERLAP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var overlapTexture_code = 'OverlapTexture(' + proc_value + ', ' + sustainTime_value + ', ' + transitionTime_value + ', ' + overlap_value + ')';
    return [overlapTexture_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_arrayFromTo'] = function(block) {
    var from_value = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    var to_value = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ATOMIC) || '9';
    return [from_value + '.to(' + to_value + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_arrayFill'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC);
    var arrayFill_code = proc_value + '.dup(' + count_value + ')';
    return [arrayFill_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_arrayCollect'] = function(block) {
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC);
    var arrayCollect_code = array_value + '.collect(' + proc_value + ')';
    return [arrayCollect_code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var UnaryOp_code = in_value + '.' + op_value;
    return [UnaryOp_code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
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
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var KeywordBinaryOp_code = lhs_value + '.' + op_value + '(' + rhs_value + ')';
    return [KeywordBinaryOp_code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc3_voicer'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '16';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    var voicer_code = 'Voicer(' + count_value + ', ' + proc_value + ')';
    return [voicer_code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc3_eventParam'] = function(block) {
    var param_value = block.getFieldValue('PARAM');
    var event_value = Blockly.JavaScript.valueToCode(block, 'EVENT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var eventParam_code = event_value + '.' + param_value;
    return [eventParam_code, Blockly.JavaScript.ORDER_MEMBER];
};
