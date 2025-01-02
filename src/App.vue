<template>
  <div v-if="$store.state.isLoading" style="
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 1000000000000000000000000000000000000000;
      background: white;
    ">
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
      <div>لطفا کمی صبر کنید
      </div>
      <div>متن هوشمند در حال <br> آماده سازیست</div>
    </div>
  </div>
  <div @click="!$store.state.adminsidebar" v-if="$store.state.adminsidebar"
    :style="`background-color: rgba(0, 0, 0, 0.5);left: 0;width: 100%;height: 100%;position: fixed;z-index: 11000000`">
  </div>
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
  border-radius: 10px !important
}

.btn-success {
  background: #2dca67 !important;
  border: solid 1px #2dca67;
}

.topright {}

.bottomleft {}

p,
p {
  font-size: 12px;
  font-weight: normal !important;
  line-height: 1.8
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
  .topper{
    height: 85px;
    width: 100%;
  }
}

@media only screen and (min-width: 1023px) {
  .topper{
    height: 165px;
    width: 100%;
    padding-right: 10%;
  }
  .spacer{
    height: 40px
  }
  .topright {
    width: 50%;
    float: right;
    padding-top: 110px;
  }

  .bottomleft {
    width: 50%;
    padding-top: 5px;
    float: left;
    padding-left: 5%
  }

  p,
  p {
    font-size: 12px;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: white;
    position: absolute;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
    width: 4px;
    height: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b3dcf3;
    border-radius: 10px;
    width: 4px;
    height: 4px;
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

.result-box br {
  line-height: 0.5
}

.result-box h6 {
  font-size: 14px
}


.foldercontainer {
  --transition: 350ms;
  --folder-W: 120px;
  --folder-H: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  height: calc(var(--folder-H) * 1.7);
  position: relative;
}

.folder {
  position: absolute;
  top: -20px;
  left: calc(50% - 60px);
  animation: float 2.5s infinite ease-in-out;
  transition: transform var(--transition) ease;
}

.folder:hover {
  transform: scale(1.05);
}

.folder .front-side,
.folder .back-side {
  position: absolute;
  transition: transform var(--transition);
  transform-origin: bottom center;
}

.folder .back-side::before,
.folder .back-side::after {
  content: "";
  display: block;
  background-color: white;
  opacity: 0.5;
  z-index: 0;
  width: var(--folder-W);
  height: var(--folder-H);
  position: absolute;
  transform-origin: bottom center;
  border-radius: 15px;
  transition: transform 350ms;
  z-index: 0;
}

.foldercontainer:hover .back-side::before {
  transform: rotateX(-5deg) skewX(5deg);
}

.foldercontainer:hover .back-side::after {
  transform: rotateX(-15deg) skewX(12deg);
}

.folder .front-side {
  z-index: 1;
}

.foldercontainer:hover .front-side {
  transform: rotateX(-40deg) skewX(15deg);
}

.folder .tip {
  background: linear-gradient(135deg, #ff9a56, #ff6f56);
  width: 80px;
  height: 20px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -10px;
  z-index: 2;
}

.folder .cover {
  background: linear-gradient(135deg, #ffe563, #ffc663);
  width: var(--folder-W);
  height: var(--folder-H);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.custom-file-upload {
  font-size: 1.1em;
  color: #ffffff;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background var(--transition) ease;
  display: inline-block;
  width: 100%;
  padding: 10px 35px;
  position: relative;
}

.custom-file-upload:hover {
  background: rgba(255, 255, 255, 0.4);
}

.custom-file-upload input[type="file"] {
  display: none;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
