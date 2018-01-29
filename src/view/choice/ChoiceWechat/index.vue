<template>
      <div class="part">
         <div class="left-part">
            <div class="banner">
               <i></i>
               <p>{{ options.name }}</p>
               <p>查看更多</p>
               <div class="clear"></div>
            </div>
            <ul>
               <li v-for="item in titleList">
                  <div class="cover-bottom">
                     <p>{{item.txt}}</p>
                  </div>
                  <div class="cover-all">
                     <p>贪玩蓝月</p>
                     <p>一刀999级，不删档内测</p>
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
               <p>游戏下载排行</p>
               <i class="border"></i>
            </div>
            <ul>
               <li>
                  <i>1</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>2</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>3</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>4</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>5</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>6</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>7</i>
                  <b></b>
                  <p>贪玩蓝月</p>
                  <span>立即下载</span>
                  <p>90万人在玩</p>
               </li>
               <li>
                  <i>8</i>
                  <b></b>
                  <p>贪玩蓝月</p>
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

