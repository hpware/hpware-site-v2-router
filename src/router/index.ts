import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import Blog from '../pages/blog.vue'
import BlogList from '../pages/bloglist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/bloglist',
    name: 'BlogList',
    component: BlogList
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
