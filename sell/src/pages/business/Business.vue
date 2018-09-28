<template>
    <div>
      <business-header></business-header>
      <business-list :bustitle="bustitle" :busprolist="busprolist"></business-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import BusinessHeader from './components/Header'
    import BusinessList from './components/List'
    export default {
        name: "business",
        data(){
          return{
            bustitle:[],
            busprolist:{}
          }
        },
        components:{
          BusinessHeader,
          BusinessList
        },
        methods:{
          getbustitle(){
            axios.get('/api/business.json').then(this.getbustitleSucc)
          },
          getbustitleSucc(res){
            res=res.data
            if(res.ret==1&&res.data){
              this.bustitle=res.data.bustitle
              this.busprolist=res.data.busprolist
            }
          }
        },
        created(){
          this.getbustitle()
        }
    }
</script>

<style scoped>

</style>
