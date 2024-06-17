import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Blog from '../views/blog.vue'
import BlogList from '../views/bloglist.vue'

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
