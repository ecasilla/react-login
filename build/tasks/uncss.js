var gulp = require('gulp');
var uncss = require('gulp-uncss-task');
var config = require('../config');

gulp.task('uncss', function() {
    gulp.src(config.css)
        .pipe(uncss({
            html: config.html,
            stylesheets: config.css
        }))
        .pipe(gulp.dest(config.build.css));
});
