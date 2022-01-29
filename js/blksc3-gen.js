'use strict';

var blk_output_format = '.stc'; // .stc | .js

// Code generator for all Proc forms
function blk_proc_def_code(block, numArg, hasStm) {
    var var_value = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    var stm_code = Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';
    var ret_value = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var ofc = Blockly.JavaScript.ORDER_FUNCTION_CALL;
    if(blk_output_format === '.stc') {
        if(numArg === 0 && hasStm === false) {
            return ['{ ' + ret_value + ' }', ofc];
        } else if(numArg === 1 && hasStm === false) {
            return ['{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + ret_value + ' }', ofc];
        } else if(numArg === 0 && hasStm === true) {
            return ['{ ' + stm_code + ret_value + ' }', ofc];
        } else if(numArg === 1 && hasStm === true) {
            return ['{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + stm_code + ret_value + ' }', ofc];
        }
    } else if(blk_output_format === '.js') {
        if(numArg === 0 && hasStm === false) {
            return ['function() { return ' + ret_value + '; }', ofc];
        } else if(numArg === 1 && hasStm === false) {
            return ['function(' + var_value + '_) { var ' + var_value + ' = ' + var_value + '_; return ' + ret_value + '; }', ofc];
        } else if(numArg === 0 && hasStm === true) {
            return ['function() { ' + stm_code + 'return ' + ret_value + '; }', ofc];
        } else if(numArg === 1 && hasStm === true) {
            return ['function(' + var_value + '_) { var ' + var_value + ' = ' + var_value + '_; ' + stm_code + 'return ' + ret_value + '; }', ofc];
        }
    } else {
        return console.error('blk_proc_def_code', blk_output_format, hasArg, hasStm);
    }
}

function blk_method_call_code(name, argArray) {
    if(blk_output_format === '.stc') {
        switch(argArray.length) {
        case 1: return [argArray[0] + '.' + name, Blockly.JavaScript.ORDER_MEMBER];
        case 2: return [argArray[0] + '.' + name + '(' + argArray[1] + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }
    } else if(blk_output_format === '.js') {
        switch(argArray.length) {
        case 1: return [name + '(' + argArray[0] + ')', Blockly.JavaScript.ORDER_MEMBER];
        case 2: return [name + '(' + argArray[0] + ', ' + argArray[1] + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }
    } else {
        return console.error('blk_method_call_code', blk_output_format, name, argArray);
    }
}

Blockly.JavaScript['sc3_Proc0'] = function(block) {
    return blk_proc_def_code(block, 0, false);
};

Blockly.JavaScript['sc3_Value0'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return blk_method_call_code('value', [proc_value]);
};

Blockly.JavaScript['sc3_Proc1'] = function(block) {
    return blk_proc_def_code(block, 1, false);
};

Blockly.JavaScript['sc3_Value1'] = function(block) {
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return blk_method_call_code('value', [proc_value, value_value]);
};

Blockly.JavaScript['sc3_Proc0Stm'] = function(block) {
    return blk_proc_def_code(block, 0, true);
};

Blockly.JavaScript['sc3_Proc1Stm'] = function(block) {
    return blk_proc_def_code(block, 1, true);
};

// Statement (i.e. not expression)
Blockly.JavaScript['sc3_TimesRepeat'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_code = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return count_value + '.timesRepeat( ' + proc_code + ');';
};

Blockly.JavaScript['sc3_ArrayFromTo'] = function(block) {
    var from_value = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    var to_value = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ATOMIC) || '9';
    return blk_method_call_code('to', [from_value, to_value]);
};

Blockly.JavaScript['sc3_ArrayFill'] = function(block) {
    var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return blk_method_call_code('dup', [proc_value, count_value]);
};

Blockly.JavaScript['sc3_ArrayCollect'] = function(block) {
    var array_value = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var proc_value = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    return blk_method_call_code('collect', [array_value, proc_value]);
};

Blockly.JavaScript['sc3_ArrayProc1'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    return blk_method_call_code(op_value, [in_value]);
};

Blockly.JavaScript['sc3_ArrayProc2'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    return blk_method_call_code(op_value, [lhs_value, rhs_value]);
};

Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var in_value = Blockly.JavaScript.valueToCode(block, 'IN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return blk_method_call_code(op_value, [in_value]);
};

Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return [lhs_value + ' ' + op_value + ' ' + rhs_value, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc3_KeywordBinaryOp'] = function(block) {
    var op_value = block.getFieldValue('OP');
    var lhs_value = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var rhs_value = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return blk_method_call_code(op_value, [lhs_value, rhs_value]);
};

Blockly.JavaScript['sc3_EventParam'] = function(block) {
    var param_value = block.getFieldValue('PARAM');
    var event_value = Blockly.JavaScript.valueToCode(block, 'EVENT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return blk_method_call_code(param_value, [event_value]);
};
