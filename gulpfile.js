'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var sprity = require('sprity');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


// generate sprite.png and sprite.css
gulp.task('sprites', function () {
  return sprity.src({
    src: './img/avatars/**/*.{png,jpg}',
    style: './sprite.css',
    cssPath: '../img/avatars/'
  })
    .pipe(gulpif('*.jpg', gulp.dest('./img/'), gulp.dest('./css/')))
});

gulp.task("concatStyles", function() {
  gulp.src([
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css',
    'css/foundation.css',
    'css/basics.css',
    'css/menu.css',
    'css/hero.css',
    'css/photo-grid.css',
    'css/modals.css',
    'css/footer.css',
    'css/sprite.css'])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("css"));
});

gulp.task("concatScripts", function() {
  gulp.src([
  'js/jquery.js',
  'js/fastclick.js',
  'js/foundation.js',
  'js/foundation.equalizer.js',
  'js/foundation.reveal.js'])
  .pipe(concat("scripts.js"))
  .pipe(gulp.dest("js"));
});

gulp.task("minifyStyles", function() {
  gulp.src("css/styles.css")
    .pipe(cleanCSS())
    .pipe(rename('styles-min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task("minifyScripts", function() {
  gulp.src("js/scripts.js")
    .pipe(uglify())
    .pipe(rename('scripts-min.js'))
    .pipe(gulp.dest('js'));
});



// gulp.task("hello", function() {
//   console.log("Hello!");
// });
//
// gulp.task("default", ["hello"], function() {
//   console.log("This is the default task.");
// })
