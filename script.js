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
