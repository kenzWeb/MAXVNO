const burger = document.querySelector('.burger__button')
const burgerWrapper = document.querySelector('.burger__wrapper')
const bg = document.querySelector('.bg');

burger.addEventListener('click', () => {
	burgerWrapper.classList.toggle('hidden')
	bg.classList.toggle('bg-black')
})