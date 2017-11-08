#!/usr/bin/env node

//Linux 的shell 脚本需要在开头给出解释程序，规定解释程序为 node

const Color = require('colors');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');
const mkdirp = require('mkdirp');
const shelljs = require('shelljs');

//欢迎语
console.log("\n" + "Hello World, I'm flash-cli".magenta + "\n");
console.log("It's just a test".red + "\n");
console.log('white'.white + '\n' + 'test'.green.bgRed);
console.log(Color.underline('这个文本有下划线'));
console.log(Color.bold('这个文本有加粗'));
// console.log(Color.dim('这个文本昏暗'));
// console.log(Color.italic('这个文本昏暗'));
console.log(Color.inverse('这个文本反色'));
// console.log(Color.hidden('这个文本反色'));
// console.log(Color.strikethrough('这个文本反色'));
// console.log(Color.blink('这个文本有下划线'));

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
    shelljs.exec(`open ${buildFilePath}`);  //通过 shell 可以直接打开
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

