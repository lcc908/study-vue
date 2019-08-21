<template>
  <div id="app">
    <!--显示的是当前路由地址，所对应的内容-->
    <keep-alive exclude="detail">
      <!--//keep-alive路由的内容如果加载过，就放到内存中-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
