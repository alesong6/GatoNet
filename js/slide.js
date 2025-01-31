document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#main-slider', {
        type   : 'loop',
        autoplay: true,
        interval: 3000,
        speed: 800,
        pagination: true,
        arrows: true,
    });

    splide.mount();
});
