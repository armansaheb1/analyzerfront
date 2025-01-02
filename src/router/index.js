import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layouts/layout.vue'
import Layout2 from '../components/Layouts/layout2.vue'
import Layout3 from '../components/Layouts/layout3.vue'
import AdminLayout from '../components/Layouts/Adminlayout.vue'

const routes = [

  {
    path: '/admin/',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: () => import('../components/AdminPages/Index.vue')
      },
      {
        path: 'services/:slug',
        component: () => import('../components/AdminPages/Service.vue')
      },
      {
        path: 'dashboard',
        component: () => import('../components/AdminPages/Index.vue')
      },
      {
        path: 'manage-category',
        component: () => import('../components/AdminPages/Category.vue')
      },
      {
        path: 'manage-services',
        component: () => import('../components/AdminPages/ManageServices.vue')
      },
      {
        path: 'manage-tone-format',
        component: () => import('../components/AdminPages/ToneFormat.vue')
      },
      {
        path: 'manage-news-services',
        component: () => import('../components/AdminPages/ManageNewsServices.vue')
      },
      {
        path: 'edit-services/:slug',
        component: () => import('../components/AdminPages/EditServices.vue')
      },
    ]
  },
  {
    path: '/admin-login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/AdminPages/Login.vue')
  },

  {
    path: '/',
    component: Layout3,
    children: [
      {
        path: '/register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/Pages/Register.vue')
      },
      {
        path: '/login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/Pages/Login.vue')
      },]
    },
  {
    path: '/',
    component: Layout2,
    children: [
      {
        path: 'writer',
        component: () => import('../components/Pages/Writer.vue')
      },
      {
        path: 'result/:id',
        component: () => import('../components/Pages/NewsResult.vue')
      },
      {
        path: 'news-result/:id',
        component: () => import('../components/Pages/NewsResult2.vue')
      },
      {
        path: 'services/:slug',
        component: () => import('../components/Pages/Service.vue')
      },
      {
        path: 'services/:resid/:nid/:slug',
        component: () => import('../components/Pages/ResultServices.vue')
      },
      {
        path: '/analysis',
        component: () => import('../components/Pages/Analysis.vue')
      },

    ]
  },

  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../components/Pages/Index.vue')
      },
      // {
      //   path: 'speek',
      //   component: () => import('../components/Pages/speek.vue')
      // },
      {
        path: '/',
        component: () => import('../components/Pages/Index.vue')
      },
      {
        path: '/services',
        component: () => import('../components/Pages/Services.vue')
      },
      {
        path: '/occasions',
        component: () => import('../components/Pages/Occasions.vue')
      },
      {
        path: '/news',
        component: () => import('../components/Pages/News.vue')
      },
      {
        path: '/analysis',
        component: () => import('../components/Pages/Analysis.vue')
      },
      {
        path: '/profile',
        component: () => import('../components/Pages/Profile.vue')
      },

    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
