<template>
    <div>
      <div class="main-header">
        <router-link to="/" tag="i" class="iconfont leIcon">&#xe624;</router-link>
        <span>我的</span>
      </div>
      <div class="main-info border-top">
        <img class="main-img" src="https://dimg06.c-ctrip.com/images/350l0n000000ec6k84D0F_C_280_158.jpg" alt="">
        <div class="main-title">
          <h1>我爱旅游</h1>
          <p class="main-tel">1883****388</p>
        </div>
      </div>
      <div class="main-list">
        <ul>
          <li class="border-bottom list-item">
            <div class="list-img"></div>
            <p class="list-title">账单</p>
          </li>
          <li class="border-bottom list-item">
            <div class="list-img"></div>
            <p class="list-title">积分</p>
          </li>
          <li class="border-bottom list-item">
            <div class="list-img"></div>
            <p class="list-title">银行卡</p>
          </li>
          <li class="border-bottom list-item">
            <div class="list-img"></div>
            <p class="list-title">历史</p>
          </li>
          <li class="border-bottom list-item">
            <div class="list-img"></div>
            <p class="list-title">客服</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Main"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .leIcon
    float: left
    padding-left: .1rem
  .main-header
    width:100%
    line-height:$headerHeight
    background-color: $bgColor
    color: #fff
    text-align: center
    font-size: .33rem
  .main-info
    background-color:$bgColor
    padding:.3rem
    color: #fff
    .main-img
      width:1rem
      height:1rem
      border-radius:.5rem
      border:1px solid #999
      vertical-align:bottom
    .main-title
      display: inline-block
      padding:.1rem
      .main-tel
        padding-top:.3rem
  .list-item
    height: .5rem
    padding:.2rem
    margin-top:.2rem
    .list-img
      display: inline-block
      width: .5rem
      height: 100%
      bg-main()
    .list-title
      width: 1rem
      padding-left: .2rem
      line-height: .5rem
      vertical-align: top
      display: inline-block
  .list-item:nth-child(2) .list-img
      background-position: 5px -22px
  .list-item:nth-child(3) .list-img
    background-position: 4px -51px
  .list-item:nth-child(4) .list-img
    background-position: 3px -273px
  .list-item:nth-child(5) .list-img
    background-position: 3px -81px
</style>
