// Kuvagalleria (nuolilla selattava)
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}
// Näyttää ensimmäisen kuvan heti, kun sivu latautuu
document.addEventListener("DOMContentLoaded", () => {
    if (totalSlides > 0) {
        slides[0].style.display = "block";
    }
});

function moveSlide(step) {
    slideIndex += step;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlides();
}

document.addEventListener("DOMContentLoaded", updateSlides);

// "Näytä lisää" -painikkeen toiminnallisuus
const showMoreButton = document.getElementById("show-more");
const hiddenList = document.getElementById("hidden-list");

if (showMoreButton) {
    showMoreButton.addEventListener("click", () => {
        if (hiddenList.style.display === "none" || hiddenList.style.display === "") {
            hiddenList.style.display = "block";
            showMoreButton.textContent = "Näytä vähemmän";
        } else {
            hiddenList.style.display = "none";
            showMoreButton.textContent = "Näytä lisää";
        }
    });
}


