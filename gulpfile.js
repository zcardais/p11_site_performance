'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var sprity = require('sprity');


gulp.task("concatStyles", function() {
  gulp.src([
    'css/foundation.css',
    'css/basics.css',
    'css/menu.css',
    'css/hero.css',
    'css/photo-grid.css',
    'css/modals.css',
    'css/footer.css'])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("css"));
});

gulp.task("concatScripts", function() {
  gulp.src([
  'js/jquery.js',
  'jx/fastclick.js',
  'js/foundation.js',
  'js/foundation.equalizer.js',
  'js/foundation.reveal.js'])
  .pipe(concat("scripts.js"))
  .pipe(gulp.dest("js"));
});

// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return sprity.src({
    src: './img/avatars/**/*.{png,jpg}',
    style: './sprite.css'
  })
    .pipe(gulpif('*.jpg', gulp.dest('./img/avatars/'), gulp.dest('./img/avatars/')))
});



// gulp.task("hello", function() {
//   console.log("Hello!");
// });
//
// gulp.task("default", ["hello"], function() {
//   console.log("This is the default task.");
// })
