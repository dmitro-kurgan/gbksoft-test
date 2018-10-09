module.exports = function() {
	$.gulp.task('svg', () => {
		return $.gulp.src('./src/static/img/svg/*.svg')
			.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}	
			}))
			.pipe($.gp.cheerio({
				run: function($) {
					$('[fil]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gp.svgSprite({
				mode: {
					symbol: {
						sprite: "sprite.svg"
					}
				}
			}))
			.pipe($.gulp.dest('./build/img/svg/'));
	});
};