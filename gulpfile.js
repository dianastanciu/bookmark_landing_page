let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./assets/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('prefix', function() {
  return gulp.src('./assets/css/*.css')
  .pipe(autoprefixer({overrideBrowserslist: ['IE 6', 'Chrome 9', 'Firefox 14']}))
  .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass', 'prefix'));
});