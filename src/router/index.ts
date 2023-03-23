import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/helloHello.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
