var gulp = require('gulp');
var config = require('../config');
var browserSync = require("browser-sync").create();
// process JS files and return the stream.
gulp.task('js',['compile','compress'], function () {
    return gulp.src(config.js.all)
        .pipe(gulp.dest(config.build.js));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// use default task to launch BrowserSync and watch JS files
gulp.task('serve', ['js'], function () {

    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("scripts/**/*.js", ['js-watch']);
});
