import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/life-circle',
      name: 'lifeCircle',
      component: () => import('../views/LifeCircle.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/Props.vue')
    }
  ],
})

export default router
