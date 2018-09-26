<template>
	<div class="card">
		<!-- 头部标题方块 -->
		<div class="card-header">
			必游景点推荐
			<router-link to="/">
				<div class="iconfont back-icon card-header-back">&#xe624;</div>
			</router-link>
		</div>
		<!-- 景点 -->
		<div class="card-con">
			<div class="card-main" v-for="item in cardList" :key="item.id">
				<div class="card-img">
					<img :src="item.imgUrl" >
				</div>
				<div class="card-item">
					<p class="cart-title">
						{{item.title}}
						<span class="card-price">￥<em>{{item.price}}</em>起</span>
					</p>
					<p class="card-desc">{{item.desc}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:"Card",
		data(){
			return{
				cardList:[]
			}
		},
		methods:{
			getCardList(){
				axios.get('/api/card.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.handleGetListSucc)
			},
			handleGetListSucc(res){
				res=res.data
				if(res.ret&&res.data){
					console.log(res.data)
					this.cardList=res.data.cardList
				}
				
			}
		},
		mounted(){
			this.getCardList()
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.card-header
		z-index:3
		position:fixed
		top:0
		right:0
		left:0
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		color:#fff
		background:$bgColor
		font-size:.32rem
		.card-header-back
			position:absolute
			top:0
			left:0
			width:.64rem
			text-align:center
			color:#fff
			font-size:.4rem
	.card-con
		padding-top:.86rem
		.card-main
			position:relative
			background:#fff
			margin-bottom:.2rem
			.card-img
				overflow:hidden
				width:100%
				height:0
				padding-bottom:	40%
				img
					width:100%
			.card-item
				position:relative
				padding:.14rem .2rem .24rem .2rem
				.cart-title
					color:#212121
					font-size: .4rem
					line-height:.64rem
					.card-price
						float:right
						color:#ff8300
						font-size:.18rem
						em
							font-size:.4rem
							padding:0 .06rem
				.card-desc
					color:#616161
					font-size:.26rem
					line-height:.45rem
					padding-top:.1rem
			
			
</style>