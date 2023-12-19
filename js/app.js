const burger = document.querySelector('.burger__button')
const burgerWrapper = document.querySelector('.burger__wrapper')
const bg = document.querySelector('.bg')
const body = document.querySelector('body')
const burgerItem = document.querySelector('.burger__nav-item')

burger.addEventListener('click', () => {
	burgerWrapper.classList.toggle('hidden')
	bg.classList.toggle('bg-black')
	body.classList.toggle('overflow__hidden')
	burger.classList.toggle('cross')
})

burgerItem.addEventListener('click', () => {
	burgerWrapper.classList.remove('hidden')
	bg.classList.remove('bg-black')
	body.classList.remove('overflow__hidden')
	burger.classList.remove('cross')
})

// Якорь

const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const goto = anchor.hasAttribute('href')
			? anchor.getAttribute('href')
			: 'body'
		document.querySelector(goto).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
