"use strict";

$(document).ready(function () {
    // Your code here
    scooterTabs()
    galleryTabs()
    beerSwiper()
});

// Your functions here

function beerSwiper() {
    if($(window).width() < 1024) {
        var swiper = new Swiper(".beer__slider-container", {
            slidesPerView: "auto",
            spaceBetween: 0,
        });
    }    
}

function scooterTabs() {
    $('.scooter__btn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-img'),
            content = $('.scooter__img[data-img="' + id + '"]');

        $('.scooter__btn.scooter__btn--active').removeClass('scooter__btn--active');
        $(this).addClass('scooter__btn--active');

        $('.scooter__img.scooter__img--active').removeClass('scooter__img--active');
        content.addClass('scooter__img--active');
    });
}

function galleryTabs() {
    $('.gallery__tabs-btn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-tab'),
            content = $('.gallery__list-sec[data-tab="' + id + '"]');

        $('.gallery__tabs-btn.gallery__tabs-btn--active').removeClass('gallery__tabs-btn--active');
        $(this).addClass('gallery__tabs-btn--active');

        $('.gallery__list-sec.gallery__list-sec--active').removeClass('gallery__list-sec--active');
        content.addClass('gallery__list-sec--active');
    });
}