# Babel

### babel 是什么

Babel 是一个转码器，可以将 es6 代码转为 es5 代码

```
array.map(item => {
  item.name = `${item.name}-love`;
  item.age += 2;
});

//转换后
array.map(function (item) {
  item.name = item.name + '-love';
  item.age += 2;
});
```

### 如何使用

#### 配置文件`.babelrc`

```
{
  "presets": [
    "es2015",
    "stage-2"
  ],
  "plugins": []
}

```

需要安装：
```
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3

```

#### 安装`babel-cli`

`npm i --save-dev babel-cli`

#### 使用命令行转码

```
//文件转码
babel index.js
babel apps/index.js
//将文件转码到另一个文件
babel index.js --out-file compile.js
babel index.js -o compile.js
//将一个文件夹的文件都转码到另一个文件夹中
babel apps --out-dir assets
babel apps -d assets
```

或者配置在`package.json`里面

```
"scripts": {
	"build": "babel apps -d assets"
}
```

执行 `npm run build`




