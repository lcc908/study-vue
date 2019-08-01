<template>
    <div class="">
      <Header :city="city"></Header>
      <homeswiper :list="swiperList"></homeswiper>
      <icon></icon>
      <recomed></recomed>
      <Weekend></Weekend>
    </div>
</template>

<script>
  import Header from './components/Header'
  import homeswiper from './components/swiper-vue'
  import icon from './components/icon'
  import recomed from './components/recomed'
  import Weekend from './components/Weekend'
  import axios from 'axios'
export default {
    name: "home",
    components:{
      Header,
      homeswiper,
      icon,
      recomed,
      Weekend
    },
    data(){
      return {
          city:'',
          swiperList:[]
      }
    },
    methods:{
        getHomeInfo(){
            axios.get('/static/mock/index.json')
                .then(this.getHome)
        },
        getHome(res){
            res = res.data.data
            console.log(res.swiperList);
            this.swiperList = res.swiperList
        }
    },
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style scoped>

</style>
