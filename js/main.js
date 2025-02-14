/*
------------------------------------------------
Project: Me & You Driving School  
Author: Heba Skhail  
Description: Styles and scripts for the website  
------------------------------------------------

Table of Content:
1. Show/hide the scroll-to-top button on scroll
2. Mobile menu and language dropdown
3. Change header style on scroll
4. Initialize AOS
5. Initialize VanillaTilt
6. Initialize Swiper for Testimonials
7. Initialize intlTelInput
8. Initialize GLightbox
*/

/* 1. Show/hide the scroll-to-top button on scroll */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').addClass('show').removeClass('hide');
        } else {
            $('.scroll-to-top').addClass('hide').removeClass('show');
        }
    });

    $('.scroll-to-top').click(function () {
        $('html, body').animate(
            { scrollTop: 0 },
            {
                duration: 100,
                easing: 'swing'
            }
        );
    });
});

/* 2. Mobile menu and language dropdown */
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navToggle = document.querySelector('.btn-show-nav');
    const navLinks = mobileMenu.querySelectorAll('a');
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    const icon = navToggle.querySelector("i");
    let isNavVisible = false;

    function toggleNavigation() {
        isNavVisible = !isNavVisible;
        mobileMenu.classList.toggle('active', isNavVisible);
        overlay.classList.toggle('active', isNavVisible);
        if (isNavVisible) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    }

    function hideNavigation() {
        isNavVisible = false;
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

    navToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleNavigation();
    });

    document.addEventListener('click', function (event) {
        if (isNavVisible && !mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
            hideNavigation();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            hideNavigation();
        });
    });
});

/* 3. Change header style on scroll */
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

/* 4. Initialize AOS */
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true, 
        duration: 1000, 
        easing: "ease-in-out", 
        disable: function () {
            return window.innerWidth < 576;
        }
    });
});


/* 5. Initialize VanillaTilt */
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
    speed: 1000,
    glare: true,
    "max-glare": 0.5
});

/* 6. Initialize Swiper for Testimonials */
var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

/* 7. Initialize intlTelInput */
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("#phone");
    if (phoneInput) {
        const iti = window.intlTelInput(phoneInput, {
            initialCountry: "gb",
            preferredCountries: ["gb"],
            excludeCountries: ['IL'],
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.14/js/utils.js"
        });
    }
});

/* 8. Initialize GLightbox */
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = GLightbox({
        selector: ".glightbox"
    });
});

