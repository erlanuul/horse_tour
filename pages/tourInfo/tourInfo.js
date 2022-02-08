let header__navbar = document.getElementById('header__navBar')
window.addEventListener('scroll', function () {
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
})
window.onload = () => {
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
		dots: true,
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

function setInvisibility(event) {
	let target = event.target
	let inviseElem = target.parentNode.nextElementSibling
	let checkElem = window.getComputedStyle(inviseElem).display
	if (checkElem == 'flex') {
		inviseElem.style.display = 'none'
		target.style.backgroundImage =
			"url('../../src/setInvisibilityVectorOff.png')"
	} else if (checkElem == 'none') {
		inviseElem.style.display = 'flex'
		target.style.backgroundImage =
			"url('../../src/setInvisibilityVectorOn.png')"
	}
}
