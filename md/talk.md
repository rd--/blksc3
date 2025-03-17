Preamble

Hi, my name's Rohan, I'm going to talk about a structure editor for SuperCollider programs.
As a quick preamble:
The system I'll be discussing runs in a browser,
and instead of preparing slides for this talk,
I've prepared a sequence of small programs which I'll step through and discuss.
If the texts aren't legible for you, don't worry I'll read them aloud.
At times I'll mention the controls,
they're in two rows at the bottom of the screen,
and likely too small to read,
but they're not important for the talk.
After discussing each program, which will describe a simple SuperCollider sound,
I'll very briefly run it.
Hopefully this will make the meaning of the drawings that I'm talking about clearer.

Postamble:

This is the second last program, or slide, of the talk, so to briefly conclude:
In this talk,
I've been showing ways in which the block editor resembles the text programs that it encodes.
But this last program shows one way in which block programs are not like text programs.
The list _mutator_,
which allows for slots to be added and removed from the list,
illustrates a particular distinction that I would like draw attention to.
It is an instance of a block specific meta-editor,
it edits aspects of the structure, or shape, of the block itself.
This aspect of blocks,
a) that they can have special purpose meta-editors,
b) that they can change their shape,
c) that they can store and retrieve arbitrarily complex meta-values,
and d) that the editor library directly supports these behaviours,
makes block editors a potentially interesting environment for writing music programs that are,
at the same time,
their own virtual control surface.

Pre-talk check:

- Select full Screen (Alt-X)
- Start scsynth (Alt-B)
- Cache Sound File (evaluate 4.28)
- Select complete toolbox (Alt-T)
- Set "Master Gain" to 1.75
- Mouse location
- Remember to reset changes (ie. outline mode & naming schema) before page turns
