/**
 * Created by kitchiong on 1/30/16.
 */
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// More Plugins
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// Browserify Task
gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./index.js');
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

// Connect configure
gulp.task('connect', function() {
    connect.server();
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src([
        '*.js',
        'dis/*.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('*.js', ['lint', 'browserify']);
    gulp.watch('components/*.jsx', ['lint', 'browserify']);
});

gulp.task('js-watch', ['lint', 'browserify'], function() {
    browserSync.reload();
});

// launch Browsersync
gulp.task('serve', ['lint','browserify'], function () {

    // Serve files from the root of this project
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./"
        },
        reloadDebounce: 20000
    });


    gulp.watch('*.js', ['js-watch']);
    gulp.watch('components/*.jsx', ['js-watch']);
    gulp.watch('dist/bundle.js', ['js-watch']);
    //gulp.watch('dist/bundle.js').on('change', function() {
    //
    //    browserSync.reload();
    //});
    //gulp.watch('scss/*.scss', ['sass']);
});

// reloading browser
//gulp.task('js-watch', ['lint'], browserSync.reload);

//gulp.task('default', ['lint','browserify']);

// Compile Our Sass
//gulp.task('sass', function() {
//    return gulp.src('scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('css'));
//});

// Concatenate & Minify JS
//gulp.task('scripts', function() {
//    return gulp.src('js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('dist'));
//});

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
