<template>
  <!-- <button
    v-if="roout !== '/'"
    @click="$router.go(-1)"
    style="position: absolute; top: 5px; left: 5px"
    class="btn btn-secondary"
  >
    <
  </button> -->
  <nav
    style="
      width: 100%;
      height: 25px;
      background: white;
      text-align: right;
      z-index: 10;
      position: relative;
      border-bottom: solid 0.5px ;
    "
  >
    <div
      style="
        margin: -25px 5px;
      "
    >
    <img src="/img/logo-oxygen.png" style="height: 45px; float: right">
    </div>

    <div
      style="
        margin: -25px 5px;
      "
    >
    <img src="/img/profile.png" style="margin-top: 10px;height: 25px; float: left;margin-right: 20px">
    </div>
    <div
      style="
        margin: -25px 10;
      "
    >
    <img src="/img/occasion.png" style="margin-top: 10px;height: 25px; float: left;">
    </div>

    <div style="font-size: 12px; margin: 20px 5px ; margin-right: 5px">
    </div>
  </nav>

  <div class="home">
    <!-- <navbar/>
         -->
    <div class="main">
      <router-view />
    </div>
    <div
      class="bottomnav"
      style="
        height: 110px;
        padding: 20px 10%;
        background-color: white;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0%;
        border-top: solid 1px black
      "
    >
      <div
        style="width: 100%; z-index: 1; height: 80px; border-radius: 25px"
        class="btn-group"
        role="group"
        aria-label="Basic example"
      >
        <a style="text-decoration: none" href="/services" class="svgbox">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/services'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '3px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/tools.png"
              alt=""
            />
            <br />
            <a
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
              >ابزارها</a
            >
          </div>
        </a>
        <a style="text-decoration: none" href="/news" class="svgbox">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/news'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '0px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (5).png"
              alt=""
            />

            <br />
            <a
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
            >
              تحلیل گزارش</a
            >
          </div> </a
        ><a class="svgbox" href="/writer" style="text-decoration: none">
          <div
            style=""
            :style="[
              roout == '/writer'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    'background-color': 'white',
                    margin: 'auto',
                    padding: '0px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    'background-color': 'white',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (4).png"
              alt=""
            />
            <br />
            <a
              href="/analysis"
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 200%;
                margin-left: -50%;
                display: block;
                margin-top: -5px;
              "
            >
              تولید محتوا</a
            >
          </div>
        </a>
        <a href="/analysis" class="svgbox" style="text-decoration: none">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/analysis'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '3px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '1px',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (3).png"
              alt=""
            />
            <br />
            <a
              href="/profile"
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
              >تبدیل تصویر</a
            >
          </div>
        </a>
      </div>
    </div>

    <div
      class="rightnav"
      style="
        height: 100%;
        background-color: white;
        position: fixed;
        right: 0;
        top: 0;
        padding-top: 100px;
        box-shadow: -2px 2px 5px lightgrey;
      "
    >
      <div style="width: 100%; z-index: 1; height: 100%; border-radius: 25px">
        <a style="text-decoration: none" href="/services" class="svgbox">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/services'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '3px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/tools.png"
              alt=""
            />
            <br />
            <a
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
              >ابزار ها</a
            >
          </div>
        </a>
        <a href="/analysis" class="svgbox" style="text-decoration: none">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/analysis'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '3px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '1px',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (3).png"
              alt=""
            />
            <br />
            <a
              href="/analysis"
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
              >تبدیل تصویر</a
            >
          </div>
        </a>

        <a class="svgbox" href="/writer" style="text-decoration: none">
          <div
            style=""
            :style="[
              roout == '/writer'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '0px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (4).png"
              alt=""
            />
            <br />
            <a
              href="/analysis"
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 200%;
                margin-left: -50%;
                display: block;
                margin-top: -5px;
              "
            >
              تولید محتوا</a
            >
          </div>
        </a>
        <a style="text-decoration: none" href="/news" class="svgbox">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/news'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '0px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (5).png"
              alt=""
            />

            <br />
            <a
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
            >
              تحلیل گزارش</a
            >
          </div>
        </a>
        <a href="/profile" style="text-decoration: none" class="svgbox">
          <div
            style="height: 45px; width: 45px; border-radius: 10px; margin: auto"
            :style="[
              roout == '/profile'
                ? {
                    height: '55px',
                    'font-weight': 'bold',
                    width: '55px',
                    'border-radius': '10px',
                    margin: 'auto',
                    padding: '3px',
                  }
                : {
                    height: '45px',
                    width: '45px',
                    'font-weight': 'lighter',
                    'border-radius': '10px',
                    margin: 'auto',
                  },
            ]"
          >
            <img
              style="aspect-ratio: 1/1; width: 100%"
              src="/img/myicons/MOBILE VER (6).png"
              alt=""
            />
            <br />
            <a
              style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 100%;
                display: block;
                width: 200%;
                margin-left: -50%;
                margin-top: -5px;
              "
            >
              حساب من</a
            >
          </div>
        </a>
      </div>
    </div>
  </div>
  <div style="height: 60px"></div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import { useRoute } from "vue-router";
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
