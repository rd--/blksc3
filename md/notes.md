The _math_ operator blocks should only hold _UGen_ operators.

_splay2_ should be written as a block constructor, not a method.

_clearBuf_ is an interesting case, it is a method because it constructs an _Mrg_ node.

There are array operation blocks with menus, _ArrayProc1_ and _ArrayProc2_.

_fromAssocArray_ and _->_ belong at _Event_, not _Math_.

_kr_ should not exist.
