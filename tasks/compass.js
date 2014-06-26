'use strict';
var gulp = require('gulp'),
    compass = require('gulp-compass');

gulp.task('compass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(compass({
            css: './stylesheets',
            sass: './sass',
            style: 'compressed'
        }))
        .on('error', function (err){
            console.log(err);
        })
        .pipe(gulp.dest('./stylesheets'));
});