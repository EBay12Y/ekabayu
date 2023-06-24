// Pesan Untuk Hacher
console.log(`
██╗░░██╗░█████╗░░█████╗░██╗░░██╗███████╗██████╗░
██║░░██║██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗
███████║███████║██║░░╚═╝█████═╝░█████╗░░██████╔╝
██╔══██║██╔══██║██║░░██╗██╔═██╗░██╔══╝░░██╔══██╗
██║░░██║██║░░██║╚█████╔╝██║░╚██╗███████╗██║░░██║
╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝

░░░░░██╗░█████╗░███╗░░██╗░██████╗░░█████╗░███╗░░██╗
░░░░░██║██╔══██╗████╗░██║██╔════╝░██╔══██╗████╗░██║
░░░░░██║███████║██╔██╗██║██║░░██╗░███████║██╔██╗██║
██╗░░██║██╔══██║██║╚████║██║░░╚██╗██╔══██║██║╚████║
╚█████╔╝██║░░██║██║░╚███║╚██████╔╝██║░░██║██║░╚███║
░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝

███╗░░░███╗███████╗███╗░░██╗██╗░░░██╗███████╗██████╗░░█████╗░███╗░░██╗░██████╗░██╗
████╗░████║██╔════╝████╗░██║╚██╗░██╔╝██╔════╝██╔══██╗██╔══██╗████╗░██║██╔════╝░██║
██╔████╔██║█████╗░░██╔██╗██║░╚████╔╝░█████╗░░██████╔╝███████║██╔██╗██║██║░░██╗░██║
██║╚██╔╝██║██╔══╝░░██║╚████║░░╚██╔╝░░██╔══╝░░██╔══██╗██╔══██║██║╚████║██║░░╚██╗╚═╝
██║░╚═╝░██║███████╗██║░╚███║░░░██║░░░███████╗██║░░██║██║░░██║██║░╚███║╚██████╔╝██╗
╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝`);

// Tampilkan loader
const showLoader = () => {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";
};

// Sembunyikan loader
const hideLoader = () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
};

// Memulai perhitungan waktu
const startTime = performance.now();

// Event handler saat seluruh konten telah dimuat
window.onload = () => {
  // Menghitung waktu yang dibutuhkan untuk memuat konten
  const endTime = performance.now();
  const loadTime = endTime - startTime;

  // Menentukan waktu minimum tampilan loader (2 detik)
  const minLoaderTime = 2000;

  // Menampilkan loader minimal selama 2 detik atau sesuai dengan waktu yang dibutuhkan untuk memuat konten
  if (loadTime < minLoaderTime) {
    const remainingTime = minLoaderTime - loadTime;
    setTimeout(hideLoader, remainingTime);
  } else {
    hideLoader();
  }
};

// Contoh penggunaan
showLoader();

// Navbar Fixed
window.onscroll = () => {
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

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", (e) => {
  if (
    e.target !== hamburger &&
    e.target !== navMenu &&
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

const updateDarkModeStatus = (isDarkMode) => {
  if (isDarkMode) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
};

darkToggle1.addEventListener("click", () => {
  updateDarkModeStatus(darkToggle1.checked);
  darkToggle2.checked = darkToggle1.checked;
});

darkToggle2.addEventListener("click", () => {
  updateDarkModeStatus(darkToggle2.checked);
  darkToggle1.checked = darkToggle2.checked;
});

// Pindah posisi toggle sesuai mode
if (localStorage.theme === "dark") {
  darkToggle1.checked = true;
  darkToggle2.checked = true;
  html.classList.add("dark");
}

darkToggle1.addEventListener("click", () => {
  updateDarkModeStatus(darkToggle1.checked);
  darkToggle2.checked = darkToggle1.checked;
});

darkToggle2.addEventListener("click", () => {
  updateDarkModeStatus(darkToggle2.checked);
  darkToggle1.checked = darkToggle2.checked;
});

const texts = ["kenapa harus saya?", "saya juga bisa dong (:"]; // Array berisi teks yang ingin ditampilkan secara bergantian
const typingDelay = 100; // Delay antara pengetikan setiap karakter
const erasingDelay = 50; // Delay antara penghapusan setiap karakter
const newTextDelay = 2000; // Delay sebelum teks baru muncul setelah selesai mengetik atau menghapus
const pauseDelay = 2000; // Jeda setelah selesai mengetik sebelum menghapus

let textIndex = 0; // Indeks teks saat ini dalam array texts
let charIndex = 0; // Indeks karakter saat ini dalam teks yang sedang ditampilkan
let isDeleting = false; // Menandakan apakah dalam mode penghapusan karakter

const typedTextElements = [
  document.getElementById("typed-text-1"),
  document.getElementById("typed-text-2")
];

const type = () => {
  const text = texts[textIndex]; // Mendapatkan teks yang sedang ditampilkan
  const char = text[charIndex]; // Mendapatkan karakter saat ini dalam teks

  typedTextElements.forEach((typedTextElement) => {
    if (isDeleting) {
      typedTextElement.textContent = text.substring(0, charIndex - 1);
    } else {
      typedTextElement.textContent = text.substring(0, charIndex + 1);
    }
  });

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
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, typingDelay);
});