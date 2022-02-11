window.addEventListener('scroll', function () {
	let header__navbar = document.getElementById('header__navBar')
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
})
///////////////////////////////////////
window.onload = () => {
	let header__navbar = document.getElementById('header__navBar')
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
}
///////////////////////////////////////
$(document).ready(function () {
	$('.mainButton').on('click', event => {
		let modalPayBox = document.querySelector('.modalPayBox')
		let checkElem = window.getComputedStyle(modalPayBox).visibility
		if (checkElem == 'hidden') {
			modalPayBox.style.visibility = 'visible'
		}
	})
	$('.modalPayBox__closeButton').on('click', () => {
		let modalPayBox = document.querySelector('.modalPayBox')
		let checkElem = window.getComputedStyle(modalPayBox).visibility
		if (checkElem == 'visible') {
			modalPayBox.style.visibility = 'hidden'
		}
	})
	$('.infobox-item__setInviseVector').on('click', event => {
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
	})
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
