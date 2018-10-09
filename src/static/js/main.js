$(document).ready(function() {
	var select = ".select-dropdown";
	$(select + '__val').click(function(event) {
		var list = $(this).siblings(select + '__list');
		list.toggleClass('opened');
		$('.select-dropdown__item > a').click(function(e) {
			e.preventDefault();
			$(select + '__item').removeClass('active');
			if ($(this).attr('data-value') == 'Custom') {
				$(this).parent().addClass('active');
				$('.data-picker').addClass('opened');
			} else {
				var attr = $(this).attr('data-value');
				list.removeClass('opened');
				$(select + '__val').removeClass('select-dropdown__title').text(attr).attr('data-value', attr);
				$(select + '__item').removeClass('active');
				$('.data-picker').removeClass('opened');
			}
		});
		
		$(document).mouseup(function(e) {
			var block = $(select);
			if(!block.is(e.target) && block.has(e.target).length === 0) {
				$(select + '__list').removeClass('opened');
				$(select + '__item').removeClass('active');
				$('.data-picker').removeClass('opened');
			}
		});

		$('.data-picker').click(function(e) {
			if (e.target.classList.contains('btn--apply')) {
				list.removeClass('opened');
			}
			if (e.target.classList.contains('btn--cancel') || e.target.classList.contains('btn--apply')) {
				e.preventDefault();
				$(this).removeClass('opened');
				$(select + '__item').removeClass('active');
			}
		});
	});

	function getScroll () {
		if ($('.content__notes').height() >= 240) {
			$('.content__notes').css({'height': '240px', 'overflow-y': 'scroll'})
		}
	}
	getScroll();

	$('.content__notes').change(function() {
		getScroll();
	});
})