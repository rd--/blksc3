import { consoleDebug, throwError } from '../lib/jssc3/js/jssc3.js'

export function blksc3_init_codegen(blk) {

	const Blockly = blk.Blockly;

	// Comment code generator.  Comments should not contain newlines, if they do only the first line is written.
	Blockly.JavaScript['sc3_Comment'] = function(block) {
		var commentText = block.getFieldValue('COMMENT');
		return '// ' + sc.stringLines(commentText)[0] + '\n';
	};

	// Play code generator.  Output is 'CODE' input.
	Blockly.JavaScript['sc3_Play'] = function(block) {
		return Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	};

	Blockly.JavaScript['sc3_Constant'] = function(block) {
		return [blksc3_const(block.getFieldValue('CONST')), Blockly.JavaScript.ORDER_FUNCTION_CALL];
	};

	Blockly.JavaScript['sc3_MulAdd'] = function(block) {
		return blk_implicit_method_codegen(blk, block, 'MulAdd', ['IN', 'MUL', 'ADD']);
	};

	Blockly.JavaScript['sc3_OverlapTexture'] = function(block) {
		return blk_implicit_method_codegen(blk, block, 'OverlapTexture', ['PROC', 'SUSTAINTIME', 'TRANSITIONTIME', 'OVERLAP']);
	};

	Blockly.JavaScript['sc3_SoundFileBuffer'] = function(block) {
		return blk_implicit_method_codegen(blk, block, 'SoundFileBuffer', ['SOUNDFILEID', 'NUMBEROFCHANNELS']);
	};

	Blockly.JavaScript['sc3_Voicer'] = function(block) {
		return blk_implicit_method_codegen(blk, block, 'Voicer', ['COUNT', 'PROC']);
	};

	Blockly.JavaScript['sc3_VoiceWriter'] = function(block) {
		return blk_implicit_method_codegen(blk, block, 'VoiceWriter', ['COUNT', 'PROC']);
	};


	Blockly.JavaScript['sc3_Proc0'] = function(block) {
		return blk_proc_codegen(blk, block, 0, false);
	};

	Blockly.JavaScript['sc3_Proc0Stm'] = function(block) {
		return blk_proc_codegen(blk, block, 0, true);
	};

	Blockly.JavaScript['sc3_Proc1'] = function(block) {
		return blk_proc_codegen(blk, block, 1, false);
	};

	Blockly.JavaScript['sc3_Proc1Stm'] = function(block) {
		return blk_proc_codegen(blk, block, 1, true);
	};

	Blockly.JavaScript['sc3_Proc2'] = function(block) {
		return blk_proc_codegen(blk, block, 2, false);
	};

	Blockly.JavaScript['sc3_Proc2Stm'] = function(block) {
		return blk_proc_codegen(blk, block, 2, true);
	};

	Blockly.JavaScript['sc3_Value0'] = function(block) {
		return blk_method_codegen(blk, block, 'value', ['PROC']);
	};

	Blockly.JavaScript['sc3_Value1'] = function(block) {
		return blk_method_codegen(blk, block, 'value', ['PROC', 'VALUE']);
	};

	Blockly.JavaScript['sc3_Value2'] = function(block) {
		return blk_method_codegen(blk, block, 'value', ['PROC', 'VALUE1', 'VALUE2']);
	};

	Blockly.JavaScript['sc3_ArrayFromTo'] = function(block) {
		return blk_method_codegen(blk, block,'to', ['FROM', 'TO']);
	};

	Blockly.JavaScript['sc3_ArrayFill'] = function(block) {
		return blk_method_codegen(blk, block, 'dup', ['PROC', 'COUNT']);
	};

	Blockly.JavaScript['sc3_ArrayCollect'] = function(block) {
		return blk_method_codegen(blk, block, 'collect', ['ARRAY', 'PROC']);
	};

	Blockly.JavaScript['sc3_ArrayProc1'] = function(block) {
		return blk_method_codegen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript['sc3_ArrayProc2'] = function(block) {
		return blk_method_codegen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
		return blk_method_codegen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
		return blk_method_codegen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript['sc3_KeywordBinaryOp'] = function(block) {
		return blk_method_codegen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript['sc3_EventParam'] = function(block) {
		return blk_method_codegen(blk, block, block.getFieldValue('PARAM'), ['EVENT']);
	};

	/// Statement (i.e. not expression)
	Blockly.JavaScript['sc3_TimesRepeat'] = function(block) {
		var count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var proc_code = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
		if(blk.output_format === '.stc') {
			return count_value + '.timesRepeat( ' + proc_code + ');';
		} else if(blk.output_format === '.js') {
			return 'sc.timesRepeat( ' + count_value + ', ' + proc_code + ');';
		} else {
			return throwError(`sc3_TimesRepeat: ${blk.output_format}`);
		}
	};

}

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

// Implicit method code generator.
function blk_implicit_method_codegen(blk, block, name, argNameArray) {
	consoleDebug(`blk_implicit_method_codegen: ${name}, ${argNameArray.length}`);
    var nilValue = blk.output_format === '.stc' ? 'nil' : 'null';
    var argArray = argNameArray.map(item => blk.Blockly.JavaScript.valueToCode(block, item, blk.Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
    return ['sc.' + name + '(' + argArray.join(', ') + ')', blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

// Procedure code generator.
function blk_proc_codegen(blk, block, numArg, hasStm) {
    var var_value = blk.Blockly.JavaScript.valueToCode(block, 'VAR', blk.Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    var var1_value = blk.Blockly.JavaScript.valueToCode(block, 'VAR1', blk.Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    var var2_value = blk.Blockly.JavaScript.valueToCode(block, 'VAR2', blk.Blockly.JavaScript.ORDER_ATOMIC) || 'y';
    var stm_code = blk.Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';
    var ret_value = blk.Blockly.JavaScript.valueToCode(block, 'RETURN', blk.Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var ofc = blk.Blockly.JavaScript.ORDER_FUNCTION_CALL;
    if(blk.output_format === '.stc') {
        if(numArg === 0 && hasStm === false) {
            return ['{ ' + ret_value + ' }', ofc];
        } else if(numArg === 1 && hasStm === false) {
            return ['{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + ret_value + ' }', ofc];
        } else if(numArg === 0 && hasStm === true) {
            return ['{ ' + stm_code + ret_value + ' }', ofc];
        } else if(numArg === 1 && hasStm === true) {
            return ['{ arg ' + var_value + '_; ' + var_value + ' = ' + var_value + '_; ' + stm_code + ret_value + ' }', ofc];
        } else {
            return throwError(`blk_proc_codegen:stc: ${hasArg} ${hasStm}`);
        }
    } else if(blk.output_format === '.js') {
        if(numArg === 0 && hasStm === false) {
            return ['function() { return ' + ret_value + '; }', ofc];
        } else if(numArg === 1 && hasStm === false) {
            return ['function(' + var_value + '_) { var ' + var_value + ' = ' + var_value + '_; return ' + ret_value + '; }', ofc];
        } else if(numArg === 2 && hasStm === false) {
            return ['function(' + var1_value + '_, ' + var2_value + '_) { var ' + var1_value + ' = ' + var1_value + '_, ' + var2_value + ' = ' + var2_value + '_; return ' + ret_value + '; }', ofc];
        } else if(numArg === 0 && hasStm === true) {
            return ['function() { ' + stm_code + 'return ' + ret_value + '; }', ofc];
        } else if(numArg === 1 && hasStm === true) {
            return ['function(' + var_value + '_) { var ' + var_value + ' = ' + var_value + '_; ' + stm_code + 'return ' + ret_value + '; }', ofc];
        } else {
            return throwError(`blk_proc_codegen, js: ${hasArg} ${hasStm}`);
        }
    } else {
        return throwError(`blk_proc_codegen: ${blk.output_format}, ${hasArg}, ${hasStm}`);
    }
}

// Method call code generator
function blk_method_codegen(blk, block, name, argNameArray) {
    var nilValue = blk.output_format === '.stc' ? 'nil' : 'null';
    var argArray = argNameArray.map(item => blk.Blockly.JavaScript.valueToCode(block, item, blk.Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
    if(blk.output_format === '.stc') {
        switch(argArray.length) {
        case 1: return [argArray[0] + '.' + name, blk.Blockly.JavaScript.ORDER_MEMBER];
        case 2: return sc.stc_is_binary_selector(name) ?
                [argArray[0] + ' ' + name + ' ' + argArray[1], blk.Blockly.JavaScript.ORDER_NONE] :
                [argArray[0] + '.' + name + '(' + argArray[1] + ')', blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        default: throwError('blk_method_codegen: stc');
        }
    } else if(blk.output_format === '.js') {
        switch(argArray.length) {
        case 1: return ['sc.' + name + '(' + argArray[0] + ')', blk.Blockly.JavaScript.ORDER_MEMBER];
        case 2: return ['sc.' + sc.stc_binary_selector_from_operator(name) + '(' + argArray[0] + ', ' + argArray[1] + ')', blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case 3: return ['sc.' + name + '(' + argArray[0] + ', ' + argArray[1] + ', ' + argArray[2] + ')', blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        default: throwError('blk_method_codegen: js');
        }
    } else {
        return throwError(`blk_method_call_code: ${blk.output_format}, ${name}, ${argArray.length}`);
    }
}

// Lookup MUL and ADD inputs at block and rewrite codeStr as required.
function blk_append_mul_add(blk, block, codeStr) {
    var mulStr = blk.Blockly.JavaScript.valueToCode(block, 'MUL', blk.Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    var addStr = blk.Blockly.JavaScript.valueToCode(block, 'ADD', blk.Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    var reqMul = Number.parseFloat(mulStr) != 1;
    var reqAdd = Number.parseFloat(addStr) != 0;
    if(reqMul && reqAdd) {
        return (blk.output_format == '.stc' ? '' : 'sc.') + 'MulAdd(' + codeStr + ', ' + mulStr + ', ' + addStr + ')';
    } else if(reqMul) {
        return blk.output_format == '.stc' ? ('(' + codeStr + ' * ' + mulStr + ')') : ('sc.mul(' + codeStr + ', ' + mulStr + ')');
    } else if(reqAdd) {
        return blk.output_format == '.stc' ? ('(' + codeStr + ' + ' + addStr + ')') : ('sc.add(' + codeStr + ', ' + addStr + ')');
    } else {
        return codeStr;
    }
}

export function blk_ugen_codegen(blk, block, name, argNameArray, hasOutputs) {
	consoleDebug(`blk_ugen_codegen: ${name}, ${argNameArray.length}, ${hasOutputs}`);
    var ugenCode = blk_implicit_method_codegen(blk, block, name, argNameArray);
    var answer = hasOutputs ? [blk_append_mul_add(blk, block, ugenCode[0]), blk.Blockly.JavaScript.ORDER_FUNCTION_CALL] : ugenCode;
	return answer;
}
