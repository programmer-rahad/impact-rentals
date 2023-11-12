// Global Varilables
var body = document.body;
var sidebar = document.querySelector('header aside');
var headerForm = document.querySelector('header nav + form');
var headerSearchIcon = document.querySelector('nav .nav-item:last-child');
var navToggleBtn = document.querySelector('header .navbar-toggler');
var navCloseIcon = document.querySelector('header .close-btn');


document.addEventListener('DOMContentLoaded', function () {
    // Header
    !function () {
        console.log(headerSearchIcon);
        if (!headerSearchIcon) return;
        headerSearchIcon.addEventListener('click', function () {
            if (window.innerWidth >= 992) {
                headerForm.classList.toggle('d-none');
                var src = this.firstElementChild.src;
                this.firstElementChild.src = src.indexOf("search") > -1 ? src.replace('search', 'times') : src.replace('times', 'search')
            }
        });

        // Mobile Navigation 
        navToggleBtn.addEventListener('click', function () {
            sidebar.classList.add('active');
            setTimeout(function () {
                body.style.overflow = 'hidden';
            }, 1000)

        });
        navCloseIcon.addEventListener('click', function () {
            sidebar.classList.remove('active');
            setTimeout(function () {
                body.style.overflow = 'auto';
            }, 1000)
        });



    }();

    // Dropdown Navigation
    var dropdownMenus = document.querySelectorAll('.dropdown-navigation');

    var length = dropdownMenus.length
    for (var i = 0; i < length; i++) {
        dropdownMenus[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let i = 0; i < length; i++) {
                if (this === dropdownMenus[i]) {
                    this.lastElementChild.classList.toggle('d-none');
                } else {
                    dropdownMenus[i].lastElementChild.classList.add('d-none');
                }
            }
        })
    }



});

$(document).ready(function () {
    $('.welcome-video .play-btn').magnificPopup({
        type: 'iframe'
    });
    $('.play-btn').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});