


<template>
    <div class="content">
        <div class="banner">
            <div class="carousel">
                <swiper :flag="flag" :isInstall="isInstall" :detailImages="detailImages"></swiper>
            </div>
            <div class="carousel_info">
                <div class="game-title">
                    <img src="../../assets/carousel_icon.jpg">
                    <span>英雄联盟</span>
                    <!--<span>{{result.gameName}}}</span>-->
                </div>
                <div class="game-introduce-wrap">
                    <div class="game-introduce">
                        <div class="game-option">类型:&nbsp;&nbsp;</div><div class="game-specific">MOBAMOBAMOBAMOBA</div>
                        <!--<div class="game-option">类型:&nbsp;&nbsp;</div><div class="game-specific">{{result.type}}}</div>-->
                    </div>
                    <div class="game-introduce">
                        <div class="game-option">状态:&nbsp;&nbsp;</div><div class="game-specific">正式运营</div>
                    </div>
                    <div class="game-introduce">
                        <div class="game-option">付费模式:&nbsp;&nbsp;</div><div class="game-specific">免费</div>
                        <!--<div class="game-option">付费模式:&nbsp;&nbsp;</div><div class="game-specific">{{result.isFree}}}</div>-->
                    </div>
                    <div class="game-introduce">
                        <div class="game-option">游戏特权:&nbsp;&nbsp;</div><div class="game-specific">高速下载</div>
                    </div>
                    <div class="game-introduce">
                        <div class="game-option">本月下载:&nbsp;&nbsp;</div><div class="game-specific">76次</div>
                    </div>
                </div>
                <!--<div class="dl_btn" v-if="isInstall==false" @click="download(result.downLoadUrl)">立即下载</div>-->
                <div class="dl_btn" v-if="isInstall==false" @click="download(url)">立即下载</div>
                <div class="dl_btn" v-if="isInstall==true" @click="open('http://www.baidu.com')">打开</div>
                <!--<div class="dl_btn" v-if="isInstall==true" @click="open(result.openUrl)">打开</div>-->
            </div>
        </div>
        <div class="game_word">
            <div class="introduce">
                <div class="introduce_top">
                    游戏介绍
                </div>
                <div class="introduce_word">
                    海量风格各异的英雄，丰富、便捷的物品合成系统，游戏内置的匹配、排行和竞技系统， 独创的“召唤师”系统及技能、符文、天赋等系统组
                    合，必将带你进入一个崭新而又丰富多彩的游戏世界。直到二十年前，符文之地才从战乱中解脱。这片大陆上的人民自远古以来就习惯结群
                    而斗，用战争解决纷争。而无论何时，战争的工具始终都是魔法。军队用法术和符文武装自己雄们打造出大部分魔法物品率领部队彼此厮杀。
                    召唤者，瓦罗兰大陆的实际领导者们，他们疯狂使用魔法能量攻击敌人的部队和支持者。他们拥有近乎无限的原始魔法力量使用从未考虑过
                    无止境的滥用魔法会给这片大陆的环境带来怎么样的影响。
                </div>
                <!--<div class="introduce_word">-->
                <!--{{result.detailInfo}}}-->
                <!--</div>-->
            </div>
            <div class="configure">
                <div class="configure_top">
                    配置推荐
                </div>
                <ul class="configure_bt">
                    <li>CPU</li>
                    <li>内存</li>
                    <li>显卡</li>
                    <li>硬盘</li>
                    <li>系统</li>
                </ul>
                <ul class="configure_de">
                    <li>主频3.2HZ以上</li>
                    <li>4MB以上</li>
                    <li>Geforce8800GTX / ATI4580以上</li>
                    <li>8GB剩余空间</li>
                    <li>Windows XP / 7 / 8 / 10</li>
                    <!--<li>{{result.supportPlatform}}}</li>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->