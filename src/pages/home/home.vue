<template>
    <div class="">
      <Header></Header>
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
  import { mapState } from 'vuex'
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
          lastcity:'',
          swiperList:[],
          iconList:[],
          recomedList:[],
          weekendList:[]
      }
    },
  computed:{
    ...mapState(['city']),
  },
  methods:{
      getHomeInfo(){
          axios.get('/static/mock/index.json?city=' + this.city)
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
  mounted() { //页面除此加载的时候
    this.lastcity = this.city
    this.getHomeInfo()
  },
  activated(){ //当页面被重新显示的时候
      if(this.lastcity !== this.city){
        this.lastcity = this.city
        this.getHomeInfo()
      }
  }
}
</script>

<style scoped>

</style>
