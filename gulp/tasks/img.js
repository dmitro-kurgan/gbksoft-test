module.exports = function () {
	$.gulp.task('img:dev', function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gulp.dest('build/img/'));
	})

	$.gulp.task('img:build', function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gp.tinypng('GPd402y5tGT4Xd6Piu1m8XdpYBo-Lvl4'))
        .pipe($.gulp.dest('build/img/'));
	})
}