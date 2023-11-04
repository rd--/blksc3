export function ccValue(ccIndex) {
	var ccElem = document.getElementById(`cc${ccIndex}`);
	if(ccElem) {
		var ccValue = ccElem.value;
		// console.debug('cc: ', ccIndex, ccValue);
		return ccValue;
	} else {
		return '0';
	}
}

export function swMaintainedValue(swIndex) {
	var swElem = document.getElementById(`swMaintained${swIndex}`);
	var swValue = swElem.checked ? 1 : 0;
	// console.debug('sw/checkbox: ', swIndex, swValue);
	return swValue;
}
