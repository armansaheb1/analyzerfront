<template>
  <div @click="!$store.state.adminsidebar" v-if="$store.state.adminsidebar" :style="`background-color: rgba(0, 0, 0, 0.5);left: 0;width: 100%;height: 100%;position: fixed;z-index: 11000000`">
    
  </div>
  <router-view/>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token
    const AdminToken = this.$store.state.AdminToken

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
      this.$store.state.isAuthenticated = true
    }else{
      axios.defaults.headers.common['Authorization'] = ""
      this.$store.state.isAuthenticated = false
    }
    if(AdminToken){
      axios.defaults.headers.common['Authorization'] = "Token " + AdminToken
      this.$store.state.isAdmin = true
      this.$store.state.isAuthenticated = true
    }
    else{
      this.$store.state.isAdmin = false
    }
  },
}
</script>


<style>
input {
  text-align: right
}
body{
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
