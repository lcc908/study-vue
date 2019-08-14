import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    city:'北京'
  }
})

//
//
// export default new Vuex.Store({
//   state:state,
//   //actions  这一步 是可以省略的，组件可以直接调用mutations
//   // actions:{ //组件调用actions，actions调用下面的 mutations,
//   //   changCity(ctx,city){
//   //     //第一个参数 ctx 的作用就是：帮我们拿到commit，例如：ctx.commit
//   //     //ctx.commit（）执行 mutations下面的changeehere，传过去内容 是city
//   //     ctx.commit('changeehere',city)
//   //   }
//   // },
//   mutations:mutations, //mutations 改变我们的数据
//   getters:{
//     douckty(state){
//       return state.city + '' + state.city
//     }
//   }
//
// })

