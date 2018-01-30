<template>
    <div id="appChoice">
        <v-header></v-header>
        <!--<v-swiper :style="styleObject"></v-swiper>-->
        <v-hotGame :hotGameList="hotGameList" :hotGameRanking="hotGameRanking"></v-hotGame>
        <!--<v-typeGame v-for="game in titleList" :options="game"  :key = "game.id" :webGameList="webGameList" :webGameRanking="webGameRanking"></v-typeGame>-->
        <v-typeGame :rpgList="rpgList"></v-typeGame>
    </div>

</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

