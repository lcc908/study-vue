<template>
  <div>
    <div class="banner" @click="handleBaner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
          奥林匹克塔
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <commongallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handclosess"
    ></commongallary>
    <!--<fade-animation>-->
      <!--<common-gallary-->
        <!--:imgs="bannerImgs"-->
        <!--v-show="showGallary"-->
        <!--@close="handleGallaryClose"-->
      <!--&gt;</common-gallary>-->
    <!--</fade-animation>-->
  </div>
</template>

<script>
  import commongallary from 'common/gallary/Gallary'
// import CommonGallary from 'common/gallary/Gallary'
// import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components:{
    commongallary
  },
  data(){
    return {
      showGallary:false,
      imgs:['//img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg','http://img1.qunarzz.com/sight/p0/1804/cf/cfab40f6cd9d80f1a3.img.jpg_350x240_57952850.jpg']
    }
  },
  methods:{
    handleBaner(){
      this.showGallary = true
    },
    handclosess(){
      this.showGallary = false
    }
  }
  // props: {
  //   sightName: String,
  //   bannerImg: String,
  //   bannerImgs: Array
  // },
  // data () {
  //   return {
  //     showGallary: false
  //   }
  // },
  // methods: {
  //   handleBannerClick () {
  //     this.showGallary = true
  //   },
  //   handleGallaryClose () {
  //     this.showGallary = false
  //   }
  // },
  // components: {
  //   CommonGallary,
  //   FadeAnimation
  // }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
