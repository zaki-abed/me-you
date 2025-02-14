/*
------------------------------------------------
Project: Me & You Driving School  
Author: Heba Skhail  
Description: Styles and scripts for the website  
Last Updated:  
------------------------------------------------

Table of Content:
1. Show/hide the scroll-to-top button on scroll
2. Mobile menu and language dropdown
3. Change header style on scroll

*/

/* ------------------------------------------------ */
/* 1. Show/hide the scroll-to-top button on scroll */
/* ------------------------------------------------ */
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
                easing: 'swing', // استخدم swing كبديل
            }
        );
    });
});


/* ------------------------------------------------ */
/* 2. Mobile menu and language dropdown  */
/* ------------------------------------------------ */
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

/* ------------------------------------------------ */
/* 3. Change header style on scroll */
/* ------------------------------------------------ */
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
  

