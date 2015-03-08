var gulp = require('gulp');
var connect = require('gulp-connect');

var distPaths = ['./index.html', 'js/**/*.js', 'js/**/.jsx', 'css/**/*.css'];

gulp.task('connect', function() {
  return connect.server({
    livereload: true
  });
});
 
gulp.task('assets', function () {
  return gulp.src(distPaths)
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(distPaths, ['assets']);
});
 
gulp.task('default', ['connect', 'watch']);