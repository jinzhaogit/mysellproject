<template>
    <div>
      <!--左边列表标题-->
      <div class="list" ref="wrapper">
        <ul class="con">
          <li class="item" v-for="(item,index) in bustitle"
              :key="item.id"
              :class="{activeClass:activeIndex==index}"
              @click="handleClickLetter(index)">
              {{item.name}}
          </li>
        </ul>
      </div>
      <!--右边列表商品-->
      <div class="product" ref="box">
        <ul class="con">
          <li class="pro-item" v-for="(lists,index) in busprolist" :key="index">
            <h3 class="border-bottom item-title">{{index}}</h3>
            <div class="pro-desc" v-for="item in lists">
                <img class="desc-img" v-lazy="item.imgUrl" alt="">
                <div class="desc-con">
                  <h5 class="desc-con-tit">{{item.title}}</h5>
                  <p class="desc-con-desc">{{item.desc}}</p>
                  <div class="desc-dom">
                    <span class="desc-dom-price">￥{{item.price}}</span>
                    <span class="desc-dom-add" @click="handleShowAdd(item.id,item.title)">+</span>
                    <!--减号-->
                    <div class="desc-sub" v-show="parseInt(item.number)">
                      <input class="desc-dom-input" type="text" :value="item.number">
                      <span class="desc-dom-sub" @click="handleShowSub(item.id,item.title)">-</span>
                    </div>
                  </div>
                </div>
            </div>
          </li>
        </ul>
      </div>
      <!--脚部-->
      <div class="footer">
        <div class="footer-total" @click="handleShowOrder">
          <i class="iconfont footer-car">&#xe608;{{cartlist.length}}</i>&nbsp;
          总价：￥<span class="footer-total-num">{{getCount}}</span>
        </div>
        <div class="footer-btn">
          结算
        </div>
      </div>
      <!--订单-->
      <div class="order" v-show="showOrder">
        <div class="order-con">
          <div class="order-header">
            <span class="iconfont" @click="handleClickRemove">&#xe63d;</span>
            <span>清空购物车</span>
          </div>
          <!--订单列表-->
          <div class="order-list" v-for="item in cartlist">
            <p class="order-list-name">{{item.title}}</p>
            <div class="order-list-cart">
              <span class="order-list-oprt" @click="handleShowAdd(item.id,item.title)">+</span>
              <span class="order-list-num">{{item.number}}</span>
              <span class="order-list-oprt" @click="handleShowSub(item.id,item.title)">-</span>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "BusList",
        props:{
          bustitle:Array,
          busprolist:Object
        },
        data(){
          return{
            scrollY:0,
            listHeight:[],
            showOrder:false,
            cartlist:[]
          }
        },
        computed:{
          //实时跟进滚动
          activeIndex(){
            for(let i=0;i<this.listHeight.length;i++){
              let height=this.listHeight[i]
              let height2=this.listHeight[i+1]
              // 判断如果height2不存在(到底部)或者在两个模块之间的情况下
              //判断滚动的高度是否和到达模块对应文档高度
              if(!height2 || (this.scrollY>=height && this.scrollY<height2)) {
                if(this.clickEvent){
                  // 返回后面一个模块对应索引值
                  return i+1
                }else{
                  return i
                }
              }
            }
            //如果listHeight为空或者刚开始进入初始状态时返回0至顶部
            return 0
          },
          //计算总价
          getCount(){
            var sum=0;
            for(var i=0;i<this.cartlist.length;i++){
              let item=this.cartlist[i]
              sum+=item.price*item.number
            }
            return sum
          }
        },
        methods:{
          //点击跳转
          handleClickLetter(index){
              //获取右边box列表所有类名为item-title的所有DOM集合
              let items=this.$refs.box.getElementsByClassName('item-title')
              //根据点击左边wrapper列表传过来的index索引值取右边列表标题的对应DOM
              let el=items[index]
              //利用better-scroll提供的API给他一个具体列表Dom，实现点击跳转对应内容
              this.scrollRight.scrollToElement(el,500)
          },
          // 右侧滚动
          initscroll(){
            this.scrollRight.on('scroll', (pos) => {
              //监听滚动事件，实时获取滚动高度
              this.scrollY=Math.abs(Math.round(pos.y))
            })
          },
          // 获取右侧商品栏box每个模块的高度
          initHeight(){
            //获取右边box列表所有类名为item-title的所有DOM集合
            let items=this.$refs.box.getElementsByClassName('pro-item')
            let height=0
            this.listHeight.push(height)
            for(var i=0;i<items.length;i++){
              //把每个标题对应的距离文档高度加入到数组中
              height+=items[i].clientHeight
              this.listHeight.push(height)
            }
            alert(this.listHeight)
          },
          // 点击加号显示减号并添加数量
          handleShowAdd(id,title){
            //遍历对象得到单个对象属性值
            for(let items in this.busprolist){
              let item=this.busprolist[items]
              // 遍历单个对象得到里面属性
              for(var i=0;i<item.length;i++){
                // 判断当前id和标题都相等的情况下
                if(item[i].id==id && item[i].title==title){
                  item[i].number++
                  this.cartlist.push(item[i])
                }
              }
            }
          },
          // 点击减号减少数量到0隐藏
          handleShowSub(id,title){
            //遍历对象得到单个对象属性值
            for(let items in this.busprolist){
              let item=this.busprolist[items]
              // 遍历单个对象得到里面属性
              for(var i=0;i<item.length;i++){
                // 判断当前id和标题都相等的情况下
                if(item[i].id==id && item[i].title==title){
                  item[i].number--
                  if(item[i].number<=0){
                    item[i].number=0
                  }
                  this.cartlist.pop(item[i])
                }
              }
            }
          },
          // 显示订单列表
          handleShowOrder(){
            if(this.showOrder){
              this.showOrder=false
            }else{
              this.showOrder=true
            }
          },
          // 清空购物车列表
          handleClickRemove(){
            // 从数组的第0个位置删除到最后
            this.cartlist.splice(0,this.cartlist.length)
          }
        },
        mounted(){
          //实例化左边标题栏scrol
          this.scrollLeft = new BScroll(this.$refs.wrapper,{click:true})
          //实例化右边边商品栏scrol
          // 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
          this.scrollRight = new BScroll(this.$refs.box,{probeType:3})
          //  滚动右边商品栏实现左边跟踪
          // 需要DOM加载完成后才能正确应用. vue中应用在$nextTick中，异步初始化。
          this.$nextTick(()=>{
            this.initscroll()
            this.initHeight()
          })
        }
    }
</script>

<style lang="stylus" scoped>
    .activeClass
      background-color: #fff !important
    .list
      overflow: hidden
      position: absolute
      top:.86rem
      bottom:0
      left:0
      background-color: #efefef
      .item
        overflow: hidden
        width:1.6rem
        line-height: 1.7rem
        margin-right: .1rem
        text-align: center
        color:#656565
        background-color: #efefef
        border-bottom:1px solid #bfbfbf
    .product
      overflow: hidden
      position: absolute
      top:.9rem
      bottom:0
      right:0
      left: 0
      margin-left: 1.7rem
      background-color: #fff
      .pro-item
        position: relative
        overflow: hidden
        width:100%
        color:#656565
        background-color: #fff
        .item-title
          font-size: .3rem
          padding-left: .2rem
          margin:.3rem .2rem
        .item-title
          &:before
            content: ''
            width:.1rem
            height:.6rem
            margin-right .3rem
            background-color #FFD161
        .pro-desc
          display: flex
          border-bottom:1px solid #bfbfbf
          padding-top:.3rem
          .desc-img
            width:1.64rem
            height: 1.34rem
            vertical-align:top
            margin:0 .2rem
          .desc-con
            flex: 1
            .desc-con-tit
              overflow: hidden
              max-width:4rem
              line-height: .4rem;
              margin-right: 10px;
              color: #2f2f2f;
              font-size: .33rem;
            .desc-con-desc
              overflow: hidden
              line-height: .8rem
              font-size:.24rem
              color: #a9a9a9
            .desc-dom
              padding:.2rem .2rem  .2rem 0
              .desc-dom-price
                color: #fe4d3d
                font-size:.35rem
                line-height: .5rem
              .desc-dom-add
                width: .44rem
                line-height: .44rem
                float: right
                background-color:#FFD161
                border-radius: .22rem
                text-align: center
              .desc-sub
                float: right
                .desc-dom-sub
                  float: right
                  width: .4rem
                  line-height: .4rem
                  background-color:#fff !important
                  border:.02rem solid #ccc
                  border-radius: .2rem
                  text-align: center
                .desc-dom-input
                  float: right
                  max-width: .44rem
                  line-height: .44rem
                  text-align: center
    .footer
      position: fixed
      left:0
      right:0
      bottom:0
      z-index: 299
      line-height:.85rem
      display: flex
      .footer-total
        flex: 1
        background-color: rgba(51,51,51,0.8)
        color: #fff
        padding-left:.4rem
        .footer-car
          font-size: .35rem
          color: #ffd161
        .footer-total-num
          font-size:.36rem
      .footer-btn
        text-align:center
        width: 2.8rem
        background-color: #ffd161
        color: #333
        font-size:.3rem
    .order
      position: absolute
      top:0
      bottom:0
      left:0
      right:0
      background-color: rgba(0,0,0,.7)
      z-index:199
      .order-con
        position: absolute
        bottom:0
        left:0
        right:0
        background-color: #fff
        padding-bottom:.86rem
        .order-header
          padding:.2rem
          text-align: right
          color: #444
          background-color: #F4F4F4
        .order-list
          overflow: hidden
          max-height: 1.3rem
          padding:.2rem
          border-bottom:1px solid #ddd
          .order-list-name
            overflow: hidden
            line-height .44rem
            display: inline-block
          .order-list-cart
            float: right
            text-align:center
            .order-list-oprt
              float: right
              width:.44rem
              line-height .44rem
              border-radius: .22rem
              background-color: #ffd161
              color: #666
            .order-list-num
              float: right
              line-height:.44rem
              width:.44rem
</style>
