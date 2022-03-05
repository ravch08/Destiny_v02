'use strict';

const header = document.querySelector('header');
const closeBtn = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const scrollTop = document.querySelector('.scroll-top');
const bannerSection = document.querySelector('#banner');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const openSidebar = () => {
    sidebar.style.right = '0%';
};

const closeSidebar = () => {
    sidebar.style.right = '-100%';
};

closeBtn.addEventListener('click', closeSidebar);
hamburgerMenu.addEventListener('click', openSidebar);


// Event Listeners  --------------------------------------------------------------------------

const options = {
    threshold: 1
};

const headerObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        };
    });
}, options);

const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            scrollTop.style.opacity = '1';
        } else {
            scrollTop.style.opacity = '0';
        };
    });
}, options);


headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);














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