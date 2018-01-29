<template>
    <div id="appChoice">
        <v-header></v-header>
        <v-swiper :banners="banners"  flag="1"></v-swiper>
        <v-weGame v-for="game in gameList" :options="game"  :key = "game.id" :titleList="titleList"></v-weGame>
        <v-moGame :mobileList="mobileList"></v-moGame>
    </div>

</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

