export function ccValue(ccIndex) {
	const ccElem = document.getElementById(`cc${ccIndex}`);
	if(ccElem) {
		const ccValue = ccElem.value;
		// console.debug('cc: ', ccIndex, ccValue);
		return ccValue;
	} else {
		return '0';
	}
}

export function swMaintainedValue(swIndex) {
	const swElem = document.getElementById(`swMaintained${swIndex}`);
	const swValue = swElem.checked ? 1 : 0;
	// console.debug('sw/checkbox: ', swIndex, swValue);
	return swValue;
}
