var path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'), // logging
    sourcemaps = require('gulp-sourcemaps'), // sourcemaps
    browserSync = require('browser-sync').create(), // static, reloading server
    babel = require('gulp-babel'), // transpiles ES6 and JSX to ES5 and CommonJS modules
    browserify = require('gulp-browserify'), // bundles CommonJS modules to bundle.js
    uglify = require('gulp-uglify'), // minifies js
    rename = require('gulp-rename'),
    //source = require('vinyl-source-stream'), // converts stream to vinyl source stream - required by browserify
    //buffer = require('vinyl-buffer'), // converts stream to buffer - required for uglify, which supports only buffers
    config = require('./config/gulp_conf');

gulp.task('compile', function () {
    return gulp.src(config.jsxSrcGlob)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        })).on('error', function(err) {
            gutil.log(err.stack);
            this.end();
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.jsDest));
});

gulp.task('bundle', ['compile'], function() {
   return gulp.src(config.jsEntryFile)
        .pipe(browserify())
        .pipe(rename(config.jsDistFile))
        .pipe(gulp.dest(config.jsDist));
});

gulp.task('default', ['bundle']);

gulp.task('watch', ['bundle'], function() {
    gulp.watch(config.allSrc, ['compile']);
});

gulp.task('serve', ['bundle'], function() {
    browserSync.init({
        server: '.'
    });

    gulp.watch(config.allSrc, ['bundle'])
        .on('change', browserSync.reload);
});