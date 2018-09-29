<template>
	<div>
		<!-- 头部左侧返回键小圆圈 -->
		<router-link to="/" tag="div" class="header-abs" v-show="showAbs">
			<div class="iconfont back-icon header-icon-abs">&#xe624;</div>
		</router-link>
		<!-- 头部标题方块 -->
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			景点详情
			<router-link to="/">
				<div class="iconfont back-icon header-fixed-back">&#xe624;</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailHander",
		data(){
			return{
				showAbs:true, //控制显示隐藏
				opacityStyle:{ //渐隐渐现变量样式
					opacity:0
				}
			}
		},
		methods:{
			handleScroll(){
				// 取屏幕滚动的scrolltop值
				const top=document.documentElement.scrollTop
				// 如果滚动值大于60就让小圆圈隐藏，导航头出现
				if(top>60){
					// 让透明度随滚动高度慢慢变为1
					let opacity=top/160
					// 如果透明度大于1，就限制
					opacity=opacity>1?1:opacity
					// 对透明度样式进行赋值
					this.opacityStyle={opacity}
					this.showAbs=false
				}else{
					this.showAbs=true
				}
			}
		},
		// 页面全部挂载后
		mounted(){
			// 添加滚动事件监听，调用监听函数handlescroll
			window.addEventListener('scroll',this.handleScroll)
		},
		// 组件即将销毁时
		deactivated(){
			// 对全局滚动事件解绑，避免全局污染
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/style/varibles.styl'
	.header-abs
		position:absolute
		top:.2rem
		left:.2rem
		width:.8rem
		height:.8rem
		line-height:.8rem
		text-align:center
		border-radius:.4rem
		background:rgba(0,0,0,.6)
		.header-icon-abs
			color:#fff
			font-size:.24rem
	.header-fixed
		z-index:699
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
		.header-fixed-back
			position:absolute
			top:0
			left:0
			width:.64rem
			text-align:center
			color:#fff
			font-size:.4rem
</style>
