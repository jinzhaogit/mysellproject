<template>
  <div id="app">
  	<!--存入缓存，防止多次请求 -->
  	<keep-alive exclude="Detail"><!-- 不缓存Detail组件-->
    	<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
