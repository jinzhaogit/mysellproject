<template>
	<ul class="list">
		<li class="item" v-for="item of letters" :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{item}}
    </li>
	</ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props:{
    cities:Object
  },
  data(){
    return{
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated(){
    // 每次数据改变时计算A字母dom元素距离文档顶部的距离(性能优化)
    this.startY=this.$refs['A'][0].offsetTop
  },
  computed:{
    // 将cities对象转换成数组
    letters(){
      const letters=[]
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
      //返回['A','B','C',,,]
    }
  },
  methods:{
    handleLetterClick(e){
      //向父组件传递点击的字母值，由父组件传递给子组件list
      this.$emit('change',e.target.innerText)
    },
    // 移动端触摸屏幕字母时开滑动开关处理
    handleTouchStart(){
      this.touchStatus=true
    },
    // 移动端滑动屏幕字母处理
    handleTouchMove(e){
      if(this.touchStatus){
        //引入timer为了性能优化，减少代码更新数量
        if(this.timer){
          clearTimeout(this.timer)
        }
        // 设置在16毫秒间隔更新一次，肉眼看不到停止状态
        this.timer=setTimeout(()=>{
          //计算触摸屏幕时的位置(事件字母到页面最顶部距离) - 文档头部的高度
          const touchY=e.touches[0].clientY-79
          //首字母到当前字母总高度除以单个字母高度得到当前索引值第几个字母
          const index=Math.floor((touchY-this.startY)/20)
          //过滤掉其他位置
          if(index>=0&& index<this.letters.length){
            //得到当前滑动字母的值传递给父元素处理(同点击字母事件)
            this.$emit('change',this.letters[index])
          }
        },16)
      }
    },
    // 移动端离开屏幕字母时关滑动开关处理
    handleTouchEnd(){
      this.touchStatus=false
    }
  }
}
</script>

<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
   .list
     position:absolute
     top:1.58rem
     right:0
     bottom:0
     display:flex
     flex-direction:column
     justify-content:center
     width:.4rem
     background:#ccc
     .item
     	line-height:.4rem
     	text-align:center
     	color:$bgColor
</style>
