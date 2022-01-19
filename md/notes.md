The _math_ operator blocks should only hold _UGen_ operators.

_splay2_ should be written as a block constructor, not a method.

_clearBuf_ is an interesting case, it is a method because it constructs an _Mrg_ node.

There are array operation blocks with menus, _ArrayProc1_ and _ArrayProc2_.

There is an _ArrayCollect_ block, however it should be deleted in favour of _ArrayProc2.collect_.

_fromAssocArray_ and _->_ belong at _Event_, not _Math_.

_kr_ should not exist.

Guide:

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

- Operators.
  Operator blocks have a menu to select the required operator.
  Operator blocks are either unary or binary, accepting one or two input values respectively.
  Each operator block implements a family of operators, collected by type.
  Unary signal operators such as ⌈ (_ceiling_) and √ (_sqrt_), and binary signal operators such as + and ×, are at _Math_.
  Unary array operators such as Σ (_sum_) and ∏ (_product_), and binary array operators such as ᴙ (_reverse_) and ++ (_append_) are at _Array_.
  The toolbox can contain more than one instance of the same operator block, with different operators preselected.
  Thus both ⇛ (_collect_) and ++ (_append_), which are elements of the same block, are in the _Array_ toolbox.

- Array Inputs.
  When a signal block receives an array as an input there are two distinct behaviors.
  In one case the block becomes an array block.
  _SinOsc_ is an example of this.
  _SinOsc([440, 441], 0)_ has the same meaning as _[SinOsc(440, 0), SinOsc(441, 0)]_.
  This behaviour is called _array expansion_, and is the ordinary rule for SuperCollider unit generators.
  In a sense _SinOsc_ never _sees_ array inputs, the expansion happens transparently to the block.
  In the other case the block requires an array as an input and processes it directly.
  _Select_ is an example of this.
  _Select(which, array)_ uses _which_ to index into _array_, the array allows _Select_ to switch between any number of signals.
  If function arity is fixed, then the non array form would require separate functions for each possible array length.
  _Select(i, [p, q])_ would be the same as _Select2(i, p, q)_ and so forth.
  This behaviour is called _array processing_, and is relatively uncommon for SuperCollider unit generators.
  In SuperCollider this rule is specific to particular inputs, _Select_ is still subject to array expansion at _which_.
  Another rule would process functions as a whole in one manner or the other, in which case _Select_ would not allow an array at _which_.
