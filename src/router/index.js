import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DbView from '../views/DbView.vue'



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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserInfo.vue'),
    },
    {
      path: '/db',
      name: 'database',
      component: DbView
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../views/LandingPage.vue')
    }
  ]
})

export default router
