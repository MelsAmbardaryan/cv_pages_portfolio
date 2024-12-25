let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Открытие/закрытие меню при клике на иконку
menuIcon.onclick = () => {
    menuIcon.classList.toggle('x'); // Переключение класса "x"
    navBar.classList.toggle('active'); // Переключение состояния меню
};

// Логика скролла
window.onscroll = () => {
    // Активные ссылки в меню
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Закрытие меню и сброс класса "x" при прокрутке
    menuIcon.classList.remove('x');
    navBar.classList.remove('active');
};

// ScrollReveal
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .contact', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img, .services-container, .contact', { origin: "bottom" });

// Typed.js
const typed = new Typed(".multiple-text", {
    strings: ["FrontEnd Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
