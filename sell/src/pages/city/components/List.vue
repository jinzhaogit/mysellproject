<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<!-- 通过vuex获取公用值 -->
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item in hotCities" :key="item.id"
						@click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<!-- 城市列表 -->
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list border-bottom" v-for="innerItem in item"
					:key="innerItem.id" @click="handleCityClick(innerItem.name)">
					<div class="item">{{innerItem.name}}</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import {mapState,mapMutations} from 'vuex'
	export default{
		name:'CityList',
		props:['hotCities','cities','letter'],
		computed:{
			// 把公共信息city渲染给currentCity变量
			...mapState({
				currentCity:'city'
			})
		},
		methods:{
			handleCityClick(city){
				// 组件通过调用vuex的dispatch方法传值
				// this.$store.dispatch('changeCity',city)
				// 以上方法的高级写法
				this.changeCity(city)
				// 跳转到首页
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		mounted(){
			//实例化scrol插件
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		// 监听父组件根据子组件alphabet传递过来的值
		watch:{
			letter(){
				if(this.letter){
					//传入的参数element必须是一个dom元素，不能是一个数组，通过ref引用信息
					const element=this.$refs[this.letter][0]
					//调用scroll插件api实现监听
					this.scroll.scrollToElement(element,100)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		.title
			line-height:.54rem
			padding-left:.2rem
			background:#eee
			color:#666
			font-size:.26rem
		.button-list
			overflow:hidden
			padding:.1rem .6rem .1rem .1rem
			.button-wrapper
				float:left
				width:33.3%
				.button
					margin:.1rem
					padding:.1rem 0
					text-align:center
					border:.02rem solid #ccc
					border-radius:.06rem
		.item-list
			line-height:.76rem
			color:#666
			padding-left:.2rem
</style>
