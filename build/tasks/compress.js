var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('compress', function() {
  return gulp.src(config.build.js)
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
