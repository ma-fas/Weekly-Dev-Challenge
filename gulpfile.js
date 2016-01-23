var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

// Sass setup

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer('last 30 version'))
		.pipe(gulp.dest('src/css/'))
		.pipe(browserSync.stream());
});

// BrowserSync setup

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./src"
	});

	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch("src/index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);