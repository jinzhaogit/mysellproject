<template>
	<div class="icons">
		<swiper :options="swiperOption">
	   		<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page">
					<router-link to="/goods" tag="div" class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</router-link>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeIcons',
		props:{
			iconList:Array
		},
		data(){
			return{
				swiperOption:{
					autoplay:false
				}
			}
		},
		computed:{
			pages(){
				const pages=[]
				this.iconList.forEach((item,index)=>{
					const page=Math.floor(index/8)//取页数，8个为一页，页码为0,1,2.。。
					if(!pages[page])//如果当前页不存在，就创建一个新的数组页
						pages[page]=[]
					pages[page].push(item)
				})
				return pages//返回一个二维数组
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	// 给swiper容器设图标容器一样的高度
	.icons>>>.swiper-container
		width:100%
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			height:0
			padding-bottom:25%
			.icon-img
				position:absolute
				left:0
				top:0
				right:0
				bottom:.3rem
				padding:.1rem
				box-sizing:border-box
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				line-height:.44rem
				color:$darkTextColor
				text-align:center
				ellipsis()
</style>
