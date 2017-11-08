# inquirer

### 作用：提供 terminal 和用户交互的能力

### 安装

```
npm i inquirer
```

### 用法

```
const inquirer = require('inquirer');

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
    type: 'rawlist',
    name: 'test_rawlist',
    message: '兴趣',
    choices: [{
      name: '吃',
      value: 'chi'
    }, {
      name: '喝',
      value: 'he'
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
    type: 'confirm',
    name: '提醒',
    message: '测试 confirm'
  },
  {
    type: 'password',
    name: '密码',
    message: '请输入密码'
  },
  {
    type: 'editor',
    name: '测试编辑',
    message: 'test 编辑'
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

});

```

打开node shell 运行即可查看效果

[参考链接 inquirer](http://npm.taobao.org/package/inquirer)