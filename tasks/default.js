'use strict';
var gulp = require('gulp');
gulp.task('default', ['compass'], function () {
    // execute watchers
    gulp.watch('./sass/**/*.scss', ['compass']);
});