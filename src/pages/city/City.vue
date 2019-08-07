<template>
    <div>
      <CityHeader></CityHeader>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hos="hotCities" :letters="letter"></city-list>
      <alphabet :cities="cities" @changes="handChange"></alphabet>
    </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import Alphabet from './components/Alphabet'
export default {
    name: "City",
  components:{
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data(){
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/static/mock/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res = res.data;
      console.log(res);
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handChange:function (e) {
      // console.log(e);
      this.letter = e;
    }
  },
  mounted(){
      this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
