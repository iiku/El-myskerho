let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}

// Näyttää ensimmäisen kuvan heti sivun latautuessa
document.addEventListener("DOMContentLoaded", () => {
    if (totalSlides > 0) {
        slides[0].style.display = "block"; // Tämä varmistaa, että ensimmäinen kuva näkyy!
    }
});

// Liikkuminen eteen ja taakse
function moveSlide(step) {
    slideIndex += step;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlides();
}
