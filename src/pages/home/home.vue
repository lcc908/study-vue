<template>
    <div class="">
      <Header :city="city"></Header>
      <homeswiper :list="swiperList"></homeswiper>
      <icon :iconList="iconList"></icon>
      <recomed :recomedList1="recomedList"></recomed>
      <Weekend :aaa="weekendList"></Weekend>
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
          swiperList:[],
          iconList:[],
          recomedList:[],
          weekendList:[]
      }
    },
    methods:{
        getHomeInfo(){
            axios.get('/static/mock/index.json')
                .then(this.getHome)
        },
        getHome(res){
            res = res.data.data
            console.log(res);
            this.swiperList = res.swiperList;
            this.iconList = res.iconList;
            this.recomedList = res.recommendList;
            this.weekendList = res.weekendList;
        }
    },
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style scoped>

</style>
