import { throwError } from '../lib/jssc3/dist/jssc3.js'

export function init_codegen(blk) {

	const Blockly = blk.Blockly;

	// Modified for .sl
	Blockly.JavaScript['variables_set'] = function(block) {
		const argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
		const varName = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), 'VARIABLE');
		return `${varName} ${blk.use_sl ? ':=' : '='} ${argument0};\n`;
	};

	// Comment code generator.  Comments should not contain newlines, if they do only the first line is written.
	Blockly.JavaScript['sc3_Comment'] = function(block) {
		const commentText = sc.stringLines(block.getFieldValue('COMMENT'))[0];
		if(blk.use_sl) {
			return `(* ${commentText} *)\n`;
		} else {
			return `/* ${commentText} */\n`;
		}
	};

	// Play code generator.  Output is 'CODE' input.
	Blockly.JavaScript['sc3_Play'] = function(block) {
		return Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	};

	Blockly.JavaScript['sc3_Constant'] = function(block) {
		return [const_codegen(block.getFieldValue('CONST')), Blockly.JavaScript.ORDER_FUNCTION_CALL];
	};

	Blockly.JavaScript['sc3_MulAdd'] = function(block) {
		return implicit_method_codegen(blk, block, 'MulAdd', ['IN', 'MUL', 'ADD']);
	};

	Blockly.JavaScript['sc3_OverlapTexture'] = function(block) {
		return implicit_method_codegen(blk, block, 'OverlapTexture', ['PROC', 'SUSTAINTIME', 'TRANSITIONTIME', 'OVERLAP']);
	};

	Blockly.JavaScript['sc3_SoundFileBuffer'] = function(block) {
		return implicit_method_codegen(blk, block, 'SoundFileBuffer', ['SOUNDFILEID', 'NUMBEROFCHANNELS']);
	};

	Blockly.JavaScript['sc3_Voicer'] = function(block) {
		return implicit_method_codegen(blk, block, 'Voicer', ['COUNT', 'PROC']);
	};

	Blockly.JavaScript['sc3_VoiceWriter'] = function(block) {
		return implicit_method_codegen(blk, block, 'VoiceWriter', ['COUNT', 'PROC']);
	};

	Blockly.JavaScript['sc3_Proc0'] = function(block) {
		return proc_codegen(blk, block, 0, false);
	};

	Blockly.JavaScript['sc3_Proc0Stm'] = function(block) {
		return proc_codegen(blk, block, 0, true);
	};

	Blockly.JavaScript['sc3_Proc1'] = function(block) {
		return proc_codegen(blk, block, 1, false);
	};

	Blockly.JavaScript['sc3_Proc1Stm'] = function(block) {
		return proc_codegen(blk, block, 1, true);
	};

	Blockly.JavaScript['sc3_Proc2'] = function(block) {
		return proc_codegen(blk, block, 2, false);
	};

	Blockly.JavaScript['sc3_Proc2Stm'] = function(block) {
		return proc_codegen(blk, block, 2, true);
	};

	Blockly.JavaScript['sc3_Value0'] = function(block) {
		return method_codegen(blk, block, 'value', ['PROC']);
	};

	Blockly.JavaScript['sc3_Value1'] = function(block) {
		return method_codegen(blk, block, 'value', ['PROC', 'VALUE']);
	};

	Blockly.JavaScript['sc3_Value2'] = function(block) {
		return method_codegen(blk, block, 'value', ['PROC', 'VALUE1', 'VALUE2']);
	};

	Blockly.JavaScript['sc3_ArrayFromTo'] = function(block) {
		return method_codegen(blk, block,'to', ['FROM', 'TO']);
	};

	Blockly.JavaScript['sc3_ArrayFill'] = function(block) {
		return method_codegen(blk, block, 'dup', ['PROC', 'COUNT']);
	};

	Blockly.JavaScript['sc3_ArrayCollect'] = function(block) {
		return method_codegen(blk, block, 'collect', ['ARRAY', 'PROC']);
	};

	Blockly.JavaScript['sc3_ArrayProc1'] = function(block) {
		return method_codegen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript['sc3_ArrayProc2'] = function(block) {
		return method_codegen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript['sc3_UnaryOp'] = function(block) {
		return method_codegen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript['sc3_BinaryOp'] = function(block) {
		return method_codegen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript['sc3_KeywordBinaryOp'] = function(block) {
		return method_codegen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript['sc3_EventParam'] = function(block) {
		return method_codegen(blk, block, block.getFieldValue('PARAM'), ['EVENT']);
	};

	/// Statement (i.e. not expression)
	Blockly.JavaScript['sc3_TimesRepeat'] = function(block) {
		const count_value = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		const proc_code = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
		if(blk.use_sl) {
			return `${count_value}.timesRepeat(${proc_code});`;
		} else {
			return `sc.timesRepeat(${count_value}, ${proc_code});`;
		}
	};

}

// Named constants.
function const_codegen(c) {
    switch(c) {
    case 'e': return '2.718281828459045';
    case 'inf': return '2147483647'; // maxBound Int32 (sclang knows this value)
    case 'pi': return '3.141592653589793';
    case 'twoPi': return '6.283185307179586';
    default: throw 'const_codegen';
    }
};

// Implicit method code generator.
function implicit_method_codegen(blk, block, name, argNameArray) {
	// console.debug(`implicit_method_codegen: ${name}, ${argNameArray.length}`);
    const nilValue = blk.use_sl ? 'nil' : 'null';
    const qName = blk.use_sl ? name : `sc.${name}`;
    const argArray = argNameArray.map(item => blk.Blockly.JavaScript.valueToCode(block, item, blk.Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
    return [`${qName}(${argArray.join(', ')})`, blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

// Procedure code generator.
function proc_codegen(blk, block, numArg, hasStm) {
    const var_value = blk.Blockly.JavaScript.valueToCode(block, 'VAR', blk.Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    const var1_value = blk.Blockly.JavaScript.valueToCode(block, 'VAR1', blk.Blockly.JavaScript.ORDER_ATOMIC) || 'x';
    const var2_value = blk.Blockly.JavaScript.valueToCode(block, 'VAR2', blk.Blockly.JavaScript.ORDER_ATOMIC) || 'y';
    const stm_code = blk.Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';
    const ret_value = blk.Blockly.JavaScript.valueToCode(block, 'RETURN', blk.Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const ofc = blk.Blockly.JavaScript.ORDER_FUNCTION_CALL;
    if(blk.use_sl) {
        if(numArg === 0 && hasStm === false) {
            return [`{ ${ret_value} }`, ofc];
        } else if(numArg === 1 && hasStm === false) {
            return [`{ :arg1 | ${var_value} := arg1; ${ret_value} }`, ofc];
        } else if(numArg === 2 && hasStm === false) {
            return [`{ :arg1 :arg2 | ${var1_value} := arg1; ${var2_value} := arg2; ${ret_value} }`, ofc];
        } else if(numArg === 0 && hasStm === true) {
            return [`{ ${stm_code} ${ret_value} }`, ofc];
        } else if(numArg === 1 && hasStm === true) {
            return [`{ :arg1 | ${var_value} := arg1; ${stm_code} ${ret_value} }`, ofc];
        } else {
            return throwError(`proc_codegen: sl: ${hasArg} ${hasStm}`);
        }
	} else {
        if(numArg === 0 && hasStm === false) {
            return [`function() { return ${ret_value}; }`, ofc];
        } else if(numArg === 1 && hasStm === false) {
            return [`function(${var_value}_) { var ${var_value} = ${var_value}_; return ${ret_value}; }`, ofc];
        } else if(numArg === 2 && hasStm === false) {
            return [`function(${var1_value}_, ${var2_value}_) { var ${var1_value} = ${var1_value}_, ${var2_value} = ${var2_value}_; return ${ret_value}; }`, ofc];
        } else if(numArg === 0 && hasStm === true) {
            return [`function() { ${stm_code} return ${ret_value}; }`, ofc];
        } else if(numArg === 1 && hasStm === true) {
            return [`function(${var_value}_) { var ${var_value} = ${var_value}_; ${stm_code} return ${ret_value}; }`, ofc];
        } else {
            return throwError(`proc_codegen: js: ${hasArg} ${hasStm}`);
        }
    }
}

// Method call code generator
function method_codegen(blk, block, name, argNameArray) {
    const nilValue = blk.use_sl ? 'nil' : 'null';
    const argArray = argNameArray.map(item => blk.Blockly.JavaScript.valueToCode(block, item, blk.Blockly.JavaScript.ORDER_ATOMIC) || nilValue);
    if(blk.use_sl) {
        switch(argArray.length) {
        case 1: return [`${argArray[0]}.${name}`, blk.Blockly.JavaScript.ORDER_MEMBER];
        case 2: return sc.stc_is_binary_selector(name) ?
                [`${argArray[0]} ${name} ${argArray[1]}`, blk.Blockly.JavaScript.ORDER_NONE] :
                [`${argArray[0]}.${name}(${argArray[1]})`, blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case 3: return [`${argArray[0]}.${name}(${argArray[1]}, ${argArray[2]})`, blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        default: throwError('method_codegen: sl');
        }
    } else {
        switch(argArray.length) {
        case 1: return [`sc.${name}(${argArray[0]})`, blk.Blockly.JavaScript.ORDER_MEMBER];
        case 2: return [`sc.${sc.stc_binary_selector_from_operator(name)}(${argArray[0]}, ${argArray[1]})`, blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case 3: return [`sc.${name}(${argArray[0]}, ${argArray[1]}, ${argArray[2]})`, blk.Blockly.JavaScript.ORDER_FUNCTION_CALL];
        default: throwError('method_codegen: js');
        }
    }
}

// Lookup MUL and ADD inputs at block and rewrite codeStr as required.
function append_mul_add(blk, block, codeStr) {
    const mulStr = blk.Blockly.JavaScript.valueToCode(block, 'MUL', blk.Blockly.JavaScript.ORDER_ATOMIC) || '1.0';
    const addStr = blk.Blockly.JavaScript.valueToCode(block, 'ADD', blk.Blockly.JavaScript.ORDER_ATOMIC) || '0.0';
    const reqMul = Number.parseFloat(mulStr) != 1;
    const reqAdd = Number.parseFloat(addStr) != 0;
    if(reqMul && reqAdd) {
        const qName = blk.use_sl ? 'MulAdd' : 'sc.MulAdd';
		return `${qName}(${codeStr}, ${mulStr}, ${addStr})`;
    } else if(reqMul) {
        return blk.use_sl ? `(${codeStr} * ${mulStr})` : `sc.Mul(${codeStr}, ${mulStr})`;
    } else if(reqAdd) {
        return blk.use_sl ? `(${codeStr} + ${addStr})` : `sc.Add(${codeStr}, ${addStr})`;
    } else {
        return codeStr;
    }
}

export function blk_ugen_codegen(blk, block, name, argNameArray, hasOutputs) {
	// console.debug(`blk_ugen_codegen: ${name}, ${argNameArray.length}, ${hasOutputs}`);
    const ugenCode = implicit_method_codegen(blk, block, name, argNameArray);
    const answer = hasOutputs ? [append_mul_add(blk, block, ugenCode[0]), blk.Blockly.JavaScript.ORDER_FUNCTION_CALL] : ugenCode;
	return answer;
}
