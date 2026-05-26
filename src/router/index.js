import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/pages/Projects.vue'),
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: () => import('@/pages/ProjectDetail.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
