<template>
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
      <p style="font-family: 'vazir'; font-size: 12px">
        اخبار مورد علاقه خود را با هوش مصنوعی دنبال کنید
      </p>
    </div>
  </div>
  <div style="margin: 2.5%">
    <div class="card-body" style="text-align: right">
      <div
        style="text-align: justify; direction: rtl"
        v-html="result"
        class="alert alert-success"
      ></div>
    </div>
    <br />
  </div>

  <div style="height: 60px"></div>
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
    this.get_service();
  },
  data() {
    return {
      service: [],
      datas: {},
      result: "",
    };
  },
  methods: {
    async get_service() {
      var id = this.$route.params.id;
      var service = this.$route.params.service;
      await axios
        .get(`news-services/${id}/${service}`)
        .then((response) => response.data)
        .then((response) => {
          this.result = response;
        });
    },
    async submit() {
      var aaa = {};
      for (var item of this.service.variables) {
        aaa[item.name] = document.getElementById(item.name).value;
      }
      var slug = this.$route.params.slug;
      await axios
        .post(`gbuilder/${slug}`, { data: aaa })
        .then((response) => response.data)
        .then((response) => {
          this.result = response;
          while (this.result.includes("*") || this.result.includes("#")) {
            console.log(this.result);
            this.result = this.result.replace("*", "").replace("#", "");
          }
        });
    },
  },
};
</script>
