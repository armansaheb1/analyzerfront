<template>
  <div style="
      overflow-x: auto;
      overflow-y: hidden;
      text-align: right;
      margin-top: 10px;
    ">
    <div style="clear: both; color: white; border-color: white"></div>
    <div v-if="!subject">
      <br />

      <h4 style="
          font-family: 'vazir';
          margin-right: 10%;
          font-size: 18px;
          border-radius: 16px;
          line-height: 30px;
          margin-bottom: 0;
        ">
        موضوع خبر خود را انتخاب کنید
      </h4>
      <div style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            font-family: 'vazir';
            direction: rtl;
            padding: 0 7.5%;
          ">
        <a v-for="(item, idx) in categories" class="mycard"
          :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #fff;  padding: 8px; margin-top: 0px;border-radius: 20px; cursor: pointer; margin:1%; padding: 1.5% ;box-sizing: border-box;aspect-ratio: 1/1`"
          @click="subject = item.id">
          <i v-bind:key="item" style="padding: 0 10px">
            <h6 style="
                  margin: 0;
                  height: 30px;
                  color: black;
                  font-size: 14px;
                  border-radius: 16px;
                  line-height: 30px;
                  white-space: break-spaces;
                  text-align: center;
                  font-family: 'vazir';
                  width: 90%;
                  margin-right: 5%;
                  margin-bottom: 5px;
                " v-html="item.name"></h6>
            <div style="clear: both"></div>
            <i style="
                  display: block;
                  width: 54%;
                  margin: auto;
                  margin-bottom: 10px;
                  aspect-ratio: 1/1;
                  border-radius: 0;

                  text-align: center;
                "><img style="width: 100%; aspect-ratio: 1/1; border-radius: 0" :src="item.get_image" alt="" /></i>
          </i>
        </a>

        <div style="clear: both"></div>

      </div>
    </div>
    <div style="padding:0 10%" v-if="subject && !sourcesadded">
      <br />
      <div class="topright">
        <h4 style="
          font-family: 'vazir';
          font-size: 18px;
          border-radius: 16px;
          line-height: 30px;
          margin-bottom: 0;
          
        ">
          رسانه ها را انتخاب کنید
        </h4>
        <h6 style="
              margin: 0;
              height: 30px;
              color: black;
              font-size: 12px;
              border-radius: 16px;
              line-height: 30px;
              white-space: break-spaces;
              text-align: right;
              font-family: 'vazir';
              margin-bottom: 5px;
            ">
          رسانه هایی که میخواهید اخبار آن بررسی شود انتخاب کنید
        </h6>
      </div>
      <div class="bottomleft">
        <a v-for="(item, idx) in sites"
          style="text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #fff;  margin-top: 0px;border-radius: 20px; cursor: pointer; margin:2%; ;box-sizing: border-box;width: 46%;aspect-ratio: 1 / 0.7"
          @click="addremove(item.id)">
          <i v-bind:key="item">
            <i style="
              display: block;
              width: 100%;
              margin: auto;
              margin-bottom: 10px;
              height: 70%;
              border-radius: 0;

              text-align: center;
            "><img style="width: 100%;height: 100%; aspect-ratio: 1/1; border-radius:  16px 16px 0 0"
                :src="item.get_image" alt="" /></i>

            <h6 style="
              margin: 0;
              height: 30px;
              color: black;
              font-size: 14px;
              border-radius:  0 0 16px 16px;
              line-height: 30px;
              white-space: break-spaces;
              text-align: center;
              font-family: 'vazir';
              width: 100%;
              height: 30%
              margin-bottom: 5px;
            " :style="[sources.includes(item.id) ? { 'background': '#64cdc3' } : {}]" v-html="item.name"></h6>
          </i>
        </a>

        <div style="clear: both"></div>
        <button @click="subject = ''" class="btn btn-outline-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 14px">
          بازگشت
        </button>
        <button v-if="sources.length" @click="sourcesadded = true" class="btn btn-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 13px">
          ادامه
        </button>
        <button v-else disabled @click="sourcesadded = true" class="btn btn-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 13px">
          ادامه
        </button>
      </div>
      <br>
      <div style="clear: both"></div>
      <div style=" width: 100%">
        <div style="clear: both"></div>


      </div>
    </div>

    <div style="padding:0 10%" v-if="subject && sourcesadded">
      <br />
      <div class="topright">
        <h4 style="
          font-family: 'vazir';
          font-size: 18px;
          border-radius: 16px;
          line-height: 30px;
          margin-bottom: 0;
          
        ">
          یکی از گزینه ها را انتخاب کنید
        </h4>
        <h6 style="
              margin: 0;
              height: 30px;
              color: black;
              font-size: 12px;
              border-radius: 16px;
              line-height: 30px;
              white-space: break-spaces;
              text-align: right;
              font-family: 'vazir';
              margin-bottom: 5px;
            ">
          خروجی شما بر اساس این انتخاب سفارشی سازی خواهد شد
        </h6>
      </div>
      <div class="bottomleft">
        <a v-for="(item, idx) in subs"
          style="text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #fff;  margin-top: 0px;border-radius: 20px; cursor: pointer; margin:2%; ;box-sizing: border-box;width: 46%;aspect-ratio: 1 / 0.7"
          @click="get(item.id)">
          <i v-bind:key="item">
            <i style="
              display: block;
              width: 100%;
              margin: auto;
              margin-bottom: 10px;
              height: 100%;
              border-radius: 0;

              text-align: center;
            "><img
                style="width: 50%;aspect-ratio: 1/1' ; margin: 12% 25%; aspect-ratio: 1/1; border-radius:  16px 16px 0 0"
                :src="item.get_image" alt="" /></i>

            <h6 style="
              margin: 0;
              height: 30px;
              color: black;
              font-size: 14px;
              border-radius:  0 0 16px 16px;
              line-height: 30px;
              white-space: break-spaces;
              text-align: center;
              font-family: 'vazir';
              width: 100%;
              height: 30%
              margin-bottom: 5px;
            " :style="[sources.includes(item.id) ? { 'background': '#64cdc3' } : {}]" v-html="item.name"></h6>
          </i>
        </a>
      </div>

      <div style="clear: both"></div>
      <br>
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
    this.get_categories();
    this.get_sites();
    this.get_subs();
  },
  data() {
    return {
      services: [],
      sourcesadded: false,
      subject: "",
      categories: [],
      occasions: "",
      subs: [],
      sources: [],
      sites: [],
      category: "",
      olength: false,
      colors: ["#82ccfb", "#9958b8", "#b3dcf3", "#ecd6f6"],
    };
  },
  methods: {
    addremove(id) {
      if (this.sources.includes(id)) { this.sources.splice(this.sources.indexOf(id), 1) } else { this.sources.push(id) }
    },
    async get(id) {
      this.$store.state.isLoading = true;
      await axios
        .put(`news-services`, { sources: this.sources, subject: this.subject, sub: id })
        .then((response) => response.data)
        .then((response) => {
          this.result = response;
          this.$router.push(this.$route.go || `/news-result/${response}`);
        })
        .catch(() => {
          setTimeout(() => {
            this.get(id);
          }, 5000);
        });
    },
    async get_occasions() {
      await axios
        .get("occasions")
        .then((response) => response.data)
        .then((response) => {
          this.occasions = response;
        });
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
        .get("news-categories")
        .then((response) => response.data)
        .then((response) => {
          console.log(response)
          this.categories = response;
        });
    },
    async get_sites() {
      await axios
        .get("newssites")
        .then((response) => response.data)
        .then((response) => {
          this.sites = response;
        });
    },
    async get_subs() {
      await axios
        .get("news-sub-services")
        .then((response) => response.data)
        .then((response) => {
          this.subs = response;
        });
    },
  },
};
</script>
<style>
.mycard {
  box-sizing: border-box;
  width: 31%;
  margin: 1%;
  aspect-ratio: 1/1;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.mycard:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.mycard2 {
  box-sizing: border-box;
  width: 48%;
  margin: 1%;
  aspect-ratio: 3/1;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.mycard2:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard2:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.mycard3 {
  box-sizing: border-box;
  height: 80px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
  margin-left: 10%;
}

.mycard3:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard3:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>
