/** @format */

// Adding sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY >= 75);
});

// Adding Menu Icon 
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

// Image Slider
const initSlider = () => {
  const imageList = document.querySelector(".feature-content");
  const slideButtons = document.querySelectorAll(".slide-button");
  const rows = document.querySelectorAll(".feature-content .row");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  let currentIndex = 0;

  const updateSlider = () => {
    const scrollAmount = rows[currentIndex].offsetLeft - imageList.offsetLeft;
    imageList.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "prev-slide" && currentIndex > 0) {
        currentIndex--;
      } else if (button.id === "next-slide" && currentIndex < rows.length - 1) {
        currentIndex++;
      }
      updateSlider();
      handleSlideButtons();
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };
  handleSlideButtons();

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};
window.addEventListener("load", initSlider);

// adding ScrollUp 
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);