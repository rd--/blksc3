/* Eas ; Rl ; warning=feedback-network */
let delayTimes = [6, 20, 32];
let src = (audioIn([1, 2]) * [1, 0.75]).sum;
let delay = delayN(src, delayTimes, delayTimes);
let pan = eqPan2(delay, [-1, 1, 0]).sum;
(src * 0.5) + pan
