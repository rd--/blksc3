'use strict';

// .stc | .js
var blk_output_format = '.stc';

// Comment code generator.  Comments should not contain newlines, if they do only the first line is written.
Blockly.JavaScript['sc3_Comment'] = function(block) {
    var commentText = block.getFieldValue('COMMENT');
    return '// ' + commentText.lines().at(0) + '\n';
};

// Play code generator.  Output is 'CODE' input.
Blockly.JavaScript['sc3_Play'] = function(block) {
    return Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
};

// Named constants.
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

// Implicit method code generator.
function blk_implicit_method_codegen(block, name, argNameArray) {
    var nilValue = blk_output_format === '.stc' ? 'nil' : 'null';
    var argArray = argNameArray.map(item => Blockly.JavaScript.valueToCode(block, item, Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
    return [name + '(' + argArray.join(', ') + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['sc3_OverlapTexture'] = function(block) {
    return blk_implicit_method_codegen(block, 'OverlapTexture', ['PROC', 'SUSTAINTIME', 'TRANSITIONTIME', 'OVERLAP']);
};

Blockly.JavaScript['sc3_MulAdd'] = function(block) {
    return blk_implicit_method_codegen(block, 'MulAdd', ['IN', 'MUL', 'ADD']);
};

Blockly.JavaScript['sc3_Voicer'] = function(block) {
    return blk_implicit_method_codegen(block, 'Voicer', ['COUNT', 'PROC']);
};

Blockly.JavaScript['sc3_VoiceWriter'] = function(block) {
    return blk_implicit_method_codegen(block, 'VoiceWriter', ['COUNT', 'PROC']);
};

// Procedure code generator.
function blk_proc_codegen(block, numArg, hasStm) {
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
        return console.error('blk_proc_codegen', blk_output_format, hasArg, hasStm);
    }
}

Blockly.JavaScript['sc3_Proc0'] = function(block) {
    return blk_proc_codegen(block, 0, false);
};

Blockly.JavaScript['sc3_Proc0Stm'] = function(block) {
    return blk_proc_codegen(block, 0, true);
};

Blockly.JavaScript['sc3_Proc1'] = function(block) {
    return blk_proc_codegen(block, 1, false);
};

Blockly.JavaScript['sc3_Proc1Stm'] = function(block) {
    return blk_proc_codegen(block, 1, true);
};

// Method call code generator
function blk_method_codegen(block, name, argNameArray) {
    var nilValue = blk_output_format === '.stc' ? 'nil' : 'null';
    var argArray = argNameArray.map(item => Blockly.JavaScript.valueToCode(block, item, Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
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
        case 2: return [stc_binary_selector_from_operator(name) + '(' + argArray[0] + ', ' + argArray[1] + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }
    } else {
        return console.error('blk_method_call_code', blk_output_format, name, argArray);
    }
}

Blockly.JavaScript['sc3_Value0'] = function(block) {
    return blk_method_codegen(block, 'value', ['PROC']);
};

Blockly.JavaScript['sc3_Value1'] = function(block) {
    return blk_method_codegen(block, 'value', ['PROC', 'VALUE']);
};

Blockly.JavaScript['sc3_ArrayFromTo'] = function(block) {
    return blk_method_codegen(block,'to', ['FROM', 'TO']);
};

Blockly.JavaScript['sc3_ArrayFill'] = function(block) {
    return blk_method_codegen(block, 'dup', ['PROC', 'COUNT']);
};

Blockly.JavaScript['sc3_ArrayCollect'] = function(block) {
    return blk_method_codegen(block, 'collect', ['ARRAY', 'PROC']);
};

Blockly.JavaScript['sc3_ArrayProc1'] = function(block) {
    return blk_method_codegen(block, block.getFieldValue('OP'), ['IN']);
};

Blockly.JavaScript['sc3_ArrayProc2'] = function(block) {
    return blk_method_codegen(block, block.getFieldValue('OP'), ['LHS', 'RHS']);
};

Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
    return blk_method_codegen(block, block.getFieldValue('OP'), ['IN']);
};

Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
    return blk_method_codegen(block, block.getFieldValue('OP'), ['LHS', 'RHS']);
};

Blockly.JavaScript['sc3_KeywordBinaryOp'] = function(block) {
    return blk_method_codegen(block, block.getFieldValue('OP'), ['LHS', 'RHS']);
};

Blockly.JavaScript['sc3_EventParam'] = function(block) {
    return blk_method_codegen(block, block.getFieldValue('PARAM'), ['EVENT']);
};

/// Statement (i.e. not expression)
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

// Lookup MUL and ADD inputs at block and rewrite codeStr as required.
function blk_append_mul_add(block, codeStr) {
    var mulStr = Blockly.JavaScript.valueToCode(block, 'MUL', Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var addStr = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reqMul = Number.parseFloat(mulStr) != 1;
    var reqAdd = Number.parseFloat(addStr) != 0;
    if(reqMul && reqAdd) {
        return 'MulAdd(' + codeStr + ', ' + mulStr + ', ' + addStr + ')';
    } else if(reqMul) {
        return blk_output_format == '.stc' ? ('(' + codeStr + ' * ' + mulStr + ')') : ('mul(' + codeStr + ', ' + mulStr + ')');
    } else if(reqAdd) {
        return blk_output_format == '.stc' ? ('(' + codeStr + ' + ' + addStr + ')') : ('add(' + codeStr + ', ' + addStr + ')');
    } else {
        return codeStr;
    }
}

function blk_ugen_codegen(block, name, argNameArray, hasOutputs) {
    var ugenCode = blk_implicit_method_codegen(block, name, argNameArray);
    return hasOutputs ? [blk_append_mul_add(block, ugenCode[0]), Blockly.JavaScript.ORDER_FUNCTION_CALL] : ugenCode;
}
