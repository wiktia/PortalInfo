let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const showSlide = (index) => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
};

// Obsługa przycisków
document.querySelector('.carousel-button.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-button.prev').addEventListener('click', prevSlide);

// Automatyczne przewijanie
setInterval(nextSlide, 7000);


//LOGIKA MENU LOGOWANIA I REJSTRACJI
// Elementy
const loginBtn = document.querySelector(".header__cta-button");
const overlay = document.getElementById("authOverlay");
const modal = document.getElementById("authModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const closeButtons = document.querySelectorAll(".auth-close");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");


// Otwórz modal
loginBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

// Zamknij modal
function closeModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

closeButtons.forEach(btn => btn.addEventListener("click", closeModal));
overlay.addEventListener("click", closeModal);

// Przejście do rejestracji
showRegister.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

// Przejście do logowania
showLogin.addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

