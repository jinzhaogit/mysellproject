<template>
  <div class="info" ref="wrapper">
    <div>
      <h1 class="title">{{title}}</h1>
      <div class="price border-bottom">
        ￥<span class="price-number">{{price}}</span>起/人
        <img class="price-img" src="https://img1.qunarzz.com/vc/8f/c2/f6/3c8b4916d5570ff99bb9258b42.png" alt="">
      </div>
      <!--标签-->
      <div class="tag border-bottom">
        <span v-for="(item,index) in tag" :key="index">{{item}}</span>
      </div>
      <!--分割线-->
      <div class="slider"></div>
      <!--商家说卖点-->
      <div class="point">
        <div class="point-img"></div>
        <div class="point-item" v-for="item in point" :key="item.id">
            <span class="iconfont point-tit">&#xe610;&nbsp;[{{item.title}}]</span>
            <span>{{item.point_desc}}</span>
        </div>
      </div>
      <!--分割线-->
      <div class="slider"></div>
      <!--费用线路评论-->
      <div class="info-cost border-bottom">
        <router-link to="/cart/cost">费用信息</router-link>
        <router-link to="/cart/line">线路特色</router-link>
        <router-link to="/cart/comment">用户评论</router-link>
      </div>
      <router-view></router-view>
    </div>
    <!--对话框-->
    <div class="dialog" v-show="showDialog">
      <div class="dialog-box">
        <div class="dialog-title border-bottom">
          <span>供应商客服</span>
          <span class="dialog-close iconfont" @click="handleClickClose">&#xe620;</span>
        </div>
        <div class="dialog-desc">
          <p>咨询电话：<span class="dialog-desc-weight">4008-199-803转1617</span></p>
          <p>营业时间：<span class="dialog-desc-weight">周一至周日 09:00-18:00</span></p>
          <p>为节省您的时间，请告知客服此产品的产品编号</p>
          <div class="dialog-desc-num">产品编号：147238162</div>
        </div>
        <div class="dialog-btn">
          <div class="dialog-btn-qq diabtn">在线咨询</div>
          <div class="dialog-btn-tel diabtn">
            <a href="tel:4008-199803"></a>拨打电话
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import BScroll from 'better-scroll'
  export default {
    name: "CartBaseInfo",
    data(){
      return{
        showDialog:false //控制客服框的显示
      }
    },
    props:{
      title:String,
      price:String,
      tag:Array,
      point:Array
    },
    methods:{
      //关闭客服框
      handleClickClose(){
        this.showDialog=false
      }
    },
    mounted(){
      //实例化scrol插件
      // this.scroll = new BScroll(this.$refs.wrapper)
      //接收兄弟组件传过来事件显示客服框
      bus.$on('changeDia',()=>{
        this.showDialog=true
      })
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .info >>> .header-comment
    display none
  .info
    padding:.15rem 0
    .title
      font-size:.35rem
      color: #333
      line-height: .53rem
      padding-left: .2rem
    .price
      color: #ff8300
      padding:.2rem .2rem
      .price-number
        font-size:.42rem
      .price-img
        padding-left:.08rem
        display: inline-block
        width:1.2rem
        height:.35rem
        vertical-align: bottom
    .tag
      padding:.3rem .2rem
      span
        font-size:.06rem
        color: #ff8300
        border:1px solid #ff8300
        box-shadow: 0 0 .02rem #ff8300
        padding:.05rem
        margin-right:.07rem
    .slider
      width: 100%
      height:.15rem
      background-color:#eee
    .point
      padding:.2rem
      .point-img
        padding: .15rem 0
        width:1.4rem
        height:.7rem
        margin:auto
        bg-img()
      .point-item
        padding-top:.2rem
        font-size: .24rem
        line-height: .34rem
        color:#616161
        .point-tit
          color: #ff8300
          font-size: .24rem
          padding: .1rem .15rem
    .info-cost
      height:.8rem
      display: flex
      justify-content space-between
      align-items center
      padding:0 .4rem
    .dialog
      position: fixed
      top:0
      left:0
      right:0
      bottom:0
      overflow: hidden
      z-index:199
      background-color: rgba(0,0,0,.8)
      .dialog-box
        position: absolute
        bottom: 0
        right: 0
        left: 0
        background-color: #fff
        color: #999
        .dialog-title
          font-size: .3rem
          color: #00bcd4
          padding:.15rem
          .dialog-close
            float: right
            font-size:.3rem
        .dialog-desc
          line-height:.6rem
          padding:.15rem
          .dialog-desc-weight
            font-size:.32rem
            color: #333
          .dialog-desc-num
            color:#f60
        .dialog-btn
          display: flex
          justify-content center
          .diabtn
            margin:.15rem
            width:3.44rem
            line-height:.74rem
            font-size:.34rem
            text-align: center
            color: #fff
            background-color: #00bcd4

</style>
