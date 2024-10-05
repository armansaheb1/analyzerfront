<template>
    <nav style="width: 100%; height: 60px; background-color: #444444;box-sizing: border-box;padding: 20px; margin-bottom: -5px;position: relative;z-index: 10000001">
      <div  style="float: left;" class="dropdown">
  <button style="font-size: 18px;float: left; color: white; border: solid white 3px; padding: 4px 6px; margin-top: -8px;border-radius: 50%; cursor: pointer; background-color: transparent;" class="dropbtn"><i class="fa-regular fa-user" ></i></button>
  <div style="z-index: 10;" v-if="$store.state.isAdmin" class="dropdown-content">
    <a @click="logout()">Sign Out</a>
  </div>
  <div style="z-index: 10;" v-if="!$store.state.isAdmin" class="dropdown-content">
    <a href="/admin/">Sign In</a>
  </div>
</div>



        
        <a @click="$store.state.adminsidebar= !$store.state.adminsidebar"> <i class="fa-solid fa-bars" style="font-size: 18px;float: right; color: white; border: solid white 3px; padding: 8px; margin-top: -8px;border-radius: 50%; cursor: pointer;"></i></a>
    </nav>
  </template>
  
  <script>
  // @ is an alias to /src
  import navbar from '@/components/Layouts/navbar.vue'
import axios from 'axios';
  export default {
    name: 'HomeView',
    components: {
      navbar
    },
    methods: {
        logout() {
            axios.defaults.headers.common.Authorization = ''
            localStorage.removeItem('AdminToken')
            this.$store.commit('removeAdminToken')
            this.$router.push('/admin-login')
            setTimeout(() => {
                location.reload()
            }, 500);
        }
    },
    beforeMount(){
      if(!this.$store.state.isAdmin && this.$router.currentRoute !== '/admin-login'){
        this.$router.push('/admin-login')
      }
    }
  }
  </script>
  <style>
  .dropbtn {
    color: white;
    font-size: 16px;
    border: none;
  }
  
  .dropdown {
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    margin-top: 30px;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    
    background-color: white;
    z-index: 100;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: #ddd;}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #3e8e41;}
  </style>