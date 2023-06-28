import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BungallowView.vue'
import NewPage from '../views/KoskosanView.vue'
import KoskosanViewVue from '../views/KoskosanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Koskosan',
      component: () => import('../views/KoskosanView.vue')
    },
    {
      path: '/bungallow',
      name: 'bungallow',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BungallowView.vue')
    }
  ]
})

export default router