import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/category/index'
import Vinhomeswest from '@/components/category/Vinhomeswest'
import Blog from '@/components/blog/index'
import Posts from '@/components/blog/Posts'
import Doitacthicong from '@/components/blog/DoiTacThiCong'
import ViTri from '@/components/blog/ViTri'
import MatBang from '@/components/blog/MatBang'
import ChinhSach from '@/components/blog/ChinhSach'
import CanHoMau from '@/components/blog/CanHoMau'
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
        },
        {
          path: "/vi-tri",
          name: "ViTri",
          component: ViTri,
          meta: {
            title: 'Vị Trí'
          }
        },
        {
          path: "/mat-bang",
          name: "MatBang",
          component: MatBang,
          meta: {
            title: 'Mặt Bằng'
          }
        },
        {
          path: "/chinh-sach",
          name: "ChinhSach",
          component: ChinhSach,
          meta: {
            title: 'Chính Sách'
          }
        },
        {
          path: "/can-ho-mau",
          name: "CanHoMau",
          component: CanHoMau,
          meta: {
            title: 'Căn Hộ Mẫu'
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
