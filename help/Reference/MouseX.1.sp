/* Mouse control ; jmcc #3 */
let x = MouseX(200, 2000, 1, 0.2);
let y = MouseY(0, 1, 0, 0);
let f = [x, Lag(LinExp(y, 0, 1, 200, 2000), 0.2)];
let a = Lag(LinLin(y, 0, 1, -90, -36), 0.2).dbAmp;
SinOsc(f, 0) * a

# MouseX

☟𝑥 (_MouseX_) reads  the _x_ axis location of the mouse on the screen.
☟𝑥 is located in the _Control_ category of the toolbox.

⌊ (_minval_) and ⌈ (_maxval_) define the output range.
𝑓 (_warp_) is either 0 for a _linear_ mapping or 1 for _exponential_.
⎎ (_Lag_) is a smoothing parameter, indicating the time taken for the signal to converge to within 0.01%.

In this program ☟𝑥 controls the ν (_frequency_) input of one ∿ (_SinOsc_),
☟𝑦 controls the ν of another, and also the amplitude of both.

The // (_LinLin_), /ノ (_LinExp_) and ⎎ (_Lag_) blocks at ☟𝑦 perform the same function as the ⌊, ⌈, 𝑓 and ⎎ inputs at ☟𝑥.

**Note:**
When _blkSc_ is communicating with the web assembly form of scsynth the mouse controls are implemented in terms of the _Pointer_ pseudo unit-generators.
In this case the mouse area is restricted to the blksc3 page, not the screen as a whole, and the update rate is likely slower.
The rate is a function of the audio block size set when the synthesiser is started, the default value is _2048_.
There is a _Block Size_ entry  in the ☰ menu to set this value.

