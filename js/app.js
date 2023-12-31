const burger = document.querySelector('.burger__button')
const burgerWrapper = document.querySelector('.burger__wrapper')
const bg = document.querySelector('.bg')
const body = document.querySelector('body')
const burgerItem = document.querySelectorAll('.burger__nav-item')

burger.addEventListener('click', () => {
	burgerWrapper.classList.toggle('hidden')
	bg.classList.toggle('bg-black')
	body.classList.toggle('overflow__hidden')
	burger.classList.toggle('cross')
})

burgerItem.forEach((i) => {
	i.addEventListener('click', () => {
		burgerWrapper.classList.add('hidden')
		bg.classList.remove('bg-black')
		body.classList.remove('overflow__hidden')
		burger.classList.remove('cross')
	})
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

// Анимации

function onEntry(entry) {
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add('show')
		}
	})
}

let options = {
	threshold: [0.5],
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.about__wrapper-content')

for (let elm of elements) {
	observer.observe(elm)
}
