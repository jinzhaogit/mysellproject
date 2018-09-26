<template>
	<div class="mint">
		<!-- 头部标题方块 -->
		<div class="header-fixed">
			景点详情
			<router-link to="/detail/0001">
				<div class="iconfont back-icon header-fixed-back">&#xe624;</div>
			</router-link>
		</div>
		<!-- 入园参考 -->
		<div class="min-main">
			<div class="min-area">
				<div class="min-title">
					<i class="min-title-i"></i>
					<h3 class="min-title-font">入园参考</h3>
				</div>
				<div class="min-desc">
					<b class="min-desc-b">开放时间</b>
					<p class="min-desc-p">
						4月～10月：08:30～17:00开放，16:10停止入园；<br>
						11月～3月：08:30～16:30开放，15:40停止入园；
					</p>
					<b class="min-desc-b">止票时间（含钟表馆、珍宝馆）</b>
					<p class="min-desc-p">
						4月 ~ 10月：16:00止票；<br>
						11月 ~ 3月：15:30 止票；
					</p>
					<b class="min-desc-b">大门票优惠政策</b>
					<p class="min-desc-p">
						1. 大、中、小学学生（不含成人教育、研究生），可凭学生证或学校介绍信购买学生票，每张20元/人。<br>
						2. 60岁以上（含60岁）老年人凭有效证件，门票半价优惠。<br>
						3. 持有本市城乡居民最低生活保障金领取证的人员（凭有效证件），门票半价优惠。<br>4. 离休干部凭离休证，免费参观。<br>
						5. 1.2米以下儿童免票参观。<br>
						6. 残疾人凭残疾人证件，免费参观。<br>
					</p>
					<b class="min-desc-b">钟表馆、珍宝馆票价优惠政策</b>
					<p class="min-desc-p">
						一、特定人群半价优惠票（每人5元），范围包括：<br>
						1. 大、中、小学生，含港、澳、台学生，不含成人教育、研究生（凭学生证或学校介绍信）；<br>2. 6周岁（不含6周岁）至18周岁（含18周岁）未成年人（凭有效身份证件）；<br>
						3. 60周岁以上（含60周岁）老年人（凭有效身份证件）；<br>
					</p>
				</div>
				<div class="min-title">
					<i class="min-title-i"></i>
					<h3 class="min-title-font">特色玩法</h3>
				</div>
				<div class="min-desc">
					<b class="min-desc-b">特色看点</b>
					<img class="min-desc-img" src="http://img1.qunarzz.com/sight/p0/1501/b5/b536539824a83cb3.water.jpg_710x420_f9ffc62d.jpg" alt="">
					<p class="min-desc-p">还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。</p>
					<img class="min-desc-img" src="http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_710x420_7c5911c1.jpg" alt="">
					<p class="min-desc-p">御花园是后宫佳丽和皇帝游玩观赏的地方，园内青翠的松、柏、竹间点缀着山石，形成四季长青的园林景观，体现天人合一的汉族传统文化。</p>
				</div>
				<div class="min-title">
					<i class="min-title-i"></i>
					<h3 class="min-title-font">温馨提示</h3>
				</div>
				<div class="min-desc">
					<b class="min-desc-b">小贴士</b>
					<p class="min-desc-p">1、买票——旅游旺季故宫游者如潮，去哪儿网购买门票可免去排队，普通排队购买门票有时会花去近一个小时。<br>2、证件——去哪儿网购买门票请务必携带好身份证如景区；老人、小孩和学生半价，所以请给位在携带老人小孩来北京前一定带好身份证和（大、中、小）学生证；另外，诸如教师、医生等人最好在旅游时也带着自己的专业职称证书，也许有时就会有用。<br>3、过程——可以在午门前租一个讲解器，不要轻信故宫（包括颐和园等所有景点）门口游荡的所谓“自费导游”。<br></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailMinut"
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/style/varibles.styl'
	.mint>>>.min-title
		padding-left:.3rem
		border-bottom:1px solid #e9e9e9
	.mint>>>.min-title-i
		margin-top:.28rem
		margin-right:.14rem
		float:left
		width:.08rem
		height:.4rem
		background:$bgColor
	.mint>>>.min-title-font
		font-weight:bold
		height:.9rem
		line-height:.9rem
		font-size:.3rem
		color:#212121
	.header-fixed
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
		.header-fixed-back
			position:absolute
			top:0
			left:0
			width:.64rem
			text-align:center
			color:#fff
			font-size:.4rem
	.min-main
		padding-top:1rem
		.min-area
			border-radius:.08rem
			.min-desc
				padding: 0 .3rem
				color:#616161	
				.min-desc-b
					color:#212121
					line-height:.72rem
					font-size:.28rem
					font-weight:bold
				.min-desc-p
					line-height:.46rem	
				.min-desc-img
					width:100%
</style>