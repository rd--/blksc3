'use strict';

function blk_wasm_play(opt) {
    var programText = blk_get_stc_code();
    var programUgen = eval(programText);
    if(opt.cacheOnly) {
        console.log(programText);
    } else {
        playUgen(programUgen);
    }
}

function blk_wasm_reset() {
    reset();
}
