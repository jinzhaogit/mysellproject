// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//创建全局bus总线
window.bus=new Vue()
//引入vuex
import store from './store'
//移动端点击事件300ms延迟问题
import fastClick from 'fastclick'
//全局使用轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//解决手机端边框样式问题
import 'styles/reset.css'
//解决手机端边框像素问题
import 'styles/border.css'
//使用iconfont样式
import 'styles/iconfont.css'
//引入轮播插件样式
import 'swiper/dist/css/swiper.css'
//引入懒加载
import VueLazyload from 'vue-lazyload'

//是否使用测试模式
Vue.config.productionTip = false
//使用fastClick解决点击延迟问题
fastClick.attach(document.body)
//使用轮播插件定义
Vue.use(VueAwesomeSwiper)
//使用懒加载插件定义
Vue.use(VueLazyload)
//定义全局路由守卫
router.beforeEach((to,from,next)=>{
  var nextRoute=['Main']
  const isIogin=store.state.loginState;
  if(nextRoute.indexOf(to.name)>=0){
    if(!isIogin){
      router.push('/user/login')
    }
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
