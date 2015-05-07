var gulp  = require("gulp");
var clean = require('gulp-rimraf');
// CLEAN
gulp.task('clean', function () {
  return gulp.src([config.build.root], { read: false })
    .pipe(clean());
});
