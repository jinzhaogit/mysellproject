<template>
    <transition :name="transitionName">
      <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: "SlideAnimation",
        data(){
          return{
            transitionName:''
          }
        },
        watch:{
          $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if(to.meta.index > from.meta.index){
              //设置动画名称
              this.transitionName = 'slide-left';
            }else{
              this.transitionName = 'slide-right';
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active
    will-change: transform
    transition: all 400ms
    position: absolute
    top:0
    bottom:0
    left:0
    right:0
  .slide-right-enter,.slide-left-leave-active
    opacity: 0
    transform: translateX(-100%)
  .slide-right-leave-active,.slide-left-enter
    opacity: 0
    transform: translateX(100%)
</style>
