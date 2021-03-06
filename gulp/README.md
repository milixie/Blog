# gulp

### 基本介绍

gulp 是一个自动化构建工具

优点：

1.易于使用

2.插件：Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。

3.快速构建：利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。

4.易于学习：通过最少的 API，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。

### 使用

```
const gulp = require('gulp');
const jade = require('gulp-jade');

gulp.task('default', function () {
  // 将你的默认的任务代码放在这
});

gulp.task('scripts', function () {
  //scripts 任务
});

gulp.task('build', ['default', 'scripts'], function () {
  //build 的任务，是在前面两个任务执行结束后执行的
  gulp.src('./page/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build/'))
});
```

执行
```
gulp build
```
