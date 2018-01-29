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
               <li v-for="item in mobileList">
                  <div></div>
                  <div>
                     <h2>{{item.name}}</h2>
                     <p>{{item.txt}}</p>
                  </div>
                  <div  class="cover-all">
                     <p>{{item.name}}</p>
                     <span>{{item.isa}}</span>
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
               <li v-for="item in mobileList">
                  <i>1</i>
                  <b></b>
                  <p>{{item.name}}</p>
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
            </ul>
         </div>
         <div class="clear"></div>
      </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

