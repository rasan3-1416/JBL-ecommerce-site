/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navToggle = document.getElementById('nav-toggle')
/*======== Menu Show ========*/
/* Validates if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*======== Menu Hide ========*/
/* Validates if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*======== Remove Menu Mobile ========*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    /* When the scroll is greater then 50 viewport height add the blur-header class in header */
    this.scrollY >=50 ? header.classList.add('blur-header'):header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    breakpoints: {
        768: {
            slidePerView: 3,
        }
    }
})
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById('scroll-up')
const scrollUpView = () => {
    // When the scroll is more than 350 viewport height, add the show-scroll class to a tag with the class scroll__up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUpView)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animation repeat 
})
// Home Section
sr.reveal('.home__social')
sr.reveal('.home__title span:nth-child(1)', {origin: 'left', opacity: 1})
sr.reveal('.home__title span:nth-child(3)', {origin: 'right', opacity: 1})
sr.reveal('.home__tooltip, .home__button', {origin: 'bottom'})
// About Section
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__img', {origin: 'right'})
// Favorite Section
sr.reveal('.favorite__container')
// Model Section
sr.reveal('.model__tooltip', {origin: 'right'})
sr.reveal('.model__button', {origin: 'bottom'})
sr.reveal('.sponsor__container', {origin: 'top'})
// Footer Section
sr.reveal('.footer__container', {origin: 'bottom'})