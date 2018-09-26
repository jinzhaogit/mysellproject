<template>
	<div>
		<div class="header">
			城市选择
			<router-link to="/">
				<div class="iconfont back-icon header-back">&#xe624;</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'CityHeader',
		data(){
			return{}
		},
		methods:{}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/style/varibles.styl'
	.header
		position:relative
		overflow:hidden
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		color:#fff
		background:$bgColor
		font-size:.32rem
		.header-back
			position:absolute
			top:0
			left:0
			width:.64rem
			text-align:center
			color:#fff
			font-size:.4rem
</style>