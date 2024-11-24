<template>
  <div v-if="!result" class="topright" style="margin-top: 30px">
    <div v-if="file">
      <div
        style="
          margin-top: 0px;
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        "
      >
        <img style="width: 100%; height: 100%" src="/img/myicons/page-23.png" alt="" />
      </div>
      <h5>بر روی تصویر چه کاری میخواهید انجام شود</h5>
      <p>یکی از گزینه های زیررا انتخاب کنید تا به شما کمک کنیم</p>
    </div>
    <div v-if="!file">
      <h5>تصویر خود را برای شروع بارگذاری کنید</h5>
      <p>تا محتوای مرتبط تولید شود</p>
      <br /><br />
    </div>
  </div>

  <div v-if="!result" class="bottomleft">
    <div>
      <div class="alert alert-danger" v-if="errors">{{ errors }}</div>
      <div v-if="!file" class="card-body" style="text-align: right">
        <div
          @click="clicker()"
          style="
            cursor: pointer;
            margin-top: 0px;
            width: 50%;
            margin-left: 25%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          "
        >
          <img
            style="width: 100%; height: 100%"
            src="/img/myicons/page-20 (2).png"
            alt=""
          />
        </div>
        <br /><br />
        <div style="width: 50%; margin-left: 25%">
          <p style="text-align: right">فقط بخشنامه ها و اسناد رسمی ✅</p>
          <p style="text-align: right">حجم فایل: ۱۰۰ کیلوبایت تا ۵ مگابایت ✅</p>
          <p style="text-align: right">فرمتهای پشتیبانیشده: JPG و PNG ✅</p>
        </div>
        <input
          @input="upload()"
          type="file"
          hidden
          accept="image/png, image/gif, image/jpeg"
          name="file"
          class="form-control"
          id="file"
        /><br />
      </div>

      <div v-if="file" class="card-body" style="text-align: right">
        <div style="clear: both"></div>
        <br />

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
          <h5>{{ itemm.name }}</h5>
          <br /><br />

          <p>{{ itemm.description }}</p>
        </button>
      </div>

      <br />
    </div>
  </div>
  <div v-if="result">
    <div class="topright" style="margin-top: 30px">
      <div>
        <div
          style="
            margin-top: 0px;
            width: 24%;
            margin-left: 38%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          "
        >
          <img style="width: 100%; height: 100%" src="/img/myicons/page-19.png" alt="" />
        </div>
        <br />
        <h5>نتیجه پردازش تصویر شما</h5>
      </div>
    </div>
    <div class="bottomleft card-body">
      <ckeditor
        style="
          width: 90%;
          margin-left: 5%;
          margin-right: 5%;
          direction: rtl;
          margin-top: 15px;
        "
        v-if="result"
        v-model="result"
        :editor="editor"
        :config="editorConfig"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";
import "ckeditor5/ckeditor5.css";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
  mounted() {
    this.get_services();
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        toolbar: ["undo", "redo", "|", "bold", "italic"],
      },
      reports: [],
      services: [],
      noint: false,
      errors: "",
      file: "",
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
          console.log(response);
          this.result = response[0][1].replace("```", "").replace("```", "");
          while (this.result.includes("*") || this.result.includes("#")) {
            this.result = this.result.replace("*", "").replace("#", "");
          }
          this.counter = 0;
        })
        .catch(() => {
          this.$store.state.isLoading = false;
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
        return;
      }
      formdata.append("file", img, img.name);
      await axios
        .post("uploader", formdata)
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
          console.log(response);
          this.file = response.get_image;
        })
        .catch((data) => {
          this.$store.state.isLoading = false;
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
