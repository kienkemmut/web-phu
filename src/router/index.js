import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/category/index'
import Vinhomeswest from '@/components/category/Vinhomeswest'
import Blog from '@/components/blog/index'
import Posts from '@/components/blog/Posts'
import Doitacthicong from '@/components/blog/DoiTacThiCong'
import Notification from '@/components/common/PageNotification'

Vue.use(Router)
const router = new Router({
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
      name: 'Vinhomeswest',
      component: Vinhomeswest,
      meta: {
        title: 'Trang chủ'
      }
    },
    {
      path: '/',
      name: 'Category',
      component: Category,
      children: [
        {
          path: "notification",
          name: "Notification",
          component: Notification,
          meta: {
            title: 'Thông báo'
          }
        }
      ]
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: "posts",
          name: "Posts",
          component: Posts,
          meta: {
            title: 'Tin Tức'
          },
        },
        {
          path: "posts/doi-tac-thi-cong",
          name: "Doitacthicong",
          component: Doitacthicong,
          meta: {
            title: 'Đối tác thi công'
          }
        }
      ]
    }
  ]

})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
