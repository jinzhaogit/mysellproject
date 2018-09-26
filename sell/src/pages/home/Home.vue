<template>
  <div>
  	<home-header></home-header>
  	<home-swiper :swiperList="swiperList"></home-swiper>
  	<home-icons :iconList="iconList"></home-icons>
    <home-location></home-location>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeLocation from './components/Location'
import HomeFooter from './components/Footer'
import axios from 'axios'
import {mapState} from 'vuex'

export default{
  name: 'Home',
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  computed:{
    ...mapState(['city'])
  },
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeLocation,
    HomeFooter
  },
  //利用axios请求数据
  methods:{
    getHomeInfo(){
      //ajax请求/static/mock/index.json数据,/api通过config文件配置转换生成的
      // 带上参数city，不同城市加载不同页面
      axios.get('/api/index.json?city='+this.city)
        //请求成功后执行方法
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){//执行请求成功后操作
      res=res.data //取返回数据里的data数据
      if(res.ret&&res.data){ //如果取出来的数据里的ret为真并有数据存在
        const data=res.data
        this.swiperList=data.swiperList //取轮播图
        this.iconList=data.iconList //取图标
        this.recommendList=data.recommendList //取热销推荐
        this.weekendList=data.weekendList //取周末去哪
      }
      
    }
  },
  //模板挂在到页面后请求加载数据
  mounted(){
    // 缓存变量保存当前城市
    this.lastCity=this.city
    this.getHomeInfo()
  },
  //当页面发生改变时
  activated(){
    // 如果当前城市跟上一次不同
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      // 重新强求ajax
      this.getHomeInfo()
    }
  } 

}
</script>

<style>
   
</style>
