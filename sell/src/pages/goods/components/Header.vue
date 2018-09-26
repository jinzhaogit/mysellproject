<template>
    <div class="goodsheader">
      <div class="header">
        <router-link to="/" tag="div" class="header-left">
          <span class="iconfont icon-back">&#xe624;</span>
        </router-link>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          上海
        </div>
        <div class="header-right" @click="handleMsgClick">
          <span class="iconfont arrow-icon">&#xe637;</span>
        </div>
      </div>
      <!--省略号点击展开菜单-->
      <div class="menu" v-show="showMesg">
        <div class="menu-radius"></div>
        <router-link to="/user/login" tag="div" class="menu-message border-bottom">
          <span class="iconfont icon-message">&#xe622;</span>消息
        </router-link>
        <router-link to="/user/login" tag="div" class="menu-message">
          <span class="iconfont icon-message">&#xe6a2;</span>分享
        </router-link>
      </div>
      <!--导航下拉菜单-->
        <ul class="tab">
          <li class="tab-item border-right tab-item-on">
            自由行<span class="iconfont icon-tab">&#xe6aa;</span>
          </li>
          <li class="tab-item border-right">
            综合排序<span class="iconfont icon-tab">&#xe6aa;</span>
          </li>
          <li class="tab-item border-right">
            出发日期<span class="iconfont icon-tab">&#xe6aa;</span>
          </li>
          <li class="tab-item">
            行程天数<span class="iconfont icon-tab">&#xe6aa;</span>
          </li>
        </ul>
      </div>
</template>

<script>
    export default {
        name: "GoodsHeader",
        data(){
          return{
            showMesg:false
          }
        },
        methods:{
          handleMsgClick(){
            if(this.showMesg){
              this.showMesg=false
            }else{
              this.showMesg=true
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
      display: flex
      line-height: $headerHeight
      background-color: $bgColor
      .header-left
        float: left
        width:.64rem
        padding: 0 .1rem
        .icon-back
          color: #fff
          text-align: center
          font-size:.4rem
      .header-input
        flex:1
        height: .64rem
        line-height: .64rem
        text-align: center
        border-radius: .25rem
        background-color: #fff
        margin:.14rem 0
        color: #ccc
      .header-right
        float: right
        min-width:1rem
        color: #fff
        text-align: center
        padding:0 .1rem
        .arrow-icon
          font-size:.4rem
    .menu
      float: right
      width:2.5rem
      background-color rgba(0,0,0,.6)
      color #fff
      font-size: .35rem
      text-align: center
      border-radius: .1rem
      .menu-message
        line-height:.85rem
        .icon-message
          font-size:.4rem
          padding-right:.2rem
      .menu-radius
        position absolute
        top: .42rem
        right: .32rem
        height:0
        width:0
        border: .25rem solid transparent
        border-bottom:.25rem solid rgba(0,0,0,.6)
    .tab
      display: flex
      justify-content space-between
      .tab-item
        line-height .7rem
        text-align: center
        padding:0 .2rem
        color: #616161
        font-size:.2rem
        .icon-tab
          line-height .7rem
      .tab-item-on
        color: #00bcd4

</style>
