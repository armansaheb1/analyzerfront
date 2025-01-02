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

    <div class="rightnav" style="
        height: 100%;
        background-color: white;
        position: fixed;
        right: 0;
        top: 0;
        padding-top: 100px;
        box-shadow: -2px 2px 5px lightgrey;
      ">
      <div style="width: 100%; z-index: 1; height: 100%; border-radius: 25px">
        <a style="text-decoration: none" href="/services" class="svgbox">
          <div style="height: 45px; width: 45px; border-radius: 10px; margin: auto" :style="[
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
          ]">
            <img style="aspect-ratio: 1/1; width: 100%" src="/img/myicons/desktop ver (5).png" alt="" />
            <br />
            <a style="
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
              ">خانه</a>
          </div>
        </a>
        <a href="/analysis" class="svgbox" style="text-decoration: none">
          <div style="height: 45px; width: 45px; border-radius: 10px; margin: auto" :style="[
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
          ]">
            <img style="aspect-ratio: 1/1; width: 100%" src="/img/myicons/desktop ver (3).png" alt="" />
            <br />
            <a href="/analysis" style="
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
              ">تبدیل تصویر</a>
          </div>
        </a>

        <a class="svgbox" href="/writer" style="text-decoration: none">
          <div style="" :style="[
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
          ]">
            <img style="aspect-ratio: 1/1; width: 100%" src="/img/myicons/desktop ver (4).png" alt="" />
            <br />
            <a href="/analysis" style="
                position: relative;
                text-decoration: none;
                color: #333;
                top: 12px;
                font-size: 11px;
                width: 200%;
                margin-left: -50%;
                display: block;
                margin-top: -5px;
              ">
              تولید محتوا</a>
          </div>
        </a>
        <a style="text-decoration: none" href="/news" class="svgbox">
          <div style="height: 45px; width: 45px; border-radius: 10px; margin: auto" :style="[
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
          ]">
            <img style="aspect-ratio: 1/1; width: 100%" src="/img/myicons/desktop ver (8).png" alt="" />

            <br />
            <a style="
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
              ">
              تحلیل گزارش</a>
          </div>
        </a>
        <a href="/profile" style="text-decoration: none" class="svgbox">
          <div style="height: 45px; width: 45px; border-radius: 10px; margin: auto" :style="[
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
          ]">
            <img style="aspect-ratio: 1/1; width: 100%" src="/img/myicons/MOBILE VER (6).png" alt="" />
            <br />
            <a style="
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
              ">
              حساب من</a>
          </div>
        </a>
      </div>
    </div>
  </div>
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
    if (!this.$store.state.isAuthenticated) {
      this.$router.push(this.$route.go || "/login");
    }

  },
  methods: {
    async check() {
      await axios
        .get('auth/users/me/')
        .then(response => response)
        .catch(() => {
          this.$router.push(this.$route.go || "/login");
        })
    }
  }

};
</script>
<style>
.topright {
  padding-top: 35px !important
}

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
    width: 90%;
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
    width: 98%;
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
