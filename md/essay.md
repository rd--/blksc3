# Block SuperCollider

Rohan Drape\
rohan.drape@gmail.com

## Abstract

Block SuperCollider is an experimental visual programming language specialised for writing programs for the SuperCollider synthesiser.
The system is being developed to examine seven research concerns:
1\. rich-text editors for SuperCollider programs,
2\. rendering program texts as interactive control surfaces,
3\. browser based editors for the WebAssembly form of the SuperCollider synthesiser,
4\. tablet and pen based editors for SuperCollider programs,
5\. authoring environments for SuperCollider programs for musicians who are non-programmers,
6\. literate programming systems for SuperCollider programs,
and
7\. simpler ways of sharing SuperCollider programs with non-experts.
This essay provides an rationale for and overview of the system,
describes its operation and implementation,
reviews related work,
and discusses future work.

## X. Introduction

_Block SuperCollider_ is a block editor for the SuperCollider (McCartney 1996) synthesiser.
It runs in the browser utilising the Blockly (Fraser 2015) library.
Block editors are a family of visual programming systems that use interlocking graphical blocks to represent the elements of a program.
For instance there are blocks to represent variable assignment and reference, procedure definition and application, and logical and mathematical operators.
Block SuperCollider also has blocks for the standard components of a synthesiser: oscillators, noise generators, filters, envelopes, panners, signal analysers and control signal generators.
To make sound Block SuperCollider translates the block program into a form understood by the synthesiser and sends it using the appropriate messaging protocol.
The figure below shows the Block SuperCollider system.

![](sw/blksc3/png/BlockSuperCollider.png)

### X.x Workspace

The area containing the block drawing is called the workspace.
Blocks are connected together to form a program, which can be evaluated.
Blocks can be moved about the workspace and connected and disconnected from each other using the mouse.
Blocks can be copied and pasted by typing Ctl-c & Ctl-v, and deleted by typing the delete key.
Edits can be undone using Ctl-z.
Blocks can be duplicated and deleted using the context menu, which is opened by right clicking on a block.
The workspace has controls to zoom in (⊕) and out (⊖) of the drawing, and to center it at its initial scale (⊙).
The workspace context menu has controls to play the current program,
to reset the synthesiser,
and to replace the previously played program with current program by crossfading.

### X.x Toolbox

The area at the left of the workspace is the toolbox.
It contains instances of the blocks the system knows about.
The toolbox is organised into categories, which may be further organised into sub-categories.
The system has two different toolboxes, a complete toolbox and a small toolbox.
The 𝑇 button below the workspace switches between them.
Blocks are fetched by dragging them out of the toolbox and into the workspace.
The figure below shows the complete toolbox with the constants category selected.

![](sw/blksc3/png/Toolbox.png)

### X.x Block Messages & Naming Schemes

The text displayed on a block is called the block message.
The block message is distinct from the block name,
and it is not stored as part of the program.
This allows separate sets of block messages to be defined.
Block SuperCollider defines two sets of messages,
a symbolic set that provides concise symbolic names for each block and each parameter of each block,
and a text set that provides a longer name for the block and elides the parameter names.
The 𝑁 control selects between the symbolic and text naming schemes.
The figure below shows the sine oscillator unit generator block using the symbolic naming scheme.
The symbols used are:
1\. ∿: sine,
2\. ν: frequency,
3\. ϕ: phase,
4\. ×: multiply,
and
5\. +: add.
The naming scheme also applies to menu items.
The entries in the menu of the boolean constant block will be either ⊤ and ⊥ or true and false.

![](sw/blksc3/png/SinOsc.internal.png)

### X.x Block Colours

The blocks in each category are all drawn in the same colour, shown to the left of the category name.
Categories are grouped into families, also indicated by colouring.
The program in the figure below contains blocks belonging to each of the five families of signal processing objects:

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

![](sw/blksc3/png/BlockColours.png)

### X.x Workspace Controls

Beneath the workspace is a control to _Fit_ the drawing to the workspace area.
The drawing can be tidied using _Cleanup_, which among other tasks will move any obscured blocks into an open area.
All of the blocks can be deleted using _Clear_.
Programs are stored as Json files,
_Load_ prompts to select a file and loads it into the workspace,
_Copy_ copies the text describing the current workspace state to the clipboard.
The program oracle (易) selects at random from a subset of the list of programs in the program menu.
The _Play_, _Replace_ and _Reset_ controls have the same meanings as the respective items in the workspace context menu.
All controls have keyboard shortcuts.

### X.x Illustration Programs

There are three collections of illustration programs that can be selected from menus below the workspace.
When a program is selected the current workspace program is deleted, as if _Clear_ had been run.
There is a _Guide_, which consists of small programs, each with an explanatory text that appears in the notes area to the right of the workspace.
There are _Help_ programs to illustrate individual blocks.
There is a collection of _Programs_ that have been translated from SuperCollider programs by various authors.
These programs are sometimes quite intricate and illustrate more complicated synthesis techniques and synthesis graph constructions.
Authors are indicated by their initials and comments indicate where the program was initially published.
There is also a separate list that selects only the _Small Programs_ from the larger collection.

# X Acknowledgments

SuperCollider is by James McCartney and others.
Blockly is by Neil Fraser and others.
The Wasm port of ScSynth is by Hanns Holger Rutz and others.
OhmJs is by Alessandro Warth and others.

* * *
