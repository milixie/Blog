### 纯前端项目构建（react + webpack）

1.初始化项目并安装react


```angular2html
mkdir web
cd web
npm init
npm install react react-dom --save
```

生成一个 `package.json` 的文件

2. 创建入口文件 `template.html`

```angular2html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React Demo</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

3. 创建入口js文件： `src/main.js`

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
	<h1>this is react demo</h1>
 , document.getElementById('app')
)

```

4. 安装编译依赖

``` 
npm install --save-dev babel-cli babel-preset-react babel-loader babel-preset-es2015 babel-preset-stage-2
```


#### 实现模块化管理 引入 `webpack`

```angular2html
npm i webpack webpack-cli --save-dev
```

创建文件 `webpack.dev.js`

```javascript
const path = require('path')
const root = __dirname

module.exports = {
  // 入口文件
  entry: path.resolve(root, 'src/main.js'),
  // 出口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist')
  },
  // loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  }
}
```

新建 `.babelrc` 文件

```json
{
  "presets": [
    "babel-preset-react",
    "es2015",
    "stage-2"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```

修改 `package.json` 文件中的 `script` 命令

```angular2html
"scripts": {
  "dev": "webpack --config webpack.dev.js"
}
```

#### 实现监听文件改动，自动编译并刷新浏览器
```angular2html
npm install webpack-dev-server html-webpack-plugin --save-dev

```

在 `webpack.dev.js` 文件中加入 `html-webpack-plugin` 的配置

```angular2html
// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
entry: [
    'webpack-dev-server/client',
    path.resolve(root, 'src/main.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
plugins: [
	new HtmlWebpackPlugin({
		title: 'React Demo',
		template: path.resolve(root, 'template.html')
	})
],
devServer: {
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
```

`package.json` 文件中

``` 
"scripts": {
  "dev": "webpack-dev-server --mode development --config webpack.dev.js",
}

```

#### 实现热替换（HMR）

`npm install --save-dev react-hot-loader@next`

```javascript
const path = require('path')
const root = __dirname
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(root, 'src/main.js')
  ],
  // 出口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  // loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, 'template.html')
    }),
    new webpack.HotModuleReplacementPlugin(),  // 热替换插件
    new webpack.NamedModulesPlugin()  // 执行热替换时打印模块名字
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
}



```

#### 创建两个不同的页面

```
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        this is home~
      </div>
    )
  }
}

```

```
import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    return (
      <div>
        this is test~
      </div>
    )
  }
}

```


#### 加入 `router` 实现路由

```
npm i react-router react-router-dom --save
```

创建 `router/router.js`

```javascript

import React from 'react'

import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import test from '../src/test'
import app from '../src/App'

const getRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={app}></Route>
        <Route path='/test' component={test}></Route>
      </Switch>
    </Router>
  )
}

export default getRouter

```

将 `main.js` 中的主文件内容改为：

```javascript

import React from 'react'
import ReactDOM from 'react-dom'
import getRouter from '../route/router';

ReactDOM.render(
  getRouter(), document.getElementById('app')
)

```

#### 加入 `sass`

`npm i node-sass sass-loader css-loader style-loader`

`webpack` 的配置中加入

```

module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
          }
        }]
      }
    ]
  },
```

执行 `npm run dev` 即可

