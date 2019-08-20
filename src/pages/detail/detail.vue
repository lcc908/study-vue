<template>
    <div>
      <detailbanner></detailbanner>
      <DetailHeader></DetailHeader>
      <list :list="list"></list>
      <div class="content"></div>
    </div>
</template>

<script>
import detailbanner from './components/Banner'
import DetailHeader from './components/Header'
import list from './components/list'
  export default {
    name: "detail",
      data(){
        return {
            list:[
                {title:'123',children:[{title:'456'}]},
                {title:'123',children:[{title:'789'}]},
                {title:'123',children:[{title:'987'}]},
                {title:'123',children:[{title:'321'}]},
                {title:'123',children:[{title:'456'}]},
            ]
        }
      },
    components:{
      detailbanner,
      DetailHeader,
      list
    }
  }
</script>

<style scoped lang="stylus">
.content
  height: 50rem
</style>
