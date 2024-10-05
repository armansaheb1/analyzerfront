<template>
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
    }
    else{
      this.$store.state.isAdmin = false
    }
  },
}
</script>


<style>
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
