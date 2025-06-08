import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        481: {
            slidesPerView: 5,
            spaceBetween: 5
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 7
        }
    },
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000, // tempo entre slides (em ms)
        disableOnInteraction: false, // continua mesmo se o usuário interagir
    },
    freeMode: true, // movimento livre (sem parar em cada slide)
    freeModeMomentum: false, // sem aceleração nem desaceleração
});
