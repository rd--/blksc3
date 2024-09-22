export function initCodeGen(blk) {
	const Blockly = blk.Blockly;

	// Modified for .sl
	Blockly.JavaScript.forBlock['variables_set'] = function (block) {
		const argument0 = Blockly.JavaScript.valueToCode(
			block,
			'VALUE',
			Blockly.JavaScript.ORDER_ASSIGNMENT,
		) || '0';
		const varName = Blockly.JavaScript.nameDB_.getName(
			block.getFieldValue('VAR'),
			'VARIABLE',
		);
		return `${varName} := ${argument0};\n`;
	};

	// Comment code generator.  Comments should not contain newlines, if they do only the first line is written.
	Blockly.JavaScript.forBlock['sc3_Comment'] = function (block) {
		const commentText = sc.stringLines(block.getFieldValue('COMMENT'))[0];
		return `{- ${commentText} -}\n`;
	};

	// Play code generator.  Output is 'CODE' input.
	Blockly.JavaScript.forBlock['sc3_Play'] = function (block) {
		return Blockly.JavaScript.valueToCode(
			block,
			'CODE',
			Blockly.JavaScript.ORDER_ATOMIC,
		) || '0';
	};

	Blockly.JavaScript.forBlock['sc3_Constant'] = function (block) {
		return [
			constCodeGen(block.getFieldValue('CONST')),
			Blockly.JavaScript.ORDER_FUNCTION_CALL,
		];
	};

	Blockly.JavaScript.forBlock['sc3_ControlField'] = function (block) {
		return [
			`NamedControl('${block.id}', ${block.getFieldValue('VALUE')})`,
			Blockly.JavaScript.ORDER_FUNCTION_CALL,
		];
	};

	Blockly.JavaScript.forBlock['sc3_Mix'] = function(block) {
		return implicitMethodCodeGen(blk, block, 'Mix', ['INARRAY']);
	};

	Blockly.JavaScript.forBlock['sc3_MulAdd'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'MulAdd', ['IN', 'MUL', 'ADD']);
	};

	Blockly.JavaScript.forBlock['sc3_OverlapTexture'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'OverlapTexture', [
			'PROC',
			'SUSTAINTIME',
			'TRANSITIONTIME',
			'OVERLAP',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_XFadeTexture'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'XFadeTexture', [
			'PROC',
			'SUSTAINTIME',
			'TRANSITIONTIME',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_SoundFileBuffer'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'SoundFileBuffer', [
			'SOUNDFILEID',
			'NUMBEROFCHANNELS',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_Voicer'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'Voicer', [
			'PART',
			'COUNT',
			'PROC',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_LocalVoicer'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'Voicer', ['RECORD', 'PROC']);
	};

	Blockly.JavaScript.forBlock['sc3_VoiceWriter'] = function (block) {
		return implicitMethodCodeGen(blk, block, 'VoiceWriter', [
			'PART',
			'COUNT',
			'PROC',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_Proc0'] = function (block) {
		return procCodeGen(blk, block, 0, false);
	};

	Blockly.JavaScript.forBlock['sc3_Proc0Stm'] = function (block) {
		return procCodeGen(blk, block, 0, true);
	};

	Blockly.JavaScript.forBlock['sc3_Proc1'] = function (block) {
		return procCodeGen(blk, block, 1, false);
	};

	Blockly.JavaScript.forBlock['sc3_Proc1Stm'] = function (block) {
		return procCodeGen(blk, block, 1, true);
	};

	Blockly.JavaScript.forBlock['sc3_Proc2'] = function (block) {
		return procCodeGen(blk, block, 2, false);
	};

	Blockly.JavaScript.forBlock['sc3_Proc2Stm'] = function (block) {
		return procCodeGen(blk, block, 2, true);
	};

	Blockly.JavaScript.forBlock['sc3_Value0'] = function (block) {
		return methodCodeGen(blk, block, 'value', ['PROC']);
	};

	Blockly.JavaScript.forBlock['sc3_Value1'] = function (block) {
		return methodCodeGen(blk, block, 'value', ['PROC', 'VALUE']);
	};

	Blockly.JavaScript.forBlock['sc3_Value2'] = function (block) {
		return methodCodeGen(blk, block, 'value', ['PROC', 'VALUE1', 'VALUE2']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayFromTo'] = function (block) {
		const [code, order] = methodCodeGen(blk, block, 'to', ['FROM', 'TO']);
		return [`asList(${code})`, order];
	};

	Blockly.JavaScript.forBlock['sc3_ArrayFill'] = function (block) {
		return methodCodeGen(blk, block, 'duplicateInteger', ['PROC', 'COUNT']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayCollect'] = function (block) {
		return methodCodeGen(blk, block, 'collect', ['ARRAY', 'PROC']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayProc1'] = function (block) {
		return methodCodeGen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayProc2'] = function (block) {
		return methodCodeGen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript.forBlock['sc3_UnaryOp'] = function (block) {
		return methodCodeGen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript.forBlock['sc3_BinaryOp'] = function (block) {
		return methodCodeGen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript.forBlock['sc3_KeywordBinaryOp'] = function (block) {
		return methodCodeGen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript.forBlock['sc3_Event'] = function (block) {
		return methodCodeGen(blk, block, 'ContinuousEvent', ['FROM']);
	};

	Blockly.JavaScript.forBlock['sc3_EventParam'] = function (block) {
		return methodCodeGen(blk, block, block.getFieldValue('PARAM'), ['EVENT']);
	};

	/// Statement (i.e. not expression)
	Blockly.JavaScript.forBlock['sc3_TimesRepeat'] = function (block) {
		const count_value = Blockly.JavaScript.valueToCode(
			block,
			'COUNT',
			Blockly.JavaScript.ORDER_ATOMIC,
		) || '0';
		const proc_code = Blockly.JavaScript.valueToCode(
			block,
			'PROC',
			Blockly.JavaScript.ORDER_ATOMIC,
		) || '{}';
		return `${count_value}.timesRepeat(${proc_code});`;
	};
}

// Named constants.
function constCodeGen(c) {
	switch (c) {
		case 'e':
			return '2.718281828459045';
		case 'inf':
			return '2147483647'; // maxBound Int32 (sclang knows this value)
		case 'pi':
			return '3.141592653589793';
		case 'twoPi':
			return '6.283185307179586';
		default:
			throw 'constCodeGen';
	}
}

// Implicit method code generator.
function implicitMethodCodeGen(blk, block, name, argNameArray) {
	// console.debug(`implicitMethodCodeGen: ${name}, ${argNameArray.length}`);
	const argArray = argNameArray.map((item) =>
		blk.Blockly.JavaScript.valueToCode(
			block,
			item,
			blk.Blockly.JavaScript.ORDER_ATOMIC,
		) || 'nil'
	);
	return [
		`${name}(${argArray.join(', ')})`,
		blk.Blockly.JavaScript.ORDER_FUNCTION_CALL,
	];
}

// Procedure code generator.
function procCodeGen(blk, block, numArg, hasStm) {
	const var1_name = (numArg === 1) ? 'VAR' : 'VAR1';
	const var1_value = (numArg >= 1)
		? blk.Blockly.JavaScript.valueToCode(
			block,
			var1_name,
			blk.Blockly.JavaScript.ORDER_ATOMIC,
		)
		: 'x';
	const var2_value = (numArg >= 2)
		? blk.Blockly.JavaScript.valueToCode(
			block,
			'VAR2',
			blk.Blockly.JavaScript.ORDER_ATOMIC,
		)
		: 'y';
	const stm_code = hasStm
		? blk.Blockly.JavaScript.statementToCode(block, 'STATEMENTS')
		: '';
	const ret_value = blk.Blockly.JavaScript.valueToCode(
		block,
		'RETURN',
		blk.Blockly.JavaScript.ORDER_ATOMIC,
	) || '0';
	const ofc = blk.Blockly.JavaScript.ORDER_FUNCTION_CALL;
	if (numArg === 0) {
		if (hasStm === false) {
			return [`{ ${ret_value} }`, ofc];
		} else {
			return [`{ ${stm_code} ${ret_value} }`, ofc];
		}
	} else if (numArg === 1) {
		if (hasStm === false) {
			return [`{ :arg1 | ${var1_value} := arg1; ${ret_value} }`, ofc];
		} else {
			return [
				`{ :arg1 | ${var1_value} := arg1; ${stm_code} ${ret_value} }`,
				ofc,
			];
		}
	} else if (numArg === 2) {
		if (hasStm === false) {
			return [
				`{ :arg1 :arg2 | ${var1_value} := arg1; ${var2_value} := arg2; ${ret_value} }`,
				ofc,
			];
		} else {
			throw new Error(`procCodeGen: sl: numArg=2 hasStm=true`);
		}
	} else {
		throw new Error(`procCodeGen: sl: numArg=${numArg} hasStm=${hasStm}`);
	}
}

// Method call code generator
function methodCodeGen(blk, block, name, argNameArray) {
	const argArray = argNameArray.map((item) =>
		blk.Blockly.JavaScript.valueToCode(
			block,
			item,
			blk.Blockly.JavaScript.ORDER_ATOMIC,
		) || 'nil'
	);
	switch (argArray.length) {
		case 1:
			return [`${argArray[0]}.${name}`, blk.Blockly.JavaScript.ORDER_MEMBER];
		case 2:
			return sc.stcIsBinarySelector(name)
				? [
					`${argArray[0]} ${name} ${argArray[1]}`,
					blk.Blockly.JavaScript.ORDER_NONE,
				]
				: [
					`${argArray[0]}.${name}(${argArray[1]})`,
					blk.Blockly.JavaScript.ORDER_FUNCTION_CALL,
				];
		case 3:
			return [
				`${argArray[0]}.${name}(${argArray[1]}, ${argArray[2]})`,
				blk.Blockly.JavaScript.ORDER_FUNCTION_CALL,
			];
		default:
			throw new Error('methodCodeGen: sl');
	}
}

// Lookup MUL and ADD inputs at block and rewrite codeStr as required.
function appendMulAdd(blk, block, codeStr) {
	const mulStr = blk.Blockly.JavaScript.valueToCode(
		block,
		'MUL',
		blk.Blockly.JavaScript.ORDER_ATOMIC,
	) || '1.0';
	const addStr = blk.Blockly.JavaScript.valueToCode(
		block,
		'ADD',
		blk.Blockly.JavaScript.ORDER_ATOMIC,
	) || '0.0';
	const reqMul = Number.parseFloat(mulStr) != 1;
	const reqAdd = Number.parseFloat(addStr) != 0;
	if (reqMul && reqAdd) {
		return `MulAdd(${codeStr}, ${mulStr}, ${addStr})`;
	} else if (reqMul) {
		return `(${codeStr} * ${mulStr})`;
	} else if (reqAdd) {
		return `(${codeStr} + ${addStr})`;
	} else {
		return codeStr;
	}
}

export function blkUgenCodeGen(blk, block, name, argNameArray, hasOutputs) {
	// console.debug(`blkUgenCodeGen: ${name}, ${argNameArray.length}, ${hasOutputs}`);
	const ugenCode = implicitMethodCodeGen(blk, block, name, argNameArray);
	const answer = hasOutputs
		? [
			appendMulAdd(blk, block, ugenCode[0]),
			blk.Blockly.JavaScript.ORDER_FUNCTION_CALL,
		]
		: ugenCode;
	return answer;
}
