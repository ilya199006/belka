var tracesSlider = new Swiper('.traces__slider', {
	containerModifierClass: 'traces__slider',
	wrapperClass: 'traces__slider-wrapper',
	slideClass: 'traces__slider-item',
	slideActiveClass: 'traces__slider-item-active',
	slideNextClass: 'traces__slider-item-next',
	slidesPerView: 1,
	loop: true,
	/*spaceBetween: 15,
	setWrapperSize: true,
	width: 1133,
	height: 172,
	
	autoplay: {
		delay: 4000,
	},*/
	navigation: {
		nextEl: '.news-slider-button-next',
		prevEl: '.news-slider-button-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 1,
		},
		1025: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 5,
		},
		2000: {
			slidesPerView: 5,
		}
	}
});

var aboutSlider = new Swiper('.about__slider', {
	containerModifierClass: 'about__slider',
	wrapperClass: 'about__slider-wrapper',
	slideClass: 'about__slider-item',
	slideActiveClass: 'about__slider-item-active',
	slideNextClass: 'about__slider-item-next',
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	breakpoints: {
		767: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 5,
		},
		2000: {
			slidesPerView: 3
		},
	}
});

var reviewsSlider = new Swiper('.reviews__slider', {
	containerModifierClass: 'reviews__slider',
	wrapperClass: 'reviews__slider-wrapper',
	slideClass: 'reviews__slider-item',
	slideActiveClass: 'reviews__slider-item-active',
	slideNextClass: 'reviews__slider-item-next',
	spaceBetween: 0,
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		767: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 3,
		},
		2000: {
			slidesPerView: 3
		},
	}
});