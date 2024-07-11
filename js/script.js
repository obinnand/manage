const btn = document.getElementById("menu-btn");
const meun = document.getElementById("menu");

btn.addEventListener("click", navToggle);

// Toggle mobile  menu
function navToggle() {
  btn.classList.toggle("open");
  meun.classList.toggle("flex");
  meun.classList.toggle("hidden");
}

const swiper = new Swiper(".swiper", {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 3,
    },
  },
});
