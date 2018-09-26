<template>
	<ul class="footer">
		<li>
			<i class="iconfont">&#xe63c;</i>机票
		</li>
		<li>
			<i  class="iconfont">&#xe89b;</i>酒店
		</li>
		<li>
			<i  class="iconfont">&#xe60c;</i>旅游
		</li>
	</ul>
</template>
<script>
	import axios from 'axios'
	export default{
		name:"HomeFooter"
	}
</script>
<style lang="stylus" scoped>
	.footer
		line-height:.6rem
		padding:.1rem
		list-style:none
		border-top:1px solid #e0e0e0
		li
			float:left
			font-size:.3rem
			padding-left:14%
			
</style>