var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var babel = require('babelify');
var config = require('../config');

gulp.task('compile', function () {
  browserify({
    entries: 'scripts/app.js',
    extensions: ['.js'],
    debug: true,
    transform: ['babelify', 'reactify']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.build.js));
});

gulp.task('default', ['compile'])
