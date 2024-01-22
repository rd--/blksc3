{- eas ; rl ; warning=feedback-network -}
var delayTimes = [6, 20, 32];
var src = (AudioIn([1, 2]) * [1, 0.75]).sum;
var delay = DelayN(src, delayTimes, delayTimes);
var pan = EqPan2(delay, [-1, 1, 0]).sum;
(src * 0.5) + pan
