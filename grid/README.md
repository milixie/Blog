### Grid 布局学习

> - 先了解下网格
> - CSS布局发展进程
> - Grid布局的优点
> - Grid布局相关术语介绍
> - 容器属性


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


#### Grid布局的优点

##### 优势
- 固定或弹性的轨道尺寸
- 定位项目
- 创建额外的轨道
- 对齐控制
- 控制重叠内容

##### 兼容性

![兼容性](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ1MTAzMjY3.png)

pc端的浏览器的兼容性还是不错的


#### Grid布局中的相关术语

1. `Grid Container` : 网格容器，一个元素应用了 `display: grid;` 后就是一个网格容器了，它是所有网格项的父元素

```
// html
<div class="grid">
	<div class="grid-item1">grid-item1</div>
	<div class="grid-item2">grid-item2</div>
	<div class="grid-item3">grid-item3</div>
	<div class="grid-item4">grid-item4</div>
	<div class="grid-item5">grid-item5</div>
	<div class="grid-item6">grid-item6</div>
</div>

//css
.grid {
	display: grid;
}
```

2. `Grid item` : 网格项，上面的 `grid-item` 就是网格子项

3. `Grid Line` : 网格线，组成网格项的分界线，虚拟的

![网格线](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ1NTE3NzA0.png)

4. `Grid track` : 轨道，网格轨道，两个相邻的网格线之间为网格轨道

如下图：共有7个网格轨道

![网格轨道](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ1NTUyNjcw.png)

5. `Grid Cell` : 网格单元，两个相邻的列网格线和两个相邻的行网格线组成的网格单元，网格项是HTML里的dom元素，而网格单元是定义网格容器的时候分割出来的网格单元

![网格单元](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ1NjA3MDk3.png)


6. `Grid area`: 网格区域: 四个网格线包围的总区域，与网格单元不同的是，网格单元必须是相邻的网格线

![网格区域](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ1NjY2NTk5.png)

7. 单位：`fr` 单位：剩余空间分配数，用于在一系列长度值中分配剩余空间，按数字比例分配

#### 容器中的属性

1. `display`

它的值为：

- `display: grid;`

- `display: inline-grid`

- `display: subgrid`





















