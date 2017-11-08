# 脚手架如何搭建

### 脚手架的实现原理

六大问题：

#### 项目的目录结构如何组织
#### 使用何种类库
#### 开发环境和生产环境如何弄
#### 其他团队内部用什么类库
#### 团队代码规范问题
#### 配置环境、安装依赖问题

做一个新的脚手架，`react` 本身已经有的脚手架 `create-react-app`，但是这个脚手架不能满足我们的需求，不够灵活，不可以定制化修改一些配置，只能创建 project 的目录，不能创建公用组件的目录

使用 `yeoman` 帮助我们

首先我们需要 install yeoman： `npm i yo -g`

然后创建一个文件夹 `mkdir flash-cli && cd ./flash-cli/`

创建一个 index.js 文件

```
#!/usr/bin/env node

//Linux 的shell 脚本需要在开头给出解释程序，规定解释程序为 node

```

修改 `package.json`

```
{
  "name": "flash-cli",
  "version": "0.0.1",
  "description": "flash cli build",
  "main": "index.js",
  "bin": {
    "flash": "index.js"   //生成一个 flash 命令，启动文件是 index.js
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "milixie",
  "license": "ISC"
}


```

然后执行 `npm link`， 相当于 `npm install flash-cli -g` 安装到全局，以软链接的形式

`npm unlink` 取消软链接

#### `shell` 交互和文件交互的例子

实现目标功能：
	>- 打印欢迎语
	>- 用户输入姓名、选择性别、选择爱好标签、输入创建文件的文件名
	>- 根据模板生成 HTML 文件
	>- 浏览器自动打开生成的文件
	>- 打印结束语


安装所需依赖包

```
colors：可以再 terminal 打印自定义样式的字
ejs：模板渲染工具
inquirer：提供 terminal 和用户交互的能力
mkdirp： 生成文件夹 or 生成指定路径的文件夹
shelljs：提供给 node 运行 shell 命令的能力

```

直接安装
```
npm i colors ejs inquirer mkdirp shelljs --save
```

新建一个 tpl.html 的文件

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>模板工程html页面</title>
</head>
<body>
<h1>嘿，快看呐~</h1>
<p>我 <%= name %></p>
<p>
  <% if (sex=='male') { %>
  顶天立地一汉子
  <% }else if(sex=='female'){ %>
  buling buling 小仙女
  <% }else{ %>
  傻傻分不清楚
  <% } %>
</p>
<p>
  还会干这些活儿：
  <% labels.forEach(function(label){ %>
  <span><%= label %></span>
  <% }); %>
</p>
</body>
</html>

```


然后在 index.js中

```
#!/usr/bin/env node

//Linux 的shell 脚本需要在开头给出解释程序，规定解释程序为 node

//先引入各个模块
require('colors');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');
const mkdirp = require('mkdirp');
const shelljs = require('shelljs');

//欢迎语
console.log("\n" + "Hello World, I'm flash-cli".magenta + "\n");  //这边可以直接使用 .magenta 拿到相应的颜色值，直接使用，这是因为有 colors 这个库的原因
console.log("It's just a test".red + "\n");

//常量
const ENCODE = 'utf-8';
const BUILD_PATH = './build';
const BUILD_FILE_TYPE = '.html';

//用户交互问题列表
const question = [
  {
    type: 'input',
    name: 'name',
    message: '请输入你的姓名'
  },
  {
    type: 'list',
    name: 'sex',
    message: '你的性别',
    choices: [{
      name: '男',
      value: 'male'
    }, {
      name: '女',
      value: 'female'
    }, {
      name: '其他',
      value: 'other'
    }]
  },
  {
    type: 'checkbox',
    name: 'labels',
    message: '给自己贴几个标签吧',
    choices: [{
      name: 'html5',
      value: 'html5'
    },{
      name: 'css3',
      value: 'css3'
    },{
      name: 'nodejs',
      value: 'nodejs'
    },{
      name: '前端开发',
      value: 'fe前端开发'
    },{
      name: '移动端开发',
      value: 'mobile移动端开发'
    }]
  },
  {
    type: 'input',
    name: 'fileName',
    default: 'index',
    message: '请输入你要生成文件的名字'
  }
];

//交互
inquirer.prompt(question).then(answer => {

  const fileName = `${answer.fileName}${BUILD_FILE_TYPE}`;

  createFile(answer, fileName);

  openFile(`${BUILD_PATH}/${fileName}`);

});

//创建文件
let createFile = (data, fileName) => {

  let tpl = fs.readFileSync(__dirname + '/tpl.html', ENCODE);

  mkdirp.sync(BUILD_PATH);

  fs.writeFileSync(`${BUILD_PATH}/${fileName}`, ejs.render(tpl, data), ENCODE);

};


//打开所创建的文件
let openFile = buildFilePath => {

  //mac
  if(process.platform == 'darwin'){
    shelljs.exec(`open ${buildFilePath}`);
  } else if(process.platform == 'win32') { //windows
    shelljs.exec(`start ${buildFilePath}`);
  } else {
    console.log('This platform is ' + process.platform);
  }

  endTip(buildFilePath);
};

//结束语
const endTip = buildFilePath => {
  console.log("\n" + "build file: " + (path.resolve(buildFilePath)).magenta + "\n");
};

```

然后再 shell 中输入：`flash` 根据提示选择后会自动生成html文件并打开



### 如何做出一个优秀的脚手架

根据 yeoman 的标准去编写一个脚手架工程`generator-flash`

github 地址

`https://github.com/water-wheel/generator-flash`

相关地址：

`https://github.com/water-wheel/learning-step`

`https://github.com/water-wheel/flash-cli`