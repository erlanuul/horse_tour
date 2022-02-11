window.addEventListener('scroll', function () {
	let header__navbar = document.getElementById('header__navBar')
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
})
window.onload = () => {
	let header__navbar = document.getElementById('header__navBar')
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
}
$(document).ready(function () {
	$('.body__mainSlider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 1,
		speed: 500,
		easing: 'linear',
		infinite: true,
		initialSlide: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		draggable: false,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		variableWidth: false,
	})
})

$(document).ready(function () {
	$('.body-chooseTourBoxSlide').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 3,
		speed: 500,
		easing: 'linear',
		infinite: false,
		initialSlide: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		variableWidth: false,
	})
})
$(document).ready(function () {
	$('.body-beautifulPlacesBoxSlide').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 3,
		rows: 2,
		speed: 500,
		easing: 'linear',
		infinite: false,
		initialSlide: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		variableWidth: false,
	})
})
