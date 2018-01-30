<template>
      <div class="part">
         <div class="left-part">
            <div class="banner">
               <i></i>
               <p>热门游戏</p>
               <p>查看更多</p>
               <div class="clear"></div>
            </div>
            <ul>
               <li v-for="item in hotGameList" :style="{backgroundImage:`url( ${item.poster} )`}">
                  <div class="cover-bottom">
                     <p>{{item.elementName}}</p>
                  </div>
                  <div class="cover-all">
                     <p>{{item.elementName}}</p>
                     <p>{{item.gameElement.albumTitle}}</p>
                     <span>立即下载</span>
                  </div>
               </li>
               <!--<li>-->
                  <!--<div class="cover-bottom">-->
                     <!--<p>阿超最强女主播开团</p>-->
                  <!--</div>-->
                  <!--<div class="cover-all">-->
                     <!--<p>贪玩蓝月</p>-->
                     <!--<p>一刀999级，不删档内测</p>-->
                     <!--<span>立即下载</span>-->
                  <!--</div>-->
               <!--</li>-->
            </ul>
         </div>
         <div class="right-part">
            <div>
               <p>今日开服</p>
               <i class="border"></i>
            </div>
            <ul>
               <li v-for="item in hotGameRanking">
                  <p>{{item.elementName}}</p>
                  <p>{{item.title}}</p>
                  <p>{{item.subTitle}}</p>
               </li>
               <!--<li>-->
                  <!--<p>贪玩蓝月</p>-->
                  <!--<p>40区</p>-->
                  <!--<p class="blue">已开服</p>-->
               <!--</li>-->
            </ul>
         </div>
         <div class="clear"></div>
      </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

