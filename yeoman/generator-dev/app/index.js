const Generator = require('yeoman-generator');

class Base extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('babel');
  }
  prompting() {
    const question = [{
      type: 'input',
      name: 'project_name',
      message: '请输入您的项目名称',
      default: this.appname
    }, {
      type: 'confirm',
      name: 'is_over_18',
      message: '您是否年满18周岁？'
    }];
    return this.prompt(question).then(answer => {
      console.log('项目名称：', answer.project_name);
      console.log('是否年满18周岁', answer.is_over_18);
    });
  }
}

module.exports = class extends Base {
  exec() {
    this.prompting();
  }
};