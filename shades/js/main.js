var swiper = new Swiper('.header__slider-container', {
	direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next--header',
	},
	loop: true,
	spaceBetween: 30,
	effect: 'fade',
});



var mySwiper = new Swiper('.services__slider-container', {

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,
	slidesPerColumn: 2,
	spaceBetween: 30,
})