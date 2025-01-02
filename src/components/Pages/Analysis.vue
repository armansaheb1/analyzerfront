<template>
  <div style="margin-top: 80px">
    <div v-if="!file">
      <h5 style="font-size: 16px; font-weight: bold">
        عکس یا سند خود را از اینجا آپلود کن
      </h5>
      <p style="font-size: 12px">تا محتوای مرتبط برای شما تولید بشه</p>
      <br /><br />
    </div>
    <div v-if="!file" class="card-body" style="text-align: right">
      <div
        @click="clicker()"
        style="
          cursor: pointer;
          margin-top: -110px;
          width: 50%;
          margin-left: 25%;
          background: none;
          border-radius: 50%;
          padding-top: 120px;
        "
      >
        <div class="foldercontainer">
          <div class="folder">
            <div class="front-side">
              <div class="tip"></div>
              <div class="cover"></div>
            </div>
            <div class="back-side cover"></div>
          </div>
          <label class="custom-file-upload"> Choose a file </label>
        </div>
      </div>

      <div style="width: 50%; margin-left: 25%">
        <br />
        <p style="text-align: right; font-size: 10px; margin-bottom: 0">
          فقط بخشنامه ها و اسناد رسمی ✅
        </p>
        <p style="text-align: right; font-size: 10px; margin-bottom: 0">
          حجم فایل: ۱۰۰ کیلوبایت تا ۵ مگابایت ✅
        </p>
        <p style="text-align: right; font-size: 10px; margin-bottom: 0">
          فرمتهای پشتیبانیشده: JPG و PNG ✅
        </p>
      </div>
      <input
        @input="upload()"
        type="file"
        hidden
        accept="image/png, image/gif, image/jpeg,application/pdf"
        name="file"
        class="form-control"
        id="file"
      /><br />
    </div>
  </div>
  <div v-if="!result" class="topright" style="margin-top: 50px">
    <div v-if="file">
      <div
        style="
          margin-top: 0px;
          margin-bottom: 30px;
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        "
      >
        <img style="width: 100%; height: 100%" src="/img/myicons/page-23.png" alt="" />
        <br />
      </div>
      <h5 style="font-size: 16px">انتخاب کنید چه کاری انجام شود</h5>
      <p style="font-size: 12px">
        یکی از گزینه های زیر را انتخاب کنید تا فرایند انجام شود
      </p>
    </div>
  </div>

  <div v-if="!result" class="bottomleft" style="margin-top: 50px">
    <div>
      <div class="alert alert-danger" v-if="errors">{{ errors }}</div>

      <div v-if="file" class="card-body" style="text-align: right">
        <div style="clear: both"></div>

        <button
          v-if="file"
          v-for="itemm in services"
          @click="submit(itemm.id)"
          style="
            margin: 10px;
            background: white;
            border-radius: 10px;
            width: 45%;
            margin: 2.5%;
            float: left;
          "
          class="btn"
        >
          <br />
          <h5 style="font-size: 14px">{{ itemm.name }}</h5>

          <p style="font-size: 12px">{{ itemm.description }}</p>
        </button>
      </div>
      <div style="clear: both"></div>

      <br />
    </div>
  </div>
  <div v-if="result">
    <div class="topright" style="padding-top: 30px">
      <div
        style="
          text-align: right;
          width: 80%;
          margin-left: 10%;
          margin-right: 10%;
          direction: rtl;
          background: white;
          padding: 5%;
          border-radius: 10px;
          margin-top: 15px;
        "
        v-if="result"
        v-html="result"
        class="result-box"
      ></div>
    </div>
    <div class="bottomleft" style="padding: 0 10%">
      <div v-if="result">
        <br />
        <br />
        <h6
          for=""
          style="text-align: right; width: 100%; font-weight: bold; font-size: 14px"
        >
          تغییرات مجدد
        </h6>

        <div
          style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            overflow-y: hidden;
          "
        >
          <div>
            <div
              v-for="item in rebuildServices"
              @click="afterSubmitRebuild(item.id)"
              style="
                text-align: right;
                max-width: 100%;
                display: inline-block;
                height: 30px;
                direction: rtl;
                margin-top: 18px;
                font-family: 'vazir';
              "
            >
              <i
                style="
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
                "
              >
                <!-- <i class="fa-solid fa-pencil"></i> -->
                {{ item.name }}</i
              >
            </div>
          </div>
        </div>

        <br />
        <h6
          for=""
          style="text-align: right; width: 100%; font-weight: bold; font-size: 14px"
        >
          تبدیل متن به فرمت های مختلف
        </h6>

        <div
          style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            overflow-y: hidden;
          "
        >
          <div>
            <div
              v-for="item in formatServices"
              @click="afterSubmitFormat(item.id)"
              style="
                text-align: right;
                max-width: 100%;
                display: inline-block;
                height: 30px;
                direction: rtl;
                margin-top: 18px;
                font-family: 'vazir';
              "
            >
              <i
                style="
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
                "
              >
                <!-- <i class="fa-solid fa-pencil"></i> -->
                {{ item.name }}</i
              >
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div v-if="result" style="left: 0; bottom: 0; width: 100%">
        <div style="clear: both"></div>

        <button
          @click="result = ''"
          class="btn btn-outline-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 14px"
        >
          بازگشت
        </button>
        <button
          @click="saveText(result)"
          class="btn btn-success"
          style="border-radius: 10px; width: 48%; margin: 1%; font-size: 13px"
        >
          ذخیره و اشتراک گذاری
        </button>
      </div>
    </div>
  </div>
  <div style="height: 60px"></div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";
import "ckeditor5/ckeditor5.css";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
  mounted() {
    this.get_services();
    this.get_format_service();
    this.get_rebuild_service();
  },
  data() {
    return {
      reports: [],
      services: [],
      noint: false,
      errors: "",
      file: "",
      formatServices: [],
      RebuildServices: [],
      result: "",
      staticEnteries: [
        { name: "پرامپ های أماده", id: 0 },
        { name: "پرامپت دستی", id: 1 },
      ],
      statics: 0,
      maintext: "",
      mainText: "",
      counter: 0,
      delay: 30,
    };
  },
  methods: {
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
    clicker() {
      document.querySelector("#file").click();
    },
    async get_services() {
      await axios
        .get("image-services")
        .then((response) => response.data)
        .then((response) => {
          this.services = response;
        });
    },
    async submit(id) {
      this.$store.state.isLoading = true;
      await axios
        .post("gbuilderfile", { id: id, file: this.file })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          console.log(response);
          this.result = response[0][1].replace("```", "").replace("```", "");
          while (this.result.includes("*") || this.result.includes("#")) {
            this.result = this.result.replace("*", "").replace("#", "");
          }
          this.counter = 0;
        })
        .catch(() => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
        });
    },
    async upload() {
      this.errors = "";
      this.$store.state.isLoading = true;

      var img = document.getElementById("file").files[0];
      var formdata = new FormData();
      if (
        !(
          img.name.includes(".png") ||
          img.name.includes(".jpg") ||
          img.name.includes(".jpg") ||
          img.name.includes(".JPEG") ||
          img.name.includes(".gif")
        )
      ) {
        this.errors = "فایل انتخاب شده باید عکس باشد";
        this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
        return;
      }
      formdata.append("file", img, img.name);
      await axios
        .post("uploader", formdata)
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          console.log(response);
          this.file = response.get_image;
        })
        .catch((data) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          this.errors = data.response.data;
        });
    },
  },
};
</script>
<style>
.topimg {
  width: 50%;
  margin: 0.5%;
  margin-bottom: -15px;
}

.imgserv {
  width: 46%;
  aspect-ratio: 1/1.2;
}

@media only screen and (min-width: 600px) {
  .topimg {
    width: 20%;
  }

  .imgserv {
    width: 21%;
    aspect-ratio: 1/1;
  }
}

.ck-editor__editable {
  min-height: 250px;
}
</style>
