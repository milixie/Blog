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

然后创建一个文件夹
`mkdir flash-cli && cd ./flash-cli/`

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

然后执行
`npm link`

相当于 `npm install flash-cli -g` 安装到全局，以软链接的形式

`npm unlink` 取消软链接


### 如何做出一个优秀的脚手架