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
//引入MUIcss样式
// import 'mui/css/mui.css'
// import 'mui/css/icons-extra.css'
//引入MUIJS样式
// import mui from 'mui/js/index.js'

//是否使用测试模式
Vue.config.productionTip = false
//使用fastClick解决点击延迟问题
fastClick.attach(document.body)
//使用轮播插件定义
Vue.use(VueAwesomeSwiper)
//注册MUI
// Vue.use(mui)
// Vue.prototype.mui=mui
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
