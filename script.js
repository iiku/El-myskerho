let slideIndex = 0;
const slides = document.querySelectorAll(".gallery-slider img");
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((img, index) => {
        img.style.display = (index === slideIndex) ? "block" : "none";
        img.style.width = "100%";
        img.style.maxWidth = "400px";
        img.style.height = "auto";
    });
}

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

// Näytä lisää -painikkeen toiminnallisuus
const showMoreButton = document.getElementById("show-more");
const hiddenList = document.getElementById("hidden-list");

showMoreButton.addEventListener("click", () => {
    if (hiddenList.style.display === "none" || hiddenList.style.display === "") {
        hiddenList.style.display = "block";
        showMoreButton.textContent = "Näytä vähemmän";
    } else {
        hiddenList.style.display = "none";
        showMoreButton.textContent = "Näytä lisää";
    }
});


