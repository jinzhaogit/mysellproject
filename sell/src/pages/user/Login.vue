<template>
  <div class="login">
    <div class="header">
      <router-link to="/cart" tag="div" class="iconfont">&#xe624;</router-link>
      <div class="header-input">登录</div>
      <router-link to="/user/register" tag="div">注册</router-link>
    </div>
    <!--登陆选择框-->
    <div class="tab">
      <div class="tab-box" @click="handleClickNum" :class="hasActive==true?classActive:''">
        <span>短信验证码登录</span>
      </div>
      <div class="tab-box" @click="handleClickCode" :class="hasActive==false?classActive:''">
        <span>账号登录</span>
      </div>
    </div>
    <!--验证码登录-->
    <div class="login-input" v-show="showCodeLogin">
      <div class="phone border-top">
        <label class="inputname">手机号</label>
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="code border-topbottom">
        <label class="inputname">验证码</label>
        <input type="text" placeholder="请输入验证码" class="codeInput" @blur="showLoginBtn">
        <div class="code-btn">获取验证码</div>
      </div>
    </div>
    <!--账号登录-->
    <div class="login-input" v-show="!showCodeLogin">
      <div class="phone border-top">
        <label class="inputname">账号</label>
        <input type="text" placeholder="手机号/邮箱/用户名" v-model="uname">
      </div>
      <div class="code border-topbottom">
        <label class="inputname">密码</label>
        <input type="password" placeholder="请输入密码" class="codeInput" v-model="upwd" @blur="showLoginBtn">
      </div>
    </div>
    <!--登录按钮-->
    <div class="login-btn" @click="LoginSubmit" :class="showLoginBtnStyle">登录</div>
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
    <!--提示框-->
    <fade-animation v-show="showTips">
      <div class="tips">恭喜您登陆成功</div>
    </fade-animation>
  </div>
</template>

<script>
    import FadeAnimation from 'common/fade/FadeAnimation'
    import axios from 'axios'
    export default {
        name: "Login",
        data(){
          return{
            showCodeLogin:true, //用来切换登录方式
            hasActive:true, //判断样式是否显示
            classActive:{ //定义tab切换焦点样式
              isActive:true
            },
            uname:'',
            upwd:'',
            showLoginBtnStyle:{ //定义登录按钮获取焦点样式
              activeClass:false
            },
            showTips:false
          }
        },
        components:{
          FadeAnimation
        },
        methods:{
          //切换到验证码登录
          handleClickNum(){
            this.showCodeLogin=true
            this.hasActive=true
          },
          //切换到手机账号登录
          handleClickCode(){
            this.showCodeLogin=false
            this.hasActive=false
          },
          //登陆提交信息
          LoginSubmit(){
            axios.get('http://localhost:3000/scart/login',{
              params:{
                uname:this.uname,
                upwd:this.upwd
              }
            }).then(this.LoginSubmitSucc)
          },
          LoginSubmitSucc(res){
            res=res.data
            if(res.code==1&&res.msg){
              //提示框显示
              this.showTips=true
              //提示框消失
              setTimeout(()=>{
                this.showTips=false
                //清空密码内容
                this.upwd=''
                //跳转上一次页面
                this.$router.push(this.$route.query.redirect || '/')
              },2500)
            }
          },
          //鼠标离开密码框登录按钮获得焦点样式
          showLoginBtn(){
            this.showLoginBtnStyle={
              activeClass:true
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .activeClass
    background-color:$bgColor !important
  .isActive
    background-color: #fff
    color: $bgColor !important
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
      justify-content: space-between
      line-height: $headerHeight
      background: $bgColor
      color:#75ffff
      text-align:center
      font-size:.34rem
      padding:0 .3rem
      .header-input
        color: #fff
        font-size:.36rem
        padding-left:.26rem
    .tab
      display: flex
      padding: .2rem 4.5%
      width: 100%
      background: $bgColor
      .tab-box
        border:1px solid #fff
        color: #fff
        line-height:.7rem
        width:45%
        text-align: center
        font-size:.3rem
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
    .tips
      position: fixed
      bottom:42%
      left:50%
      margin-left:-1.5rem
      width:3rem
      height:.8rem
      line-height:.8rem
      border-radius:.08rem
      text-align: center
      color: #fff
      background-color:rgba(0,0,0,.5)
</style>
