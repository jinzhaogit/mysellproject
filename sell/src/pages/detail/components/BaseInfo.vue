<template>
	<div class="baseinfo">
		<div class="baseinfo-flexbox">
			<router-link to="/comment" class="baseinfo-flexbox-item" tag="div">
				5.0<em>分&nbsp;&nbsp;超赞</em>
				<p>277413条评论 &nbsp;&nbsp;<span>85条攻略</span></p>
				<span class="iconfont icon-left icon">&#xe65a;</span>
			</router-link>
			<router-link tag="div" to="/minute" class="baseinfo-flexbox-item borderLeft">
				<b class="baseinfo-b">景点简介</b>
				<p>开放时间·贴士</p>
				<span class="iconfont icon-right icon">&#xe65a;</span>
			</router-link>
		</div>
		<div class="baseinfo-address">
			<p>
				<i class="iconfont">&#xe6d1;</i>
				 &nbsp;&nbsp;北京市东城区景山前街4号
				<router-link to="/bmap" tag="span" class="iconfont icon-right icon">&#xe65a;</router-link>
			</p>
		</div>
		<div class="baseinfo-inner">
			<p>
				<span class="iconfont icon baseinfo-inner-icon">&#xe649;</span>
				如遇天安门广场戒严，请走故宫两侧
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:"BaseInfo"
	}
</script>
<style lang="stylus" scoped>
	.baseinfo>>>.icon
		font-size:.54rem
		color:#9e9e9e
	.baseinfo
		overflow:hidden
		padding-bottom:3rem
		height:0
		font-size:.28rem
		.baseinfo-flexbox
			position:relative
			display:flex
			justify-content:space-between
			padding:.1rem
			line-height:.5rem
			border-bottom:1px solid #e9e9e9
			border-top-left-radius:5px
			border-top-right-radius:5px
			.baseinfo-flexbox-item
				color:#ff8300
				font-size:.44rem
				.icon-left
					position:absolute
					top:25%
					left:3.3rem
				.icon-right
					position:absolute
					top:25%
					right:.3rem
				.baseinfo-b
					font-size:.26rem
					color:#333
				em
					font-size:.26rem
				p
					font-size:.26rem
					color:#9e9e9e
				a
					color:#9e9e9e
			.borderLeft
				border-left:1px solid #e9e9e9
				padding-left:.43rem
				padding-right:1.3rem
		.baseinfo-address
			padding:.13rem
			line-height:.5rem
			border-bottom:1px solid #e9e9e9
			.icon-right
				float:right
				padding-right:.22rem
		.baseinfo-inner
			background-color:#fff5e5
			color:#ff8300
			line-height:.8rem
			.baseinfo-inner-icon
				float:left
				color:#ff8300
				padding:0 .2rem


</style>
