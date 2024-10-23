/* SfRead ; phasor as phase input */
let sf = SfAcquireStereo('HarpA4');
{
	let tr = Impulse(2 ^ Rand(1, 3) / (SfDur(sf) * 4), 0).kr;
	let mnn = TiRand(-2, 0, tr) * 12 + TChoose(tr, [0 2.1 4.9 7 9.2]);
	let rt = mnn.MidiRatio * SfRateScale(sf);
	let ph = Phasor(tr, rt, 0, SfFrames(sf), 0);
	SfRead(sf, ph, 0, 2)
} !+ 8 * 0.1

/* ---- notes.md ---- */
# SfRead

☖☼ (_SfAcquire_) returns a list of _buffer_ objects.
Buffers are lists of floating point values with an associated channel count, frame count, and sample rate.
The buffer list returned by ☖☼ will hold the data stored in the named sound file.

☖☼ requires a _number of channels_ argument,
and this must match the number of channels stored in the named file.

The file name is either a key for an entry in the _sound file dictionary_ or a
[Url](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL).
In this program _HarpA4_ is a key in the default dictionary.
It resolves to the Url

>  <https://rohandrape.net/pub/jssc3/flac/harp-a4.flac>

The first time a file is requested the system will take an arbitrary amount of time to allocate and fill the buffer.
Subsequent requests for the same file return the cached buffer.

The behaviour of the program before the buffer is ready depends upon the behaviour of the unit generators accessing the buffer.

The _Eval_ command _evaluates_ the program,
and therefore starts the process of fetching the sound file and preparing the buffer,
but does not _Play_ the program.

In this program a ϕ (_Phasor_) at the ϕ (_phase_) input of ☖↑ (_SfRead_) determines the pitch of the sound file playback,
there are parallel programs for each of eight parts.
