document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectsCarousel');
    if (!carousel) return;

    const carouselInner = carousel.querySelector('.carousel-inner');

    // Convert pixels to em
    function pxToEm(px) {
        const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return px / baseFontSize;
    }

    // Set carousel height to match active slide
    function setCarouselHeight() {
        const activeItem = carousel.querySelector('.carousel-item.active');
        if (activeItem) {
            const heightInEm = pxToEm(activeItem.offsetHeight);
            carouselInner.style.minHeight = heightInEm + 'em';
        }
    }

    // Update height after slide transition completes
    carousel.addEventListener('slid.bs.carousel', function() {
        setCarouselHeight();
    });

    // Set initial height
    setCarouselHeight();

    // Recalculate on window resize
    window.addEventListener('resize', setCarouselHeight);

    // Prevent carousel from interfering with link clicks
    carousel.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            e.stopPropagation();
        }
    });
});
