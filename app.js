const navToggle = document.querySelector(".nav-toggle");
const menuIcon = document.getElementById("menu-icon");
const links = document.querySelector(".nav-links");
const icons = document.querySelector(".social-icons");

const toggleClass = (item) => {
  if (item === links) {
    links.classList.toggle("show-links");
  }

  if (item === icons) {
    icons.classList.toggle("show-icons");
  }
};

const changeIcon = () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
  }
};

navToggle.addEventListener("click", () => {
  toggleClass(links);
  toggleClass(icons);
  changeIcon();
});
