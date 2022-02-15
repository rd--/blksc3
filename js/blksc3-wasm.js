'use strict';

function blk_wasm_play(opt) {
    var program = eval(blk_get_stc_code());
    if(opt.cacheOnly) {
        console.log(program);
    } else {
        play(program);
    }
}

function blk_wasm_reset() {
    reset();
}
