function blk_send_stc(cmd) {
    sc3_websocket_send(`{ ${blk_get_stc_code()} }.${cmd}`);
}

function blk_sc3_reset() {
    sc3_websocket_send('globalScSynth.reset()');
}

function blk_cc_send(ccIndex) {
    sc3_websocket_send(`${ccIndex}.ccSet(${blk_cc_value(ccIndex)})`);
}

function blk_sw_maintained_send(swIndex) {
    sc3_websocket_send(`${swIndex}.swSet(${blk_sw_maintained_value(swIndex)})`);
}

function blk_sw_momentary_send(swIndex, swValue) {
    sc3_websocket_send(`${swIndex}.swSet(${swValue});`);
}
