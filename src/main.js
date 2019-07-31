// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'    // 移动端300毫秒点击延迟
import './assets/styles/reset.css'   // 默认样式
import './assets/styles/border.css' //解决移动端 border 1px问题


Vue.config.productionTip = false
fastClick.attach(document.body) // 移动端300毫秒点击延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同的内容给用户
//<router-view/>  显示的是当前路由地址，所对应的内容
