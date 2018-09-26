<template>
	<div>
		<div class="search">
			<!-- 绑定值keyword -->
			<input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
		</div>
		<!-- ref读取DOM元素，show根据是否有关键词来显示和隐藏搜索内容区 -->
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item  border-bottom" v-for="item of list" 
					:key="item.id" @click="handleCityClick(item.name)">
					{{item.name}}
				</li>
				<!-- 如果没有找到关键字则显示提示 -->
				<li class="search-item" v-show="hasNoData">
					没有找到匹配的数据
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import {mapMutations} from 'vuex'
	export default{
		name:'CitySearch',
		props:{
			cities:Object
		},
		data(){
			return{
				keyword:'',
				timer:null,
				list:[]
			}
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
		// 计算有没有找到关键字控制提示信息显示
		computed:{
			hasNoData(){
				return !this.list.length
			}
		},
		watch:{
			// 监听搜索框值
			keyword(){
				// 代码优化
				if(this.timer){
					clearTimeout(this.timer)
				}
				// 如果没有关键字则传值做隐藏
				if(!this.keyword){
					this.list=[]
					return
				}
				this.timer=setTimeout(()=>{
					const result=[]
					// 循环城市列表
					for(let i in this.cities){
						// 循环城市内容对象
						this.cities[i].forEach((value)=>{
							// 判断在内容对象的spell和name属性内容中是否有关键字存在
							if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
								// 有的话加入数组
								result.push(value)
							}
						})
					}
					// 将循环得来的所有数据数组加到list中，提供内容显示
					this.list=result
				},100)
			}
		},
		mounted(){
			// 当搜索出来的内容过多时调用滚动事件插件
			this.scroll = new BScroll(this.$refs.search)
		}
	}
</script>
<style lang="stylus" scoped >
	@import '~styles/varibles.styl'
	.search
		height:.72rem
		padding:0 .1rem
		background:$bgColor
		.search-input
			box-sizing:border-box
			width:100%
			height:.62rem
			padding:0 .1rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
	.search-content
		z-index:1
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		bottom:0
		right:0
		background:#eee
		.search-item
			line-height:.62rem
			padding-left:.2rem
			color:#666
			background:#fff
			
</style>