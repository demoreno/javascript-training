
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function(){
     gulp.src('./lib/exercise-1/src/*.js')
        .pipe(concat('App.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./lib/exercise-1/dist/'))

    gulp.src('./lib/exercise-2/src/*.js')
        .pipe(concat('App.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./lib/exercise-2/dist/'))
});
