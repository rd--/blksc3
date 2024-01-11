# Spl

The Blockly Js printer prints "var p, q, r;" to declare temporaries.
This is patched to print "|p q r|" for Spl.

# Help

Document:
replace (envelopes),
editable number (named control),
external synthesiser (localhost, not Wasm).

# Sub-graphs

A diagram can be a sub-graph.
The ⊳ (Play) block indicates the "outlets" of the diagram.
The system connects the inputs of ⊳ to the "audio outputs".
There is no block to indicate the "inlets" of a diagram, which would require a "count" parameter.
There ∙ block (AudioIn) reads from the "audio inputs".
Diagrams could be written to use "inlet" and "outlet" blocks.
In the case of "top-level" diagrams, the system would connect these to the "audio device".
In the case of "sub-diagrams" these would be connected to the blocks that connect to the "sub-diagram" block.

# Url

An initial file can be loaded by setting the Url parameter _e_,
i.e. _blksc3-wasm.html?e=help/graph/jmcc-why-supercollider.xml_.

# Notes

Wasm requires Pointer{WXY}, does not include sc3-plugins or sc3-rdu.
Other errors are:

- f0-tw-1467507942664646661
- f0-tw-1479212835192332289
- tw-tw-01

The _math_ operator blocks should only hold _Ugen_ operators.

_splay2_ should be written as a block constructor, not a method.

_clearBuf_ is an interesting case, it is a method because it constructs an _Mrg_ node.

There are array operation blocks with menus, _ArrayProc1_ and _ArrayProc2_.

There is an _ArrayCollect_ block, however it should be deleted in favour of _ArrayProc2.collect_.

_fromAssocArray_ and _->_ belong at _Event_, not _Math_.

_kr_ should not exist.

# Guide:

- Notes, .stc.
  That notes are not stored in blocks.
  That they specially formatted comments in .stc files.

- Display, Layout.
  That the default layout rule is proportional to the size of the viewport.
  That there are fixed size layouts,  indexed by display dimensions.
  That these are useful for seeing how programs will appear on other displays.
  That they require the browser window to occupy most of the display.

- Javascript.
  That Javascript [does not allow operator overloading](https://github.com/tc39/proposal-operator-overloading).
  That the scheme form can equally be written as _Mul(Tanh(SinOsc(f, 0)), a)_,
  or as _SinOsc(f, 0).tanh.mul(a)_.

- Array inputs.
  Compatibility with systems that distinguish between signal functions and array functions.
  Rule for deciding which inputs are array inputs.

- Access keys.
  Chrome: d is "go to address box" (cannot be draw), e & f are "chrome menu" (cannot be erase or fit)
  Firefox: f,e,v,s,b,t and h are menus (cannot be erase or fit), ␣ (space key) interacts poorly with menus (cannot be play)

# Remainder

- unicode/ugen: Fold, Formant
- unicode/op: clump, softClip
- overlaptexture: muladd
- events in browser
- midi keyboard input in browser
- sound file reader block (SfAcquire)
- search in toolbox
- nicer group structure
- guide for local storage
- guide for block size
- guide for mouse/pointer event
- guide for event in browser
- preferences pane
- guide for comments
- guide for play
- multiple fragments
- remaining unicode
- help for collect
- cc & sw for broswer
- fullscreen has x as accesskey, but it's really for phone/tablet so not required
