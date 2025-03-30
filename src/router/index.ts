import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Extensions',
      component: () => import('../views/ExtensionsView.vue'),
    }
  ],
})

export default router
