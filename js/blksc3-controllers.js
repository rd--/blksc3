'use strict';

function blk_cc_value(ccIndex) {
    var ccElem = document.getElementById('cc' + ccIndex);
    var ccValue = ccElem.value;
    console.debug('cc: ', ccIndex, ccValue);
    return ccValue;
}

function blk_sw_maintained_value(swIndex) {
    var swElem = document.getElementById('swC' + swIndex);
    var swValue = swElem.checked ? 1 : 0;
    console.debug('sw/checkbox: ', swIndex, swValue);
    return swValue;
}
