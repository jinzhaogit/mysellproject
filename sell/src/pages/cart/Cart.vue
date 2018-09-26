<template>
  <div>
    <cart-header></cart-header>
    <cart-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></cart-banner>
    <cart-info :title="title" :price="price" :tag="tag" :point="point"></cart-info>
    <div class="content"></div>
    <cart-footer :bannerImg="bannerImg" :title="title" :price="price" ></cart-footer>
  </div>
</template>

<script>
    import axios from 'axios'
    import CartHeader from './components/Header'
    import CartBanner from './components/Banner'
    import CartInfo from './components/BaseInfo'
    import CartFooter from './components/Footer'
    export default {
        name: "Cart",
        data(){
          return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            title:'',
            price:'',
            tag:[],
            point:[],
            costs:[]
          }
        },
        components:{
          CartHeader,
          CartBanner,
          CartInfo,
          CartFooter
        },
        methods:{
          getCartList(){
            axios.get('/api/cart.json').then(this.getCartListSucc)
          },
          getCartListSucc(res){
            res=res.data
            if(res.ret&&res.data){
              let data=res.data
              this.sightName=data.sightName
              this.bannerImg=data.bannerImg
              this.gallaryImgs=data.gallaryImgs
              this.title=data.title
              this.price=data.price
              this.tag=data.tag
              this.point=data.point
              this.$store.commit('getCosts',data.costs)
              this.$store.commit('getcartLine',data.lines)
            }
          }
        },
        mounted(){
          this.getCartList()
        }
    }
</script>

<style scoped>
  .content{
    height: 1rem
  }
</style>
