export function blk_cc_value(ccIndex) {
    var ccElem = document.getElementById('cc' + ccIndex);
	if(ccElem) {
		var ccValue = ccElem.value;
		console.debug('cc: ', ccIndex, ccValue);
		return ccValue;
	} else {
		return '0';
	}
}

export function blk_sw_maintained_value(swIndex) {
    var swElem = document.getElementById('swC' + swIndex);
    var swValue = swElem.checked ? 1 : 0;
    console.debug('sw/checkbox: ', swIndex, swValue);
    return swValue;
}
