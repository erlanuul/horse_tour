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
