import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import("@/views/MainView")
  },
  {
    path: '/achievements',
    name: 'achievements',
    component: () => import("@/views/AchievementsView")
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import("@/views/ContactView")
  },
  {
    path: '/service/:id',
    name: 'service',
    component: () => import("@/views/ServiceView")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
