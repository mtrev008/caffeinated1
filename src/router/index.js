import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'
import { router } from '@/stores/index.js';


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes : [
//     {
//       path: '/', 
//       name: 'home',
//       component: HomeView,
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: () => import('../views/Login.vue')
//     }
//   ]
// })



export default router





//---------------------
/* const routes = [
//     {
//       path: '/', 
//       name: 'home',
//       component: HomeView
//       meta: {
//         requiresAuth: true
//        }
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () => import('../views/AboutView.vue'),
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: () => import('../views/Login.vue')
//     }
//   ]

*/


//------------------------------------ og below
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//      /* potentially its import.meta.env.BASE_URL in ()*/ 
//     routes
// })


// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: '/', 
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: () => import('../views/Login.vue')
//     }
//   ]
// })


