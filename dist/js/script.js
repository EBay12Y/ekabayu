// Tampilkan loader
function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

// Sembunyikan loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Memulai perhitungan waktu
var startTime = performance.now();

// Event listener saat konten telah dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Menghitung waktu yang dibutuhkan untuk memuat konten
  var endTime = performance.now();
  var loadTime = endTime - startTime;

  // Menentukan waktu minimum tampilan loader (2 detik)
  var minLoaderTime = 2000;

  // Menampilkan loader minimal selama 2 detik atau sesuai dengan waktu yang dibutuhkan untuk memuat konten
  if (loadTime < minLoaderTime) {
    var remainingTime = minLoaderTime - loadTime;
    setTimeout(function () {
      hideLoader();
    }, remainingTime);
  } else {
    hideLoader();
  }
});

// Contoh penggunaan
showLoader();

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

const texts = ["kenapa harus saya?", "saya juga bisa kok (:"]; // Array berisi teks yang ingin ditampilkan secara bergantian
const typingDelay = 100; // Delay antara pengetikan setiap karakter
const erasingDelay = 50; // Delay antara penghapusan setiap karakter
const newTextDelay = 2000; // Delay sebelum teks baru muncul setelah selesai mengetik atau menghapus
const pauseDelay = 2500; // Jeda setelah selesai mengetik sebelum menghapus

let textIndex = 0; // Indeks teks saat ini dalam array texts
let charIndex = 0; // Indeks karakter saat ini dalam teks yang sedang ditampilkan
let isDeleting = false; // Menandakan apakah dalam mode penghapusan karakter

const typedTextElement = document.getElementById("typed-text");

function type() {
  const text = texts[textIndex]; // Mendapatkan teks yang sedang ditampilkan
  const char = text[charIndex]; // Mendapatkan karakter saat ini dalam teks

  if (isDeleting) {
    typedTextElement.textContent = text.substring(0, charIndex - 1);
  } else {
    typedTextElement.textContent = text.substring(0, charIndex + 1);
  }

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex++; // Pindah ke teks berikutnya setelah penghapusan selesai

    if (textIndex === texts.length) {
      textIndex = 0; // Kembali ke teks pertama setelah mencapai teks terakhir
    }
  }

  if (!isDeleting && charIndex === text.length) {
    isDeleting = true; // Mengubah mode menjadi penghapusan setelah selesai mengetik
    setTimeout(type, pauseDelay); // Jeda setelah selesai mengetik sebelum menghapus
    return; // Menghentikan eksekusi fungsi saat ini
  }

  const delay = isDeleting ? erasingDelay : typingDelay;

  if (!isDeleting && charIndex === text.length) {
    delay += newTextDelay; // Delay sebelum mengetik teks baru setelah selesai menghapus
  }

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, typingDelay);
});
