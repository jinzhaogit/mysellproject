<template>
	<div class="comment">
		<!-- 头部标题方块 -->
		<div class="header-comment">
			景点评论
			<router-link to="/detail/0001">
				<div class="iconfont back-icon header-fixed-back">&#xe624;</div>
			</router-link>
		</div>
		<div class="comment-item">
			<p class="comment-star">
				综合评分&nbsp;
				<i class="iconfont comment-icon">
					&#xe610;&#xe610;&#xe610;&#xe610;&#xe610;&nbsp;5.0分
				</i>
			</p>
			<ul class="comment-tagbar">
				<li class="com-tag-active">全部</li>
				<li>好评 276329</li>
				<li>有图 4777</li>
				<li>待改善 1084</li>
				<li>最新 12</li>
				<li>来自订单 271993</li>
				<li>刷身份证入园 5873</li>
			</ul>
			<div class="comment-info" v-for="item in list" :key="item.id">
				<div class="com-info-outer">
					<img class="com-info-img" :src="item.imgUrl" alt="">
					<div class="com-info-name">
						{{item.name}}&nbsp;
						<i class="iconfont comment-icon">
							&#xe610;&#xe610;&#xe610;&#xe610;&#xe610;&nbsp;
						</i>
						<p class="com-info-time">{{item.time}}</p>
					</div>
				</div>
				<div class="com-info-detail" :style="heightStyle">
					{{item.desc}}
				</div>
				<span class="iconfont com-icon-down"
					v-show="iconDownshow"
					@click="getShowStatus"
					>&#xe643;
				</span>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:"DetailHander",
		data(){
			return{
				list:[],
				iconDownshow:true,
				iconhide:true,
				heightStyle:{
					height:'2rem'
				}
			}
		},
		methods:{
			getShowStatus(){
				// 控制下拉按钮让内容高度变化
				this.iconhide=!this.iconhide
				if(!this.iconhide){
					const height='4rem'
					this.heightStyle={height}
				}else{
					const height='2rem'
					this.heightStyle={height}
				}
			},
			getCommentList(){
				axios.get('/api/comment.json').then(this.getCommentSucc)
			},
			getCommentSucc(res){
				res=res.data
				if(res.ret&&res.data){
					this.list=res.data.commentList
				}
			}
		},
		mounted(){
			this.getCommentList()
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.comment>>>.comment-icon
		color:#ffb436
	.header-comment
		z-index:3
		position:absolute
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
	.comment-item
		padding-top:1rem
		color:#313131
		font-size:.28rem
		padding-bottom:.7rem
		border-bottom:.02rem solid #e9e9e9
		.comment-star
			padding-left:.3rem
			padding-bottom:.16rem
			line-height:.4rem
		.comment-tagbar
			overflow:hidden
			height:0
			padding-bottom:1.7rem
			border-bottom: .02rem solid #e0e0e0
			.com-tag-active
				background-image: linear-gradient(135deg,#0fdfff 0,#00cbe6 100%);
				color:#fff
				border:0
				padding:.07rem .14rem
			li
				float:left
				border:.02rem solid #e0e0e0
				padding:.05rem .12rem
				line-height:.4rem
				font-size:.24rem
				border-radius:.08rem
				color:#616161
				margin:0 .08rem .16rem
		.comment-info
			position:relative
			.com-info-outer
				padding-top:.3rem
				margin: .5rem 0 .36rem 0
				color:#9e9e9e
				.com-info-img
					width:.8rem
					height:.8rem
					border-radius:.4rem
				.com-info-name
					position:absolute
					top:0
					left:0
					padding-top:.35rem
					padding-left:1rem
					line-height:.28rem
					.com-info-time
						padding-top:.2rem
			.com-info-detail
				overflow:hidden
				margin-right:.24rem
				margin-bottom:.2rem
				font-size:.28rem
				line-height:.4rem
				height:2rem
				display: -webkit-box;
			  	text-overflow: ellipsis;
			  	-webkit-line-clamp: 5;
			  	-webkit-box-orient: vertical;
			.com-icon-down
				position:absolute
				bottom:-.66rem
				left:44%
				font-size:.5rem
</style>
