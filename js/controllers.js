export function ccValue(ccIndex) {
	const ccId = `cc${ccIndex}`;
	const ccElem = document.getElementById(ccId);
	if (ccElem) {
		const ccValue = ccElem.value;
		// console.debug('cc: ', ccIndex, ccValue);
		return ccValue;
	} else {
		return '0';
	}
}

export function swMaintainedValue(swIndex) {
	const swId = `swMaintained${swIndex}`;
	const swElem = document.getElementById(swId);
	const swValue = swElem.checked ? 1 : 0;
	// console.debug('sw/checkbox: ', swIndex, swValue);
	return swValue;
}
