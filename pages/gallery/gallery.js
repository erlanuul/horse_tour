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
	$('.slider__item').on('click', function () {
		let imgs = $(this).parent().parent().parent().attr('data-images')
		let title = $(this).parent().parent().parent().attr('data-title')
		const arr = imgs.split(',')
		// console.log(arr)
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

// function setInvisibility(event) {
// 	let target = event.target
// 	let inviseElem = target.parentNode.nextElementSibling
// 	let checkElem = window.getComputedStyle(inviseElem).display
// 	if (checkElem == 'flex') {
// 		inviseElem.style.display = 'none'
// 		target.style.backgroundImage =
// 			"url('../../src/setInvisibilityVectorOff.png')"
// 	} else if (checkElem == 'none') {
// 		inviseElem.style.display = 'flex'
// 		target.style.backgroundImage =
// 			"url('../../src/setInvisibilityVectorOn.png')"
// 	}
// }
