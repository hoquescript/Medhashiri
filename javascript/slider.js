var slides = document.querySelectorAll('.slider__slide');
var dots = document.querySelectorAll('.slider__dot');
var leftArrow = document.querySelector('.slider__arrow--left');
var rightArrow = document.querySelector('.slider__arrow--right');
var current = 0;

displaySlide();
setInterval(autoSlideChanger, 3000);

function displaySlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].style.backgroundColor = '#eee';
    }
    slides[current].style.display = 'block';
    dots[current].style.backgroundColor = '#BB2522';
}

function autoSlideChanger() {
    if (current >= slides.length) {
        current = 0
    }
    displaySlide();
    current++;
}

leftArrow.addEventListener('click', function () {
    if (current === 0) {
        current = slides.length - 1;
    } else {
        current--;
    }
    displaySlide();
});

rightArrow.addEventListener('click', function () {
    if (current === slides.length - 1) {
        current = 0;
    } else {
        current++;
    }
    displaySlide();
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        current = i;
        displaySlide();
    });
}
