<template>
	<div>
		<div class="item" v-for="(item,index) in list" :key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>

			<!-- 递归调用：自己调用自己组件，组件名为name值 -->
			<div class="item-child" v-if="item.children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
		<div class="item-content">
			<div class="item-desc">
				<p class="item-desc-p">
					当日票 故宫成人票凭身份证入园（随买随用，快速入园）
				</p>
				<ul class="item-desc-ul">
					<li>自营</li>
					<li>无需换票</li>
					<li>条件退</li>
				</ul>
			</div>
			<router-link tag="div" to="/user/login" class="item-price">
				<span class="item-price-span">￥</span>60
				<div class="item-price-btn">预定</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailList",
		props:['list']
	}
</script>
<style lang="stylus" scoped>
  .info >>> .header-comment
    display none
	.item-title-icon
	    display: inline-block
	    position: relative
	    width: .36rem
	    height: .36rem
	    top: .06rem
	    left: .06rem
	    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
	    margin-right: .1rem
	    background-size: .4rem 3rem
	.item-title
		line-height:.8rem
		font-size:.32rem
		padding:0 .2rem
	.item-child
		padding:0 .2rem
	.item-content
		display:flex
		.item-desc
			width:60%
			height:0
			padding-bottom:2rem
			border-bottom:1px solid #e9e9e9
			padding-left:.6rem
			.item-desc-p
				font-size:.3rem
				color:#616161
				line-height:.55rem
			.item-desc-ul
				list-style:none
				padding-top:.3rem
				li
					float:left
					padding: 0.06rem .2rem
					border: 1px solid #a5e4ec
					color:#00afc7
					height:.32rem
		.item-price
			padding: .4rem 0 0 .5rem
			color:#ff9800
			font-size:.4rem
			text-align:center
			.item-price-span
				font-size:.2rem
			.item-price-btn
				width:1.52rem
				height:.6rem
				background-image:-webkit-linear-gradient(-60deg,#ffab1e 37%,#ff8c12 100%)
				color:#fff
				font-size:.3rem
				text-align:center
				line-height:.6rem
				border-radius:.1rem


</style>
