<template>
  <div class="CartLine">
    <h3 class="line-title">线路特色</h3>
    <ul>
      <li v-for="(item,index) in lines" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CartLine",
    data(){
      return{
        lines:Array
      }
    },
    mounted(){
      this.lines=this.$store.state.cartLine
    }
  }
</script>

<style lang="stylus" scoped>
  .CartLine >>> img
    width: 100%
  .line-title
    font-size:.36rem
    padding:.5rem
    text-align: center

</style>
