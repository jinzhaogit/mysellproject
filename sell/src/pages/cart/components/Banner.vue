<template>
  <div>
    <div class="banner" @click="handleBannerShow">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <div class="iconfont banner-icon">&#xe665; {{gallaryImgs.length}}</div>
        </div>
      </div>
    </div>
    <!-- 展示轮播 -->
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleBannerClose">
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import FadeAnimation from 'common/fade/FadeAnimation'
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: "CartBanner",
    props:{
      sightName:String,
      bannerImg:String,
      gallaryImgs:Array
    },
    data(){
      return{
        showGallary:false
      }
    },
    components:{
      CommonGallary,
      FadeAnimation
    },
    methods:{
      handleBannerShow(){
        this.showGallary=true
      },
      handleBannerClose(){
        this.showGallary=false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow:hidden
    height:0
    width: 100%
    padding-bottom: 65%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left:0
      right:0
      bottom:0
      display: flex
      justify-content: space-between
      color: #fff
      font-size:.26rem
      line-height:.6rem
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        padding-left: .2rem
      .banner-number
        padding-right:.2rem
        .banner-icon
          font-size:.26rem
</style>
