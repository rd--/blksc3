'use strict';

var blk_websocket;

// Initialise WebSocket.  To send .stc to sclang as /eval message run 'blksc3 stc-to-osc'
function blk_websocket_init(host, port) {
    if(blk_websocket) {
        blk_websocket.close();
    }
    try {
        blk_websocket = new WebSocket('ws://' + host + ':' + Number(port).toString());
    } catch(err) {
        console.error('blk_websocket_init: ' + err);
    }
}

// Prompt for WebSocket address (host and port) and initialise WebSocket.
function blk_websocket_dialog() {
    var reply = window.prompt('Set WebSocket address as Host:Port', 'localhost:9160');
    if(reply) {
        var [host, port] = reply.split(':');
        blk_websocket_init(host, Number(port));
    }
}

// If websocket is connected, send text.
function blk_websocket_send(string) {
    if(blk_websocket && blk_websocket.readyState == 1) {
        blk_websocket.send(string);
    } else {
        console.error('blk_websocket_send: websocket nil or not ready?');
    }
}

// Send .stc code of workspace to websocket.
function blk_send_stc(cmd) {
    blk_websocket_send('{ ' + blk_get_stc_code() + ' }.' + cmd + ';\n');
}

// Send SC3.reset to websocket.
function blk_sc3_reset() {
    blk_websocket_send('SC3.reset');
}

// Send SC3.ccSet to websocket.
function blk_cc_send(ccIndex) {
    blk_websocket_send('SC3.ccSet(' + ccIndex + ', ' + blk_cc_value(ccIndex) + ');\n');
}

// Send SC3.swSet to websocket.
function blk_sw_maintained_send(swIndex) {
    blk_websocket_send('SC3.swSet(' + swIndex + ', ' + blk_sw_maintained_value(swIndex) + ');\n');
}

// Send SC3.swSet to websocket.
function blk_sw_momentary_send(swIndex, swValue) {
    console.debug('sw/button: ', swIndex, swValue);
    blk_websocket_send('SC3.swSet(' + swIndex + ', ' + swValue + ');\n');
}
