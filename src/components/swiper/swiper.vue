<!--
   精选+网游 1（有游戏信息介绍）
   页游  2
   游戏内页 3
   游戏广告（四张图一起轮播 有图片信息介绍） 4 精选中的banner广告
   游戏广告（四张图一起轮播 有图片信息介绍） 5 网游中的banner广告
 <!--
    用法：
        1.导入组件 import swiper from '../../components/swiper/swiper';
        2.注册组件 components:{swiper}
        3.页面引入 <swiper :banners="banners"></swiper>
        4、需要在父组件中将tab类型以及传给子组件；
        5.父组件需在data中定义banners,然后将response中相关信息存入（注意字段），以下为必传信息
       banners[
       {
         url:'',轮播图片地址(必传)
         以下字段根据tab类型
         isInstall:''
         gameTitle:'',网游和精选模块游戏信息介绍游戏名称
         gameIntroduce:''网游和精选模块游戏详情介绍
         bannerTitle:''轮播广告底部title 游戏名称
         bannerIntroduce:''轮播广告底部游戏信息介绍
       },
      ...
 ]

 -->
-->
<template>
    <div class="swiper">
        <!-- one 页游-->
        <div class="swiper-container my-swiper" v-if="flag == 2">
            <div class="swiper-wrapper">
                <!--<div  v-for="(banner,i) in banners" :key="i" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(banner)}"></div>-->
                <div v-for="banner in banners" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(banner.url)}"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <!-- two 缩略图 游戏内页-->
        <div class="swiper-container gallery-top swiper-container-horizontal swiper-container-wp8-horizontal" v-if="flag== 3">
            <div class="swiper-wrapper">
                <!-- <div  v-for="(banner,i) in banners" :key="i" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(banner)}"></div>-->
                <div v-for="item in detailImages" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(item)}"></div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div class="swiper-container gallery-thumbs swiper-container-horizontal swiper-container-wp8-horizontal" v-if="flag==3">
            <div class="swiper-wrapper">
                <!-- <div  v-for="(banner,i) in banners" :key="i" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(banner)}"></div>-->
                <div v-for="item in detailImages" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(item)}"></div>
            </div>
        </div>
        <!--three 精选和网游-->
        <div class='game-banner'>
            <div class="swiper-container game-img" v-if="flag == 1">
                <div class="swiper-wrapper">
                    <!-- <div  v-for="(banner,i) in banners" :key="i" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(banner)}"></div>-->
                    <div v-for="banner in banners" class="swiper-slide swiper-slide-active" :style="{background:twoSwiper(banner.url)}"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="swiper-container game-introduce" v-if="flag == 1">
                <div class="swiper-wrapper">
                    <div v-for="banner in banners" class="swiper-slide">
                        <p class='game-title'> 贪玩蓝月</p>
                        <!--<p class="game-title">{{banner.gameTitle}}}</p>-->
                        <!--<p class='game-introduce'>{{banner.gameIntroduce}}}</p>-->
                        <p style="font-size:12px">一刀999级，不删档内测</p>
                        <p style="font-size:12px">火爆开启</p>
                        <div v-if='banner.isInstall==false'class="download-button" @click="download()">
                            立即下载
                        </div>
                        <div style='color:#fff;text-align:center'v-if='banner.isInstall==true' class="download-button" @click="open()">
                            打开
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <!--four 四张图一起轮播 游戏广告-->
        <div class='my-banner'>
        <div class="swiper-container gameBanner" v-if="flag == 4">
            <div class="swiper-wrapper">
                <div v-for="banner in banners"  class="swiper-slide">
                    <img :src="banner.url" alt="" style='display:block'>
                    <div class='banner-introduce'>阿强最强女王者</div>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev" v-if="flag==4"></div>
        <div class="swiper-button-next" v-if="flag==4"></div>
    </div>
        <div class='my-banner'>
            <div class="swiper-container gameBanner" v-if="flag == 5">
                <div class="swiper-wrapper" style="margin-top:20px">
                    <div v-for="banner in banners"  class="swiper-slide" style="margin-left:0.01rem">
                        <img :src="banner.url" alt="" style='display:block'>
                        <div class='banner-introduce'>阿强最强女王者</div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev " v-if="flag==5" style="top:3.5rem;margin-right:2rem"></div>
            <div class="swiper-button-next" v-if="flag==5" style="top:3.5rem"></div>
        </div>

    </div>
</template>

<style lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->