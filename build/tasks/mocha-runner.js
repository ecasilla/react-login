var gulp = require('gulp'),
    inject = require('gulp-inject'),
    gulpBowerFiles = require('gulp-bower-files')
    config = require('../config');

gulp.task('runner', function () {

var target = config.runner.src.html;
var jsfiles = config.runner.src.js;
var testfile = config.runner.src.test;
  return gulp.src(target)
        .pipe(inject(
          gulp.src(jsfiles, {read: false}),
          {name: 'scripts'}
        ))
        .pipe(inject(
          gulp.src(testfile, {read: false}),
          {name: 'test'}
        ))
        .pipe(gulp.dest('test'));
      });
