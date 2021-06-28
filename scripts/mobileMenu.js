const burgerButton = document.querySelector(".mobile-header__burger");
const burgerContent = document.querySelector(".mobile-header__content");
const wrapper = document.querySelector(".wrapper");

let isMenuOpen = false;

burgerButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    burgerButton.classList.add("active");
    burgerContent.classList.add("active");

    if (!wrapper.classList.contains("mainw")) {
      wrapper.classList.add("wrapper__open");
    }
  }

  if (!isMenuOpen) {
    burgerButton.classList.remove("active");
    burgerContent.classList.remove("active");
    wrapper.classList.remove("wrapper__open");
  }
});
