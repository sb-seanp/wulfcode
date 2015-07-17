/**
 * Created by Sean on 7/7/2015.
 */
import gulp     from 'gulp';
import stylus   from 'gulp-stylus';
import gls      from 'gulp-live-server';
import imagemin from 'gulp-imagemin';
import nib      from 'nib';
import babelify from 'babelify';
import bundle   from 'browserify';
import vinyl    from 'vinyl-source-stream';

let paths = {
  css: './assets/stylesheets/*',
  js: './assets/javascripts/*'
};

gulp.task('stylesheets', () => {
  gulp.src('./assets/stylesheets/*.styl')
    .pipe(stylus({
        use: nib(),
        import: ['nib']
      }))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('javascripts', () => {
  bundle({
    entries: './assets/javascripts/main.babel.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(vinyl('wulfcode.js'))
  .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('images', () => {
  gulp.src('./assets/images/*')
    .pipe(imagemin({
        progressive: true
      }))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('serve', () => {
  let server = gls.new('./bin/wulfcode');
  server.start();
});

gulp.task('watch', () => {
  gulp.watch(paths.css, ['stylesheets']);
  gulp.watch(paths.js, ['javascripts']);
});

gulp.task('default', ['stylesheets', 'javascripts', 'images', 'serve', 'watch']);
gulp.task('imagemin', ['images']);
