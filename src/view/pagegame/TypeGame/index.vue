<template>
      <div class="part">
         <div class="left-part">
            <div class="banner">
               <i></i>
               <p>{{ options.title }}</p>
               <p @click="seeMore()">查看更多</p>
               <div class="clear"></div>
            </div>
            <ul>
               <li v-for="item in options.list" :style="{backgroundImage:`url( ${item.poster} )`}">
                  <div class="cover-bottom">
                     <p>{{item.elementName}}</p>
                  </div>
                  <div class="cover-all">
                     <p>贪玩蓝月</p>
                     <p>一刀999级，不删档内测</p>
                     <span>立即下载</span>
                  </div>
               </li>
            </ul>
         </div>
         <div class="right-part">
            <div>
               <p>{{options.rankTitle}}</p>
               <i class="border"></i>
            </div>
            <ul>
               <li v-for="(item,index) in options.rank">
                  <i>{{index+1}}</i>
                  <p>{{item.elementName}}</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
            </ul>
         </div>
         <div class="clear"></div>
      </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

