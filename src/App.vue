<template>
  <div
    v-if="$store.state.isLoading"
    style="
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 1000000000000000000000000000000000000000;
      background: white;
    "
  >
    <div class="loadinger">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div style="position: fixed;font-size: 12px;
  top: 50%;
  left: 30%;
  width: 40%;
  text-align: center;
  margin:auto">
    <div>کمی صبر کنید
 </div>
 <div>نتیجه در حال آماده‌سازی است</div>
  </div>
  </div>
  <div
    @click="!$store.state.adminsidebar"
    v-if="$store.state.adminsidebar"
    :style="`background-color: rgba(0, 0, 0, 0.5);left: 0;width: 100%;height: 100%;position: fixed;z-index: 11000000`"
  ></div>
  <router-view />
</template>
<script>
// @ is an alias to /src
// Import component
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Loading,
  },
  beforeCreate() {
    this.$store.commit("initializeStore");

    const token = this.$store.state.token;
    const AdminToken = this.$store.state.AdminToken;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
      this.$store.state.isAuthenticated = true;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
      this.$store.state.isAuthenticated = false;
    }
    if (AdminToken) {
      axios.defaults.headers.common["Authorization"] = "Token " + AdminToken;
      this.$store.state.isAdmin = true;
      this.$store.state.isAuthenticated = true;
    } else {
      this.$store.state.isAdmin = false;
    }
  },
};
</script>

<style>
input {
  text-align: right;
}
body {
  margin: 0;
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
.form-control {
  border-radius: 0 !important;
  border: none;
}
.btn {
  font-size: 12px;
  border-radius: 10px!important
}
.btn-success {
  background: #2dca67 !important;
  border: solid 1px #2dca67;
}

.topright {
}
.bottomleft {
}
p,
p {
  font-size: 9px;
  font-weight: normal!important
}

@media only screen and (max-width: 1023px) {

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: white;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
    width: 0px;
    height: 0px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(104 131 228);
    border-radius: 10px;
    width: 0px;
    height: 0px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: lightgrey;
  }
}
@media only screen and (min-width: 1023px) {
  
  .topright {
    width: 50%;
    padding-top: 100px;
    float: right;
    padding-top: 150px;
  }
  .bottomleft {
    width: 50%;
    padding-top: 80px;
    float: left;
  }
  p,
  p {
    font-size: 12px;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: white;
    position: absolute;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
    width: 6px;
    height: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(108 131 228);
    border-radius: 10px;
    width: 6px;
    height: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: lightgrey;
  }
}

/* From Uiverse.io by terenceodonoghue */
.loadinger {
  position: fixed;
  top: 45%;
  left: 50%;
  display: flex;
  gap: 0.625em;
  transform: translate(-50%, -50%);
  z-index: 1000000000000000000000;
}

.loadinger div {
  border-radius: 50%;
  height: 1.5em;
  width: 1.5em;
}

.loadinger div::before {
  content: "";
  display: block;
  border-radius: inherit;
  height: inherit;
  width: inherit;
  background-color: inherit;
  animation: ripple 1.8s ease-out infinite;
  animation-delay: inherit;
  z-index: -1;
}

.loadinger div:nth-of-type(1) {
  background-color: #84cdfa;
}

.loadinger div:nth-of-type(2) {
  background-color: #5ad1cd;
  animation-delay: 0.2s;
}

.loadinger div:nth-of-type(3) {
  background-color: #9b59b6;
  animation-delay: 0.4s;
}

@keyframes ripple {
  from {
    opacity: 1;
    transform: scale(0);
  }

  to {
    opacity: 0;
    transform: scale(3);
  }
}
</style>
