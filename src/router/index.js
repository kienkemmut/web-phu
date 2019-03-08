import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/category/index'
import Vinhomeswest from '@/components/category/Vinhomeswest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
        {
        path: '/category',
        name: 'Category',
        component: Category,
        children: [
            {
                path: "vinhomeswest",
                name: "Vinhomeswest",
                component: Vinhomeswest
            }
        ]
    }
  ]
})
