'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

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



gulp.task("hello", function() {
  console.log("Hello!");
});

gulp.task("default", ["hello"], function() {
  console.log("This is the default task.");
})
