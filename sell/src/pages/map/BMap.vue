<template>
    <div class="myMap">
      <div class="header">
        <div @click="backFun" class="iconfont">&#xe624;</div>
        <div class="header-input">查看地图</div>
      </div>
      <div id="bmap"></div>
    </div>

</template>

<script>
    import BMap from 'BMap'
    export default {
        name: "BMap",
        methods:{
          // 返回上一页
          backFun(){
            this.$router.go(-1)
          }
        },
        mounted(){
          var map = new BMap.Map("bmap") ;// 创建地图实例
          var point = new BMap.Point(116.402122,39.929583); // 创建点坐标
          map.centerAndZoom(point, 15) ;// 初始化地图，设置中心点坐标和地图级别
          map.enableScrollWheelZoom(true);   //开启鼠标滚轮缩放
          //自定义控件
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl());
          map.addControl(new BMap.OverviewMapControl());
          map.addControl(new BMap.MapTypeControl());
          map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
          //提示信息
          var opts = {
            width : 20,     // 信息窗口宽度
            height: 10,     // 信息窗口高度
            title : "去哪网-故宫"  // 信息窗口标题
          }
          var infoWindow = new BMap.InfoWindow("我在这里，快来啊", opts);  // 创建信息窗口对象
          map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
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
  #bmap
    position: absolute
    left: 0
    right: 0
    top:.86rem
    bottom:0
</style>
