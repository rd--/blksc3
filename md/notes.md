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
