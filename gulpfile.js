const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');

//compile scss into css
function style() {
    return gulp.src('assets/scss/site.scss')
        .pipe(sass().on('error', sass.logError))
  
        .pipe(gulp.dest('dist/css'))
}



function watch() {
    gulp.watch('assets/**/*.scss', style)

}

function minifyImage() {
    return gulp.src('dist/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}



exports.default = minifyImage;
exports.style = style;

exports.watch = watch;