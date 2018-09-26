<template>
  <div>
    <order-header></order-header>
    <order-list :orderList="orderList"></order-list>
  </div>
</template>

<script>
    import axios from 'axios'
    import OrderHeader from './components/Header'
    import OrderList from './components/List'
    export default {
        name: "order",
        data(){
          return{
            orderList:[]
          }
        },
        components:{
          OrderHeader,
          OrderList
        },
        methods:{
          getOrderList(){
            axios.get('http://localhost:3000/scart').then(this.getOrderListSucc)
          },
          getOrderListSucc(res){
            res=res.data
            if(res.code==1&&res.msg){
              this.orderList=res.msg
            }
          }
        },
        created(){
          this.getOrderList()
        }
    }
</script>

<style scoped>

</style>
