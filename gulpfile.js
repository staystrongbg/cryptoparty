const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
// 1.
//copyhtml to dist
gulp.task('copyHtml', (cb) => {
  gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
  cb();
});

// 2.
//optimize image
gulp.task('imageMin', () =>
  gulp.src('src/images/**/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
);

// 3.
//minify css
gulp.task('minify-css', () => {
  return gulp
    .src('dist/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});

//postCSS/autoprefixer
gulp.task('autoprefixer', () => {
  return gulp
    .src('src/**/*.css')
    .pipe(autoPrefixer({ cascade: false }))
    .pipe(gulp.dest('dist/css'));
});
