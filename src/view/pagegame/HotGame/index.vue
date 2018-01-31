<template>
      <div class="part">
         <div class="left-part">
            <div class="banner">
               <i></i>
               <p>{{hotGame.title}}</p>
               <p @click="seeMore()">查看更多</p>
               <div class="clear"></div>
            </div>
            <ul>
               <li v-for="item in hotGame.list" :style="{backgroundImage:`url( ${item.poster} )`}">
                  <div class="cover-bottom">
                     <p>{{item.elementName}}</p>
                  </div>
                  <div class="cover-all">
                     <p>{{item.elementName}}</p>
                     <p>{{item.gameElement.albumTitle}}</p>
                     <span>立即下载</span>
                  </div>
               </li>
            </ul>
         </div>
         <div class="right-part">
            <div>
               <p>{{hotGame.rankTitle}}</p>
               <i class="border"></i>
            </div>
            <ul>
               <li v-for="item in hotGame.rank">
                  <p>{{item.elementName}}</p>
                  <p>{{item.title}}</p>
                  <p>{{item.subTitle}}</p>
               </li>
            </ul>
         </div>
         <div class="clear"></div>
      </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

