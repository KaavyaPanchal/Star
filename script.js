// Hamburger Menu Toggle
const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');

navButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel Logic
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        item.style.opacity = i === index ? '1' : '0';
    });
}

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});
