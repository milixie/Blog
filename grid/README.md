### Grid 布局学习

> - 先了解下网格
> - CSS布局发展进程
> - Grid布局的优缺点



#### 网格

在了解和学习网格布局之前，我们先了解下什么是网格，网格是一组相交的水平和垂直线，它定义的网格的行和列

![网格图片](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ0MDc4NDc0.png)

#### CSS布局发展进程

- `table` 表格布局：`table` 比其他 `html`标记占更多的字节、布局比较死板不灵活、会阻挡浏览器渲染引擎的渲染顺序从而使得加载速度慢
- `float` 方式布局：使用 `float` 去布局，会使得元素脱离文档流，浮动高度塌陷，还需要额外的清除浮动解决这种高度塌陷、不易于垂直居中等问题
- `flexbox` 弹性布局：一维布局，最适合应用于程序的组件和比较小规模的布局，比较好用而且支持性较好
- `grid` 网格布局：二维布局，适用于大规模的布局


例如：下面这种类型的布局就很适合用grid布局：
![图片](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ1MDIxNTgw.png)


#### Grid布局的优缺点

##### 优势
