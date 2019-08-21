<template>
    <div>
      <detailbanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      ></detailbanner>
      <DetailHeader></DetailHeader>
      <list :list="list"></list>
      <div class="content"></div>
    </div>
</template>

<script>
import detailbanner from './components/Banner'
import DetailHeader from './components/Header'
import list from './components/list'
import axios from 'axios'
  export default {
    name: "detail",
      data(){
        return {
          sightName:'',
          bannerImg:'',
          gallaryImgs:[],
          list:[]
        }
      },
    components:{
      detailbanner,
      DetailHeader,
      list
    },
    methods:{
      getDetail(){
        axios.get('/static/mock/detail.json?id=',{
          params:{
            id:this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        res= res.data;
        if (res.ret && res.data) {
          const  data = res.data;
          console.log(data);
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.gallaryImgs = data.gallaryImgs;
          this.list = data.categoryList;
        }
      }
    },
    mounted(){
      this.getDetail()
    },
    activated(){

    }
  }
</script>

<style scoped lang="stylus">
.content
  height: 50rem
</style>
