import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Koskosan',
      component: () => import('../views/KoskosanView.vue')
    },
    {
      path: '/koskosan',
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