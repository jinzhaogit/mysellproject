<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
			    <swiper-slide v-for="(item,index) in imgs" :key="index">
			    	<img class="gallary-img" :src="item">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default{
		name:"CommonGallary",
		props:{
			imgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				swiperOption:{
					// 增加页数显示
					pagination : '.swiper-pagination',
					// 显示类型
					paginationType : 'fraction',
					// 当Swiper的父元素变化时，Swiper更新
					observeParents:true,
					// 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
					observer:true
				}
			}
		},
		methods:{
			handleGallaryClick(){
				// 向父元素添加关闭事件
				this.$emit('close')
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content:center
		position:fixed
		z-index:199
		left:0
		right:0
		top:0
		bottom:0
		background:#000
		.wrapper
			height:0
			padding-bottom:100%
			width:100%
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem
</style>
