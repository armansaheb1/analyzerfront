import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layouts/layout.vue'
import AdminLayout from '../components/Layouts/Adminlayout.vue'

const routes = [
  
  {
    path: '/admin/',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: () => import( '../components/AdminPages/Index.vue')
      },
      {
        path: 'services/:slug',
        component: () => import( '../components/AdminPages/Service.vue')
      },
      {
        path: 'dashboard',
        component: () => import( '../components/AdminPages/Index.vue')
      },
      {
        path: 'manage-services',
        component: () => import( '../components/AdminPages/ManageServices.vue')
      },
      {
        path: 'edit-services/:id',
        component: () => import( '../components/AdminPages/EditServices.vue')
      },
    ]
  },
  {
    path: '/admin-login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/AdminPages/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import( '../components/Pages/Index.vue')
      },
      {
        path: 'news',
        component: () => import( '../components/Pages/News.vue')
      },
      {
        path: 'services/:slug',
        component: () => import( '../components/Pages/Service.vue')
      },
      {
        path: 'login',
        component: () => import( '../components/Pages/Login.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
