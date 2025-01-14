import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import indexToDo from '@/views/indexToDo.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexToDo,
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
