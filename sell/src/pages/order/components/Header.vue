<template>
    <div class="header border-bottom">
      <router-link to="/cart" tag="span" class="iconfont icon-back">&#xe624;</router-link>
      购物车({{this.$store.state.total}})
      <div class="header-msg">
        <router-link to="/delorder" tag="span">编辑</router-link>
        <router-link to="/user/login" tag="i" class="iconfont">&#xe611;</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "orderHeader"
    }
</script>

<style lang="stylus" scoped>
  .header
    color: rgb(0, 188, 212)
    font-size: .35rem
    text-align:center
    padding:.2rem
    .icon-back
      float: left
      margin-right:.5rem
    .header-msg
      font-size: .3rem
      float: right
</style>
