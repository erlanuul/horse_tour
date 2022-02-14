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
		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	})
	$('.body-chooseTourBoxSlide').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 3,
		speed: 500,
		easing: 'linear',
		infinite: true,
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
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 3,
					centerMode: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true,
					mobileFirst: true,
					dots: true,
				},
			},
		],
	})
	$('.body-beautifulPlacesBoxSlide').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 3,
		rows: 2,
		slidesPerRow: 1,
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
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
					rows: 2,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					rows: 2,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					rows: 1,
					slidesPerRow: 1,
				},
			},
		],
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
