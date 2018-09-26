<template>
  <div>
    <goods-header></goods-header>
    <goods-list :list="list"></goods-list>
  </div>
</template>
<script>
  import axios from 'axios'
  import GoodsHeader from './components/Header'
  import GoodsList from './components/List'
  export default{
    name:'Goods',
    data(){
      return{
        list:[]
      }
    },
    components:{
      GoodsHeader,
      GoodsList
    },
    methods:{
      getGoodsList(){
        axios.get('/api/goods.json').then(this.getGoodsListSucc)
      },
      getGoodsListSucc(res){
        res=res.data
        if(res.ret&&res.data){
          var data=res.data
          this.list=data.goodsList
        }
      }
    },
    mounted(){
      this.getGoodsList()
    }
  }
</script>
<style>

</style>
