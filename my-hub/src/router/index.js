import Vue from 'vue'
import Router from 'vue-router'
import HomeHub from '@/components/HomeHub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeHub',
      component: HomeHub
    }
  ]
})
