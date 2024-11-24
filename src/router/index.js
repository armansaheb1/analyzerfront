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
        path: 'manage-category',
        component: () => import( '../components/AdminPages/Category.vue')
      },
      {
        path: 'manage-services',
        component: () => import( '../components/AdminPages/ManageServices.vue')
      },
      {
        path: 'manage-tone-format',
        component: () => import( '../components/AdminPages/ToneFormat.vue')
      },
      {
        path: 'manage-news-services',
        component: () => import( '../components/AdminPages/ManageNewsServices.vue')
      },
      {
        path: 'edit-services/:slug',
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
    path: '/register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/Pages/Register.vue')
  },
  {
    path: '/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/Pages/Login.vue')
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
        path: 'services',
        component: () => import( '../components/Pages/Services.vue')
      },
      {
        path: 'writer',
        component: () => import( '../components/Pages/Writer.vue')
      },
      {
        path: 'news',
        component: () => import( '../components/Pages/News.vue')
      },
      {
        path: 'analysis',
        component: () => import( '../components/Pages/Analysis.vue')
      },
      {
        path: 'profile',
        component: () => import( '../components/Pages/Profile.vue')
      },
      {
        path: 'news-services/:id',
        component: () => import( '../components/Pages/NewsResult.vue')
      },
      {
        path: 'services/:slug',
        component: () => import( '../components/Pages/Service.vue')
      },
      {
        path: 'add-keyword',
        component: () => import( '../components/Pages/AddKeyword.vue')
      },
      {
        path: 'add-keyword-social',
        component: () => import( '../components/Pages/AddKeywordSocial.vue')
      },

    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
