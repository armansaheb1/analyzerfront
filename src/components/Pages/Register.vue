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
    <div class="card-header"><h4>ثبت نام</h4></div>
    <div class="card-body" style="text-align: left;">
      <form class="my-5">
        <b-form-group label="موبایل">
          <input v-model="mobile" placeholder="شماره موبایل - (۹۱۰۰۰۰۰۰۰۰)" type="text" pattern="\d*" maxlength="10" class="form-control email"/>
          <div class="invalid-tooltip">{{etool}}</div>
        </b-form-group>
        <b-form-group>
          <div slot="label" class="d-flex justify-content-between align-items-end">
            <div>کلمه عبور</div>
          </div>
          <input type="password" v-model="password" class="form-control pass" />
          <div class="invalid-tooltip">{{ptool}}</div>
        </b-form-group>
        <b-form-group>
          <div slot="label" class="d-flex justify-content-between align-items-end">
            <div>تکرار کلمه عبور</div>
          </div>
          <input type="password" v-model="repassword" class="form-control repass"/>
          <div class="invalid-tooltip">{{reptool}}</div>
        </b-form-group>

        <div class="d-flex justify-content-between align-items-center m-0">
          <b-btn variant="dark" @click="submitForm">Sign In</b-btn>
        </div>
      </form>
<button @click="submit()" class="btn btn-dark">ثبت نام</button>
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
  mounted() {
  },
  data() {
    return {
      mobile: '',
      password: '',
      result: ''
    }
  },
  methods: {
    async submit() {
      const formData = {
        mobile: this.mobile,
        password: this.password
      }
      await axios
        .post('auth/users/', formData)
        .then(response => {
          setTimeout(() => {
            const toPath = this.$route.query.to || '/login'
            this.$router.push(toPath)
          }, 2000)
        })
        .catch(error => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`)
            }
          } else if (error.message) {
            this.errors.push(error.message)
          }
        })
    }
  }
}
</script>