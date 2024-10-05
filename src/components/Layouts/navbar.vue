<template>
    <nav style="width: 100%; height: 60px; background-color: #444444;box-sizing: border-box;padding: 20px; margin-bottom: 10px;position: relative;z-index: 10000001">
      <div  style="float: left;" class="dropdown">
  <button style="font-size: 18px;float: left; color: white; border: solid white 3px; padding: 4px 6px; margin-top: -8px;border-radius: 50%; cursor: pointer; background-color: transparent;" class="dropbtn"><i class="fa-regular fa-user" ></i></button>
  <div style="z-index: 10;" v-if="$store.state.isAuthenticated" class="dropdown-content">
    <a  href="#">Profile</a>
    <a href="#">Buy Token</a>
    <a style="cursor: pointer;" @click="logout()">Sign Out</a>
  </div>
  <div style="z-index: 10;" v-else class="dropdown-content">
    <a  href="/login">Log In</a>
    <a href="#">Sign Up</a>
  </div>
</div>
        
        <i  style="font-size: 28px;float: left; color: white ; margin-top: -8px;margin: -8px 10px; cursor: pointer;">|</i>
        <i  style="font-size: 16px;float: left; color: white; border: solid white 3px; padding: 5px; margin-top: -8px;border-radius: 20px; cursor: pointer;">Token Balance: 0</i>

        
        <a href="/"> <i class="fa-solid fa-bars" style="font-size: 18px;float: right; color: white; border: solid white 3px; padding: 8px; margin-top: -8px;border-radius: 50%; cursor: pointer;"></i></a>
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
            localStorage.removeItem('token')
            localStorage.removeItem('uri')
            this.$store.commit('removeToken')
            this.$router.push('/')
            setTimeout(() => {
                location.reload()
            }, 500);
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