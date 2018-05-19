var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var shell = require('gulp-shell'); // Allow shell commands to be run from Gulp

// Options for sass
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'nested'
};

// Process scss files and push to css
gulp.task('sass', function(){
  return gulp.src('build/scss/**/*.scss')
    .pipe(sass(sassOptions)) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    //.pipe(cssnano())
    .pipe(gulp.dest('css'));
});

// Task for reloading after change in scss files:
gulp.task('watch', function(){
  gulp.watch('build/scss/**/*.scss', ['sass']);
  // Other watchers
})

// Task for building site for development:

gulp.task('serve', shell.task(['bundle exec jekyll serve --livereload']));

gulp.task('dev', ['watch','serve']);
