import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DbView from '../views/DbView.vue'
import StoreReadView from '../views/store/StoreReadView.vue'
import StoreWriteView from '../views/store/StoreWriteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/addashop',
      name: 'addashop',
      component: () => import('../views/AddAShopView.vue')
    },
    {
      path: '/db',
      name: 'database',
      component: DbView
    },
    {
      path: '/store/read',
      name: 'store/read',
      component: StoreReadView
    },
    {
      path: '/store/write',
      name: 'store/write',
      component: StoreWriteView
    }
  ]
})

export default router
