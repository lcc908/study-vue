// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'    // 移动端300毫秒点击延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'   // 默认样式
import './assets/styles/border.css' //解决移动端 border 1px问题
import './assets/styles/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body) // 移动端300毫秒点击延迟
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同的内容给用户
//<router-view/>  显示的是当前路由地址，所对应的内容
