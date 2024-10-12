{- SfRead ; phasor as phase input -}
var sf = SfAcquireStereo('harp-a4');
{
    var tr = Impulse(2 ^ Rand(1, 3) / (SfDur(sf) * 4), 0).kr;
    var mnn = TiRand(-2, 0, tr) * 12 + TChoose(tr, [0 2.1 4.9 7 9.2]);
    var rt = mnn.MidiRatio * SfRateScale(sf);
    var ph = Phasor(tr, rt, 0, SfFrames(sf), 0);
    SfRead(sf, ph, 0, 2)
} !+ 8 * 0.1

{- ---- notes.md ---- -}
# SfRead

_SfAcquire_ returns an array of _buffer_ objects.
Buffers are arrays of floating point values with an associated channel count, frame count, and sample rate.
The buffer array returned by SfAcquire will hold the data stored in the named sound file.

SfAcquire requires a _number of channels_ argument, and this must match the number of channels stored in the named file.

The file name is either a key for an entry in the _sound file dictionary_ or a
[Url](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL).
In this program _harp-a4_ is a key in the default dictionary.
It resolves to the Url

>  <https://rohandrape.net/pub/jssc3/flac/harp-a4.flac>

The first time a file is requested the system will take an arbitrary amount of time to allocate and fill the buffer.
Subsequent requests for the same file return the cached buffer.

The behaviour of the program before the buffer is ready depends upon the behaviour of the unit generators accessing the buffer.

The _Eval_ command _evaluates_ the program,
and therefore starts the process of fetching the sound file and preparing the buffer,
but does not _Play_ the program.
