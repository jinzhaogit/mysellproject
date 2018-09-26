<template>
  <div>
    <router-link :to="'/cart/'+item.id" tag="div" class="list border-top border-top" v-for="item in list" :key="item.id">
      <div class="list-left">
        <img class="list-img" v-lazy="item.imgUrl" alt="">
      </div>
      <div class="list-right">
        <h2 class="list-title">{{item.title}}</h2>
        <div class="list-content">
          <p>中秋、国庆&nbsp;|&nbsp;天天出发</p>
          <p>一日游&nbsp;|&nbsp;大巴</p>
        </div>
        <div class="list-price">
          <div class="list-price-tag">
            <span>￥<em class="list-price-mon">{{item.price}}</em>起</span>
            <span class="list-border">{{item.tag}}</span>
            <span class="list-border">Qstar</span>
          </div>
          <div class="list-price-man">{{item.man}}满意</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    name:'GoodsList',
    props:{
      list:Array
    }
  }
</script>
<style lang="stylus" scoped>
  .list
    overflow: hidden
    display:flex
    height: 2.7rem
    padding: .2rem
    margin-top:.2rem
    .list-img
      height:2.5rem
      width:2.3rem
      border-radius: .1rem
    .list-right
      flex:1
      padding:0 .2rem
      .list-title
        font-size:.29rem
        font-weight: 700
        line-height: .45rem
      .list-content
        font-size:.24rem
        line-height:.45rem
        padding:.2rem 0
        color:#666
      .list-price
        display: flex
        justify-content space-between
        color:#666
        font-size:.24rem
      .list-price-tag
        color:#ff8300
        .list-price-mon
          font-size:.35rem
        .list-border
          border:1px solid #ddd
          color:#666
      .list-price-man
        padding-top:.09rem
</style>
