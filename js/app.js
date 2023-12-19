const burger = document.querySelector('.burger__button')
const burgerWrapper = document.querySelector('.burger__wrapper')
const bg = document.querySelector('.bg')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
	burgerWrapper.classList.toggle('hidden')
	bg.classList.toggle('bg-black')
	body.classList.toggle('overflow__hidden')
	burger.classList.toggle('cross')
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
