<template>
    <div class="home">
        <Adminnavbar/>
        <AdminSideBar/>

        <div style="padding: 5%">
        <router-view />
      </div>

        
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Adminnavbar from '@/components/Layouts/Adminnavbar.vue'
  import AdminSideBar from '@/components/Layouts/AdminSideBar.vue'

  export default {
    name: 'HomeView',
    components: {
      Adminnavbar,
      AdminSideBar
    }
  }
  </script>