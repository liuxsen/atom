const { series, src, dest } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const bless = require('gulp-bless');
const rename = require('gulp-rename');
const minifyCss = require('gulp-csso');

function clean() {
  return src('dist/*', { read: false }).pipe(rm());
}

//scss to css
function css() {
  return src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      bless({
        imports: false,
        suffix: function(index) {
          return '.' + index + '.min';
        }
      })
    )
    .pipe(minifyCss())
    .pipe(dest('./dist'));
}

exports.default = series(clean, css);
