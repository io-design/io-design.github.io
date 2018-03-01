var gulp               = require('gulp');
var browserSync        = require('browser-sync').create();
var sass               = require('gulp-sass');
var postcss            = require('gulp-postcss');
var autoprefixer       = require('autoprefixer');

gulp.task('sass', function() {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass().on('error', function(err) {
      console.error(err.message);
      browserSync.notify(err.message, 3000); // Display error in the browser
      this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
    }))
		.pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('autoprefixer', function () {
    return gulp.src('./dist/css/*.css')
        .pipe(postcss([ autoprefixer({
          browsers: ['last 8 versions']
        }) ]))
        .pipe(gulp.dest('./dist/css'));
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dist"  
    });

   gulp.watch(['src/scss/*.scss'], ['sass']);
   gulp.watch(['dist/css/*.css'], ['autoprefixer']);
   gulp.watch("dist/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);


