<template>
  <div style="margin: 2.5%;">
  <div class="card">
    <div class="card-header"><h4>Log In</h4></div>
    <div class="card-body" style="text-align: left;">
      <input v-model="mobile" type="text" placeholder="mobile" class="form-control"><br>
      <input v-model="password" type="password" placeholder="Password" class="form-control"><br>
<button @click="submit()" class="btn btn-dark">Submit</button>
</div>
</div>
<br>
<div v-if="result" class="alert alert-success">
    {{ result }}
</div></div>
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
mounted(){
},
data(){
    return {
    mobile: '',
    password: '',
    result: ''
    }
},
beforeMount(){
  if(this.$store.state.isAdmin){
    
    const toPath = this.$route.go || '/admin'
    this.$router.push(toPath)
  }
},
methods: {
    async submit(){
      await axios
      .post(`auth/token/login/`, {mobile:this.mobile, password:this.password})
      .then(response => response)
      .then(response => {
          this.myerror = ''
          const token = response.data.auth_token
          this.$store.commit('setAdminToken', token)
          axios.defaults.headers.common.Authorization = 'Token ' + token
          this.$store.state.isAdmin = true
          localStorage.setItem('AdminToken', token)
          const toPath = this.$route.go || '/admin'
          axios.defaults.headers.common['Authorization'] = "Token " + token
          this.$router.push(toPath)
      })

    }
}
}
</script>