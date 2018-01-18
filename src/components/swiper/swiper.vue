<template>
    <div class="swiper">
       
        <div class="swiper-container my-swiper">
            <div class="swiper-wrapper">
                <div v-for="(banner,i) in banners" :key="i" class="swiper-slide">
                    <img :src="banner.url" alt="">
                </div>
            </div>    

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>            
        </div>

    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

