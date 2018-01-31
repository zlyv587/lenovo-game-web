<template>
    <div id="appChoice">
        <v-header></v-header>
        <v-swiper :banners="banners"  flag="1"></v-swiper>
        <v-hotGame :hotGame="hotGame"></v-hotGame>
        <v-typeGame v-for="(item, index) in  defineChildData" :key="index" :options="item"></v-typeGame>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

