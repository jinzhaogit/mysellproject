<template>
  <div class="header">
    <!--小圆点-->
    <div class="header-abs" v-show="showAbs">
      <router-link to="/goods" tag="div" class="header-abs-left">
        <span class="iconfont icon-back">&#xe624;</span>
      </router-link>
      <div class="header-abs-right">
        <router-link to="/order" tag="span" class="iconfont header-icon icon-back">&#xe607;<sup class="sup">{{this.$store.state.total}}</sup></router-link>
        <span class="iconfont header-icon icon-back" @click="handleMsgClick">&#xe637;</span>
      </div>
    </div>
    <!--导航条-->
    <div class="header-fixed" v-show="!showAbs" :style="showStyle">
      <router-link to="/goods" tag="div" class="header-abs-left">
        <span class="iconfont icon-back">&#xe624;</span>
      </router-link>
      <div class="header-abs-right">
        <router-link to="/order" tag="span" class="iconfont header-icon icon-back">&#xe607;<sup class="sup">{{this.$store.state.total}}</sup></router-link>
        <span class="iconfont header-icon icon-back" @click="handleMsgClick">&#xe637;</span>
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
  </div>
</template>

<script>
    export default {
        name: "CartHeader",
        data(){
          return {
            showAbs:true, //控制显示隐藏
            showStyle:{ //控制淡入淡出样式
              opacity:0
            },
            showMesg:false //控制三个圆点弹出对话框
          }
        },
        methods:{
          handleScroll(){
            //取滑动的距离
            const top=document.documentElement.scrollTop
            if(top>50){
              //改变透明度值
              let opacity=top/160
             // 给透明度值设限制
              opacity=opacity>1?1:opacity
              this.showStyle={opacity}
              this.showAbs=false
            }else{
              this.showAbs=true
            }
          },
          handleMsgClick(){
            if(this.showMesg){
              this.showMesg=false
            }else{
              this.showMesg=true
            }
          }
        },
        //当页面即将要重新加载或者切换时
        activated(){
          window.addEventListener('scroll',this.handleScroll)
        },
        //当页面即将要离开或切换时，对全局事件进行解绑
        deactivated(){
          window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
      @import '~styles/varibles.styl'
      .sup
        color:#ff8300
      .header
        position: fixed
        top:0
        left:0
        right:0
        z-index:99
        .header-abs-left,.header-icon
          float: left
          margin: .1rem
          width:.8rem
          height:.8rem
          border-radius: .4rem
          background-color: rgba(0,0,0,.7)
          text-align: center
          line-height:.8rem
        .icon-back
          color: #fff
          font-size:.4rem
        .header-abs-right
          float: right
        .header-fixed
          height:1rem
          width: 100%
          background-color: $bgColor
          .header-abs-left,.header-icon
            background-color: transparent
            font-size:.5rem
        .menu
          position: absolute
          right: .1rem
          top:1.2rem
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
            top: -.5rem
            right: .12rem
            height:0
            width:0
            border: .25rem solid transparent
            border-bottom:.25rem solid rgba(0,0,0,.6)
</style>
