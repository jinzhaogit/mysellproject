<template>
    <div class="cost">
      <h3 class="cost-title">费用包含</h3>
      <div class="cost-item border" v-for="item in costs" :key="item.id">
        <div class="cost-left border">
          <span class="cost-txt">{{item.title}}</span>
        </div>
        <span class="cost-right border">{{item.cost_desc}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cost",
        data(){
          return{
            costs:Array
          }
        },
        mounted(){
         this.costs=this.$store.state.costs
        }
    }
</script>

<style lang="stylus" scoped>
      .cost-title
        font-size:.36rem
        padding:.5rem
        text-align: center
      .cost-item
        display: flex
        margin:0 .2rem
        .cost-left
          width: 1.5rem
          text-align: center
          background-color:#F5F5F5
          .cost-txt
            display: block
            position: relative
            top:50%
            margin-top:-.14rem
        .cost-right
          flex:1
          line-height:.5rem
          padding:.2rem
</style>
