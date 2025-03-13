let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

slides.forEach((slide, index) => {
    if (index === 0) {
        slide.style.display = "block"; // Näytä ensimmäinen kuva
    } else {
        slide.style.display = "none";  // Piilota muut kuvat
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

