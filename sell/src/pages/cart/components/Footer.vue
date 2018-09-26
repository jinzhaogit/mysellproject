  <template>
  <div class="footer border-top">
    <div class="footer-item" @click="handleClickDialog">
      <span class="iconfont icon-foot icon-color">&#xe63a;</span>客服
    </div>
    <div class="footer-item border-rightleft" @click="handleClickLike" :class="redColorStyle">
      <span class="iconfont icon-foot">&#xe61d;</span>收藏
    </div>
    <div class="footer-item">
      <span class="iconfont icon-foot">&#xe736;</span>店铺
    </div>
    <div class="footer-cart" @click="handleClickNumber">加入购物车</div>
    <router-link tag="div" to="/order" class="footer-cart cart-last">立即预定</router-link>
    <!--提示框-->
    <fade-animation v-show="showTips">
      <div class="tips">{{tipsText}}</div>
    </fade-animation>
  </div>
</template>

<script>
  import axios from 'axios'
  import FadeAnimation from 'common/fade/FadeAnimation'
  export default {
    name: "CartFooter",
    props:{
      bannerImg:String,
      price:String,
      title:String
    },
    data(){
      return{
        redColorStyle:{
          redColor:false
        },
        showTips:false,
        tipsText:''
      }
    },
    components:{
      FadeAnimation
    },
    methods:{
      handleClickLike(){
        //加入收藏图标变红色
        if(this.redColorStyle.redColor){
          this.redColorStyle={redColor:false}
          //改变默认值
          this.tipsText="取消收藏成功"
        }else{
          this.tipsText="加入收藏成功"
          this.redColorStyle={redColor:true}
        }
        //提示框显示
        this.showTips=true
        //提示框消失
        setTimeout(()=>{
          this.showTips=false
        },1500)
      },
      //  客服向兄弟组件baseinfo传值使弹出框
      handleClickDialog(){
        bus.$emit('changeDia')
      },
     //  加入购物车增加数量
      handleClickNumber(){
          /******************商品点击时创建小球运动start*******************************************/
          var startX =200; //商品左边距+100得商品右边框横坐标
          var startY =675;//商品上边距-scroll+12得商品上边框横坐标向上偏移12
          var endX = 300;//取购物车相对文档的左边距
          var endY = 5;//取商品相对文档的上边距
          // 创建一个移动的dom
          var movingDom = document.createElement("div"); //创建一个div节点模拟小球
          movingDom.style.position = 'fixed'; //设div节点定位为固定定位
          movingDom.style.left = startX + 'px';//设小球起始横坐标
          movingDom.style.top = startY + 'px';//设小球起始纵坐标
          movingDom.style.height = '16px';//设小球起始高度
          movingDom.style.width = '16px';//设小球起始宽度
          movingDom.style.borderRadius = '8px';//设小球的边框为圆球
          movingDom.style.background = 'red';//设小球的背景色为红色
          document.body.appendChild(movingDom);//将小球添加到body中
          // 定义移动的dom的x, y
          var x = startX;
          var y = startY;
          var time = setInterval(function(){
            //判断小球移动横坐标是否等于终点横坐标
            if(y >endY) {
              if(x>=endX)x=endX
              else {
                x = x + 1; //横坐标以+0.1的频率移动
              }
              y = y-7; //求抛物线y的值
              movingDom.style.left = x + 'px';
              movingDom.style.top = y + 'px';
            } else {
              //若小球到达终点坐标则停止运动并在body中移出
              movingDom.parentNode.removeChild(movingDom)
              clearInterval(time);
            }
          },10)
        /******************商品点击时创建小球运动end*******************************************/
          // 添加数据
        axios.get('http://localhost:3000/scart/add',{
          params:{
            img_url:this.bannerImg,
            title:this.title,
            price:this.price,
            number:1,
            uid:1
          }
        }).then(this.handleClickNumberSucc)
      },
      handleClickNumberSucc(res){
        res=res.data
        if(res.code==1){
          //刷新页面
          this.$router.go(0)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .redColor
    color: red
  .footer
    position: fixed
    bottom:0
    left:0
    right:0
    z-index:99
    height:1rem
    background-color: #fff
    .footer-item
      float: left
      display: flex
      flex-direction: column
      align-items: center
      margin:.12rem 0
      padding:0 .3rem
      font-size:.22rem
      .icon-foot
        font-size:.46rem
        padding-bottom: .02rem
      .icon-color
        color: #00afc7
    .footer-cart
      float: left
      width: 1.93rem
      line-height:.76rem
      background-color: #ff9800
      color: #fff
      margin:.12rem .1rem
      border-radius: .08rem
      text-align: center
    .cart-last
      background-color: #ff8300
    .tips
      position: fixed
      bottom:1.5rem
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
