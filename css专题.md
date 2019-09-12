### css 专题

1. css 选择器的优先级
   !important
   内联样式
   id 选择器
   类选择器
   元素选择器

2. 盒模型
   box-sizing: border-box | content-box
   width=content width?+padding+border
3. 布局
   1. 左侧宽度固定，右侧自适应
      > 左 float+右 margin
      > 左 float +右 overflow
      > 左定宽+右 flex-grow
      > 定位解决
   2. 三栏布局
      > flex
      > 定位解决
4. BFC
   触发 bfc 的条件

   1. 根元素
   2. position: fixed/absolute
   3. display: inline-block/table
   4. float
   5. overflow: hidden/scroll/auto/inherit

5. 如何实现居中
   水平居中

   > 块元素固定宽度 margin:auto
   > 内联元素 text-align:center
   > flex justify-content:center

   垂直居中

   > 行内元素 line-height 等于父元素高度
   > flex align-items:center
   > 父元素相对定位，子元素 50%，transform 位移
