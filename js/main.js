'use strict';

const header = document.querySelector('header');
const closeBtn = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const fadeIns = document.querySelectorAll('.fade-in');
const scrollTop = document.querySelector('.scroll-top');
const bannerSection = document.querySelector('#banner');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const openSidebar = () => sidebar.style.right = '0%';
const closeSidebar = () => sidebar.style.right = '-100%';

closeBtn.addEventListener('click', closeSidebar);
hamburgerMenu.addEventListener('click', openSidebar);


// Intersection Observer --------------------------------------------------------------------------

const options = {
    threshold: 1
};

const appearOptions = {
    threshold: 0.8,
    rootMargin: '-100px 0px -100px 0px'
};

const headerObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky'));

}, options);

const scrollObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => !entry.isIntersecting ? scrollTop.style.visibility = 'visible' : scrollTop.style.visibility = 'hidden');

}, options);

let appearObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearObserver.unobserve(entry.target);
        }
    });

}, appearOptions);


headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);
fadeIns.forEach(fadeIn => appearObserver.observe(fadeIn));


// Event Listeners  --------------------------------------------------------------------------

scrollTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
});


// SWIPER --------------------------------------------------------------------------

const testimonialSwiper = new Swiper('#testimonial-swiper', {

    loop: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: 'true'
    }
});


const clientSwiper = new Swiper('#client-swiper', {

    loop: true,
    keyboard: true,
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,

    breakpoints: {
        100: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        680: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 5
        },
        1260: {
            slidesPerView: 7
        }
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});