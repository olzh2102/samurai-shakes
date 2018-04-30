import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddShake from '@/components/AddShake'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-shake',
      name: 'AddShake',
      component: AddShake
    }
  ]
})
