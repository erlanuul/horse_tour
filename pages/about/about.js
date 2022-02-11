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
