<template>
  
  <nav v-if="$store.state.adminsidebar" :style="`padding: 0;z-index: 11000001;position:fixed;top: 0;right: 0;width: 200px; height: ${height}px; background-color: #555555;box-sizing: border-box;padding-top: 0px; text-align: right`">
    <a style="width: 100%;height: 65px; font-size: 20px;padding:20px; padding-top:20px; box-sizing: border-box; color: white;text-decoration: none;display: block;" @click="$store.state.adminsidebar= !$store.state.adminsidebar"> <i class="fa-solid fa-bars" style="font-size: 18px;float: right; color: white; border: solid white 3px; padding: 8px; margin-top: -8px;border-radius: 50%; cursor: pointer;"></i></a>
  <a class="sideitem" href="/admin/" style="width: 100%;height: 65px; font-size: 20px;padding:20px; padding-top:20px; box-sizing: border-box; color: white;text-decoration: none;display: block;">خانه</a>  
  <a class="sideitem" href="/admin/manage-category" style="width: 100%;height: 65px; font-size: 18px;padding:20px; padding-top:20px; box-sizing: border-box; color: white;text-decoration: none;display: block;">دسته بندی ها  </a>  
  <a class="sideitem" href="/admin/manage-services" style="width: 100%;height: 65px; font-size: 18px;padding:20px; padding-top:20px; box-sizing: border-box; color: white;text-decoration: none;display: block;">سرویس  </a>  
  <a class="sideitem" href="/admin/manage-news-services" style="width: 100%;height: 65px; font-size: 18px;padding:20px; padding-top:20px; box-sizing: border-box; color: white;text-decoration: none;display: block;">سرویس های خبر </a>  
  <a class="sideitem" href="/admin/manage-tone-format" style="width: 100%;height: 65px; font-size: 18px;padding:20px; padding-top:20px; box-sizing: border-box; color: white;text-decoration: none;display: block;">لحن و فرمت </a>  
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
    data(){
      return {
        width: 0,
      }
    },
    mounted(){
      window.addEventListener('resize', ()=>{
        this.width = document.body.clientWidth
        this.height = window.innerHeight
      })
      this.width = document.body.clientWidth
      this.height = window.innerHeight
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
  .sideitem:hover{
    background-color: rgba(255, 255, 255, 0.1)
  }
  
  .dropdown-content a:hover {background-color: #ddd;}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #3e8e41;}
  </style>