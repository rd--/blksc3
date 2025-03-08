# Block SuperCollider: Glossary

## Arity

The arity of an operator (or function or procedure) is the number of operands (or arguments or parameters) it takes.
The figure below shows three blocks with different arities.
The operator √ (`sqrt`) has arity one,
the operator + (`plus`) has arity two,
the operator ᨏ (`OverlapTexture`) has arity four.

![](sw/blksc3/png/Arity.svg)

## Assignment

The assignment block ≔ sets the value of a variable.
The figure below shows the variable _i_ being incremented by one,
it is the block drawing of the expression _i := i + 1_.

![](sw/blksc3/png/Assignment.svg)

## Atom

An atom is an indivisible value.
A number or a boolean is an atom,
a list or a dictionary is not.
A string may or may not be an atom,
in the Simple Programming Language it is.

## Begin

The _Begin_ button starts an in-process copy of the SuperColldider synthesiser.
See also _Status Area_.

## Binary Operator

A binary operator is an operator with two operands,
or a procedure of two arguments.
In some contexts it particularly refers to a procedure that is written using infix notation.
The figure below is the block diagram of _3 + 4_.

![](sw/blksc3/png/BinaryOperator.svg)

## Black & White

There is a black and white, or grey, or outline, drawing mode.
These drawings may be more suitable for printing,
for including in documentation,
or for use with non-colour displays.
This mode can be selected by pressing the ⬜ button beneath the workspace.
The figure below is the drawing from §1.01 of the guide.

![](sw/blksc3/png/OutlineDrawingMode.svg)

## Block Comment

Block comments are texts attached to a block using the _Add comment_ context menu item.
The text is displayed in a box that can be moved and resized.
Blocks that have comments attached have a question mark (?) button to show or hide the text.
The comment text is printed, as a comment, when the block is evaluated.

## Block Editor Library

The block editor is implemented by writing block definitions,
block message definitions,
and translator definitions for the Blockly library [@Fraser2015a].

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
In the figure below the output of a _number block_,
holding the value _9_,
is connected to the input of a _unary operator_ block,
with the √ (`sqrt`) operator selected,
it is the block drawing of the expression _sqrt(9)_,
or equally _9.sqrt_.

![](sw/blksc3/png/BlockOutput.svg)

## Block Type

Each block in a program is an instance of a block type.
A blocks type defines the structure and behaviour of the block.
Each block type has a unique name.
Block type names are opaque values,
the text that is displayed on a block is a separate value called the block message.

## Case Rule

Identifiers are written in mixed case as `SinOsc`, `LfSaw` and `Fft`.
Abbreviated terms follow the same rule,
as indicated above where `Lf`,
which abbreviates _low frequency_,
and `Fft`,
which abbreviates _fast Fourier transform_,
are capitalised rather than upper cased.
The case changes occur where a hypen (in a Lisp system) or underscore (in C system) might be placed,
if such a naming convention were used,
as in `sin-osc`, `lf-saw` and `fft`.

## Categories

The blocks in the toolbox are organised into categories, which may be further organised into sub-categories.
Blocks in the same category are assigned the same colour.

## Cleanup

The _Cleanup_ button tidies the current drawing.
Among other tasks it will move any obscured blocks into an open area.
The _Cleanup_ button can be selected using the _"o"_ access key.

## Clear

The _Clear_ button deletes the current drawing.
The _Clear_ button can be selected using the _"k"_ access key.

## Code Generator

To evaluate a block program it is first printed as a text program.
This process is called code generation, and is performed by a code generator.

## Collapsed Blocks

A block can be _collapsed_ using the _Collapse Block_ item in the context menu.
A collapsed block can be _expanded_ using the _Expand Block_ item in the context menu.
The figure below shows the collapsed form of a two block program,
the blocks are a _unary operator_ block,
with the √ (`sqrt`) operator selected,
and a _number block_,
holding the value _9_.
The text of the collapsed block shows both these values.

![](sw/blksc3/png/CollapsedBlocks.svg)

## Colours

Blocks are coloured according to category.
Block colours are specified by name, and looked up in a dictionary.

## Colour Schemes

The ⬜ button selects the next colour scheme.

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

## Connection Checks

Connection checks, also called type annotations, constrain how blocks can be connected together.
See also _Type Annotations_.

## Console

The console is a text area that can be printed to.

## Constant

A constant is a value that does not change over time.
The figure below shows the numeric constants defined in the _Constants_ category of the toolbox.

![](sw/blksc3/png/Constant.svg)

## Context Menu

A context menu contains a list of actions related to an element in the workspace, or to the workspace itself.
A context menu is shown on right mouse clicks and long pen presses.

## Control Field

𝒞 (_ControlField_) is a _named control_ for which a unique name is assigned by the system.
There is a [Control Fields](http://blksc3.rohandrape.net/?e=help/Guide/1.15%20Control%20Fields) section in the _Guide_.
The figure below shows a ∿ (_SinOsc_) block with 𝒞 inputs for both ν (_frequency_) and × (_amplitude_).

![](sw/blksc3/png/ControlField.svg)

## Copy

The _Copy_ button copies the internal notation of the current program to the clipboard.
The _Copy_ button can be selected using the _"c"_ access key.

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
The display menu can be selected using the _"y"_ access key.

## Duplicate

A block can be _duplicated_ using the _Duplicate_ item in the context menu.

## Eval

The _Eval_ button evaluates the program in the workspace and sends it to the synthesiser.
It does not send the answer to the synthesiser.
The _Eval_ button can be selected using the _"/"_ access key.

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
The figure below shows the ∿ (_SinOsc_) block with external inputs,
it is the block drawing of the expression _SinOsc(440, 0) * 0.1 + 0_.

![](sw/blksc3/png/ExternalInputs.svg)

## External Synthesiser

Block SuperCollider ordinarily runs a copy of the SuperCollider synthesiser (`scsynth`) within the browser.
However it can also communicate with an external synthesiser by sending messages over a socket.

## Fit

The _Fit_ button scales the current drawing so that it fits in the workspace.
The _Fit_ button can be selected using the _"="_ access key.

## Forest

A forest is a graph in which any two vertices are connected by at most one path,
or equally a set of two or more unconnected trees.

## Function

In mathematics, a function is a relation that uniquely associates members of one set with members of another set.
In some contexts function may be used as a synonym for operator or procedure or subroutine.
In some contexts function may be used to refer to a procedure that has no side effects.
In some contexts function may be used to refer to a procedure that is written using function notation,
that is _f(x, y)_,
and operator to refer to a procedure that is written using infix notation,
that is _x + y_.

## Function Notation

Function notation is a form of prefix notation where the operands are enclosed in parentheses and separated by commas.
The prefix expression `f p q` is written `f(p, q)` in function notation, `f` is the operator and `p` and `q` the operands.

## Help

There is an online [Help](https://blksc3.rohandrape.net/?e=help/Reference/--Help--) system.
The _Help_ menu can be selected using the _"h"_ access key.
The help programs illustrate individual blocks.
Some blocks have multiple illustrations and the help programs have numerical suffixes to distinguish them.

## Guide

There is an online [Guide](https://blksc3.rohandrape.net/?e=help/Guide/--Guide--).
The _Guide_ menu can be selected using the _"g"_ access key.
The Guide consists of a sequence of small example programs each with extensive notes.

## Idioms

An idiom is, as in Apl, a composite sequence of blocks that is often used.
The Toolbox contains a number of idioms.
The figure below shows one,
taken from the _List_ category,
that pre-composes the Σ (`sum`) and ᵀ (`transposed`) blocks.

![](sw/blksc3/png/Idiom.svg)

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
The figure below shows the ∿ (_SinOsc_) block with internal inputs,
it is the block drawing of the expression _SinOsc(440, 0) * 0.1 + 0_.

![](sw/blksc3/png/InternalInputs.svg)

## JavaScript

JavaScript [@WirfsBrock2020a] is a language standardised in the document ECMA-262 and maintained by Technical Committee 39.

## JavaScript Object Notation (Json)

JavaScript Object Notation [@Crockford2006a] is a simple text format for encoding atoms, lists and dictionaries.
Atoms are either strings, numbers, booleans or nil.
Json is a subset of JavaScript,
a Json value is a JavaScript program representing the value it encodes.

## Lambda

λ (_Lambda_) blocks answer procedure values.
They define the expected arguments and the steps of execution or evaluation for a procedure.
The name is from the lambda calculus [@Church1941a] and Lisp [@McCarthy1960a].

## Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

## Let Binding

A let binding introduces a local variable and assigns it an initial value.
Let bindings must be grouped together at the start of a statement stack.
In the figure below a local variable _x_ is defined to have the value of the mathematical constant _e_,
it is the block drawing of the expression _let x = 2.71828_.

![](sw/blksc3/png/LetBinding.svg)

## Lexical Scope

Lexical scope is the part of a program text, or drawing, in which a binding of a name to a value applies.
In the figure below `x` is bound to `1` and `y` is bound to `pi`.
The `x` binding in the λ block is local, it does not interact with the outer `x` binding.

![](sw/blksc3/png/LexicalScope.svg)

## Load

The _Load_ button opens a file selection dialog to select a _.json_ file,
and loads the selected file into the workspace.
The _Load_ button can be selected using the _"l"_ access key.

## Menu Field

Block fields with a ▼ indicator are menus, from which items may be selected.
The figure below shows a program with four menus,
the _unary operator_ block menu is selecting the √ (`sqrt`) operation,
the _binary operator_ block menu is selecting the ÷ (`/`) operation,
and the two _numeric constant_ block menus select π (`pi`) and `e` respectively.
This program prints as _sqrt(pi / e)_.

![](sw/blksc3/png/MenuField.svg)

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

![](sw/blksc3/png/NamingScheme.svg)

## Nil

∅ (_Nil_) is a constant representing an undefined value.
The ∅ block is fetched from the _Meta_ category.
The figure below shows the block drawing of the expression _x := { nil }_.

![](sw/blksc3/png/Nil.svg)

## Notes

Programs may include detailed notes,
written in a simple markup language [@Gruber2004a].
There is a notes area to the right of the workspace.

## Number

A number block is a block with a single editable text field in which one can write a number.
The number may be an integer or a real number.
Trying to type in a text that is not a number leaves the number unchanged.
The number block is fetched from the _Constants_ category of the toolbox.
The figure below shows the number twenty three divided by an approximation of π,
it is the block drawing of the expression _23 / 3.141_.

![](sw/blksc3/png/Number.svg)

## Numeric Constant

The numeric constant block is a block with a menu containing a number of predefined mathematical constants,
such as π (_Pi_), 2×π (_TwoPi_), 𝑒 (_E_) and ∞ (_Infinity_).
It is fetched from the _Constants_ category of the toolbox.
The figure below shows the numeric constants from the _Constants_ category of the toolbox.

![](sw/blksc3/png/NumericConstant.svg)

## Operand

An operand, also called an argument or a parameter, is a value operated on by an operator.
In the infix expression `p + q`, `p` and `q` are operands and `+` is the operator.

![](sw/blksc3/png/Operand.svg)

## Operator

An operator is the part of an expression that specifies the operation to be performed.
In the expression `p + q`, `+` is the operator and `p` and `q` are operands.
The number of operands required by an operator is the arity of the operator.
In some contexts operator refers to specifically to verbs that are written infix.

![](sw/blksc3/png/Operator.svg)

## Operator Menu

Blocks may implement many different behaviours selected from an operator menu.
The figure below shows two binary math operator blocks,
with the operators × (`*`) and ÷ (`/`) selected,
the two unary operator blocks,
with the operators ∿ (`sin`) and √ (`sqrt`) selected.
This program prints as _sin(pi / 2) * sqrt(9)_.

![](sw/blksc3/png/OperatorMenu.svg)

## Overlap Texture

ᨏ (_OverlapTexture_) is a graph combinator, a form of higher order function.
ᨏ requires a λ (_Lambda_) block at 𝑓 and makes an evolving texture of # (_Overlap_) voices.
There is an [Overlap Texture](https://blksc3.rohandrape.net/?e=help/Guide/1.12%20Overlap%20Texture) section in the _Guide_.
The figure below shows the toolbox entry for ᨏ, which includes a pre-composed λ block at 𝑓, and a _tr_ variable reference at ⍵.

![](sw/blksc3/png/OverlapTexture.svg)

## Parser

A parser is a program that reads an input text and constructs a parse tree in relation to a formal grammar.
The parser for Sᴘʟ is written using the Ohm library [@Warth2016a].

## Patcher

Patcher [@Puckette1988a], Max [@Puckette1991a] and PureData [@Puckette1996a] are a closely related family of visual programming systems.
Programs elements are drawn as boxes with inlets on the top edge and outlets on the lower edge.
Boxes are connected by lines to form a graph.
The evaluation model includes both a data flow signal processing system for audio signals and a reactive system for discrete events.

## Patchwork

Patchwork [@Laurson1989a] is a domain specific visual programming language for music.
It represents Lisp functions as boxes with inlets at the left and right edges for input parameters,
and a single outlet on the lower edge.
Boxes are connected by lines to form a tree.
OpenMusic [@Assayag1996a] is a descendent of Patchwork.

## Play

The _Play_ button evaluates the program in the workspace and sends it to the synthesiser.
There is also a _Play_ entry in the workspace context menu.
The _Play_ button can be selected using the _","_ access key.

## Play Block

The ⊳ (_Play_) block is a statement block that indicates the end of the program.
The input to the ⊳ block is the sound that is heard when the program is listened to.
There should only be one ⊳ block in a program, and it should be the last block.
The figure below shows the output of the block drawing of the expression _PinkNoise() * 0.1 + 0_,
connected to the input of the ⊳ block.

![](sw/blksc3/png/PlayBlock.svg)

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
The 易 button can be selected using the _"r"_ access key.

## Programs

There is a list of illustrative SuperCollider [Programs](https://blksc3.rohandrape.net/?e=help/Program/--Programs--) that have been translated into block drawings.
The programs are arranged by author initials and include references to the original sources.
The _Programs_ menu can be selected using the _"p"_ access key.

## Replace

The _Replace_ button evaluates the program in the workspace and sends the answer to the synthesiser,
applying a cross-fade with the previous program.
There is also a _Replace_ entry in the workspace context menu.
The _Replace_ button can be selected using the _"-"_ access key.

## Reset

The _Reset_ button resets the synthesiser.
There is also a _Reset_ entry in the workspace context menu.
The _Reset_ button can be selected using the _"."_ access key.

## Scalable Vector Graphics

Scalable Vector Graphics [@Ferraiolo2001a] is a vector image format for defining two-dimensional graphics.
The workspace can be saved as a Scalable Vector Graphics file.

<!--
The figure below is an exported image of the _Why SuperCollider?_ graph.

![](sw/blksc3/png/BabblingBrook.svg)
-->

## S-Expression

S-expressions [@McCarthy1960a] are a class of symbolic expressions.
They are formed by using the three special characters `(.)`,
and an infinite set of distinguishable atomic symbols.
The atomic symbols are s-expressions, and if `p` and `q` are s-expressions, so is `(p . q)`.
There are a two additional notations to simplify writing common idioms,
`(p q r)` is an abbreviation of `(p . (q . (r . nil)))`,
and `'p` is an abbreviation of `(quote p)`.
The function notation `f(x, y)` would have the s-expression form `(f x y)`.

## Shadow Block

A shadow block is an editable but non-movable block connected to another block.
Blocks can be placed on top of shadow blocks to overwrite them.
In the figure below both input fields of the ⍰𝒑 (_PinkNoise_) block,
and the × (_Multiply_) and + (_Add_) fields of the ⋏ (_Resonz_) block are shadow blocks.
The _ν_ (_Frequency_) and ¹⁄𝑄 (_ReciprocalOfQ_) inputs are replaced by number blocks.

![](sw/blksc3/png/ShadowBlock.svg)

## Simple Programming Language

Simple Programming Language (Sᴘʟ),
or Simple Language (Sʟ),
is the language that Block SuperCollider programs are drawings of,
and that the drawings are translated into when evaluated.

## Small Programs

There is a list of [Small Programs](https://blksc3.rohandrape.net/?e=help/Program/--Small%20Programs--).
These are programs that can be drawn within the workspace on a _1366×768_ display.
The _Small Programs_ menu can be selected using the _"a"_ access key.

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

![](sw/blksc3/png/StatementBlocks.svg)

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

![](sw/blksc3/png/StatementInput.svg)

## Status Area

The _status area_ is located to the right of the _Begin_ button.
When the system is connected to a SuperCollider synthesiser process,
either an in-process copy or an external instance,
the status area shows the number of sounding _unit generators_.

## SuperCollider

SuperCollider [@McCartney1996a] is a family of languages for real-time audio synthesis.
Block SuperCollider communicates directly with the SuperCollider synthesiser,
ordinarily to an in-process copy compiled to Wasm [@Rossberg2019a].

## Symbolic Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the symbolic naming scheme.

![](sw/blksc3/png/SymbolicNamingSchema.svg)

The symbols used are:

- ∿: sine
- ν: frequency
- ϕ: phase
- ×: multiply
- +: add

The naming scheme also applies to menu fields.
The figure below shows the boolean block using the symbolic naming scheme,
with the ⊥ (_False_) item selected.

![](sw/blksc3/png/SymbolicNamingSchemaFalse.svg)

## Text Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the text naming scheme.
In this scheme the input names are elided.

![](sw/blksc3/png/TextNamingSchema.svg)

The naming scheme also applies to menu fields.
The figure below shows the ⊥ (_False_) block using the text naming scheme.

![](sw/blksc3/png/TextNamingSchemaFalse.svg)

## Toolbox

The area to the left of the workspace is called the _Toolbox_.
The toolbox contains instances of the blocks the system knows about, organised into categories.
Blocks are fetched by dragging them out of the toolbox and into the workspace.
The system comes with two toolboxes, a _complete toolbox_ and a _small toolbox_,
the 𝑇 button selects between them.
There is a [Toolbox](https://blksc3.rohandrape.net/?e=help/Guide/1.03%20Toolbox) section in the _Guide_.
The figure below shows the complete toolbox with the constants category selected.

![](sw/blksc3/png/Toolbox.svg)

## Toolbox Entries

The items in the toolbox are ordinarily instances of single blocks,
however any block program may be placed in the toolbox,
including small commonly used sub-programs, called idioms.
The figure below shows a pre-composed sequence of ᵀ (_Transposed_) and Σ (_Sum_) from the List category.

![](sw/blksc3/png/ToolboxEntries.svg)

## Tooltip

A tooltip is a small help window that is show when the mouse hovers over a block.
The text below shows the ∿ (_SinOsc_) block with the tooltip displayed.
The help text gives the text name of the block,
the text names of the parameters,
and a one sentence synopsis.

> SinOsc(freq, phase): Interpolating sine wavetable oscillator.

## Translator

Block SuperCollider includes a Haskell program called _translator_ that can translate some Simple Programming Language text programs into block drawings.
The illustration programs were translated from an existing collection of text programs.
The translator is the inverse of the code generator,
it reads the program the code generator writes and writes the program the code generator reads.
However while all block drawings can generate text programs, not all text programs can be drawn.
The figure below shows the text of a brief program [@Putnam2004a] that the translator reads,
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

![](sw/blksc3/png/Translator.svg)

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
It is the block drawing of the expression _reversed([1 2 3])_.

![](sw/blksc3/png/UnaryOperator.svg)

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

![](sw/blksc3/png/ValueInput.svg)

## Variables

Variables are created using the _Create Variable_ entry in the _Variable_ category of the toolbox,
which also contains the variable reference and assignment blocks.
The figure below indicates the two variable related blocks,
_variable assignment_ and _variable reference_.

![](sw/blksc3/png/Variables.svg)

## Visual Programming Languages

There is a long history of visual programming languages,
encompassing systems of very different kinds.
Some notable instances are:
Sketchpad [@Sutherland1963a],
Experimental Graphical Programming System [@Sutherland1966a],
Grail [@Ellis1969a],
Pygmalion [@Smith1975a],
ThingLab [@Borning1977a],
VisiCalc [@Bricklin1979a],
Pict [@Glinert1984a],
Prograph [@Cox1984a],
Labview [@Vose1986a],
Show and Tell [@Kimura1986a],
The Alternate Reality Kit [@Smith1986b],
Patcher [@Puckette1988a],
Kyma [@Scaletti1987a],
Patchwork [@Laurson1989a],
Max [@Puckette1991b],
Self [@Ungar1991a],
AgentSheets [@Repenning1993a],
Alice [@Pausch1995a],
LogoBlocks [@Begel1996a],
PureData [@Puckette1996a],
OpenMusic [@Assayag1996a],
Etoys[@Steinmetz2001a],
Scratch [@Maloney2004a],
and
SchemeBricks [@Griffiths2008a].

## Web Assembly

Ordinarily the system runs an in-process copy of the SuperCollider synthesiser,
compiled to Web Assembly (Wasm) [@Rossberg2019a].
Web Assembly is a binary instruction format for a stack-based virtual machine,
designed as a portable compilation target.
Existing synthesis systems with extensive histories that are now additionaly compiled to Wasm include Csound [@Yi2018a].

## Web Browser

A web browser [@BernersLee1992b], or browser, is a program for accessing the World Wide Web.

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

## References
