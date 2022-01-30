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

function stc_is_binary_selector(text) {
    var allowed = Array.from('!%&*+/<=>?@\\~|-');
    var answer = Array.from(text).every(item => allowed.includes(item));
    // console.log('stc_is_binary_selector', text, answer);
    return answer;
}

function stc_binary_selector_to_js(text) {
    switch(text) {
        case '+': return 'add';
        case '-': return 'sub';
        case '*': return 'mul';
        case '/': return 'fdiv';
        case '%': return 'mod';
        case '==': return 'eq';
        case '!=': return 'neq';
        case '<': return 'lt';
        case '>': return 'gt';
        case '<=': return 'le';
        case '>=': return 'ge';
        case '&': return 'bitAnd';
        case '|': return 'bitOr';
        case '<<': return 'bitShiftLeft';
        case '>>': return 'bitShiftRight';
        case '**': return 'pow';
        default: return text;
    }
}

function blk_method_call_code(name, argArray) {
    if(blk_output_format === '.stc') {
        switch(argArray.length) {
        case 1: return [argArray[0] + '.' + name, Blockly.JavaScript.ORDER_MEMBER];
        case 2: return stc_is_binary_selector(name) ?
                [argArray[0] + ' ' + name + ' ' + argArray[1], Blockly.JavaScript.ORDER_NONE] :
                [argArray[0] + '.' + name + '(' + argArray[1] + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }
    } else if(blk_output_format === '.js') {
        switch(argArray.length) {
        case 1: return [name + '(' + argArray[0] + ')', Blockly.JavaScript.ORDER_MEMBER];
        case 2: return [stc_binary_selector_to_js(name) + '(' + argArray[0] + ', ' + argArray[1] + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }
    } else {
        return console.error('blk_method_call_code', blk_output_format, name, argArray);
    }
}

function blk_method_call_code_from_names(block, name, argNameArray) {
    var nilValue = blk_output_format === '.stc' ? 'nil' : 'null';
    var argArray = argNameArray.map(item => Blockly.JavaScript.valueToCode(block, item, Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
    return blk_method_call_code(name, argArray);
}

Blockly.JavaScript['sc3_Proc0'] = function(block) {
    return blk_proc_def_code(block, 0, false);
};

Blockly.JavaScript['sc3_Value0'] = function(block) {
    return blk_method_call_code_from_names(block, 'value', ['PROC']);
};

Blockly.JavaScript['sc3_Proc1'] = function(block) {
    return blk_proc_def_code(block, 1, false);
};

Blockly.JavaScript['sc3_Value1'] = function(block) {
    return blk_method_call_code_from_names(block, 'value', ['PROC', 'VALUE']);
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
    if(blk_output_format === '.stc') {
        return count_value + '.timesRepeat( ' + proc_code + ');';
    } else if(blk_output_format === '.js') {
        return 'timesRepeat( ' + count_value + ', ' + proc_code + ');';
    } else {
        return console.error('sc3_TimesRepeat', blk_output_format);
    }
};

Blockly.JavaScript['sc3_ArrayFromTo'] = function(block) {
    return blk_method_call_code_from_names(block,'to', ['FROM', 'TO']);
};

Blockly.JavaScript['sc3_ArrayFill'] = function(block) {
    return blk_method_call_code_from_names(block, 'dup', ['PROC', 'COUNT']);
};

Blockly.JavaScript['sc3_ArrayCollect'] = function(block) {
    return blk_method_call_code_from_names(block, 'collect', ['ARRAY', 'PROC']);
};

Blockly.JavaScript['sc3_ArrayProc1'] = function(block) {
    return blk_method_call_code_from_names(block, block.getFieldValue('OP'), ['IN']);
};

Blockly.JavaScript['sc3_ArrayProc2'] = function(block) {
    return blk_method_call_code_from_names(block, block.getFieldValue('OP'), ['LHS', 'RHS']);
};

Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
    return blk_method_call_code_from_names(block, block.getFieldValue('OP'), ['IN']);
};

Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
    return blk_method_call_code_from_names(block, block.getFieldValue('OP'), ['LHS', 'RHS']);
};

Blockly.JavaScript['sc3_KeywordBinaryOp'] = function(block) {
    return blk_method_call_code_from_names(block, block.getFieldValue('OP'), ['LHS', 'RHS']);
};

Blockly.JavaScript['sc3_EventParam'] = function(block) {
    return blk_method_call_code_from_names(block, block.getFieldValue('PARAM'), ['EVENT']);
};
