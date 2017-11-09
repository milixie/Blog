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