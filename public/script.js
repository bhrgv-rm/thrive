const copy = document.getElementById("copy");
const date = new Date().getFullYear();
copy.innerHTML = date;

function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");

  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}

document
  .getElementById("mobileToggle")
  .addEventListener("click", toggleMobileMenu);

document.querySelectorAll(".nav-link-mobile").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileMenu();
  });
});
document.querySelectorAll(".dropdown-toggle-mobile").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});
