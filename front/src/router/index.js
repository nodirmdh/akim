import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/area',
    name: 'Area',
    component: () => import('../views/Area.vue')
  },
  {
    path: '/anti-cor',
    name: 'AntiCor',
    component: () => import('../views/AntiCor.vue')
  },
  {
    path: '/deputies',
    name: 'Deputies',
    component: () => import('../views/Deputies.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/Feedback.vue')
  },
  {
    path: '/info',
    name: 'Information',
    component: () => import('../views/Information.vue')
  },
  {
    path: '/management',
    name: 'Management',
    component: () => import('../views/Management')
  },
  {
    path: '/newsItem/:id',
    name: 'NewsItem',
    component: () => import('../components/NewsItem.vue')
  },
  {
    path: '/opendata',
    name: 'OpenData',
    component: () => import('../views/OpenData.vue')
  },
  {
    path: '/documents',
    name: 'Documents',
    component: () => import('../views/Documents.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
