<template>
	<div class="container">
		<div class="location-top border-topbottom">
			<router-link to="/bmap" tag="div" class="location-item border-leftright">
				<i class="iconfont">&#xe6d1;</i>
				定位失败
			</router-link>
			<router-link to="/water" tag="div" class="location-item">
				<i class="iconfont">&#xe61d;</i>
				玩水季
			</router-link>
		</div>
		<router-link to="/goods" tag="div" class="location-bottom border-topbottom">
			<img class="location-img" src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png">
		</router-link>
	</div>
</template>
<script>
	export default{
		name:'HomeLocation'
	}
</script>
<style lang="stylus" scoped>
	.border-topbottom
		&:before
			border-color:#e0e0e0
		&:after
			border-color:#e0e0e0;
	.location-top
		display:flex
		margin-top:.26rem
		.location-item
			flex:1
			padding:.2rem
			text-align:center
			line-height:.46rem
			font-size:.28rem
		.border-leftright
			border-right:1px solid #e0e0e0
	.location-bottom
		margin-top:.2rem
		text-align:center
		.location-img
			height:1.4rem
</style>
