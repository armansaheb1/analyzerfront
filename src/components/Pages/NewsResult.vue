<template>
  <div v-if="result">
    <div class="topright" style="padding-top: 30px">
      <div>
        <div style="
            margin-top: 0px;
            width: 24%;
            margin-left: 38%;
            margin-right: 38%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/myicons/MOBILE VER (19).png" alt="" />
        </div>
        <br />
        <h5 style="font-size:15px">گزارش هوشمند شما آماده شد</h5>
      </div>
    </div>
    <div class="bottomleft card-body">
      <p style="width: 80%; margin-right: 10%; margin-left: 10%">با کلیک بر روی هر خبر میتوانید از انواع سرویس های
        ویرایش متن
        ما برای شبکه های اجتماعی, مقاله نویسی و ... استفاده کنید
      </p>
      <div style="
          text-align: right;
          width: 80%;
          margin-left: 10%;
          margin-right: 10%;
          direction: rtl;
          background:white;
          padding: 5%;
          border-radius: 10px;
          margin-top: 15px;
          cursor: pointer
        " v-for="(item, idx) in result" @click="selected = idx; isModalVisible = true" class="result-box">
        <h5 style="font-size: 14px">{{ item.title }}</h5>
        <br>
        <h6 style="color: rgb(119, 119, 119); font-size: 12px">{{ item.text }}</h6>
      </div>
    </div>
  </div>
  <div v-if="text">
    <div class="topright" style="padding-top: 30px">
      <div style="
          text-align: right;
          width: 80%;
          margin-left: 10%;
          margin-right: 10%;
          direction: rtl;
          background: white;
          padding: 5%;
          border-radius: 10px;
          margin-top: 15px;
        " v-if="text" v-html="text" class="result-box"></div>
    </div>
    <div class="bottomleft" style="padding: 0 10%">
      <div v-if="text">
        <br />
        <br />
        <h6 for="" style="text-align: right; width: 100%; font-weight: bold; font-size: 14px">
          تغییرات مجدد
        </h6>

        <div style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            overflow-y: hidden;
          ">
          <div>
            <div v-for="item in rebuildServices" @click="afterSubmitRebuild(item.id)" style="
                text-align: right;
                max-width: 100%;
                display: inline-block;
                height: 30px;
                direction: rtl;
                margin-top: 18px;
                font-family: 'vazir';
              ">
              <i style="
                  font-size: 12px;
                  color: #8479b1;
                  background-color: white;
                  border: solid white 2px;
                  padding: 5px 10px;
                  margin-top: -8px;
                  border-radius: 10px;
                  cursor: pointer;
                  margin-right: 5px;
                  font-weight: bold;
                  text-align: right;
                  font-family: 'vazir';
                ">
                <!-- <i class="fa-solid fa-pencil"></i> -->
                {{ item.name }}</i>
            </div>
          </div>
        </div>

        <br />
        <h6 for="" style="text-align: right; width: 100%; font-weight: bold; font-size: 14px">
          تبدیل متن به فرمت های مختلف
        </h6>

        <div style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            overflow-y: hidden;
          ">
          <div>
            <div v-for="item in formatServices" @click="afterSubmitFormat(item.id)" style="
                text-align: right;
                max-width: 100%;
                display: inline-block;
                height: 30px;
                direction: rtl;
                margin-top: 18px;
                font-family: 'vazir';
              ">
              <i style="
                  font-size: 12px;
                  color: #8479b1;
                  background-color: white;
                  border: solid white 2px;
                  padding: 5px 10px;
                  margin-top: -8px;
                  border-radius: 10px;
                  cursor: pointer;
                  margin-right: 5px;
                  font-weight: bold;
                  text-align: right;
                  font-family: 'vazir';
                ">
                <!-- <i class="fa-solid fa-pencil"></i> -->
                {{ item.name }}</i>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div v-if="text" style="left: 0; bottom: 0; width: 100%">
        <div style="clear: both"></div>

        <a href="/news" class="btn btn-outline-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 14px">
          بازگشت
        </a>
        <button @click="saveText(text)" class="btn btn-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 13px">
          ذخیره و اشتراک گذاری
        </button>
      </div>
    </div>

  </div>
  <modal :text="result[selected]" :nid="selected" :resid="this.resid" :categories="categories" v-if="isModalVisible"
    @close="closeModal" />
  <div style="height: 60px"></div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";
import modal from "@/components/modals/Services.vue"



export default {
  name: "HomeView",
  components: {
    navbar,
    modal
  },
  mounted() {
    this.get();
    this.get_services()
    this.get_format_service();
    this.get_rebuild_service();
  },
  data() {
    return {
      isModalVisible: false,
      services: [],
      categories: [],
      occasions: "",
      categories: [],
      category: "",
      olength: false,
      formatServices: [],
      RebuildServices: [],
      selected: '',
      result: '',
      resid: '',
      text: '',
      colors: ["#82ccfb", "#9958b8", "#b3dcf3", "#ecd6f6"],
    };
  },
  methods: {
    saveText(text) {
      var data = new Blob([text], { type: "application/msword" });
      var textFile = window.URL.createObjectURL(data);
      if (document.getElementById("download") !== null) {
        document.body.removeChild(document.getElementById("download"));
      }
      var a = document.createElement("a");
      a.setAttribute("id", "download");
      a.setAttribute("href", textFile);
      a.setAttribute("download", "");
      a.textContent = "Click here to download the test for the students";
      document.body.appendChild(a);
      a.click();
      a.remove();
    },
    async afterSubmitRebuild(id) {
      this.$store.state.isLoading = true;
      await axios
        .post(`gbuilder-rebuild/${id}`, { text: this.text })
        .then((response) => response.data)
        .then((response) => {
          this.text = response;
          this.result = ''
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
        });
    },
    async afterSubmitFormat(id, text = this.text) {
      this.$store.state.isLoading = true;
      await axios
        .post(`gbuilder-format/${id}`, { text: text })
        .then((response) => response.data)
        .then((response) => {
          this.text = response;
          this.result = ''
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
        });
    },
    async get_format_service() {
      var slug = this.$route.params.slug;
      await axios
        .get(`formatservices`)
        .then((response) => response.data)
        .then((response) => {
          this.formatServices = response;
        });
    },
    async get_rebuild_service() {
      var slug = this.$route.params.slug;
      await axios
        .get(`rebuildservices`)
        .then((response) => response.data)
        .then((response) => {
          this.rebuildServices = response;
        });
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async get_services() {
      await axios
        .get("categories")
        .then((response) => response.data)
        .then((response) => {
          this.categories = response;
        });
    },
    async get() {
      this.$store.state.isLoading = true;
      var id = this.$route.params.id;
      await axios
        .post(`news-services/${id}`)
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          this.text = response.text
          this.result = response.news
          this.resid = response.id

          console.log(response)
        }).catch(() => {
          setTimeout(() => {
            this.get()
          }, 10000);
        });
    },
  },
};
</script>
<style>
.mycard {
  box-sizing: border-box;
  width: 190px;
  height: 330px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 7px 10px 30px rgba(0, 0, 0, 0.22);
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
  width: 260px;
  height: 120px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 7px 10px 30px rgba(0, 0, 0, 0.22);
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
  box-shadow: 7px 10px 30px rgba(0, 0, 0, 0.22);
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
