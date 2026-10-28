/* Mouse control ; jmcc #3 */
let x = mouseX(200, 2000, 1, 0.2);
let y = mouseY(0, 1, 0, 0);
let f = [x, lag(linExp(y, 0, 1, 200, 2000), 0.2)];
let a = lag(linLin(y, 0, 1, -90, -36), 0.2).dbAmp;
sinOsc(f, 0) * a

# mouseX

☟𝑥 (_mouseX_) reads  the _x_ axis location of the mouse on the screen.
☟𝑥 is located in the _Control_ category of the toolbox.

⌊ (_minval_) and ⌈ (_maxval_) define the output range.
𝑓 (_warp_) is either 0 for a _linear_ mapping or 1 for _exponential_.
⎎ (_lag_) is a smoothing parameter, indicating the time taken for the signal to converge to within 0.01%.

In this program ☟𝑥 controls the ν (_frequency_) input of one ∿ (_sinOsc_),
☟𝑦 controls the ν of another, and also the amplitude of both.

The // (_LinLin_), /ノ (_linExp_) and ⎎ (_lag_) blocks at ☟𝑦 perform the same function as the ⌊, ⌈, 𝑓 and ⎎ inputs at ☟𝑥.

**Note:**
When _blkSc_ is communicating with the web assembly form of scsynth the mouse controls are implemented in terms of the _Pointer_ pseudo unit-generators.
In this case the mouse area is restricted to the blksc3 page, not the screen as a whole, and the update rate is likely slower.
The rate is a function of the audio block size set when the synthesiser is started, the default value is _2048_.
There is a _Block Size_ entry  in the ☰ menu to set this value.

