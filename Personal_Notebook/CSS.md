#CSS 

- position: absolute; 寻找最近的 ancestor (this ancestor should have position: relative)。其实和position: fix; 类似，只不过fix是关于视窗的位置固定下来，而absolute是关于最近的relative祖先的位置固定。

- position: relative: element用这个的话，可以同时使用top, left, right, bottom。这些property可以让element相对于之前本来应该的位置进行调整。第二，relative可以配合absolute。