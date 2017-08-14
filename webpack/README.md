# webpack learn

### webpack 简介

`webpack`是一个模块打包工具，他将一堆文件中的每个文件都作为一个模块，找出他们的依赖关系，将他们打包成可部署的静态资源。

### 优点

- 代码拆分
- 可以使用 loader 转换器将各种类型的资源转换成 js 模块，所以，任何资源都可以成为 webpack 可以处理的模块
- 可以智能解析
- 插件系统丰富
- 速度快，webpack 使用异步 I/O 和多级缓存提高运行速度

### 安装

`npm install --save-dev webpack`

### 创建一个项目

```
mkdir webpack-demo && cd webpack-demo
npm init -y   //初始化项目
npm i --save-dev webpack
```

### `package.json`里面配置`	webpack`的命令

```
/*...*/
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",   //构建命令
    "watch": "webpack --watch",  //监听文件的变化
    "start": "webpack-dev-server --open"   //开启服务，实时重新加载
  },

```

### 管理资源

#### 加载 css

1.安装`style-loader` and `css-loader`

`npm i --save-dev style-loader css-loader`

2.在 webpack.config.js的 `module` 配置中添加 `style-loader` and `css-loader`

```
module: {
	rules: [{
		test: /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	}
}

```

3.在使用的时候，可以在 js 文件中直接使用 `import` 的方式将其引入

```
import './style.css';
```

#### 加载图片

1. 使用 `file-loader`，可以轻松将图片混合到 css 中：

`npm i --save-dev file-loader`

2. `webpack.config.js`中：

```
module: {
	rules: [{
		test: /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	}, {
		test: /\.(png|jpg|svg|gif)$/,
		use: [
			'file-loader'
		]
	}
}

```

3. 使用的时候，直接在 js 文件中可以引入

```
import Icon from './icon.png';

var my_icon = new Image();
my_icon.src = my_icon;

element.appendChild(my_icon);
```

#### 加载字体

1.使用 `file-loader` 即可

2. 在 `webpack.config.js` 文件中使用:

```
module: {
	rules: [{
		test: /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	}, {
		test: /\.(png|jpg|svg|gif)$/,
		use: [
			'file-loader'
		]
	}, {
		test: /\.(ttf|woff|woff2|otf|eot)$/,
		use: [
			'file-loader'
		]
	}
}

```

3.在 css 文件中使用

```
@font-face {
	font-family: 'my_font';
	src:  url('./my-font.woff2') format('woff2'),
	      url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

.hello {
	font-family: 'my_font';
}

```

#### 加载数据

1.使用 `csv-loader` and `xml-loader` 来处理文件 CSV/TSV/XML

2.在 `webpack.config.js` 中

```
module: {
	rules: [{
		test: /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	}, {
		test: /\.(png|jpg|svg|gif)$/,
		use: [
			'file-loader'
		]
	}, {
		test: /\.(ttf|woff|woff2|otf|eot)$/,
		use: [
			'file-loader'
		]
	}, {
		test: /\.(csv|tsv)$/,
		use: [
			'csv-loader'
		]
	}, {
		test: /\.xml$/,
		use: [
			'xml-loader'
		]
	}
}
```

3.在 js 文件中直接引入

```
import Data from './data.xml';

```

### 管理输出

1. 安装插件 `HtmlWebpackPlugin`

`npm i --save-dev html-webpack-plugin`

2. 在 `webpack.config.js` 中引入

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
/*...*/

	plugins: [
		new HtmlWebpackPlugin({
			title: 'output'
		})
	]

}

```

3. 清理 `/dist` 文件夹

(1).安装插件

```
	npm i clean-webpack-plugin --save-dev

```

(2).在 webpack.config.js 中引入

```
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```
