'use strict';

function blk_wasm_play(opt) {
    var programText = blk_get_stc_code();
    var program = eval(programText);
    if(opt.cacheOnly) {
        console.log(programText);
    } else {
        play(program);
    }
}

function blk_wasm_reset() {
    reset();
}
