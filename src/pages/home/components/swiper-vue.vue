<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: "swiper-vue",
  data(){
      return {
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperList:[{
          id:'0001',
          imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/522b43cda83d29460da14ec8975b4060.jpg_750x200_2ff9e60a.jpg'
        },
          {
            id:'0002',
            imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
          }]
      }
  }
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow hidden
  width: 100%
  height: 0
  padding-bottom 27.25%
.swiper-img
  width: 100%
</style>
