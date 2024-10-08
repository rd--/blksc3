export function initCodeGen(blk) {
	const Blockly = blk.Blockly;

	// Modified for .sl which uses := for "assignment" (and = for "is equal to")
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

	Blockly.JavaScript.forBlock['sc3_ArrayCollect'] = function (block) {
		return infixMethodCodeGen(blk, block, 'collect', ['ARRAY', 'PROC']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayFill'] = function (block) {
		return infixMethodCodeGen(blk, block, 'duplicateInteger', ['PROC', 'COUNT']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayFromTo'] = function (block) {
		const [code, order] = infixMethodCodeGen(blk, block, 'to', ['FROM', 'TO']);
		return [`asList(${code})`, order];
	};

	Blockly.JavaScript.forBlock['sc3_ArrayProc1'] = function (block) {
		return infixMethodCodeGen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript.forBlock['sc3_ArrayProc2'] = function (block) {
		return infixMethodCodeGen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	Blockly.JavaScript.forBlock['sc3_Association'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'Association', ['KEY', 'VALUE']);
	};

	Blockly.JavaScript.forBlock['sc3_BinaryOp'] = function (block) {
		return infixMethodCodeGen(blk, block, block.getFieldValue('OP'), ['LHS', 'RHS']);
	};

	// Comment code generator.
	// Comments should not contain newlines, if they do only the first line is written.
	Blockly.JavaScript.forBlock['sc3_Comment'] = function (block) {
		const commentField = block.getFieldValue('COMMENT');
		const commentString = sc.stringLines(commentField);
		const commentText = commentString[0];
		return `{- ${commentText} -}\n`;
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

	Blockly.JavaScript.forBlock['sc3_Event'] = function (block) {
		return infixMethodCodeGen(blk, block, 'ContinuousEvent', ['FROM']);
	};

	Blockly.JavaScript.forBlock['sc3_EventParam'] = function (block) {
		return infixMethodCodeGen(blk, block, block.getFieldValue('PARAM'), ['EVENT']);
	};

	Blockly.JavaScript.forBlock['sc3_LocalVoicer'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'Voicer', ['RECORD', 'PROC']);
	};

	Blockly.JavaScript.forBlock['sc3_Mix'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'Mix', ['INARRAY']);
	};

	Blockly.JavaScript.forBlock['sc3_MulAdd'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'MulAdd', ['IN', 'MUL', 'ADD']);
	};

	Blockly.JavaScript.forBlock['sc3_OverlapTexture'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'OverlapTexture', [
			'PROC',
			'SUSTAINTIME',
			'TRANSITIONTIME',
			'OVERLAP',
		]);
	};

	// Play code generator.
	// Output is 'CODE' input.
	Blockly.JavaScript.forBlock['sc3_Play'] = function (block) {
		return Blockly.JavaScript.valueToCode(
			block,
			'CODE',
			Blockly.JavaScript.ORDER_ATOMIC,
		) || '0';
	};

	Blockly.JavaScript.forBlock['sc3_Proc0'] = function (block) {
		return procDefCodeGen(blk, block, 0, false);
	};

	Blockly.JavaScript.forBlock['sc3_Proc0Stm'] = function (block) {
		return procDefCodeGen(blk, block, 0, true);
	};

	Blockly.JavaScript.forBlock['sc3_Proc1'] = function (block) {
		return procDefCodeGen(blk, block, 1, false);
	};

	Blockly.JavaScript.forBlock['sc3_Proc1Stm'] = function (block) {
		return procDefCodeGen(blk, block, 1, true);
	};

	Blockly.JavaScript.forBlock['sc3_Proc2'] = function (block) {
		return procDefCodeGen(blk, block, 2, false);
	};

	Blockly.JavaScript.forBlock['sc3_Proc2Stm'] = function (block) {
		return procDefCodeGen(blk, block, 2, true);
	};

	Blockly.JavaScript.forBlock['sc3_SoundFileBuffer'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'SoundFileBuffer', [
			'SOUNDFILEID',
			'NUMBEROFCHANNELS',
		]);
	};

	// Statement block (i.e. not expression block)
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

	Blockly.JavaScript.forBlock['sc3_UnaryOp'] = function (block) {
		return infixMethodCodeGen(blk, block, block.getFieldValue('OP'), ['IN']);
	};

	Blockly.JavaScript.forBlock['sc3_Voicer'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'Voicer', [
			'PART',
			'COUNT',
			'PROC',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_VoiceWriter'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'VoiceWriter', [
			'PART',
			'COUNT',
			'PROC',
		]);
	};

	Blockly.JavaScript.forBlock['sc3_Value0'] = function (block) {
		return infixMethodCodeGen(blk, block, 'value', ['PROC']);
	};

	Blockly.JavaScript.forBlock['sc3_Value1'] = function (block) {
		return infixMethodCodeGen(blk, block, 'value', ['PROC', 'VALUE']);
	};

	Blockly.JavaScript.forBlock['sc3_Value2'] = function (block) {
		return infixMethodCodeGen(blk, block, 'value', ['PROC', 'VALUE1', 'VALUE2']);
	};

	Blockly.JavaScript.forBlock['sc3_XFadeTexture'] = function (block) {
		return prefixMethodCodeGen(blk, block, 'XFadeTexture', [
			'PROC',
			'SUSTAINTIME',
			'TRANSITIONTIME',
		]);
	};

}

// Named mathematical constants code generator.
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

// Prefix method code generator, i.e. "f(x, y)"
function prefixMethodCodeGen(blk, block, name, argNameArray) {
	// console.debug(`prefixMethodCodeGen: ${name}, ${argNameArray.length}`);
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

// Procedure definition code generator.
function procDefCodeGen(blk, block, numArg, hasStm) {
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
	) || 'nil';
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
			throw new Error(`procDefCodeGen: sl: numArg=2 hasStm=true`);
		}
	} else {
		throw new Error(`procDefCodeGen: sl: numArg=${numArg} hasStm=${hasStm}`);
	}
}

// Infix method call code generator, i.e. "x.f(y)"
function infixMethodCodeGen(blk, block, name, argNameArray) {
	// console.debug(`infixMethodCodeGen: ${name}, ${argNameArray.length}`);
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
			throw new Error('infixMethodCodeGen: sl');
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
	const ugenCode = prefixMethodCodeGen(blk, block, name, argNameArray);
	const answer = hasOutputs
		? [
			appendMulAdd(blk, block, ugenCode[0]),
			blk.Blockly.JavaScript.ORDER_FUNCTION_CALL,
		]
		: ugenCode;
	return answer;
}
