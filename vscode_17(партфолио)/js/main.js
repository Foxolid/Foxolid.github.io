
$(function () {

	$('.menu__btn').on('click', function () {
		$('.menu').slideToggle();
	});

});

new Swiper('.swiper-container', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',

		clickable: true,
	},
});
