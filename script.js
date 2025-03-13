let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

// Näytä ensimmäinen kuva heti sivun latautuessa
document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        slides[0].style.display = "block"; // Näyttää ensimmäisen kuvan
    }
});

// Liikkuminen eteen ja taakse
function moveSlide(step) {
    slideIndex += step;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
}

