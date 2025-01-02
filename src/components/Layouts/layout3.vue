<template>
  <nav style="
      width: 100%;
      height: 25px;
      background: white;
      text-align: right;
      z-index: 10;
      position: relative;
      border-bottom: solid 0.5px ;
    ">
    <div style="
        margin: -25px 5px;
      ">
      <a href="/services">
        <img src="/img/logo-oxygen.png" style="height: 45px; float: right"></a>
    </div>
    <a href="/profile" style="
        margin: -25px 5px;
      ">
      <img src="/img/profile.png"
        style="margin-top: 10px;height: 26px; float: left;margin-right: 20px;aspect-ratio: 1 / 1;">
    </a>
    <a href="/news" style="
        margin: -25px 5px;
      ">
      <img src="/img/newspaper.gif" style="margin-top: 10px;height: 26px; float: left;margin-right: 20px">
    </a>
    <a href="/occasions" style="
        margin: -25px 10;
      ">
      <img src="/img/calendar-(zz).gif" style="margin-top: 5px;height: 33px; float: left;">
    </a>

    <div style="font-size: 12px; margin: 20px 5px ; margin-right: 5px">
    </div>
  </nav>

  <div class="home">
    <!-- <navbar/>
         -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import { useRoute } from "vue-router";
import axios from 'axios';
export default {
  name: "HomeView",
  components: {
    navbar,
  },
  data() {
    return {
      roout: null,
    };
  },
  mounted() {
    var route = useRoute();
    this.roout = route.path;
  },

};
</script>
<style>
.svgbox {
  display: block;
  height: 20%;
  border-radius: 25px;
  border: none;
  box-shadow: none;
  background-color: transparent;
}

.svgbox svg {
  margin: 7px;
}

.bottomnav {
  display: none;
}

.rightnav {
  display: block;
  width: 8%;
}

.main {
  width: 92%;
  float: left;
}

@media only screen and (min-width: 1280px) {
  .main {
    width: 94%;
    float: left;
  }

  .rightnav {
    display: block;
    width: 6%;
  }
}

@media only screen and (max-width: 1023px) {
  .bottomnav {
    display: block;
  }

  .rightnav {
    display: none;
  }

  .main {
    width: 100%;
    float: unset;
  }

  .svgbox {
    height: 45px;
    width: 25%;
    border-radius: 25px;
    border: none;
    box-shadow: none;
    background-color: transparent;
  }

  .svgbox svg {
    margin: 7px;
  }
}
</style>
