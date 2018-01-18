/**
 * Created by Lzhang on 2017/12/11.
 */

import Swiper from 'swiper'
import axios from 'axios'

export default {
    name:'swiper',
    data () {
        return {
            banners:[]
        }
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()      
    },
    methods: {
        getBanners(){
            axios.get("/static/json/banners.json").then((res)=>{
                // console.log(res.data)
                this.banners = res.data;
                this.$nextTick(() => {
                    this.swiper = new Swiper('.swiper-container', {
                        pagination: {
                            el: '.swiper-pagination',
                            clickable :true
                        },
                        autoplay:{
                            stopOnLastSlide:true,
                            delay:1000,
                            disableOnInteraction: false,
                        },
                        loop:true,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },      
                    })
                })    
            })
        }
    },
    created(){
        this.getBanners()
    }
}







