<template>
	<div class="detail">
		<detail-banner
			:sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs">
		</detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<base-info></base-info>
			<detail-list :list="categoryList"></detail-list>
			<detail-comment></detail-comment>
		</div>
	</div>
</template>
<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import BaseInfo from './components/BaseInfo'
	import DetailComment from 'common/comment/Comment'
	import axios from 'axios'
	export default{
		name:"Detail",
		data(){
			return{
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				categoryList:[]
			}
		},
		components:{
			DetailBanner,
			DetailHeader,
			DetailList,
			BaseInfo,
			DetailComment
		},
		methods:{
			handleGetDataSucc(res){
				res=res.data
				if(res.ret&&res.data){
					const data=res.data
					this.sightName=data.sightName
					this.bannerImg=data.bannerImg
					this.gallaryImgs=data.gallaryImgs
					this.categoryList=data.categoryList
				}
			},
			getDetailInfo(){
				axios.get('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.handleGetDataSucc)
			}
		},
		mounted(){
			this.getDetailInfo()
		}
	}
</script>
<style lang="stylus" scoped>
  .detail >>> .header-comment
    display none
</style>
