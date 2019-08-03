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
    .pipe(dest(paths.css.dest));
}

function javascript() {
  return src(paths.js.src)
  .pipe(babel())
  .pipe(dest(paths.js.dest));
}

function img() {
  return src(paths.img.src)
  .pipe(dest(paths.img.dest));
}

function html() {
  return src(paths.pug.src)
  .pipe(pug({
    pretty: true
  }))
  .pipe(dest(paths.pug.dest));
}

function watcher() {
  watch('src/assets/scss/**/*.scss', css);
  watch('src/assets/js/*.js', javascript);
  watch('src/views/**/*.pug', html);
  watch('src/img/**/*', img);
};

exports.clean = clean;
exports.css = css;
exports.javascript = javascript;
exports.img = img;
exports.html = html;

exports.watcher = watcher;

exports.build = series(clean, img, css, javascript, html);

exports.default = series(watcher);