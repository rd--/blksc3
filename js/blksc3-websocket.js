'use strict';

// Send .stc code of workspace to websocket.
function blk_send_stc(cmd) {
    sc3_websocket_send('{ ' + blk_get_stc_code() + ' }.' + cmd + ';\n');
}

// Send SC3.reset to websocket.
function blk_sc3_reset() {
    sc3_websocket_send('SC3.reset');
}

// Send SC3.ccSet to websocket.
function blk_cc_send(ccIndex) {
    sc3_websocket_send('SC3.ccSet(' + ccIndex + ', ' + blk_cc_value(ccIndex) + ');\n');
}

// Send SC3.swSet to websocket.
function blk_sw_maintained_send(swIndex) {
    sc3_websocket_send('SC3.swSet(' + swIndex + ', ' + blk_sw_maintained_value(swIndex) + ');\n');
}

// Send SC3.swSet to websocket.
function blk_sw_momentary_send(swIndex, swValue) {
    console.debug('sw/button: ', swIndex, swValue);
    sc3_websocket_send('SC3.swSet(' + swIndex + ', ' + swValue + ');\n');
}
