<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
	    <!-- slides -->
	    <swiper-slide v-for="item in swiperList" :key=item.id>
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		props:{
			swiperList:Array
		},
		data(){
			return {
				swiperOption:{
					autoplay:3000  ,
					pagination:'.swiper-pagination',//设焦点图标
					loop:true //允许重复滚动
				}
			}
		},
		computed:{
			showSwiper(){//避免页面加载前数组为空值焦点标记不在第一个位置
				return this.swiperList.length
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active // 轮播焦点按钮
		background:#fff
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:27%
		background:#eee
		.swiper-img
			width:100%
</style>