const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

if (nextBtn && prevBtn && slides.length > 0) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  setInterval(nextSlide, 5000);
  showSlide(currentSlide);
}
// Đăng nhập
const popup = document.getElementById("loginPopup"); //tạo khung
const btn = document.getElementById("loginBtn");
const closeBtn = document.getElementsByClassName("close")[0]; //x
const emailInput = document.querySelector("#loginPopup input[type='text']");

if (btn && popup && closeBtn) {
  btn.addEventListener("click", () => {
    // mở
    popup.style.display = "block"; // hiệu ứng mở
    popup.classList.add("show");
    if (emailInput) {
      emailInput.focus(); // đưa con trỏ vào email
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    setTimeout(() => (popup.style.display = "none"), 300);
  });

  window.addEventListener("click", (e) => {
    if (e.target == popup) {
      popup.classList.remove("show");
      setTimeout(() => (popup.style.display = "none"), 300);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "block") {
      popup.classList.remove("show");
      setTimeout(() => (popup.style.display = "none"), 300);
    }
  });
}

// Popup Đăng ký
const registerPopup = document.getElementById("registerPopup"); // khung đăng ký
const registerLink = document.querySelector("#loginPopup .popup-footer a"); // "Tạo tài khoản"
const showLoginLink = document.getElementById("showLogin"); // chuyển về đăng nhập
const closeBtns = document.querySelectorAll(".popup .close"); // tất cả dấu X

// Khi bấm "Tạo tài khoản"
registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none";
  registerPopup.style.display = "block";
  registerPopup.classList.add("show");
});

// Khi bấm "Đăng nhập" trong popup Đăng ký
showLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerPopup.style.display = "none";
  popup.style.display = "block";
  popup.classList.add("show");
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.remove("show");
    setTimeout(() => {
      btn.parentElement.parentElement.style.display = "none";
    }, 300);
  });
});

window.addEventListener("click", (e) => {
  if (e.target === registerPopup) {
    registerPopup.classList.remove("show");
    setTimeout(() => (registerPopup.style.display = "none"), 300);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && registerPopup.style.display === "block") {
    registerPopup.classList.remove("show");
    setTimeout(() => (registerPopup.style.display = "none"), 300);
  }
});
