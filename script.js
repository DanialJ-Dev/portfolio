const imagesToPreload = [
  "./images/celestial-births.jpg",
  "./images/quiz-app-js.jpg",
  "./images/todo-app-js.jpg",
  "./images/social-proof-section.jpg",
  "./images/results-summary-component.jpg",
  "./images/stats-preview-card.jpg",
  "./images/nft-preview-card-component.jpg",
  "./images/blog-preview-card.jpg",
  "./images/profile-card-component.jpg",
  "./images/order-summary.jpg",
];

imagesToPreload.forEach((src) => {
  const img = new Image();
  img.src = src;
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // جلوگیری از بسته شدن فوری منو
    navList.classList.toggle("show");
  });

  navList.addEventListener("click", (e) => {
    e.stopPropagation(); // جلوگیری از بسته شدن هنگام کلیک داخل منو
  });

  document.addEventListener("click", () => {
    navList.classList.remove("show"); // بستن منو وقتی بیرون کلیک شد
  });
});
