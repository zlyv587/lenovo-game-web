<template>
      <div class="part">
         <div class="left-part">
            <div class="banner">
               <i></i>
               <p>{{mobileGame.title}}</p>
               <p @click="seeMore()">查看更多</p>
               <div class="clear"></div>
            </div>
            <ul>
               <li v-for="item in mobileGame.list">
                  <div :style="{backgroundImage:`url( ${item.poster} )`}"></div>
                  <div>
                     <h2>{{item.elementName}}</h2>
                     <p>{{item.title}}</p>
                  </div>
                  <div  class="cover-all">
                     <p>{{item.elementName}}</p>
                     <span>安装</span>
                  </div>
               </li>
            </ul>
         </div>
         <div class="right-part">
            <div>
               <p>{{mobileGame.rankTitle}}</p>
               <i class="border"></i>
            </div>
            <ul>
               <li v-for="(item,index) in mobileGame.rank">
                  <i>{{index+1}}</i>
                  <b :style="{backgroundImage:`url( ${item.poster} )`}"></b>
                  <p>{{item.elementName}}</p>
                  <span>立即下载</span>
                  <p>{{item.title}}</p>
               </li>
            </ul>
         </div>
         <div class="clear"></div>
      </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

