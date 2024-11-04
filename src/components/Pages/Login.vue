<template>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 0;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="height: 130px; margin: 10px;" alt="">

    </div>
    <div style="width: 50%; float: right;text-align: right;margin: 35px 25px ">
      <h5 style="font-weight: bold;font-family: 'vazir';font-size: 16px">ورود</h5>
      <p style="font-family: 'vazir';font-size: 12px;"></p>

    </div>
  </div><br>
  <div style="margin: 2.5%;">
  <div class="card">
    <div class="card-header"><h4>ورود</h4></div>
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
methods: {
    async submit(){
      await axios
      .post(`auth/token/login/`, {mobile:this.mobile, password:this.password})
      .then(response => response)
      .then(response => {
          this.myerror = ''
          const token = response.data.auth_token
          this.$store.commit('setToken', token)
          axios.defaults.headers.common.Authorization = 'Token ' + token
          this.$store.state.isAuthenticated = true
          localStorage.setItem('token', token)
          this.$store.state.loginpop = false
          this.$store.state.loginpopmini = false
          this.$store.state.registerpop = false
          const toPath = this.$route.go || '/'
          axios.defaults.headers.common['Authorization'] = "Token " + token
          this.$router.push(toPath)
      })

    }
}
}
</script>