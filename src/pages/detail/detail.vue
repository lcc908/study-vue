<template>
    <div>
      <detailbanner></detailbanner>
      <DetailHeader></DetailHeader>
      <div class="content"></div>
    </div>
</template>

<script>
import detailbanner from './components/Banner'
import DetailHeader from './components/Header'
  export default {
    name: "detail",
    components:{
      detailbanner,
      DetailHeader
    }
  }
</script>

<style scoped lang="stylus">
.content
  height: 50rem
</style>
