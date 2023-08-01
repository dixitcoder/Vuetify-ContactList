// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeProduct.vue'
import User from '../components/User.vue'
import ProductDetail from '../components/ConatcDetils.vue'
import error from '../components/Error.vue'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: ProductDetail
  },
  {
    path: '/home',
    name: 'Message',
    component: Home
  },
  {
    path: '/user',
    name: 'userserch bar',
    component: User
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
