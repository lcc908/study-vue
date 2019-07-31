<template>
    <div class="">
      <Header></Header>
      <homeswiper></homeswiper>
    </div>
</template>

<script>
  import Header from './components/Header'
  import homeswiper from './components/swiper-vue'
export default {
    name: "home",
    components:{
      Header,
      homeswiper
    }
}
</script>

<style scoped>

</style>
