let slideIndex = 0;
let slideInterval;

function plusSlides(n) {
  clearTimeout(slideInterval);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(slideInterval);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  slideInterval = setTimeout(() => plusSlides(1), 3000); // Cambia la imagen cada 3 segundos
}

// Iniciar la presentación de diapositivas cuando la página carga
window.onload = function () {
  showSlides(slideIndex);
};

