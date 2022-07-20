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
    path: '/water-management',
    name: 'water-management',
    component: () => import("@/views/WaterManagementView")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
