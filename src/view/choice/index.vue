<template>
    <div id="appChoice">
        <v-header></v-header>
        <!--<v-swiper :banners="banners"  flag="1"></v-swiper>-->
        <v-weGame v-for="game in titleList" :options="game"  :key = "game.id" :webGameList="webGameList" :webGameRanking="webGameRanking"></v-weGame>
        <v-swiper :banners="banners"  flag="4"></v-swiper>
        <v-moGame :mobileGameList="mobileGameList" :mobileGameRanking="mobileGameRanking"></v-moGame>
    </div>

</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

