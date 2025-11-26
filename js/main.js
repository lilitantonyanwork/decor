var swiper = new Swiper(".best__slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1,  },  // мобильный
        600: { slidesPerView: 2,  },  // планшет
        800: { slidesPerView: 3 }, // десктоп
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper1 = new Swiper(".application__right", {
    slidesPerView: 4,
    spaceBetween: 32,
    breakpoints: {
        0: { slidesPerView: 1,  },  // мобильный
        600: { slidesPerView: 2,  },  // планшет
        800: { slidesPerView: 4 }, // десктоп
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".partner__list", {
    slidesPerView: 6,
    spaceBetween: 32,
    breakpoints: {
        0: { slidesPerView: 1.8,  },  // мобильный
        600: { slidesPerView: 2,  },  // планшет
        800: { slidesPerView: 6 }, // десктоп
    },

});
var swiper3 = new Swiper(".history__list", {
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
        el: ".history__line",
        clickable: true,
        renderBullet: function (index, className) {

            return '  <div class="history__item ' + className + '">' + (2020 + index) + "</div>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

document.addEventListener('DOMContentLoaded', () => {
    console.log('aaaa')
    const menu_btn = document.querySelector('.btn__menu');
    const menu = document.querySelector('.menu');
    const btn_filter =document.querySelector('.btn__filter');
    const btn_sort =document.querySelector('.btn__sort');
    const sort =document.querySelector('.filter__top--sort');
    const filter =document.querySelector('.filter');
    const filter_close =document.querySelector('.btn__filter--close');
    const modal =document.querySelector('.modal');
    const modal_open =document.querySelector('.modal__open');
    const modal_close =document.querySelector('.btn__close');
    const hint =document.querySelector('.hint');
    const btn__size =document.querySelectorAll('.btn__size');
    const has_hint =document.querySelector('.has-hint');
    const close_hint =document.querySelector('.btn__close-hint');

    menu_btn.addEventListener('click', function () {
        menu.classList.toggle('open');
        menu_btn.classList.toggle('open');
    });
    if(modal) {
        modal_open.addEventListener('click', function () {
            modal.classList.toggle('open');

        });
    }
    if(modal) {
        modal_open.addEventListener('click', function () {
            modal.classList.toggle('open');

        });
    }
    if(btn__size) {
        btn__size.forEach((button,i)=>{
            button.addEventListener('click', function (e){
                e.preventDefault();
                btn__size.forEach((b,i)=>{
                    b.classList.remove('selected');
                })
                button.classList.add('selected');
            });
        })
    }
    if(close_hint) {
        close_hint.addEventListener('click', function () {
            hint.classList.toggle('open');

        });
    }
    if(modal) {
        modal_close.addEventListener('click', function () {
            modal.classList.toggle('open');

        });
    }
    if(btn_filter){
        btn_filter.addEventListener('click', function () {
            filter.classList.toggle('open');
            btn_filter.classList.toggle('open');
        });
    }
    if(btn_sort) {
        btn_sort.addEventListener('click', function () {
            sort.classList.toggle('open');
            btn_sort.classList.toggle('open');
        });
    }
    if(filter_close) {
        filter_close.addEventListener('click', function () {
            filter.classList.toggle('open');
            btn_filter.classList.toggle('open');
        });
    }
});