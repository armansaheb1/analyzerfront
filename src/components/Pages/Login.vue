<template>
  <div v-if="level === 1" style="margin: 2.5%">
    <div class="topright">
      <div
        style="
          margin-top: 80px;
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        "
      >
        <img style="width: 100%; height: 100%" src="/img/myicons/page-1.png" alt="" />
      </div>
      <br />
      <h6 style="font-weight: bolder">ورود به حساب کاربری</h6>
    </div>
    <div class="bottomleft">
      <div class="card-body" style="text-align: left; width: 90%; margin: 5%">
        <input
          v-model="mobile"
          type="text"
          class="form-control"
          style="width: 56%; float: left; font-size: 12px; text-align: center"
        />

        <div
          class="form-control"
          style="float: right; width: 42%; font-size: 12px; text-align: center"
        >
          شماره تماس
        </div>

        <div style="clear: both"></div>

        <br />
        <input
          v-model="password"
          type="password"
          class="form-control"
          style="width: 56%; float: left; font-size: 12px; text-align: center"
        />
        <div
          class="form-control"
          style="float: right; width: 42%; font-size: 12px; text-align: center"
        >
          کلمه عبور
        </div>

        <div style="clear: both"></div>

        <div style="clear: both"></div>
        <br /><br /><br /><br />
        <button
          style="border-radius: 0"
          @click="submit()"
          class="btn btn-success form-control"
        >
          ورود
        </button>
        <p style="text-align: right; margin-top: 14px; text-align: center">
          هنوز ثبت نام نکرده اید؟
        </p>
        <a style="border-radius: 0" href="/register" class="btn btn-dark form-control">
          ثبت نام
        </a>
      </div>
    </div>
    <br />
    <div v-if="result" class="alert alert-success">
      {{ result }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
  mounted() {},
  data() {
    return {
      mobile: "",
      password: "",
      result: "",
      level: 1,
      tone: "",
    };
  },
  methods: {
    async submit() {
      await axios
        .post(`auth/token/login/`, { mobile: this.mobile, password: this.password })
        .then((response) => response)
        .then((response) => {
          this.myerror = "";
          const token = response.data.auth_token;
          this.$store.commit("setToken", token);
          axios.defaults.headers.common.Authorization = "Token " + token;
          this.$store.state.isAuthenticated = true;
          localStorage.setItem("token", token);
          this.$store.state.loginpop = false;
          this.$store.state.loginpopmini = false;
          this.$store.state.registerpop = false;
          axios.defaults.headers.common["Authorization"] = "Token " + token;
          this.$router.push(this.$route.go || "/");
        });
    },
  },
};
</script>

<style>
.active {
  color: green;
}
</style>
