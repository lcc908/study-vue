import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/home' //@ 指src目录
// import City from '@/pages/city/City' //@ 指src目录
// import detail from '@/pages/detail/detail' //@ 指src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //当用户访问根路径的时候  加载HelloWorld这个组件的内容
      name: 'Home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/city', //当用户访问根路径的时候  加载HelloWorld这个组件的内容
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id', //当用户访问根路径的时候  加载HelloWorld这个组件的内容
      name: 'detail',
      component: () => import('@/pages/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
