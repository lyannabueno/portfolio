const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin'); // Importe o módulo diretamente usando require()

function compilaSass() {
    return gulp.src('./dev/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}
exports.sass = compilaSass;

function comprimeJS() {
    const uglify = require('gulp-uglify');
    const obfuscate = require('gulp-obfuscate');
    return gulp.src('./dev/script/main.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/script'));
}
exports.javascript = comprimeJS;

function comprimeImage() {
    return gulp.src('./dev/images/**/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}
exports.images = comprimeImage;

exports.default = gulp.series(compilaSass, comprimeJS, comprimeImage);
