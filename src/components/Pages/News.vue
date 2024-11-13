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
      <h5 style="font-weight: bold; font-family: 'vazir'; font-size: 16px">
        اخبار هوش مصنوعی
      </h5>
      <p style="font-family: 'vazir'; font-size: 14px">
        اخبار مورد علاقه خود را با هوش مصنوعی دنبال کنید
      </p>
    </div>
  </div>
  <div
    style="
      overflow-x: auto;
      margin: 1%;
      white-space: nowrap;
      text-align: right;
      margin-top: 10px;
    "
  >
    <div style="clear: both; color: white; border-color: white"></div>
    <br />
    <div>
      <div
        style="
          text-align: right;
          max-width: 100%;
          overflow-x: auto;
          margin-right: 10px;
          font-family: 'vazir';
        "
      >
        <div v-if="!$store.state.isAuthenticated" style="text-align: center">
          ابتدا باید به حساب کاربری وارد شوید
          <br />
          <br />
          <a class="btn btn-dark" style="margin: 5px" href="/register">ثبت نام</a
          ><a class="btn btn-dark" style="margin: 5px" href="/login">ورود</a>
        </div>
        <div v-else-if="noint" style="text-align: center">
          ابتدا کلید واژه های مورد نظر خود را وارد کنید
          <br />
          <br />
          <a class="btn btn-dark" href="/add-keyword">اضافه کردن کلید واژه</a>
        </div>
        <div v-else v-for="item in reports">
          <a
            @click="openLink(item.link)"
            :style="`display: block;text-decoration:none;font-size: 16px; color: #333; background-color: white;  padding: 8px; margin-top: 0px;border-radius: 10px; cursor: pointer;width: 97%; margin:1.5%; padding: 1.5% ;box-sizing: border-box;`"
          >
            <div
              style="
                width: 100%;
                float: left;
                text-align: right;
                white-space: normal;
                padding: 2%;
              "
            >
              <h3 style="font-size: 14px; font-weight: bold">{{ item.title }}</h3>
              <p style="font-size: 10px">{{ item.text }}</p>
            </div>
            <div style="clear: both"></div>
            <hr />
            منبع : {{ item.resource }}
          </a>
          <div
            style="
              max-width: 100%;
              overflow-x: auto;
              overflow-y: hidden;
              height: 65px;
              padding-top: 5px;
              direction: rtl;
            "
          >
            <div
              v-for="itemm in services"
              style="
                text-align: right;
                max-width: 100%;
                display: inline-block;
                direction: rtl;
                margin-top: 10px;
                font-family: 'vazir';
              "
            >
              <a
                style="text-decoration: none"
                :href="'/news-services/' + item.id + '/' + itemm.id"
              >
                <i
                  style="
                    font-size: 14px;
                    color: #8479b1;
                    background-color: white;
                    border: solid white 4px;
                    padding: 10px;
                    margin-top: -8px;
                    border-radius: 20px;
                    cursor: pointer;
                    margin-right: 5px;
                    font-weight: bold;
                    text-align: right;
                    font-family: 'vazir';
                  "
                >
                  <!-- <i class="fa-solid fa-pencil"></i> -->
                  {{ itemm.name }}</i
                ></a
              >
            </div>
          </div>
          <div style="clear: both"></div>
          <div style="margin: 10px"></div>
        </div>
        <div
          class="alert alert-warning"
          v-if="!reports.length && !noint && $store.state.isAuthenticated"
        >
          در حال پیدا کردن خبر ها برای شما هستیم
        </div>
        <br />
      </div>
    </div>
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
    this.get_reports();
    this.get_services();
  },
  data() {
    return {
      reports: [],
      services: [],
      noint: false,
    };
  },
  methods: {
    openLink(url) {
      window.open(url, "MyWindow", "width=600,height=300");
    },
    async get_reports() {
      await axios
        .get("reports")
        .then((response) => response.data)
        .then((response) => {
          if (response === 1) {
            this.noint = true;
            return;
          } else {
            this.reports = response;
            console.log(response);
          }
        });
    },
    async get_services() {
      await axios
        .get("news-services")
        .then((response) => response.data)
        .then((response) => {
          this.services = response;
        });
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: white;
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
  background: rgb(132, 121, 177);
  border-radius: 10px;
  width: 4px;
  height: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: lightgrey;
}
</style>
