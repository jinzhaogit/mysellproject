<template>
  <div class="login">
    <div class="header">
      <router-link to="/user/login" tag="div" class="iconfont">&#xe624;</router-link>
      <div class="header-input">注册</div>
    </div>
    <!--账号注册-->
    <div class="login-input">
      <div class="phone border-top">
        <label class="inputname">手机号</label>
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="code border-topbottom">
        <label class="inputname">图形码</label>
        <input type="code" placeholder="请输入图形码" class="codeInput">
        <div class="code-btn">T37d</div>
      </div>
      <div class="code border-topbottom">
        <label class="inputname">验证码</label>
        <input type="code" placeholder="请输入验证码" class="codeInput">
        <div class="code-btn">获取验证码</div>
      </div>
    </div>
    <!--注册按钮-->
    <div class="login-btn">注册</div>
    <!--底部-->
    <div class="footer">
      <div class="footer-top border-bottom">
        <span>电脑版</span>
        <span>关于我们</span>
        <span>意见反馈</span>
      </div>
      <div class="footer-bot">
        <span>Qunar 京ICP备05021087</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register"
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .login
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color:#f3f9fc
    color: $bgColor
    font-size:.32rem
    .header
      display:flex
      line-height: $headerHeight
      background: $bgColor
      color:#75ffff
      font-size:.34rem
      padding:0 .3rem
      .header-input
        margin: auto
        color: #fff
        font-size:.36rem
        padding-right:.36rem
    .login-input
      margin-top: .3rem
      .phone,.code
        width: 100%
        line-height:1rem
        background-color: #fff
        .inputname
          margin:0 .5rem 0 .32rem
        .codeInput
          width:3.3rem
        .code-btn
          display: inline-block
          width:2rem
          line-height:.6rem
          border:1px solid #ccc
          text-align: center
          color: #d7dce0
          border-radius:.08rem
    .login-btn
      line-height: $headerHeight
      background: #85d1db
      color:#fff
      text-align:center
      font-size:.34rem
      margin :.2rem .3rem
      border-radius:.06rem
    .footer
      position: absolute
      left:0
      right:0
      bottom:0
      font-size:.26rem
      .footer-top
        display: flex
        justify-content:space-around
        padding-bottom:.4rem
      .footer-bot
        line-height:.98rem
        text-align:center
        color: #d4d9de
</style>
