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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
