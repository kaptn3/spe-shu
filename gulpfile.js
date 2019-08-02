var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths = {
  styles: {
    src: "src/assets/scss/**/*.scss",
    dest: "src/assets/css"
  }
};

function style() {
  return gulp
    .src(paths.styles.src)
    // Initialize sourcemaps before compilation starts
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    // Use postcss with autoprefixer and compress the compiled file using cssnano
    .pipe(postcss([autoprefixer(), cssnano()]))
    // Now add/write the sourcemaps
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    // Add browsersync stream pipe after compilation
    .pipe(browserSync.stream());
}

function reload() {
    browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src"
    },
    tunnel: true
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch("src/*.html").on('change', browserSync.reload);
}

exports.watch = watch

exports.style = style;

var build = gulp.parallel(style, watch);

gulp.task('default', build);