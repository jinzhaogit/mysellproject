<template>
    <div class="water">
      <div class="header">
        <router-link to="/" tag="div" class="iconfont">&#xe624;</router-link>
        <div class="header-input">水上乐园</div>
      </div>
      <!--照片展示-->
      <div class="water-box" v-for="item in waterList" :key="item.id">
        <img class="water-img" v-lazy="item.imgUrl" alt="">
        <span class="water-title">{{item.title}}</span>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "water",
        data(){
            return{
              waterList:[]
            }
        },
        methods:{
          getWaterList(){
            axios.get('/api/water.json').then(this.getWaterListSucc)
          },
          getWaterListSucc(res){
            res=res.data
            if(res.ret&&res.data){
              this.waterList=res.data.waterList
            }
          }
        },
        mounted(){
          this.getWaterList()
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
    .header
      display:flex
      line-height: $headerHeight
      background: $bgColor
      color:#75ffff
      font-size:.34rem
      padding:0 .3rem
      .header-input
        margin: auto
        color: #fff
        font-size:.36rem
        padding-right:.36rem
    .water-box
      position: relative
      overflow: hidden
      width: 100%
      height:0
      padding-bottom:66%
      background-color:#eee
      text-align: center
      border:1px solid #ccc
      box-shadow: 0 0 .25rem #666
      margin-bottom:.2rem
      .water-img
        width:100%
      .water-title
        position: absolute
        bottom: 0
        left: 0
        right: 0
        padding: .2rem 0
        color: #fff
        background:linear-gradient(to bottom,rgba(0,0,0,.3),rgba(0,0,0,.6))
</style>
