const { src, dest, series, watch } = require('gulp');

const del = require('del'), 
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      sourcemaps = require('gulp-sourcemaps'),
      babel = require('gulp-babel'),
      pug = require('gulp-pug'),
      browserSync = require('browser-sync').create();

const paths = {
  dist: 'dist',
  css: {
    src: 'src/assets/scss/**/*.scss',
    dest: 'dist/assets/css'
  },
  js: {
    src: 'src/assets/js/*.js',
    dest: 'dist/assets/js'
  },
  img: {
    src: 'src/assets/img/**/*',
    dest: 'dist/assets/img'
  },
  html: {
    src: 'src/*.html',
    dest: 'dist'
  },
  pug: {
    src: 'src/views/**/*.pug',
    dest: 'dist'
  }
};

function clean() {
  return del(paths.dist);
}

function css() {
  return src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.css.dest))
    .pipe(browserSync.stream());
}

function javascript() {
  return src(paths.js.src)
  .pipe(babel())
  .pipe(dest(paths.js.dest));
}

function html() {
  return src(paths.html.src)
  .pipe(dest(paths.html.dest));
}

function img() {
  return src(paths.img.src)
  .pipe(dest(paths.img.dest));
}

function toPug() {
  return src(paths.pug.src)
  .pipe(pug({
    pretty: true
  }))
  .pipe(dest(paths.pug.dest));
}

exports.clean = clean;
exports.css = css;
exports.javascript = javascript;
exports.html = html;
exports.img = img;
exports.toPug = toPug;

exports.build = series(clean, html, img, css, javascript, toPug);

exports.default = function() {
  watch('src/assets/scss/**/*.scss', css);
  watch('src/views/**/*.pug', toPug);
  watch('src/assets/js/*.js', series(clean, img, javascript));
};