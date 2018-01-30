<template>
	<div class="webgame">
		<!--<div class="tab">导航</div>-->
		<Header></Header>
        <vswiper :banners="banners" flag="1"></vswiper>
        <vswiper :banners="banners" flag="4"></vswiper>
        div
		<div class="recommend">
			<div class="title">
				<div class="line"></div>
				<h3>热门推荐</h3>
				<p @click="seeMore()">查看更多</p>
			</div>
			<div class="list">
				<div class="item" v-for="(item,index) in recommends" :key="item.elementId">
					<img :src="item.poster" alt="" />
					<div class="intro">
						<h3>{{item.elementName}}</h3>
						<p>{{item.gameElement.albumTitle}}</p>
						<div><span class="num num-hot">{{index+1}}</span><span>下载次数</span><span class="count">999999999</span></div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->