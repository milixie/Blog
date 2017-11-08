## Colors 在终端输出彩色字体

![img](https://raw.githubusercontent.com/paulot/Colors/master/media/ANSIColors.png)

#### 如何使用

首先先安装 `colors`
```
npm install colors
```

在 `nodejs` 中，直接 `require` 即可

```
const Color = require('colors');
console.log('test'.green.bgRed);
console.log(Color.underline('这个文本是有下划线的'));
```

颜色值：

>- Black/black
>- Red/red
>- Green/green
>- Yellow/yellow
>- Blue/blue
>- Magenta/magenta
>- Cyan/cyan
>- White/white

背景颜色值：

>- BgBlack/bgBlack
>- BgRed/bgRed
>- BgGreen/bgGreen
>- BgYellow/bgYellow
>- BgBlue/bgBlue
>- BgMagenta/bgMagenta
>- BgCyan/bgCyan
>- BgWhite/bgWhite

文本修饰符：

>- blink
>- bold
>- dim
>- italic
>- underline
>- inverse
>- hidden
>- strikethrough

[参考链接](http://swift.ctolib.com/colors.html)