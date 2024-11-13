<template>
  <div style="width: 100%; height: 40px; background: white"></div>
  <div
    style="
      width: 100%;
      height: 150px;
      background-color: white;
      border-radius: 0 0 35px 35px;
      padding: 0;
    "
  >
    <div style="width: 35%; float: left">
      <img src="/bot.png" style="height: 130px; margin: 10px" alt="" />
    </div>
    <div style="width: 50%; float: right; text-align: right; margin: 35px 25px">
      <h5 style="font-weight: bold; font-family: 'vazir'; font-size: 16px">پروفایل</h5>
      <p style="font-family: 'vazir'; font-size: 12px"></p>
    </div>
  </div>
  <div class="card-body">
    <div class="card">
      <div class="card-header">تغییر کلمه عبور</div>
      <div class="card-body">
        <label for="">کلمه عبور فعلی</label>
        <input class="form-control" type="password" />
        <label for="">کلمه عبور جدید</label>
        <input class="form-control" type="password" />
        <label for="">تکرار کلمه عبور </label>
        <input class="form-control" type="password" />
        <br />
        <button @click="logout()" class="btn btn-dark form-control">
          تغییر کلمه عبور
        </button>
      </div>
    </div>
    <br />
    <button @click="logout()" class="btn btn-danger form-control">Logout</button>
  </div>

  <div style="height: 200px"></div>
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
  mounted() {
    this.get_services();
    this.get_categories();
  },
  data() {
    return {
      services: [],
      categories: [],
    };
  },
  methods: {
    logout() {
      axios.defaults.headers.common.Authorization = "";
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      localStorage.removeItem("username");
      localStorage.removeItem("userid");
      localStorage.removeItem("admin");
      this.$store.isAdmin = false;
      this.$store.commit("removeAdminToken");
      localStorage.removeItem("AdminToken");
      this.$store.commit("removeToken");
      this.$router.push("/login");
    },
    async get_services() {
      await axios
        .get("services")
        .then((response) => response.data)
        .then((response) => {
          this.services = response;
        });
    },
    async get_categories() {
      await axios
        .get("categories")
        .then((response) => response.data)
        .then((response) => {
          this.categories = response;
        });
    },
  },
};
</script>
