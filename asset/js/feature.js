let currentSlide = 0;
const slides = document.querySelectorAll('.feature-slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);