// Modifies builtin Js code generator, .sl uses := for "assignment"

export function initCodeGen(Blockly) {
	Blockly.JavaScript.forBlock['variables_set'] = function (block) {
		const name = Blockly.JavaScript.nameDB_.getName(
			block.getFieldValue('VAR'),
			'VARIABLE',
		);
		const value = Blockly.JavaScript.valueToCode(
			block,
			'VALUE',
			Blockly.JavaScript.ORDER_ASSIGNMENT,
		) || '0';
		return `${name} := ${value};\n`;
	};
	Blockly.JavaScript.forBlock['sc3_ArrayCollect'] = function (block) {
		return infixMethodCodeGen(Blockly, block, 'collect', ['ARRAY', 'PROC']);
	};
	Blockly.JavaScript.forBlock['sc3_ArrayFill'] = function (block) {
		return infixMethodCodeGen(Blockly, block, 'duplicateInteger', [
			'PROC',
			'COUNT',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_ArrayFromTo'] = function (block) {
		const [code, order] = infixMethodCodeGen(Blockly, block, 'to', [
			'FROM',
			'TO',
		]);
		return [`asList(${code})`, order];
	};
	Blockly.JavaScript.forBlock['sc3_ArrayProc1'] = function (block) {
		return infixMethodCodeGen(Blockly, block, block.getFieldValue('OP'), [
			'IN',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_ArrayProc2'] = function (block) {
		return infixMethodCodeGen(Blockly, block, block.getFieldValue('OP'), [
			'LHS',
			'RHS',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_Association'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'Association', ['KEY', 'VALUE']);
	};
	Blockly.JavaScript.forBlock['sc3_BinaryOp'] = function (block) {
		return infixMethodCodeGen(Blockly, block, block.getFieldValue('OP'), [
			'LHS',
			'RHS',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_Comment'] = function (block) {
		const commentField = block.getFieldValue('COMMENT');
		const commentString = sc.stringLines(commentField);
		const commentText = commentString[0];
		return `{- ${commentText} -}\n`;
	};
	Blockly.JavaScript.forBlock['sc3_Constant'] = function (block) {
		return [
			mathConstantValue(block.getFieldValue('CONST')),
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
		return infixMethodCodeGen(Blockly, block, 'ContinuousEvent', ['FROM']);
	};
	Blockly.JavaScript.forBlock['sc3_EventParam'] = function (block) {
		return infixMethodCodeGen(Blockly, block, block.getFieldValue('PARAM'), [
			'EVENT',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_LetBinding'] = function (block) {
		const name = Blockly.JavaScript.valueToCode(
			block,
			'NAME',
			Blockly.JavaScript.ORDER_ATOMIC,
		);
		const value = Blockly.JavaScript.valueToCode(
			block,
			'VALUE',
			Blockly.JavaScript.ORDER_ATOMIC,
		) || '0';
		return `let ${name} = ${value};\n`;
	};
	Blockly.JavaScript.forBlock['sc3_LocalVoicer'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'Voicer', ['RECORD', 'PROC']);
	};
	Blockly.JavaScript.forBlock['sc3_Mix'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'Mix', ['INARRAY']);
	};
	Blockly.JavaScript.forBlock['sc3_MulAdd'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'MulAdd', ['IN', 'MUL', 'ADD']);
	};
	Blockly.JavaScript.forBlock['sc3_OverlapTexture'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'OverlapTexture', [
			'PROC',
			'SUSTAINTIME',
			'TRANSITIONTIME',
			'OVERLAP',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_Play'] = function (block) {
		return Blockly.JavaScript.valueToCode(
			block,
			'CODE',
			Blockly.JavaScript.ORDER_ATOMIC,
		) || '0';
	};
	Blockly.JavaScript.forBlock['sc3_Proc0'] = function (block) {
		return procedureDefinitionCodeGen(Blockly, block, 0, false);
	};
	Blockly.JavaScript.forBlock['sc3_Proc0Stm'] = function (block) {
		return procedureDefinitionCodeGen(Blockly, block, 0, true);
	};
	Blockly.JavaScript.forBlock['sc3_Proc1'] = function (block) {
		return procedureDefinitionCodeGen(Blockly, block, 1, false);
	};
	Blockly.JavaScript.forBlock['sc3_Proc1Stm'] = function (block) {
		return procedureDefinitionCodeGen(Blockly, block, 1, true);
	};
	Blockly.JavaScript.forBlock['sc3_Proc2'] = function (block) {
		return procedureDefinitionCodeGen(Blockly, block, 2, false);
	};
	Blockly.JavaScript.forBlock['sc3_Proc2Stm'] = function (block) {
		return procedureDefinitionCodeGen(Blockly, block, 2, true);
	};
	Blockly.JavaScript.forBlock['sc3_SoundFileBuffer'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'SoundFileBuffer', [
			'SOUNDFILEID',
			'NUMBEROFCHANNELS',
		]);
	};
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
		return infixMethodCodeGen(Blockly, block, block.getFieldValue('OP'), [
			'IN',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_Voicer'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'Voicer', [
			'PART',
			'COUNT',
			'PROC',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_VoiceWriter'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'VoiceWriter', [
			'PART',
			'COUNT',
			'PROC',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_Value0'] = function (block) {
		return infixMethodCodeGen(Blockly, block, 'value', ['PROC']);
	};
	Blockly.JavaScript.forBlock['sc3_Value1'] = function (block) {
		return infixMethodCodeGen(Blockly, block, 'value', ['PROC', 'VALUE']);
	};
	Blockly.JavaScript.forBlock['sc3_Value2'] = function (block) {
		return infixMethodCodeGen(Blockly, block, 'value', [
			'PROC',
			'VALUE1',
			'VALUE2',
		]);
	};
	Blockly.JavaScript.forBlock['sc3_XFadeTexture'] = function (block) {
		return prefixMethodCodeGen(Blockly, block, 'XFadeTexture', [
			'PROC',
			'SUSTAINTIME',
			'TRANSITIONTIME',
		]);
	};
}

function mathConstantValue(c) {
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
			throw 'mathConstantValue';
	}
}

function prefixMethodCodeGen(Blockly, block, name, argNameArray) {
	// console.debug(`prefixMethodCodeGen: ${name}, ${argNameArray.length}`);
	const argArray = argNameArray.map((item) =>
		Blockly.JavaScript.valueToCode(
			block,
			item,
			Blockly.JavaScript.ORDER_ATOMIC,
		) || 'nil'
	);
	return [
		`${name}(${argArray.join(', ')})`,
		Blockly.JavaScript.ORDER_FUNCTION_CALL,
	];
}

function procedureDefinitionCodeGen(Blockly, block, numArg, hasStm) {
	const var1_name = (numArg === 1) ? 'VAR' : 'VAR1';
	const var1_value = (numArg >= 1)
		? Blockly.JavaScript.valueToCode(
			block,
			var1_name,
			Blockly.JavaScript.ORDER_ATOMIC,
		)
		: 'x';
	const var2_value = (numArg >= 2)
		? Blockly.JavaScript.valueToCode(
			block,
			'VAR2',
			Blockly.JavaScript.ORDER_ATOMIC,
		)
		: 'y';
	const stm_code = hasStm
		? Blockly.JavaScript.statementToCode(block, 'STATEMENTS')
		: '';
	const ret_value = Blockly.JavaScript.valueToCode(
		block,
		'RETURN',
		Blockly.JavaScript.ORDER_ATOMIC,
	) || 'nil';
	const ofc = Blockly.JavaScript.ORDER_FUNCTION_CALL;
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
			throw new Error(`procedureDefinitionCodeGen: sl: numArg=2 hasStm=true`);
		}
	} else {
		throw new Error(
			`procedureDefinitionCodeGen: sl: numArg=${numArg} hasStm=${hasStm}`,
		);
	}
}

function infixMethodCodeGen(Blockly, block, name, argNameArray) {
	// console.debug(`infixMethodCodeGen: ${name}, ${argNameArray.length}`);
	const argArray = argNameArray.map((item) =>
		Blockly.JavaScript.valueToCode(
			block,
			item,
			Blockly.JavaScript.ORDER_ATOMIC,
		) || 'nil'
	);
	switch (argArray.length) {
		case 1:
			return [`${argArray[0]}.${name}`, Blockly.JavaScript.ORDER_MEMBER];
		case 2:
			return sc.stcIsBinarySelector(name)
				? [
					`${argArray[0]} ${name} ${argArray[1]}`,
					Blockly.JavaScript.ORDER_NONE,
				]
				: [
					`${argArray[0]}.${name}(${argArray[1]})`,
					Blockly.JavaScript.ORDER_FUNCTION_CALL,
				];
		case 3:
			return [
				`${argArray[0]}.${name}(${argArray[1]}, ${argArray[2]})`,
				Blockly.JavaScript.ORDER_FUNCTION_CALL,
			];
		default:
			throw new Error('infixMethodCodeGen: sl');
	}
}

// Lookup MUL and ADD inputs at block and rewrite codeStr as required.
function appendMulAdd(Blockly, block, codeStr) {
	const mulStr = Blockly.JavaScript.valueToCode(
		block,
		'MUL',
		Blockly.JavaScript.ORDER_ATOMIC,
	) || '1.0';
	const addStr = Blockly.JavaScript.valueToCode(
		block,
		'ADD',
		Blockly.JavaScript.ORDER_ATOMIC,
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

export function ugenCodeGen(Blockly, block, name, argNameArray, hasOutputs) {
	// console.debug(`blkUgenCodeGen: ${name}, ${argNameArray.length}, ${hasOutputs}`);
	const ugenCode = prefixMethodCodeGen(Blockly, block, name, argNameArray);
	const answer = hasOutputs
		? [
			appendMulAdd(Blockly, block, ugenCode[0]),
			Blockly.JavaScript.ORDER_FUNCTION_CALL,
		]
		: ugenCode;
	return answer;
}
