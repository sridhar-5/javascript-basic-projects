// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const togglebutton = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

togglebutton.addEventListener("click", NavBarActive);

function NavBarActive() {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
}
