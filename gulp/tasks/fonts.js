module.exports = function () {
	$.gulp.task('fonts:dev', function () {
		return $.gulp.src('src/static/fonts/*.{ttf,otf,eot,woff,woff2}')
        .pipe($.gulp.dest('build/fonts/'));
	})

	$.gulp.task('fonts:build', function () {
		return $.gulp.src('src/static/fonts/*.{ttf,otf,eot,woff,woff2}')
        .pipe($.gulp.dest('build/fonts/'));
	})
}