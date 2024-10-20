# Glossary

## Assignment

The assignment block ≔ sets the value of a variable.
The figure below shows the variable _i_ being incremented by one.

![](sw/blksc3/png/Assignment.png)

## Atom

An atom is an indivisible value.
A number or a boolean is an atom,
a list or a dictionary is not.
A string may or may not be an atom,
in the Simple Language it is.

## Binary Operator

A binary operator is an operator with two operands,
or a procedure of two arguments.
In some contexts it particularly refers to a procedure that is written using infix notation.

## Black & White

There is a black and white, or grey, or outline, drawing mode.
These drawings may be more suitable for printing,
for including in documentation,
or for use with non-colour displays.
This mode can be selected by pressing the ⬜ button beneath the workspace.
The figure below is the drawing from §1.01 of the guide.

![](sw/blksc3/svg/BlockSuperCollider.svg)
<!-- ![](sw/blksc3/svg/WhyBlockSuperCollider.grey.svg) -->

## Block Comment

Block comments are texts attached to a block using the _Add comment_ context menu item.
The text is displayed in a box that can be moved and resized.
Blocks that have comments attached have a question mark (?) button to show or hide the text.
The comment text is printed, as a comment, when the block is evaluated.

## Block Identifier

Each block in a program has a unique identifier assigned to it by the system.
Block identifiers are opaque values, they are used internally to distinguish otherwise equal blocks.

## Block Message

The text displayed on a block is called the block message.
The block message is distinct from the block type,
and is not stored as part of the program.
This allows for separate sets of block messages to be defined,
so that block programs can be translated into different languages,
or so that blocks can have both symbolic and text naming schemes.

## Block Output

A block may have a single output, represented as a jigsaw connector on the left edge.
Block outputs connect to value inputs.
Blocks with an output are usually called expression or value blocks.

## Block Type

Each block in a program is an instance of a block type.
A blocks types defines the structure and behaviour of the block.
Each block types has a unique names.
Block types names are opaque values,
the text that is displayed on a block is a separate value called the block message.

## Case Rule

Identifiers are written in mixed case as `SinOsc`, `LfSaw` and `Fft`.

## Categories

The blocks in the toolbox are organised into categories, which may be further organised into sub-categories.
Blocks in the same category are assigned the same colour.

## Cleanup

The _Cleanup_ button tidies the current drawing.
Among other tasks it will move any obscured blocks into an open area.
The _Cleanup_ button can be selected using the _o_ access key.

## Clear

The _Clear_ button deletes the current drawing.
The _Clear_ button can be selected using the _k_ access key.

## Code Generator

To evaluate a block program it is first printed as a text program.
This process is called code generation, and is performed by a code generator.

## Collapsed Blocks

A block can be _collapsed_ using the _Collapse Block_ item in the context menu.
A collapsed block can be _expanded_ using the _Expand Block_ item in the context menu.

## Colours

Blocks are coloured according to category.
Block colours are specified by name, and looked up in a dictionary.

## Comment Blocks

Comment blocks, written as a left double quote (“), are statement blocks located in the _Meta_ category.
They have a single text field which is printed, as a comment, when the block is evaluated.
The comment should not contain any newlines, if it does only the first line is written.
By convention synthesiser programs begin with a comment block.

## Comments

There are three kinds of comments:

1. Comment Blocks
2. Block Comments
3. Workspace Comments

## Complete Toolbox

The complete toolbox includes a complete set of the blocks the system knows about,
organised into a system of categories and subcategories.

## Connection checks

Connection checks, also called type annotations, constrain how blocks can be connected together.
There is a [Type Annotations](http://blksc3.rohandrape.net/?e=help/Guide/2.05%20Type%20Annotations) section in the _Guide_.

## Console

The console is a text area that can be printed to.

## Context Menu

A context menu contains a list of actions related to an element in the workspace, or to the workspace itself.
A context menu is shown on right mouse clicks and long pen presses.

## Control Field

𝒞 (_ControlField_) is a _named control_ for which a unique name is assigned by the system.
There is a [Control Fields](http://blksc3.rohandrape.net/?e=help/Guide/1.15%20Control%20Fields) section in the _Guide_.
The figure below shows a ∿ (_SinOsc_) block with 𝒞 inputs for both frequency and amplitude.

![](sw/blksc3/png/ControlField.png)

## Copy

The _Copy_ button copies the internal notation of the current program to the clipboard.
The _Copy_ button can be selected using the _c_ access key.

## Copy and Paste

A block can be copied by typing _Ctl-c_.
A copied block can be pasted by typing _Ctl-v_.

## Deleting Blocks

Blocks can be deleted using the _Delete_ item in the context menu,
or by pressing the _Delete_ key.
When a block is deleted all of its descendants are deleted along with it.
Deletion can be _undone_.

## Display

The display menu selects the page layout rule.
The rule sets the shape and size of the workspace and selects the font size for the notes area.
The default rule is _%×%_, which allocates space as a proportion of the size of the viewport.
In addition there is a set of fixed size layouts, such as _1366×768_, named by display dimensions.
The fixed size layouts are useful for seeing how programs will appear on other displays,
assuming that the browser window occupies most of the display.
The display menu can be selected using the _y_ access key.

## Duplicate

A block can be _duplicated_ using the _Duplicate_ item in the context menu.

## Eval

The _Eval_ button evaluates the program in the workspace and sends it to the synthesiser.
It does not send the answer to the synthesiser.
The _Eval_ button can be selected using the _/_ access key.

## Expression

An expression is a program that can be evaluated to give an answer,
and which may in addition perform an action having an effect.
Expressions form a tree structure, the leaves of which are called atoms.

## Expression Blocks

An expression block (also called a function block or a value block) is a block that answers an output value (at an output connector) and accepts one or more inputs (at input fields).
See also _Statement Block_.

## External Inputs

Blocks can be drawn with either _Internal Inputs_ or _External inputs_.
There is a context menu item to select between the two drawing modes.
The figure below shows the ∿ (_SinOsc_) block with external inputs.

![](sw/blksc3/png/SinOsc.external.png)

## External Synthesiser

Block SuperCollider ordinarily runs a copy of the SuperCollider synthesiser (`scsynth`) within the browser.
However it can also communicate with an external synthesiser by sending messages over a socket.

## Fit

The _Fit_ button scales the current drawing so that it fits in the workspace.
The _Fit_ button can be selected using the _=_ access key.

## Forest

A forest is a graph in which any two vertices are connected by at most one path,
or equally a set of two or more unconnected trees.

## Function

In mathematics, a function is a relation that uniquely associates members of one set with members of another set.
In some contexts function may be used as a synonym for operator or procedure or subroutine.
In some contexts function may be used to refer to a procedure that has no side effects.
In some contexts function may be used to refer to a procedure that is written using function notation,
and operator to refer to a procedure that is written using infix notation.

## Function Notation

Function notation is a form of prefix notation where the operands are enclosed in parentheses and separated by commas.
The prefix expression `f p q` is written `f(p, q)` in function notation, `f` is the operator and `p` and `q` the operands.

## Help

There is an online [Help](https://blksc3.rohandrape.net/?e=help/Reference/--Help--) system.
The _Help_ menu can be selected using the _h_ access key.
The help programs illustrate individual blocks.
Some blocks have multiple illustrations and the help programs have numerical suffixes to distinguish them.

## Guide

There is an online [Guide](https://blksc3.rohandrape.net/?e=help/Guide/--Guide--).
The _Guide_ menu can be selected using the _g_ access key.
The Guide consists of a sequence of small example programs each with extensive notes.

## Idioms

An idiom is, as in Apl, a composite sequence of blocks that is often used.
The Toolbox contains a number of idioms.

## Infix Notation

Infix notation is a notation where the (binary) operator is written between the (two) operands.
The infix expression `p + q` is written `+ p q` in prefix notation, and `p q +` in postfix notation.

## Input Kinds

There are two kinds of inputs, _value_ inputs and _statement_ inputs.
Value inputs accept an expression block.
Statement inputs accept one or more statement blocks.

## Internal Inputs

Blocks can be drawn with either _Internal Inputs_ or _External inputs_.
There is a context menu item to select between the two drawing modes.
The figure below shows the ∿ (_SinOsc_) block with internal inputs.

![](sw/blksc3/png/SinOsc.internal.png)

## JavaScript

JavaScript (Wirfs-Brock 2020) is a language standardised in the document ECMA-262 and maintained by Technical Committee 39.

## JavaScript Object Notation (Json)

JavaScript Object Notation (Crockford 2006) is a simple text format for encoding atoms, lists and dictionaries.
Atoms are either strings, numbers, booleans or nil.
Json is a subset of JavaScript,
a Json value is a JavaScript program representing the value it encodes.

## Lambda

λ (_Lambda_) blocks answer procedure values.
They define the expected arguments and the steps of execution or evaluation for a procedure.
The name is from the lambda calculus (Church 1941) and Lisp (McCarthy 1960).

## Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

## Let Binding

A let binding introduces a local variable and assigns it an initial value.
Let bindings must be grouped together at the start of a statement stack.
In the figure below a local variable _x_ is defined to have the value of the mathematical constant _e_.

![](sw/blksc3/png/LetBinding.png)

## Lexical Scope

Lexical scope is the part of a program text, or drawing, in which a binding of a name to a value applies.
In the figure below `x` is bound to `1` and `y` is bound to `pi`.
The `x` binding in the λ block is local, it does not interact with the outer `x` binding.

![](sw/blksc3/png/LexicalScope.png)

## Load

The _Load_ button opens a file selection dialog to select a _.json_ file,
and loads the selected file into the workspace.
The _Load_ button can be selected using the _l_ access key.

## Menu Field

Block fields with a ▼ indicator are menus, from which items may be selected.
The figure below shows a numeric constant block with the menu open.

![](sw/blksc3/png/NumericConstant.png)

## Multiply and Add

All unit generator blocks that have an output have × (_Multiply_) and + (_Add_) inputs.
There is a [Multiply and Add](http://blksc3.rohandrape.net/?e=help/Guide/2.01%20Multiply%20and%20Add) section in the _Guide_.

## Naming Scheme

The 𝑁 control selects between symbolic and text naming schemes.
Some equivalent names are ∿ and _SinOsc_,
or ≤ and _LessThanOrEqualTo_.
The figure below shows the unary mathematical operator block,
with the √ (_Sqrt_) operator selected,
in each naming scheme.

![](sw/blksc3/png/NamingScheme.png)

## Nil

∅ (_Nil_) is a constant representing an undefined value.
The ∅ block is fetched from the _Meta_ category.

![](sw/blksc3/png/Nil.png)

## Notes

Programs may include detailed notes,
written in a simple markup language (Gruber 2004).
There is a notes area to the right of the workspace.

## Number

A number block is a block with a single editable text field in which one can write a number.
The number may be an integer or a real number.
Trying to type in a text that is not a number leaves the number unchanged.
The number block is fetched from the _Constants_ category of the toolbox.
The figure below shows the number twenty three divided by an approximation of π.

![](sw/blksc3/png/Number.png)

## Numeric Constant

The numeric constant block is a block with a menu containing a number of predefined mathematical constants,
such as π (_Pi_), 2×π (_TwoPi_), 𝑒 (_E_) and ∞ (_Infinity_).
It is fetched from the _Constants_ category of the toolbox.

![](sw/blksc3/png/NumericConstant.png)

## Operand

An operand, also called an argument or a parameter, is a value operated on by an operator.
In the infix expression `p + q`, `p` and `q` are operands and `+` is the operator.

## Operator

An operator is the part of an expression that specifies the operation to be performed.
In the expression `p + q`, `+` is the operator and `p` and `q` are operands.
The number of operands required by an operator is the arity of the operator.
In some contexts operator refers to specifically to verbs that are written infix.

## Operator Menu

Blocks may implement many different behaviours selected from an operator menu.
The figure below shows the binary math operator block with the operator menu opened.

![](sw/blksc3/png/OperatorMenu.png)

## Overlap Texture

ᨏ (_OverlapTexture_) is a is a graph combinator, a form of higher order function.
ᨏ requires a λ (_Lambda_) block at 𝑓 and makes an evolving texture of # (_Overlap_) voices.
There is an [Overlap Texture](https://blksc3.rohandrape.net/?e=help/Guide/1.12%20Overlap%20Texture) section in the _Guide_.
The figure below shows the toolbox entry for ᨏ, which includes a pre-composed λ block at 𝑓, and a _tr_ variable reference at ⍵.

![](sw/blksc3/png/Texture.png)

## Patcher

Patcher (Puckette 1988), Max (Puckette 1991) and PureData (Puckette 1996) are a closely related family of visual programming systems.
Programs elements are drawn as boxes with inlets on the top edge and outlets on the lower edge.
Boxes are connected by lines to form a graph.
The evaluation model includes both a data flow signal processing system for audio signals and a reactive system for discrete events.

## Patchwork

Patchwork (Laurson 1989) is a domain specific visual programming language for music.
It represents Lisp functions as boxes and with inlets at the left and right edges for input parameters,
and a single outlet on the lower edge.
Boxes are connected by lines to form a tree.
OpenMusic (Assayag 1996) is a descendent of Patchwork.

## Play

The _Play_ button evaluates the program in the workspace and sends it to the synthesiser.
There is also a _Play_ entry in the workspace context menu.
The _Play_ button can be selected using the _,_ access key.

## Play Block

The ⊳ (_Play_) block is a statement block that indicates the end of the program.
The input to the ⊳ block is the sound that is heard when the program is listened to.
There should only be one ⊳ block in a program, and it should be the last block.

## Postfix Notation

Postfix notation, also called reverse Polish or reverse Łukasiewicz notation, is a notation where the operator follows the operands.
The postfix expression `p q +` is written `p + q` in infix notation, and `+ p q` in prefix notation.

## Prefix Notation

Prefix notation, also called Polish or Łukasiewicz notation, is a notation where the operator precedes the operands.
The prefix expression `+ p q` is written `p + q` in infix notation, and `p q +` in postfix notation.

## Print Program

The _Print_ button prints the synthesis graph of the current program to the console.

## Procedure

A procedure, or operator or function or method, is a named behaviour that performs an action and may answer a value.

## Program Oracle

The program oracle (易) selects at random from a subset of the list of programs in the program menu.
The 易 button can be selected using the _r_ access key.

## Programs

There is a list of illustrative SuperCollider [Programs](https://blksc3.rohandrape.net/?e=help/Program/--Programs--) that have been translated into block drawings.
The programs are arranged by author initials and include references to the original sources.
The _Programs_ menu can be selected using the _p_ access key.

## Replace

The _Replace_ button evaluates the program in the workspace and sends the answer to the synthesiser,
applying a cross-fade with the previous program.
There is also a _Replace_ entry in the workspace context menu.
The _Replace_ button can be selected using the _-_ access key.

## Reset

The _Reset_ button resets the synthesiser.
There is also a _Reset_ entry in the workspace context menu.
The _Reset_ button can be selected using the _._ access key.

## Scalable Vector Graphics

Scalable Vector Graphics (Ferraiolo 2001) is a vector image format for defining two-dimensional graphics.
The workspace can be saved as a Scalable Vector Graphics file.
The figure below is an exported image of the _Why SuperCollider?_ graph.

![](sw/blksc3/svg/WhyBlockSuperCollider.colours.svg)

## S-Expression

S-expressions (McCarthy 1960) are a class of symbolic expressions.
They are formed by using the three special characters `(.)`,
and an infinite set of distinguishable atomic symbols.
The atomic symbols are s-expressions, and if `p` and `q` are s-expressions, so is `(p . q)`.
There are a two additional notations to simplify writing common idioms,
`(p q r)` is an abbreviation of `(p . (q . (r . nil)))`,
and `'p` is an abbreviation of `(quote p)`.

## Shadow Block

A shadow block is an editable but non-movable block connected to another block.
Blocks can be placed on top of shadow blocks to overwrite them.
In the figure below both input fields of the ⍰𝒑 (_PinkNoise_) block,
and the × (_Multiply_) and + (_Add_) fields of the ⋏ (_Resonz_) block are shadow blocks.
The _ν_ (_Frequency_) and ¹⁄𝑄 (_ReciprocalOfQ_) inputs are replaced by number blocks.

![](sw/blksc3/png/ShadowBlock.png)

## Simple Programming Language

Simple Programming Language (Spl),
or Simple Language (Sl),
is the language that Block SuperCollider programs are drawings of,
and that the drawings are translated into when evaluated.

## Small Programs

There is a list of [Small Programs](https://blksc3.rohandrape.net/?e=help/Program/--Small%20Programs--).
These are programs that can be drawn within the workspace on a _1366×768_ display.
The _Small Programs_ menu can be selected using the _a_ access key.

## Small Toolbox

The small toolbox includes only a small set of the blocks the system knows about,
and it is organised into a flat system of categories (there are no subcategories).
It is designed so that all of the categories,
and all of the blocks within each category,
fit on a display of size 1366×768.

## Statement

A statement is an expression that is evaluated for its effect and that does not answer a value.

## Statement Blocks

A statement block is a block that does not answer a value,
and therefore does not have an output connector.
Instead statements may have a previous statement connector at the top (for instance ⊳),
or a next statement connector at the bottom,
or both (for instance “ and ≔).
Statement blocks may also have input connectors at the right (for instance ⊳ and ≔).
Statement blocks are connected together into statement stacks.
In the figure below a ≔ (_Assignment_) block is connected to a ⊳ (_Play_) block.

![](sw/blksc3/png/Statements.png)

## Statement Connections

Statement blocks are sequenced using _next statement_ and _previous statement_ connectors.
These connectors are on the top and bottom edges of the block,
so that block sequences stack vertically,
and are read from top to bottom.

## Statement Input

A statement input accepts one or more statement blocks.
The figure below shows the no-argument λ (_Lambda_) block.
The ⦙ (_Statements_) input is a statement input,
the ← (_Return_) input is a value input.

![](sw/blksc3/png/Lambda.zero.stm.png)

## SuperCollider

SuperCollider (McCartney 1996) is a family of languages for real-time audio synthesis.
Block SuperCollider communicates directly with the SuperCollider synthesiser,
ordinarily to an in-process copy compiled to Wasm (Rossberg 2019).

## Symbolic Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the symbolic naming scheme.

![](sw/blksc3/png/SinOsc.internal.png)

The symbols used are:

- ∿: sine
- ν: frequency
- ϕ: phase
- ×: multiply
- +: add

The naming scheme also applies to menu fields.
The figure below shows the boolean block using the symbolic naming scheme,
with the ⊥ (_False_) item selected.

![](sw/blksc3/png/False.png)

## Text Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the text naming scheme.
In this scheme the input names are elided.

![](sw/blksc3/png/SinOsc.internal.text.png)

The naming scheme also applies to menu fields.
The figure below shows the ⊥ (_False_) block using the text naming scheme.

![](sw/blksc3/png/False.text.png)

## Toolbox

The area to the left of the workspace is called the _Toolbox_.
The toolbox contains instances of the blocks the system knows about, organised into categories.
Blocks are fetched by dragging them out of the toolbox and into the workspace.
The system comes with two toolboxes, a _complete toolbox_ and a _small toolbox_,
the 𝑇 button selects between them.
There is a [Toolbox](https://blksc3.rohandrape.net/?e=help/Guide/1.03%20Toolbox) section in the _Guide_.
The figure below shows the complete toolbox with the constants category selected.

![](sw/blksc3/png/Toolbox.png)

## Toolbox Entries

The items in the toolbox are ordinarily instances of single blocks,
however any block program may be placed in the toolbox,
including small commonly used sub-programs, called idioms.
The figure below shows a pre-composed sequence of ᵀ (_Transposed_) and Σ (_Sum_) from the List category.

![](sw/blksc3/png/Precomposed.png)

## Tooltip

A tooltip is a small help window that is show when the mouse hovers over a block.
The figure below shows the ∿ (_SinOsc_) block with the tooltip displayed.
The help text gives the text name of the block,
the text names of the parameters,
and a one sentence synopsis.

![](sw/blksc3/png/Tooltip.png)

## Translator

Block SuperCollider includes a Haskell program called _translator_ that can translate some Simple Programming Language text programs into block drawings.
The illustration programs were translated from an existing collection of text programs.
The translator is the inverse of the code generator,
it reads the program the code generator writes and writes the program the code generator reads.
However while all block drawings can generate text programs, not all text programs can be drawn.
The figure below shows the text of a brief program (Putnam 2004) that the translator reads,
and the corresponding block program the translator writes.

```
CombC(
	Formant(
		LfNoise0([1, 0.7]) * 8 + 9,
		LfNoise0([1, 0.7]) * 4000 + 4000,
		200
	) * 0.3,
	0.2,
	0.2,
	1
)
```

![](sw/blksc3/png/Translator.png)

## Tree

A tree is a graph in which any two vertices are connected by exactly one path.

## Type

A type is a category (or collection or grouping) of values,
whose elements share common characteristics such as representation or available operations.

## Type Annotations

Type annotations, also called connection checks, constrain how blocks can be connected together.
There is a [Type Annotations](http://blksc3.rohandrape.net/?e=help/Guide/2.05%20Type%20Annotations) section in the _Guide_.

## Unary Operator

A unary operator is an operator with one operand.
Unary operator blocks are written in prefix form,
the operator precedes the operand.
In the figure below the input of a list unary operator block,
with the ᴙ (_Reversed_) operator selected,
is connected to the output of a ⟦⟧ (_List_) block.

![](sw/blksc3/png/UnaryOperator.png)

## Undo

Actions can be _undone_ by typing _Ctl-u_,
and _redone_ by typing _Ctl-y_.

## Unicode

Lisp editors will often display the typed text `lambda` using the glyph `λ`.
This mechanism can be extended so that the text
`SinOsc(freq: 440, phase: 0, mul: 1, add: 0)`
is displayed as
`∿(ν: 440, ϕ: 0, ×: 1, +: 0)`.

## Uniform Resource Locator

The address of a World Wide Web page, abbreviated as Url.

## Value Input

A value input accepts an output connector of an expression block.
When the input is internal it is drawn as a missing puzzle piece,
when the input is external it is drawn as a puzzle piece connector on the right edge.
The figure below shows the no-argument λ (_Lambda_) block.
The ⦙ (_Statements_) input is a statement input,
the ← (_Return_) input is a value input.

![](sw/blksc3/png/Lambda.zero.stm.png)

## Variables

Variables are created using the _Create Variable_ entry in the _Variable_ category of the toolbox,
which also contains the variable reference and assignment blocks.

## Visual Programming Languages

There is a long history of visual programming languages,
encompassing systems of very different kinds.
Some notable instances are:
Sketchpad (Sutherland 1963),
Experimental Graphical Programming System (Sutherland 1966),
Grail (Ellis 1969),
Pygmalion (Smith 1975),
ThingLab (Borning 1977),
VisiCalc (Bricklin 1979),
Pict (Glinert 1984),
Prograph (Cox 1984),
Labview (Vose 1986),
Show and Tell (Kimura 1986),
The Alternate Reality Kit (Smith 1986),
Patcher (Puckette 1988),
Kyma (Scaletti 1988),
Patchwork (Laurson 1989),
Max (Puckette 1991),
Self (Ungar 1991),
AgentSheets (Repenning 1993),
Alice (Pausch 1995),
LogoBlocks (Begel 1996),
PureData (Puckette 1996),
OpenMusic (Assayag 1996)
and
SchemeBricks (Griffiths 2013).

## Web Browser

A web browser (Berners-Lee 1992), or browser, is a program for accessing the World Wide Web.

## Workspace

The area containing the block drawing is called the _Workspace_.
There is a [Workspace](https://blksc3.rohandrape.net/?e=help/Guide/1.02%20Workspace,%20Synthesiser) section in the _Guide_.

## Workspace Comments

_Workspace comments_ are texts that are attached to the workspace using the _Add comment_ item in the context menu.
The text is displayed in a box that can be moved and resized, and has a header that allows the comment to be _collapsed_.
The comment text is not printed.
There is a [Workspace Comments](https://blksc3.rohandrape.net/?e=help/Guide/2.08%20Workspace%20Comments) section in the _Guide_.

## World Wide Web

The World Wide Web (Www) is an information system.
It allows documents to be accessed over the internet using the Hypertext Transfer Protocol (Http).

## Zoom

The workspace has controls to zoom in (⊕) and out (⊖) of the drawing, and to centre it at its initial scale (⊙).
A mouse scroll wheel will also control workspace scaling.
The block drawing is implemented using vector drawing primitives and scales without artefacts.
