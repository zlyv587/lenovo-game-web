
/**
 * Created by Lzhang on 2017/12/11.
 */
import Swiper from '../../../static/js/swiper.min.js'
import axios from 'axios'
export default {
    name: 'swiper',
    props:["banners","flag","isInstall","detailImages"],
    data() {
    return {
        // isInstall:true
    }
},
computed: {

},
mounted() {
    // // this.home.changeCount();
    //  this.changeCount()
},
methods: {
    getBanners() {
        this.$nextTick(() => {
            if (this.flag == 2) {
            this.swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    stopOnLastSlide: true,
                    delay: 2000,
                    disableOnInteraction: false,
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        } else if(this.flag==3){
            var galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    stopOnLastSlide: true,
                    delay: 2000,
                    disableOnInteraction: false,
                },
                //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                touchRatio: 0.2,
                loop: true,
                // loopedSlides: 4, //looped slides should be the same
                slideToClickedSlide: true,
                centeredSlides: true,
                slidesPerView: 'auto',
            });
            galleryTop.controller.control = galleryThumbs;
            galleryThumbs.controller.control = galleryTop;
        }else if(this.flag==1){
            this.swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    //stopOnLastSlide: true,
                    delay: 2000,
                    disableOnInteraction: false,
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }else{
            var gameBanner=new Swiper('.gameBanner',{
                autoplay: {
                    delay: 8000,
                  // disableOnInteraction: false,
                },
                    loop : true,
                    //loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView:4,
                slidesPerGroup : 4,
            });
           // setInterval("gameBanner.slideNext()", 8000);
        }
    })

},
twoSwiper(c) {
    return 'url(' + c + ') no-repeat center center'
}
},
created() {
    this.getBanners()
}
}