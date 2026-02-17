document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectsCarousel');
    if (!carousel) return;

    // Set initial height based on active slide
    function setCarouselHeight() {
        const activeItem = carousel.querySelector('.carousel-item.active');
        if (activeItem) {
            const carouselInner = carousel.querySelector('.carousel-inner');
            carouselInner.style.height = activeItem.offsetHeight + 'px';
        }
    }

    // Set height on slide change
    carousel.addEventListener('slide.bs.carousel', function() {
        const nextItem = carousel.querySelector('.carousel-item.active').nextElementSibling || 
                        carousel.querySelector('.carousel-item');
        if (nextItem) {
            const carouselInner = carousel.querySelector('.carousel-inner');
            carouselInner.style.height = nextItem.offsetHeight + 'px';
        }
    });

    // Set initial height
    setCarouselHeight();

    // Recalculate on window resize
    window.addEventListener('resize', setCarouselHeight);
});
