// WordPress Starterkit Gulpfile
// (c) Blue State Digital

// TASKS
// ------
// `gulp`: watch, compile styles and scripts; Browserify
// `gulp build`: default compile task


// PLUGINS
// --------
var autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  cache = require('gulp-cache'),
  chug = require('gulp-chug'),
  concat = require('gulp-concat'),
  cssGlobbing = require('gulp-css-globbing'),
  del = require('del'),
  eslint = require('gulp-eslint'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  gif = require('gulp-if'),
  imagemin = require('gulp-imagemin'),
  minifycss = require('gulp-clean-css'),
  modernizr = require('gulp-modernizr'),
  notify = require('gulp-notify'),
  p = require('./package.json'),
  path = require('path'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  size = require('gulp-size'),
  stylelint = require('gulp-stylelint'),
  sourcemaps = require('gulp-sourcemaps'),
  sourcestream = require('vinyl-source-stream'),
  svgSprite = require('gulp-svg-sprite'),
  uglify = require('gulp-uglify'),
  webpack = require('webpack-stream');

// VARIABLES
// ----------
var dist = 'assets/',
    source = 'src/',
    sassInclude = ['node_modules', require('bourbon-neat').includePaths];


// ERROR HANDLING
// ---------------
function handleError() {
  this.emit('end');
}

// BUILD SUBTASKS
// ---------------

// Style Linter
gulp.task('lint-css', function(){
  return gulp.src([
    source + 'scss/**/*.scss'
  ])
  .pipe(stylelint({
    reporters: [
      {formatter: 'string', console: true}
    ],
    syntax: "scss"
  }));
});

// Styles
gulp.task('styles_dev', ['lint-css'], function() {
  return gulp.src([
    source+'scss/style.scss'
  ])
  .pipe(cssGlobbing({
    extensions: ['.scss']
  }))
  .pipe(sourcemaps.init())
  .pipe(sass({includePaths: sassInclude}))
    .on('error', handleError)
    .on('error', notify.onError())
  .pipe(autoprefixer([
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
    ]))
  .pipe(minifycss())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dist+'/css'))
  .pipe(browserSync.stream({match: '**/*.css'}));
});

// Script Linter
gulp.task('lint', function() {
  return gulp.src([source + 'js/**/*.js', '!' + source + 'js/vendor/*.js'])
  .pipe(eslint({fix:true}))
  .pipe(gif(!browserSync.active, eslint.failOnError()));
});

// Modernizr
gulp.task('modernizr', function() {
  gulp.src(source+'js/*.js')
    .pipe(modernizr({
        crawl: false,
        options: [
          "setClasses",
          "addTest",
          "html5printshiv",
          "testProp",
          "fnBind"
        ],
        // https://modernizr.com/docs
        tests: [
          'csstransforms3d',
          'csstransitions',
          'touchevents',
          'flexbox',
          'pointerevents'
        ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(dist+'js'))
});

// Webpack
gulp.task('pack', function() {
  return gulp.src(source+'js/main.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(dist+'js'));
});


// Scripts
gulp.task('scripts', ['pack'], function() {
  return gulp.src([
    source+'js/vendor/_*.js',
    dist+'js/bundle.js'
  ])
  .pipe(concat('source.dev.js'))
  .pipe(gulp.dest(dist+'js'))
  .pipe(rename('source.js'))
  .pipe(uglify())
  .pipe(size({
    'showFiles': true
  }))
  .pipe(gulp.dest(dist+'js'))
  .pipe(browserSync.stream({match: '**/*.js'}));
});


// Clean
gulp.task('clean', function(cb) {
  del([dist+'js/bundle.js', dist+'js/source.dev.js', dist+'js/source.js'], cb);
});


// Images
gulp.task('images', function() {
  return gulp.src(source+'img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dist+'img'))
    .pipe(notify({ message: 'Images task complete' }));
});

// SVGs
gulp.task('icons', function() {
  return gulp.src(source+'icons/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '.',
          sprite: 'svg-sprite.twig',
          bust: false,
          inline: true
        }
      }
    }))
    .pipe(gulp.dest(views + 'partials'))
});


// BUILD TASKS
// ------------

// Watch
gulp.task('default', function() {

    browserSync.init({
      server: {
        baseDir: './'
      },
      ghostMode: false, // Toggle to mirror clicks, reloads etc. (performance)
      open: true, // Toggle to automatically open page when starting.
      port: 4001,
      online: true
    });

    gulp.watch('*.html', browserSync.reload);

    // Watch .scss files
    gulp.watch(source+'scss/**/*.scss', ['styles_dev']);

    // Watch .js files
    gulp.watch(source+'js/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch(source+'img/**/*', ['images']);

    // Watch templates, JS, and CSS, reload on change
    gulp.watch([
            '/',
        ], { dot: true })
        .on('change', browserSync.reload);
});

// Build
gulp.task('build', ['clean'], function() {
    gulp.start('modernizr', 'scripts');
});