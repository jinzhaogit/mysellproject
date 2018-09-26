<template>
    <div class="list">
      <!--登录提示-->
      <div class="showlogin">
        <router-link to="/user/login" tag="span" class="login">登录</router-link>可同步并保存购物车中商品
      </div>

      <!--订单列表-->
      <div class="list-order">
          <div v-for="item in orderList" :key="item.id">
            <!--订单列表商铺名-->
            <h3 class="list-title">
              <span class="iconfont title-icon">&#xe6a8;</span>
              无二之旅
            </h3>
            <left-del @remove="handleClickRemove(item.id)">
            <!--订单列表简介-->
            <div class="list-view">
            <span class="iconfont title-icon">&#xe71e;</span>
            <img class="list-img" :src="item.img_url" alt="">
            <div class="list-cont">
              <h3 class="list-cont-title">{{item.title}}</h3>
              <p class="list-price">
                ￥<span class="list-price-num" ref="listPrice">{{item.price}}</span>起
              </p>
              <div class="list-number">
                人数：
                <span class="iconfont" @click="handleClickSub(item.id)">&#xe628;</span>
                {{item.number}}
                <span class="iconfont" @click="handleClickAdd(item.id)">&#xe626;</span>
              </div>
            </div>
          </div>
            </left-del>
          </div>

      </div>

      <!--脚部-->
      <div class="footer">
        <div class="footer-total">
          总价：￥<span class="footer-total-num">{{getTotal}}</span>
        </div>
        <div class="footer-btn" @click="handleCLickSubmit">
          结算
        </div>
      </div>
      <!--提示框-->
      <fade-animation v-show="showTips">
        <div class="tips">删除订单成功</div>
      </fade-animation>
    </div>
</template>

<script>
    import axios from 'axios'
    import LeftDel from 'common/leftdel/LeftDel'
    import FadeAnimation from 'common/fade/FadeAnimation'
    export default {
        name: "OrderList",
        props:{
          orderList:Array
        },
        data(){
          return{
            showTips:false
          }
        },
        components:{
          LeftDel,
          FadeAnimation
        },
      //添加计算属性,计算购物中商品总价,该属性会监听list数据变化从而重新计算
        computed:{
          getTotal(){
            var sum=0;
            for(var item of this.orderList){
              sum+=item.price*item.number
            }
            return sum
          }
        },
        methods:{
          // 将指定id的购物车人数添加1
          handleClickAdd(id){
            //循环遍历购物车列表
            for(var item of this.orderList){
              //如果当前购物列表id如正在操作的id相同
              if(item.id==id){
                //这个购物商品数量+1
                item.number++
              }
            }
          },
          // 将指定id的购物车人数减少1
          handleClickSub(id){
            for(var item of this.orderList){
              if(item.id==id){
                if(item.number<=1){
                  //如果数量小于或者等于1，就限制最低数量为1
                  item.item=1
                  return
                }
                item.number--
              }
            }
          },
          //删除对应订单
          handleClickRemove(id){
            axios.get('http://localhost:3000/scart/del?id='+id).then(this.getRemoveSucc)
          },
          getRemoveSucc(res){
            if(res.code==1&&res.msg){
              //提示框显示
              this.showTips=true
              //提示框消失
              setTimeout(()=>{
                this.showTips=false
                //刷新页面
                this.$router.go(0)
              },1500)
            }
          },
          handleCLickSubmit(){
            //如果登录状态为false
            if(!this.$store.state.loginState){
              this.$router.push({
                // 跳转到登录页
                path:'/user/login',
                //记住当前路径当做参数传给login
                query: {redirect: '/order'} // 如果你使用钩子函数，your path 可以替换成to.fullPath
              })
            }
          }
        },
        //当页面数据发生改变时向vuex传递数据
        updated(){
          this.$store.commit('getTotal',this.orderList.length)
        }
    }
</script>

<style lang="stylus" scoped>
  .list
    background-color: rgb(241, 241, 241)
    .title-icon
      font-size:.33rem
      padding: 0 .08rem
    .showlogin
      background-color: rgb(255, 255, 190)
      text-align: center
      line-height: .7rem
      font-size:.25rem
      .login
        color: rgb(255, 102, 0)
        padding-right:.1rem
    .list-order
      position: absolute
      top: 1.44rem
      bottom: 0
      left: 0
      right: 0
      background-color: rgb(241, 241, 241)
      .list-title
        color: rgb(51, 51, 51);
        font-size: .28rem;
        padding: .26rem 0;
      .list-view
        display: flex
        justify-content:space-between
        background-color: #fff
        padding:.28rem 0
        border-bottom: 1px solid #eee;
        .list-img
          width:1.8rem
          height:1.8rem
        .list-cont
          padding:0 .2rem
          .list-cont-title
            line-height:.4rem
            color: rgb(51, 51, 51)
            padding-bottom:.5rem
          .list-price
            float: left
            color: rgb(255, 102, 0)
            .list-price-num
              font-size:.4rem
          .list-number
            float: right
            padding:.06rem
    .footer
      position: fixed
      left:0
      right:0
      bottom:0
      z-index: 199
      line-height:.85rem
      display: flex
      .footer-total
       flex: 1
       background-color: #fff
       color: rgb(255, 102, 0)
       padding-left:.4rem
       .footer-total-num
         font-size:.33rem
      .footer-btn
        text-align:center
        width: 2.8rem
        background-color: rgb(255, 102, 0)
        color: #fff
        font-size:.3rem
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
