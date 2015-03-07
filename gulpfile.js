var gulp = require('gulp');
var connect = require('gulp-connect');

var distPaths = ['./index.html', 'js/*.js', 'css/*.css'];

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
  gulp.watch(['./index.html', 'js/*.js', 'css/*.css'], ['assets']);
});
 
gulp.task('default', ['connect', 'watch']);