<template>
      <div class="part">
         <div class="left-part">
            <div class="banner">
               <i></i>
               <p>手游</p>
               <p>查看更多</p>
               <div class="clear"></div>
            </div>
            <ul>
               <li v-for="item in mobileGameList">
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
               <!--<li>-->
                  <!--<div></div>-->
                  <!--<div>-->
                     <!--<h2>魔兽世界</h2>-->
                     <!--<p>开局一把刀刀刀</p>-->
                  <!--</div>-->
                  <!--<div  class="cover-all">-->
                     <!--<p>魔兽世界</p>-->
                     <!--<span>安装</span>-->
                  <!--</div>-->
               <!--</li>-->
            </ul>
         </div>
         <div class="right-part">
            <div>
               <p>手游</p>
               <i class="border"></i>
            </div>
            <ul>
               <li v-for="(item,index) in mobileGameRanking">
                  <i>{{index+1}}</i>
                  <b :style="{backgroundImage:`url( ${item.poster} )`}"></b>
                  <p>{{item.elementName}}</p>
                  <span>立即下载</span>
                  <p>{{item.title}}</p>
               </li>
               <!--<li>-->
                  <!--<i>2</i>-->
                  <!--<b></b>-->
                  <!--<p>贪玩蓝月</p>-->
                  <!--<span>立即下载</span>-->
                  <!--<p>90万人在玩</p>-->
               <!--</li>-->
            </ul>
         </div>
         <div class="clear"></div>
      </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

