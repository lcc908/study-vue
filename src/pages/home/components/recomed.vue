<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "recomed",
        data(){
            return {
                recommendList:[
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                        title:'北京欢乐谷',
                        desc:'很好玩'
                    },{
                        id:'002',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                        title:'北京欢乐谷',
                        desc:'很好玩'
                    },{
                        id:'003',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                        title:'北京欢乐谷',
                        desc:'很好玩'
                    },{
                        id:'004',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                        title:'北京欢乐谷',
                        desc:'很好玩'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
.item-img
  width: 1.7rem
  height: 1.7rem
  padding: .1rem
.item-info
  flex: 1
  padding: .1rem
  min-width: 0
.item-title
  line-height: .54rem
  font-size: .32rem
.item-desc
  line-height: .4rem
  color: #ccc
.item-button
  border:none
  line-height: .44rem
  margin-top: .16rem
  background: #ff9300
  padding: 0 .2rem
  border-radius: .06rem
  color: #fff
</style>
