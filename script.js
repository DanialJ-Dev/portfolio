
    document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // جلوگیری از بسته شدن فوری منو
        navList.classList.toggle('show');
    });

    navList.addEventListener('click', (e) => {
        e.stopPropagation(); // جلوگیری از بسته شدن هنگام کلیک داخل منو
    });

    document.addEventListener('click', () => {
        navList.classList.remove('show'); // بستن منو وقتی بیرون کلیک شد
    });
});