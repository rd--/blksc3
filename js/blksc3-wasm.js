'use strict';

function blk_wasm_play() {
    var program = eval(blk_get_stc_code());
    play(program);
}

function blk_wasm_reset() {
    reset();
}
