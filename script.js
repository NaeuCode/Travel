/** @format */

// Adding sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY >= 75);
});

// Adding Menu Icon 
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//Adding a click event listener to the menu icon
menu.onclick = (e) => {
    //Prevent the Default behavior of the link
    e.preventDefault();

    //Toggle the class "bx-x" on the menu icon
    menu.classList.toggle("bx-x");
    //Toggle the class "open" on the navbar
    navbar.classList.toggle("open");
};

//Selecting all navigation links
let navLinks = document.querySelectorAll(".nav-link");

//Adding an event listener to each navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        //Get the target section's ID from the link's href attribute
        let targetId = link.querySelector("a").getAttribute("href");
        
        //Scroll smoothly to teh target section
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth"});

        // Close the Navbar if it's open 
        if (navbar.classList.contains("open")) {
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("open");
        }
    });
});

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