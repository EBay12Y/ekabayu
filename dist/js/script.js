// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (
    e.target != hamburger &&
    e.target != navMenu &&
    !navMenu.contains(e.target)
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle1 = document.querySelector("#dark-toggle1");
const darkToggle2 = document.querySelector("#dark-toggle2");
const html = document.querySelector("html");

function updateDarkModeStatus(isDarkMode) {
  if (isDarkMode) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
}

darkToggle1.addEventListener("click", function () {
  updateDarkModeStatus(darkToggle1.checked);
  darkToggle2.checked = darkToggle1.checked;
});

darkToggle2.addEventListener("click", function () {
  updateDarkModeStatus(darkToggle2.checked);
  darkToggle1.checked = darkToggle2.checked;
});

// Pindah posisi toggle sesuai mode
if (localStorage.theme === "dark") {
  darkToggle1.checked = true;
  darkToggle2.checked = true;
  html.classList.add("dark");
}

darkToggle1.addEventListener("click", function () {
  updateDarkModeStatus(darkToggle1.checked);
  darkToggle2.checked = darkToggle1.checked;
});

darkToggle2.addEventListener("click", function () {
  updateDarkModeStatus(darkToggle2.checked);
  darkToggle1.checked = darkToggle2.checked;
});
