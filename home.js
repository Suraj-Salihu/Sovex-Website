function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-100vw"; // Hide sidebar
    } else {
        sidebar.style.left = "0px"; // Show sidebar
    }
}


// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return; // Prevents errors if no slides exist

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    slideIndex += n;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    showSlides();
}