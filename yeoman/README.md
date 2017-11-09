# YEOMAN

### 什么是 `yeoman`

`yeoman`帮助你去快速新建项目，指定了最好的实践和工具去帮你量产项目

为了做到这点，我们提供了一个`generator`的生态系统，`generator`是一个最基本的插件，它能够使用`yo`命令去搭建一个完整的项目脚手架或者成为脚手架的一个很有用的部分

通过我们官方的这些`generator`，我们升级了`yeoman 工作流`，这个工作流是一个坚固而有力的`client-side`栈，它由工具和框架构成，并且能够帮助开发者毫不费力的快速构建漂亮的 web 应用，我们致力于提供项目开始所需的一切

有了一个模块化的体系结构，我们可以利用来自几个开源社区的成功和经验，确保开发人员使用的堆栈尽可能的智能化。

作为一个优质文档和好的构建进程的坚信者，`yeoman`支持了规范、测试、压缩代码等，所以开发者能够专注于解决问题而不是为一点点事情操心

### 工具

`yeoman`工作流为创建一个web 应用开发平台提供了三种类型的工具

>- 1.一个是脚手架`yo`工具: yo 脚手架是一个新的应用，写你的构建配置文件并且执行相关的构建任务，写你构建所需的包管理环境配置

>- 2.一个是构建工具 `gulp` or `grunt`：构建system 可以构建、查看、测试您的项目，gulp 和 grunt 都是炙手可热的选择

>- 3.一个是包管理工具`npm` or `bower`：包管理工具应用于开发环境管理，所以你不再必须下载和管理您的 scripts 文件，npm 和bower 是两个炙手可热的选择

所有者三种类型的工具都被分别开发和维护，但是在我们既定的工作流中他们是在一起高效工作的

### 使用 yeoman

`yeoman`是一个允许任何应用类型创建的普通脚手架，它允许重复的创建一个新的项目并且使得已经存在的项目成为一个流水线式的开发

`yeoman`能生成任何语言的项目（web Java Python c# 等）

`yeoman` 本身不做任何决定，每个决定都是由`yeoman`环境中`generator`这个基本插件决定的，有许多公共可用的`generator`并且能够非常容易的创建一个新的`generator`去匹配相应的工作流，`yeoman`总是你所需脚手架的正确选择


这里有一些他的特点

>- 快速创建一个新的项目

>- 创建项目新的一个部分，比如成为单元测试的管理者

>- 创建模块或者包

>- 引导新的服务端

>- 专注于标准化最好的实践以及样式引导

>- 让开发者很快的升级一个类似的 APP


安装 yeoman `npm i yo -g`

安装 yeoman 的一个 generator `npm i -g generator-webapp`

通过 yo generator 创建一个新的项目 `yo webapp`


### 如何通过 yeoman generator 创建一个脚手架工具

一个`generator`的核其实就是一个 nodejs 的 module

首先，创建一个你将要写 generator 的文件夹，这个文件夹必须以`generator-name` 开头，`name` 就是你需要自己起的 generator 名字，这一点至关重要，因为`yeoman`依赖文件系统去找可使用的 `generator`

一旦包含了你的 generator 文件夹，创建一个`package.json`文件，这个文件是一个 nodejs 的模块，你可以创建这个文件通过命令行运行`npm init`这个命令创建成以下文件内容

```
{
  "name": "generator-name",
  "version": "0.1.0",
  "description": "",
  "files": [
    "generators"
  ],
  "keywords": ["yeoman-generator"],
  "dependencies": {
    "yeoman-generator": "^1.0.0"
  }
}
```

执行命令

`npm install yeoman-generator --save`

`package.json`里面的 `keywords` 属性必须包含 `yeoman-generator`，回购协议必须有一个描述，由我们的生成器页面索引。

你应该确保使用了最新的 `yeoman-generator` 版本，这里的`files`属性必须是一个你使用的`generator`文件目录的数组

#### 文件目录结构

`yeoman`是强关联的文件系统并且关联你的文件目录，每一个子的`generator`都被包含在这个文件夹

当你执行`yo name`命令时，默认的 `generator`被使用作为一个应用的发电机，它必须包含`app/`文件夹

当你执行`yo name: subcommand` 命令时子的 generator 被执行，并且存储在文件夹中

例如，一个目录结构是这样的：
```
├───package.json
└───generators/
    ├───app/
    │   └───index.js
    └───router/
        └───index.js
```

还有另外一种目录结构

```
├───package.json
├───app/
│   └───index.js
└───router/
    └───index.js
```
这一种目录结构，需要你修改`package.json`文件成这样

```
"files": [
    "app",
    "router"
  ]
```

#### 继承 generator

在`app/index.js`文件中

```
const Generator = require('yeoman-generator');

module.exports = class extends Generator {};

```
编写一个函数

```
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('babel');
  }
  getInfo() {
    console.log('this is a function of getInfo');
  }
};
```

#### 运行 generator

在`generator-dev`这个文件夹下，执行命令 `npm link`

这个操作将会安装你的项目并且软连接到一个全局模块到你本地文件，然后你可以执行`yo dev`然后就会看到打印的这句`this is a function of getInfo`，这就是你的第一个 `generator`
