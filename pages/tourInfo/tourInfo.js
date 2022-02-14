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

let showItemElem = document.querySelector('.header-showListButton')
showItemElem.addEventListener('click', event => {
	let logoElem = document.querySelector('.header-navBar__logoBox')
	let header = document.querySelector('.header')
	let navList = document.querySelector('.header__navList')
	let target = event.target
	target.style.display = 'none'
	logoElem.style.display = 'none'
	header.style.height = 'min-content'
	navList.style.display = 'flex'
})

let hideItemElem = document.querySelector('.header-hideListButton')
hideItemElem.addEventListener('click', event => {
	let header = document.querySelector('.header')
	let logoElem = document.querySelector('.header-navBar__logoBox')
	let navList = document.querySelector('.header__navList')
	navList.style.display = 'none'
	logoElem.style.display = 'flex'
	showItemElem.style.display = 'flex'
	header.style.height = '60px'
})

window.onresize = function () {
	let event = window.innerWidth
	let logoElem = document.querySelector('.header-navBar__logoBox')
	let navList = document.querySelector('.header__navList')
	let showItemElem = document.querySelector('.header-showListButton')
	let header = document.querySelector('.header')
	if (event > 500) {
		navList.style.display = 'none'
		logoElem.style.display = 'flex'
		showItemElem.style.display = 'none'
		header.style.height = '60px'
	} else {
		showItemElem.style.display = 'flex'
	}
}
