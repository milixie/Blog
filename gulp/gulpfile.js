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