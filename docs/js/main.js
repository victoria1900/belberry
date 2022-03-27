var swiper = new Swiper(".special-offers-content", {
    spaceBetween:15,
    slidesPerView: 1.2,
    navigation: {
        nextEl: ".special-offers-content-button-next",
        prevEl: ".special-offers-content-button-prev",
    },
    breakpoints: {
        // when window width is >= 992px
        992: {
            slidesPerView: 1,
            spaceBetween: 30
        },
    }
});