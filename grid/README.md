### Grid 布局学习

> - 先了解下网格
> - CSS布局发展进程
> - Grid布局的优点
> - Grid布局相关术语介绍
> - 容器属性
> - 作用在容器子项上的属性
> - grid 布局中会用到的一些css函数


> - 注意事项、备注


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

- `display: grid;`：设置为容器元素

![网格](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ2NTQ0NTMz.png)

- `display: inline-grid` 设置为容器元素，且为行内网格

![行内网格](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ2NTQ0NDcy.png)

- `display: subgrid` ：如果网格容器本身是网格项，此属性用来继承父网格容器的列和行大小

![subgrid的兼容性](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ2NTIxODYy.png)

2. `grid-template`: 定义行与列的轨道大小，它是一个复合写法，具体属性包含了：

- `grid-template-rows`: 水平方向划分行，值为每一行的高度，空格分隔
- `grid-template-columns`: 垂直方向划分列，值为每一列的宽度，空格分隔
- `grid-template-areas`: 网格划分区域，值为命名

语法：
```css
.container {
	grid-template-rows: <track-size> | <line-name> <track-size>;
	grid-template-columns: <track-size> | <line-name> <track-size>;
	grid-template-areas: 
	    <grid-area-name> | . | none
	    <grid-area-name> | . | none
}

// 复合写法：
.container {
	grid-template: <grid-template-rows> / <grid-template-columns>
}

```

- `<track-size>`: 可以使用css的长度单位、百分比、auto或者一个新的单位`fr`
	其中 `auto` 是用来表示剩下的长度
	单位 `fr` ：除去其他的设定的固定的宽度以外，剩下的按比例分，类似于flex中的`flex: n;`看示例

- `<line-name>`: 可以给每条网格线设置名称 [任何名称]

- `<grid-area-name>` : 区域名称 "任何名称"	

```
.container {
	grid-template-rows: [第一条行线] 25% 100px auto;
	grid-template-columns: [第一条列线] 100px 20px auto 40px;
}
```
表现为如下：

![grid-template](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ2ODM3OTYw.png)

`grid-template-areas`:

![grid-template-areas](https://piccdn.luojilab.com/fe-oss/default/MTU2ODQ2Nzc0MzM1.png)


3. `grid-gap` ：行和列之间的间隔宽度 ， 它是两个属性的复合写法

- `grid-gap-rows`: 行与行之间的间隔

- `grid-gap-columns`: 列与列之间的间隔

```css
.container {
	grid-gap-rows: 20px;
	grid-gap-columns: 10px; 
}

// 复合写法：
.container {
	grid-gap: 20px 10px;
}
```

4. `place-items` ： 每个单元格内部的水平垂直对齐方式的复合写法

- `justify-items`: 水平方向对齐方式
- `align-items`: 垂直方向对齐方式

两个属性的值都有以下几种

- `stretch` : 默认值，水平|垂直 内容拉伸填充

- `start`: 水平|垂直 （宽度|高度）收缩为内容大小，（左侧|上侧）对齐

- `end`：水平|垂直 （宽度|高度）收缩为内容大小，（右侧|下侧）对齐

- `center`：水平|垂直 （宽度|高度）收缩为内容大小，居中对齐

```css
.container {
	place-items: <align-items> / <justify-items>;
}
```

看示例

5. `place-content`: 以下两个属性的复合写法，是表示网络单元的水平布局方式

- `justify-content`: 仅在网格总宽度小于grid容器宽度时候有效果

值分为以下几种：
>- stretch：拉伸，宽度填满grid容器，需要定的网格尺寸为auto的时候有效，如果定死宽度则无法拉伸
>- start：左对齐
>- end：右对齐
>- center：居中对齐
>- space-between：两端对齐
>- space-around： 每个grid子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半
>- space-evenly：每个grid子项两侧空白间距完全相等

- `align-content`: 网络元素的垂直方向布局方式, 如果grid子项只有一行则不生效，它的值同上

看示例吧

6. `grid-auto`: 以下三个属性的复合写法

- `grid-auto-rows`:网格项目多余设置的单元格，会创建隐式轨道

- `grid-auto-columns`:网格项目多余设置的单元格，会创建隐式轨道

```css
.container {
	grid-auto-rows: 100px;
	grid-auto-columns: 70px;
}
```

看示例

- `grid-auto-flow`: 控制没有明确指定位置的grid子项的放置方式

值分为以下几种：
>- row: 默认值，没有指定位置的网格按顺序水平方向排列
>- column: 没有指定位置的网格垂直顺序排列
>- row dense：自动排列启动密集排序，水平方向
>- column dense：自动排列启动密集排序，垂直方向

看示例

7. `grid`: 以下几个属性的复合写法：
- `grid-template-rows`
- `grid-template-columns`
- `grid-template-areas`
- `grid-auto-rows`
- `grid-auto-columns`
- `grid-auto-flow`

具体设置值如下：
1.grid:none：所有子属性都是初始化的值
2.grid: <grid-template>
3.grid: <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?
4.grid: auto-flow & dense ? <grid-template-rows> ? / <grid-template-columns>

`auto-flow`： 表示的值为 `row` | `column`，但是统一使用 `auto-flow`来表示，具体需要看它放置的位置在哪里，如果放置在 `/` 的左侧，就表示 `grid-auto-flow: row`， 如果放在右侧，就表示 `grid-auto-flow: column`


```css
grid: 100px 60px / 1fr 2fr
相当于：
    grid-template-rows: 100px 60px;
    grid-template-columns: 1fr 2fr;
3.grid: 100px 60px / auto-flow 1fr 2fr
相当于：
grid-template-rows: 100px 60px;
grid-template-columns: 1fr 2fr;
grid-auto-flow: column
4.grid: auto-flow dense 100px 60px / 1fr 2fr;
相当于：
grid-template-rows: 100px 60px
grid-template-columns: 1fr 2fr;
grid-auto-flow: row

```

看示例

以上属性都是外层容器属性的值


#### 作用在容器子项上的属性

1. `grid-column`: 以下两个属性的复合写法

>- `grid-column-start`
>- `grid-column-end` 

```css
.item {
	grid-column-start: <name> | <number> | span <name> | span <number>
	grid-column: <start-line> <end-line>
}
```

值的含义：

`<name>`自定义网格线的名称
`<number>` 从第几条网格线开始
`span <name>` 当前网格会自动扩充，直到命中指定的网格线名称
`span <number>` 当前网格会自动跨越指定的网格数量
`auto` 全自动，包括定位和跨度

2. `grid-row`: 以下两个属性的复合写法
>- `grid-row-start`
>- `grid-row-end` 

```css
.item {
	grid-row-start: <name> | <number> | span <name> | span <number>
	grid-row: <start-line> <end-line>
}
```

3. `grid-area`: 当前网格所占区域，使用`grid-template-areas`自定义网络区域，使用`grid-area`让grid子项指定这些使用区域，就自动进行了区域分布
例如：
```css
grid-area：
<name> 区域名称，由容器属性grid-template-area创建
<row-start> / <column-start> / <row-end> / <column-end> 占据网格区域的纵横起始位置
```

看示例

4. `justify-self`: 单个网格元素的水平对齐方式

值分为以下几种：
>- stretch（默认）:拉伸，水平填充
>- start  水平尺寸收缩为内容大小，沿着网格线左侧对齐
>- end   水平尺寸收缩为内容大小， 沿着网格线右侧对齐
>- center 水平尺寸收缩为内容大小，当前区域内部水平居中对齐显示

5. `align-self`: 单个网格元素的垂直对齐方式
例如：
>- stretch（默认）:拉伸，垂直填充
>- start  垂直尺寸收缩为内容大小，沿着网格线上侧对齐
>- end   垂直尺寸收缩为内容大小， 沿着网格线下侧对齐
>- center 垂直尺寸收缩为内容大小，当前区域内部垂直居中对齐显示

以上两个属性可以使用 `place-self` 去写
`place-items：<align-self> / <justify-self> `

#### grid布局中的css函数	

1. `repeat()`:  跟踪列表的重复片段，允许大量重复显示模式的行或列以以更紧凑的方式编写

可用范围：`grid-template-columns` 和 `grid-template-rows`

语法：
`repeat(<repeat>, <value>)`

`<repeat>`: 取值有以下几种： 
	1. 整数，确定确切的重复次数
	2. `<auto-fill>`: 以网格项为准自动填充，需要结合minmax()函数来使用
	3. `<auto-fit>` : 以网格容器为准自动填充，需要结合minmax()函数来使用
`<value>`： 取值有以下几种：
	1. 固定长度
	2. 百分比
	3. fr单位
	4. max-content: 表示网格的轨道长度自适应内容最大的那个单元格
	5. min-content：表示网格的轨道长度自适应内容最小的那个单元格
	6. auto：不推荐使用

看示例	

可以多次使用

`grid-template-columns: 20px auto repeat(3, 1fr) 40px`	

2. `fit-content()`：参数是长度值或百分比
公式：min(maximum size, max(minimum size, argument))

它在内容的最小值和参数中取一个最大值，然后再在内容的最大值中取一个最小值

当内容少时，它取内容的长度，如果内容多，内容长度大于参数长度时，它取参数长度，可以理解为它可以控制最大值是多少

3. `minmax(min, max)` ：定义了长度范围区间

取值：
  1. 固定长度
	2. 百分比
	3. fr单位
	4. max-content: 表示网格的轨道长度自适应内容最大的那个单元格
	5. min-content：表示网格的轨道长度自适应内容最小的那个单元格
	6. auto：不推荐使用


#### 注意事项

>- 当元素设置了网格布局，column、float、clear、vertical-align属性无效
>- grid布局是二维布局，适合布局整体
















