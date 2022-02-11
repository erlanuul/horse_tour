window.onload = () => {
	let header__navbar = document.getElementById('header__navBar')
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
}
//////////////////////////////////
window.addEventListener('scroll', function () {
	let header__navbar = document.getElementById('header__navBar')
	let event = window.scrollY
	if (event >= 0 && event < 50) {
		header__navbar.style.backgroundColor = 'transparent'
	} else if (scrollY >= 50) {
		header__navbar.style.backgroundColor = '#0066FF'
	}
})

//////////////////////////////////
window.addEventListener('click', () => {
	let itemToSHow = document.getElementById('modalSliderBox')
	let itemToPrevent = document.querySelector('.modalSliderBox__invisibleSlider')
	let checkElem = window.getComputedStyle(itemToSHow).visibility
	itemToSHow.addEventListener('click', () => {
		if (checkElem == 'visible') {
			itemToSHow.style.visibility = 'hidden'
		}
	})
	itemToPrevent.addEventListener('click', e => {
		e.preventDefault()
		e.stopPropagation()
		e.stopImmediatePropagation()
		return false
	})
})
//////////////////////////
$(document).ready(function () {
	$('.slider__item').on('click', function () {
		let imgs = $(this).parent().parent().parent().attr('data-images')
		let title = $(this).parent().parent().parent().attr('data-title')
		const arr = imgs.split(',')
		$.each(arr, function (index, value) {
			let html = ''
			html += '<div class="invisibleSlider__item" style="background-image: url('
			html += value
			html += ');" >'
			html += '<div class="invisibleSlider__itemShadow">'
			html += `<h1 class="invisibleSlider__itemText">${title}</h1>`
			html += '</div>'
			html += '</div>'
			$('.modalSliderBox__invisibleSlider').slick('slickAdd', html)
		})
		let itemToSHow = document.querySelector('.modalSliderBox')
		let checkElem = window.getComputedStyle(itemToSHow).visibility
		if (checkElem == 'hidden') {
			itemToSHow.style.visibility = 'visible'
		}
	})
	//////////////////////////
	$('.gallery__slider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 5,
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
	//////////////////////////
	$('.modalSliderBox__invisibleSlider').slick({
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
