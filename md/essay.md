# Block SuperCollider

Rohan Drape\
rohan.drape@gmail.com

## Abstract

Block SuperCollider is an experimental visual programming language specialised for writing programs for the SuperCollider synthesiser.
The system addresses eight areas of research:
1\. rich-text editors for SuperCollider programs,
2\. rendering program texts as interactive control surfaces,
3\. browser based editors for the Wasm SuperCollider synthesiser,
4\. tablet and pen based editors for SuperCollider programs,
5\. environments to help musicians who are non-programmers work with SuperCollider,
6\. literate programming systems for SuperCollider programs,
7\. simple systems for sharing SuperCollider programs with non-experts,
and
8\. bi-directional translation between notational systems.
This essay provides a rationale for and overview of the Block SuperCollider system,
describes its operation and implementation,
reviews related work,
and discusses directions for future research.

## Introduction

_Block SuperCollider_ is a block editor for the SuperCollider [@McCartney1996a] synthesiser.
It runs in the browser utilising the Blockly [@Fraser2015a] library.
Block editors are a family of visual programming systems that use interlocking graphical blocks to represent the elements of a program.
For instance there are blocks to represent variable assignment and reference, procedure definition and application, and logical and mathematical operators.
Block SuperCollider also has blocks for the standard components of a synthesiser: oscillators, noise generators, filters, envelopes, panners, signal analysers and control signal generators.
To make sound Block SuperCollider translates the block program into a form understood by the synthesiser and sends it to be played using the appropriate messaging protocol.
Ordinarily the system runs its own in-process copy of the synthesiser, compiled to Wasm [@Rossberg2019a], within the browser.
However it can also communicate with an external synthesiser by sending messages over a socket.

[Figure 1](https://rohandrape.net/sw/blksc3/png/BlockSuperCollider.png) shows and example program of the Block SuperCollider system.

![Figure 1](sw/blksc3/png/BlockSuperCollider.svg)

## Workspace

The area containing the block drawing is called the workspace.
Blocks are connected together to form a program, which can be evaluated.
Blocks can be moved about the workspace and connected and disconnected from each other using the mouse,
or on tablets and telephones using a pen or by touch.
Blocks can be copied and pasted by typing Ctl-c & Ctl-v, and deleted by typing the delete key.
Edits can be undone using Ctl-z.
Blocks can be duplicated and deleted using the context menu, which is opened by right clicking on a block.
The workspace has controls to zoom in (⊕) and out (⊖) of the drawing, and to centre it at its initial scale (⊙).
The workspace context menu has controls to play the current program,
to reset the synthesiser,
and to replace the previously played program with current program by crossfading.

## Toolbox

The area at the left of the workspace is the toolbox.
It contains instances of the blocks the system knows about.
The toolbox is organised into categories, which may be further organised into sub-categories.
The system has two different toolboxes, a complete toolbox and a small toolbox.
The latter has a flat structure and omits many obscure and rarely used blocks.
The 𝑇 button below the workspace switches between them.
Blocks are fetched by dragging them out of the toolbox and into the workspace.
[Figure 2](https://rohandrape.net/sw/blksc3/png/Toolbox.png) shows the complete toolbox with the constants category selected.

![Figure 2](sw/blksc3/png/Toolbox.svg)

## Notes

The text area to the right of the workspace is for notes.
Programs may include detailed notes,
written in a simple markup language [@Gruber2004a].
Block SuperCollider aims to be self documenting,
and the notes area is used for the user guide and help files.
It is the manner in which system is able to explain itself.
Placing the notes to the side allows the drawing to be consulted as the text is read.
While it is possible to place notes within the drawing,
and indeed it is conventional to begin each program with a brief note,
the alongside arrangement can make both the drawing and the text clearer to read.

## Block Messages & Naming Schemes

The text displayed on a block is called the block message.
The block message is distinct from the block name,
and it is not stored as part of the program.
This allows separate sets of block messages to be defined.
Block SuperCollider defines two sets of messages,
1\. a symbolic set that provides concise symbolic names for each block,
and for each parameter of each block, and
2\. a text set that provides a longer name for the block and elides the parameter names.
The 𝑁 control selects between the symbolic and text naming schemes.
[Figure 3](https://rohandrape.net/sw/blksc3/png/SinOsc.internal.png) shows the sine oscillator unit-generator block using the symbolic naming scheme.
The symbols used are:
1\. ∿: sine,
2\. ν: frequency,
3\. ϕ: phase,
4\. ×: multiply,
and
5\. +: add.
The naming scheme also applies to menu items.
The entries in the menu of the boolean constant block will be either ⊤ and ⊥ or _True_ and _False_.

![Figure 3](sw/blksc3/png/SinOsc.internal.svg)

## Block Colours

The blocks in each category are all drawn in the same colour, shown to the left of the category name.
Categories are grouped into families, also indicated by colour.
The program in [Figure 4](https://rohandrape.net/sw/blksc3/png/BlockColours.png) contains blocks belonging to each of the five families of signal processing objects:

1. ⊥ (_Impulse_) is in _Generator → Oscillator_
2. ⍰𝒑 (_PinkNoise_) is in _Generator → Noise_
3. ◩ (_Hpf_) is in _Processor → Filter_
4. ⤴― & ⤴⚁ (_TLine_ & _TRand_) are in _Trigger → Random_
5. ↘₂ (_Decay2_) is in _Envelope → Filter_
6. ⚁ (_Rand_) is in _Random → Generator_
7. ◠ (_Splay_) is in _Pan → List_

In addition
× and ÷ are in _Math_,
⟦⟧ is in _List_,
the numbers are in _Constants_,
≔ and _t_ are in _Variables_,
and ▷ is in _Meta_.

![Figure 4](sw/blksc3/png/BlockColours.svg)

## Workspace Controls

Beneath the workspace are a number of controls.
There is a control to _Fit_ the drawing to the workspace area.
The drawing can be tidied using _Cleanup_, which among other tasks will move any obscured blocks into an open area.
All of the blocks can be deleted using _Clear_.
Programs are stored as Json [@Crockford2006a] files,
_Load_ prompts to select a file and loads it into the workspace,
_Copy_ copies the text describing the current workspace state to the clipboard.
The _Display_ menu selects the page layout rule.
The rule sets the shape and size of the workspace and selects the font size for the notes area.
The default rule is %×%, which allocates space as a proportion of the size of the viewport.
In addition there is a set of fixed size layouts, such as 1366×768, named by display dimensions.
The fixed size layouts are useful for seeing how programs will appear on other displays,
assuming that the browser window occupies most of the display.
The _Play_, _Replace_ and _Reset_ controls have the same meanings as the respective items in the workspace context menu.
All controls have keyboard shortcuts.

## Illustration Programs

In addition to the controls,
there are three collections of illustration programs that can be selected from menus below the workspace.
When a program is selected the current workspace program is deleted, as if _Clear_ had been run.
There is a _Guide_, which consists of a sequence of simple programs accompanied by explanatory texts that appears in the notes area to the right of the workspace.
There are _Help_ programs to illustrate individual blocks.
In addition there is a collection of a few hundred SuperCollider _Programs_ that have been translated into block drawings from existing SuperCollider texts by various authors.
These programs are sometimes quite intricate and illustrate more complicated synthesis techniques and linguistic constructions.
Authors are indicated by their initials,
and comments indicate where the program was initially published.
An entry in the guide explicates the author initials.
There is also a separate list that selects only the _Small Programs_ from the larger collection.
A small program is defined as a drawing that readily fits on the display of a small portable computer.
The program oracle (易) selects at random from a subset of the list of programs in the program menu.

## Translators

To evaluate a block drawing, the drawing is first translated into a text program by a code generator.
The Block SuperCollider code generator writes programs in a simple SuperCollider-like language called _Simple Programming Language_.
The interpreter for this language also runs in the browser,
and it is this interpreter that then communicates with the synthesiser.
Block SuperCollider also includes a separate program called _translator_ that can translate some text programs into block drawings.
The illustration programs were translated from an existing collection of text programs.
The translator is the inverse of the code generator,
it reads a text program of the kind the code generator writes,
and writes a block program of the kind the code generator reads.
[Figure 5](https://rohandrape.net/sw/blksc3/png/Translator.png) shows the block program the translator writes given the text of the following brief program [@Putnam2004a]:

```
CombC(
	Formant(
		LfNoise0(
			[1, 0.7]
		) * 8 + 9,
		LfNoise0(
			[1, 0.7]
		) * 4000 + 4000,
		200
	) * 0.3,
	0.2,
	0.2,
	1
)
```

![Figure 5](sw/blksc3/png/Translator.svg)

## Control Fields

The block 𝒞 (_ControlField_) defines a named control unit-generator,
for which a unique name is automatically assigned by the system.
When the text field of 𝒞 is edited, the new value is sent immediately to the synthesiser.
𝒞 is both a part of the definition of the synthesis program and,
while the program is running,
an interactive controller for the executing program.
The text that defines the program is, at the same time, the control surface.
This elementary construct,
which is simple both to comprehend and to implement in a visual program editor,
poses numerous very subtle problems when translated to a text editor.
A block drawing is a concise view onto a complex structure,
and it is largely for this reason that the view can readily support multiple complex modes of interaction.
[Figure 6](https://rohandrape.net/sw/blksc3/png/ControlField.png) shows a ∿ (_SinOsc_) block with 𝒞 inputs for both frequency and amplitude.

![Figure 6](sw/blksc3/png/ControlField.svg)

## Types of Types

A statement block is a block that does not answer a value,
and therefore does not have an output connector.
Statements may have a previous statement connector at the top or a next statement connector at the bottom or both.
Statements may also have input connectors at the right.
Input connectors are of two types, accepting either value blocks or statement blocks but not both.
It is clear from looking at the connectors what will connect to what,
and the system will not allow wrong connections.
In addition, blocks can have value type annotations,
specifying what type of value a block answers and what type of value each input must be.
The system likewise does not allow blocks with incompatible value types to be connected.
In [Figure 7](https://rohandrape.net/sw/blksc3/png/TypeAnnotation.png) the ! (_Duplicate_) block checks that the 𝑓 input is a procedure of no arguments,
and that the # input is a number,
and also indicates that its answer is a list.
The system would not allow the ⚁ block to be moved from the × input of ∿ to the # input of !,
it would bounce off and the attempted connection would fail.
Inputs and outputs can also be annotated with _sets_ of types.
Unit-generator inputs may ordinarily be either other unit-generators or lists,
and in some cases numbers,
and will accept blocks answering any one of these types.

![Figure 7](sw/blksc3/png/TypeAnnotation.svg)

## Related Work

There is a long history of visual programming languages,
encompassing systems of very different kinds.
Four music related systems are of particular note:
Kyma [@Scaletti1987a],
Max [@Puckette1988a],
Patchwork [@Laurson1989a]
and
SchemeBricks [@Griffiths2008a].
The first three belong to the same family of visual editors,
in which programs elements are drawn as boxes with inlets on the top or left edge,
and with outlets on the lower or right edge.
The boxes are connected together by lines to form a graph.
The evaluation model of Kyma is closely related to that described here,
a high-level program,
described by a drawing,
is compiled to a low-level program which is then sent to a dedicated synthesiser.
Kyma also implements a toolbox system for fetching new program elements,
and a type system that only allows these elements to be placed at correct points in an existing graph.
The evaluation model of Max is rather different,
it includes both a data flow system for audio signals and a reactive system for discrete events,
however Max is an excellent model for thinking about how to incorporate the control interface directly into the program text.
The evaluation model of Patchwork is very close to that adopted here,
the graph drawing maps directly to a Lisp program that is evaluated by a Lisp interpreter,
however Patchwork is only very indirectly a language for sound synthesis.
SchemeBricks belongs in the same family of block editors described here,
which are drawings of trees and not graphs and therefore well suited to applicative languages such as Lisp,
however the evaluation model is closer to the reactive model of Max.
The lineage of block editors can be traced back at least to AgentSheets [@Repenning1993a].
Existing synthesis systems with extensive histories that are now additionaly compiled to Wasm include Csound [@Yi2018a].

## Future Research

Block SuperCollider is an experimental, personal research project that is in the early stages of development.
Considered as a proof of concept, the system behaves well.
The collection of illustration programs,
the annotated guide,
and the organisation of the toolbox,
provide a detailed view of the current extent of the system.
The most open and interesting areas for future work are centred around the design and implemention of further reactive event-based control and display blocks.
An initial step will be to write a simple inline _poll_ block,
the analytic counterpart of the 𝒞 block described above.
However for this work to progress the current set of Wasm patches to SuperCollider need revising.
The present implementation does not place the synthesiser in the correct browser audio context,
and this introduces significant latency,
making interactive real-time musical use of the system practicable only when working with an external instance of the synthesiser.

## Conclusion

Block SuperCollider connects two mature, stable and useful ecosystems,
the Blockly block editor and the SuperCollider synthesiser.
It runs in the three most widely used browser systems, and on computers, tablets and telephones.
The system is self documenting and encourages a form of literate programming.
Block programs can act as their own control surfaces,
and the nature of the editing environment may make the system more approachable for musicians who are not familiar with text programming systems.
A simple bidirectional translation system allows working with block drawings of existing text programs.
Block SuperCollider programs can be shared as readily as any other web resource.

## Acknowledgements

SuperCollider is by James McCartney and others.
Blockly is by Neil Fraser and others.
The Wasm patches for the SuperCollider synthesiser are by Hanns Holger Rutz and others.
OhmJs [@Warth2016a] is by Alessandro Warth and others.

## References
