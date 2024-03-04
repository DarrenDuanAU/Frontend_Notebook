# CSS 
## flow & position

position分为static，relative, absolute, fixed, sticky.

- static: 就是正常的文档流，位于html内下面的文档会覆盖上面的文档。而其他的position全部脱离了正常的文档流。
- relative: 其实也是浮在原来位置上，原来的位置被空白占据，留下的gap不会被相邻的元素占据。（可以设置top, left, right, bottom，来根据原本的位置调整目前位置）。
- absolute: 位置相对于相邻最近的而且脱离正常文档流的祖先元素（is positioned relative to the nearest positioned ancestor ）
  - 脱离正常文档流的就包括（relative, absolute, fixed, sticky），如果没有这些元素，absolute的element就会根据body来定位。
- fixed: 根据body来定位的absolute元素。
- sticky: 脱离了正常的文档流，位置在到达顶端前保持原来位置（和relative一样），到达顶端后粘在顶部（和relative一样，位置虽然留空，gap也不会被相邻元素抢占）。

## box size

box的实际宽度 = width + 2 * padding + 2 * border + 2 * margin
下面这个盒子的实际宽度 = 320px + 2 * 5px + 2 * 10px + 2 * 0px = 350px
（margin可能看不到，但是确实占了空间）
```HTML
<style>
div {
  width: 320px;
  padding: 5px;
  border: 10px solid gray;
  margin: 0px;
}
</style>
```

