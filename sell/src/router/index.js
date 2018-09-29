import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Card from 'common/card/Card'
import Comment from 'common/comment/Comment'
import Minute from '@/pages/detail/components/Minute'
import Goods from '@/pages/goods/Goods'
import Cart from '@/pages/cart/Cart'
import Cost from '@/pages/cart/components/children/Cost'
import CartLine from '@/pages/cart/components/children/CartLine'
import Order from '@/pages/order/Order'
import Login from '@/pages/user/Login'
import Register from '@/pages/user/Register'
import BMap from '@/pages/map/BMap'
import Water from '@/pages/water/Water'
import Business from '@/pages/business/Business'

Vue.use(Router)
var NotFound={template:`<div>Sorry,您访问的页面被外星人抓走了</div>`}
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/card/:id',
      name: 'Card',
      component: Card
    },{
      path: '/comment',
      name: 'Comment',
      component: Comment
    },{
      path: '/minute',
      name: 'Minute',
      component: Minute
    },{
    path: '/goods',
    name: 'Goods',
    component: Goods
  },{
    path: '/cart/:id',
    name: 'Cart',
    meta: {index:3},
    component: Cart,
    children:[
      {path:'',component:Cost},
      {path:'cost',component:Cost},
      {path:'line',component:CartLine},
      {path:'comment',component:Comment}
    ]
  },{
    path: '/order',
    name: 'Order',
    component: Order
  },{
    path: '/user/login',
    name: 'Login',
    component: Login
  },{
    path: '/user/register',
    name: 'Register',
    component: Register
  },{
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },{
    path: '/water',
    name: 'Water',
    component: Water
  },{
    path: '/business',
    name: 'Business',
    meta: {index:6},
    component: Business
  },{
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
  ],
  // 防止滚动全局污染，清空上个页面滚动记录的位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
