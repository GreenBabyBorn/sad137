const menuListsSub = document.querySelectorAll(".menu__item .menu__list-sub");

menuListsSub.forEach((e) => {
  e.parentElement.classList.contains("clicked")
    ? (e.parentElement.style.maxHeight = e.parentElement.scrollHeight + "px")
    : null;
  e.parentElement.classList.add("has-list-sub");
  e.parentElement
    .querySelector(".menu__link")
    .addEventListener("click", (ev) => {
      if (e.style.maxHeight) {
        e.style.maxHeight = null;
      } else {
        e.style.maxHeight = null;
        e.style.maxHeight = e.scrollHeight + "px";
      }
      e.parentElement.classList.toggle("clicked");
      e.classList.toggle("clicked");
    });
});

// console.log(item);
const button = document.querySelectorAll(".button-burger");
const sidebar = document.querySelector(".sidebar");

button.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");
    sidebar.classList.toggle("active");
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  parallax: true,
  observer: true,
  observeParents: true,
  // autoHeight: true,
  slidesPerView: "auto",
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
