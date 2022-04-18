import Swiper from 'swiper';
import 'swiper/css';

const swiper = () =>{


    const swiper = new Swiper('.catalog-slider', {
        mousewheel: true,
        cssMode: true,
        keyboard: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}
export default swiper;
