var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var responsive = require('gulp-responsive');
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

// Task for building responsive images

gulp.task('images', function () {
  return gulp.src('build/images/uploads/*.{png,jpg}')
    .pipe(responsive({

      // Resize all post images and ensure jpeg format
      '*': [{
        height: 200,
        quality: 80,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-small' },
      }, {
        width: 520,
        quality: 70,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-med' },
      }, {
        width: 768,
        quality: 70,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-large' },
      }, {
        width: 90,
        height: 90,
        quality: 90,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-thumbnail' },
      }],
    }))
    .pipe(gulp.dest('images/articles'));
});

// Task for building site for development:

gulp.task('serve', shell.task(['bundle exec jekyll serve --livereload']));

gulp.task('dev', ['watch','images','serve']);

// Task for building site for production:
gulp.task('build', shell.task(['bundle exec jekyll build']));

gulp.task('prod', ['images','build']);
