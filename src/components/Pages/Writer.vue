<template>
  <div
    class="card-body"
    v-if="!idea && !content1 && !content2 && !content3 && !result && !reslevel"
  ><br><br><br>
    <div class="topright">
      <h6 style="font-size=16px">!سالم علی عزیز </h6>
      <h6 style="font-size:20px; font-weight: bold">!از ایده تا محتوا, مسیر شما اینجاست</h6>

    </div>
    <div class="bottomleft">
      <button
        @click="idea = true"
        style="
          margin: 10px;
          background: white;
          border-radius: 20px!important;
          width: 45%;
          margin: 2.5%;
          margin-top:4%;
          float: left;
        "
        class="btn"
      >
        <div
          style="
            margin-top: 20px;
            width: 60%;
            margin-left: 20%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          "
        >
          <img style="width: 100%; height: 100%" src="/img/myicons/page-10.png" alt="" />
        </div>
        <br />
        <h5>ایده پردازی</h5>

        <p>برای کمکبه شروع، ما ایدههایی به شما میدهیم</p>
      </button>
      <button
        @click="content1 = true"
        style="
          margin: 10px;
          background: white;
          margin-top:4%;
          border-radius: 20px!important;
          width: 45%;
          margin: 2.5%;
          float: left;
        "
        class="btn"
      >
        <div
          style="
            margin-top: 20px;
            width: 60%;
            margin-left: 20%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          "
        >
          <img
            style="width: 100%; height: 100%"
            src="/img/myicons/page-9 (1).png"
            alt=""
          />
          <br />
        </div>
        <br />
        <h5>تولید محتوا</h5>
        <p>اگراز محتوای خود مطمئن هستید، اینجا شروع کنید</p>
      </button>
      <div style="clear: both"></div>
      <br /><br /><br />
      <p style="font-size: 12px">
         برای نوشتن، 'تولید محتوا' را انتخاب کنید. <br>
اگر به کمک نیاز دارید، 'ایده‌پردازی' را بزنید
      </p>
    </div>
  </div>
  <div class="card-body" v-if="content1 && !content2 && !content3">
    <div class="topright">
      <h5 style="font-size: 12px">متن یاتصویرخود را انتخاب کنی</h5>
      <p>متن وارد کنید یا تصویر بارگذاری کنید تا محتوا تولید شود</p>
      <br /><br />
    </div>

    <div class="bottomleft">
      <button
        @click="content3 = true"
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
        <div
          style="
            margin-top: 40px;
            width: 50%;
            margin-left: 25%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          "
        >
          <img style="width: 100%; height: 100%" src="/img/myicons/page-13.png" alt="" />
        </div>
        <br />
        <h5>نوشتن متن</h5>
        <br /><br />

        <p>گر متنی داریدیا میخواهید بنویسید، این گزینه را بزنید</p>
      </button>
      <button
        @click="content2 = true"
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
        <div
          style="
            margin-top: 40px;
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
          <br />
        </div>
        <br />
        <h5>بارگذاری تصویر</h5>
        <br /><br />
        <p>اگراز محتوای خود مطمئن هستید، اینجا شروع کنید</p>
      </button>
    </div>
  </div>

  <div v-if="content2">
    <div class="topright" style="margin-top: 30px">
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
    <div class="bottomleft">
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
            v-for="itemm in imgservices"
            @click="imgsubmit(itemm.id)"
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
        <div
          style="
            width: 90%;
            margin-left: 5%;
            margin-right: 5%;
            direction: rtl;
            margin-top: 15px;
          "
          v-if="result"
          v-html="result"
          class="alert alert-success"
        ></div>
        <br />
      </div>
    </div>
  </div>

  <div v-if="content3">
    <div>
      <div style="margin-top: 50px">
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
          <img style="width: 100%; height: 100%" src="/img/myicons/page-9 (1).png" alt="" />
        </div>
        </div>
      <div class="card-body" style="text-align: right">
        <div class="">
          <h6 for="" style="text-align: center; width: 100%; font-weight: bold">
            متن خود را وارد کنید</h6
          >
          <h6 style="text-align: center; width: 100%">خروجی حرفه ای تحویل بگیرید</h6>
          
          <br />
          <textarea
            rows="7"
            style="font-size: 12px;border: none; border-radius: 15px; width: 84%; margin: 0 8%"
            placeholder="اینجا متن یا موضوع دلخواه خود را وارد کنید.&#10;مثال : برای روز دختر یک پیام خلاقانه میخواهم"
            
            v-model="maintext"
            class="form-control"
            id="maintext"
          ></textarea>
        </div>
        <div class="bottomleft" style="">
          
<br>
          <button
            @click="submit()"
            class="btn btn-outline-success"
            style=" border-radius: 10px; width: 41%; margin: 1%; margin-left: 8%; font-size: 18px"
          >
            بازگشت

          </button>
          <button
            @click="submit()"
            class="btn btn-success"
            style=" border-radius: 10px; width: 41%; margin: 1%; margin-right: 8%; font-size: 18px"
          >
            تنظیمات پیشرفته

          </button>
        </div>
      </div>
    </div>
    <br />
  </div>

  <div v-if="content4">
    <div>
      <div class="card-body" style="text-align: right">
        <div class="topright mytextarea">
          
        </div>
        <div class="bottomleft card-body" style="">
          <div v-for="item in service.static_variables">
            <br />
            <label for=""><a style="color: red">*</a> {{ item.name }}</label
            ><br />

            <button
              class="btn"
              style="
                float: right;
                margin: 3px;
                border-radius: 10px !important;
                font-size: 11px;
              "
              v-for="items in item.options"
              :style="[
                items == item.selected
                  ? { background: '#8479b1', color: 'white' }
                  : { background: 'white', color: '#8479b1' },
              ]"
              @click="item.selected = items"
              :value="items"
            >
              {{ items }}
            </button>
            <div style="clear: both"></div>
          </div>
          <br />
          <div v-for="item in service.variables">
            <label for=""> {{ item.name }}</label
            ><br />
            <textarea
              class="form-control"
              :id="item.slug"
              v-if="item.type == 'textarea'"
            ></textarea>
            <select
              class="form-control"
              v-else-if="item.type == 'select'"
              :id="item.slug"
            >
              <option :value="item.options" v-for="items in item.options">
                {{ items }}
              </option>
            </select>
            <input :id="item.slug" v-else class="form-control" :type="item.type" /><br />
          </div>
          <br />
          <button
            @click="submit()"
            class="btn btn-success form-control"
            style="background: green; border-radius: 10px"
          >
            نوشتن متن

          </button>
        </div>
      </div>
    </div>
    <br />
  </div>

  <div v-if="idea && !idearesult">
    <div>
      <div class="card-body" style="text-align: right">
        <div class="topright">
          <div
            style="
              margin-top: 0px;
              width: 24%;
              margin-left: 38%;
              aspect-ratio: 1/1;
              border-radius: 50%;
            "
          ><br>
            <img
              style="width: 100%; height: 100%"
              src="/img/myicons/page-10.png"
              alt=""
            />
          </div>
          <br>
          <label for="" style="text-align: center; width: 100%">
            درباره چه موضوعی نیاز به ایده دارید؟</label
          ><br /><br>
        </div>
        <div class="bottomleft" style="padding: 0 10% ">
          <textarea
          placeholder="
اینجا بنویسید... (مثال: ایده برای  روز درختکاری)"
            rows="10"
            style="border: none; border-radius: 15px!important; font-size: 10px; border-radius: 15px!important"
            v-model="ideamaintext"
            class="form-control"
          ></textarea>

          <div v-for="item in ideaEntries">
            <br />
            <label for=""><a style="color: red">*</a> {{ item.name }}</label
            ><br />

            <button
              class="btn"
              style="
                float: right;
                margin: 3px;
                border-radius: 10px;
                font-size: 11px;
                width: 24%;
                margin: 0.5%;
              "
              v-for="items in item.options"
              :style="[
                items == item.selected
                  ? { background: '#8479b1', color: 'white' }
                  : { background: 'white', color: '#8479b1' },
              ]"
              @click="item.selected = items"
              :value="items"
            >
              {{ items }}
            </button>
            <div style="clear: both"></div>
          </div>

          <div v-for="(item, idx) in service.variables">
            <label for=""> {{ item.name }}</label>
            btn
            <br />
            <textarea
              class="form-control"
              :id="item.slug"
              v-if="item.type == 'textarea'"
            ></textarea>
            <select
              class="form-control"
              v-else-if="item.type == 'select'"
              :id="item.slug"
            >
              <option :value="item.options" v-for="items in item.options">
                {{ items }}
              </option>
            </select>
            <input :id="item.slug" v-else class="form-control" :type="item.type" /><br />
          </div>
          <br />
          <button
            @click="ideasubmit()"
            class="btn btn-success form-control"
            style="background: green; border-radius: 10px"
          >
            !ایده های من را بساز
          </button>
          <p style="text-align: center">
            برای دریافت بهترین ایده ها روی دکمه بالا کلیک کنید
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
  <div v-if="idearesult" class="card-body">
    <div class="topright">
       <div
            style="
              margin-top: 0px;
              width: 24%;
              margin-left: 38%;
              aspect-ratio: 1/1;
              border-radius: 50%;
            "
          ><br>
            <img
              style="width: 100%; height: 100%"
              src="/img/myicons/page-10.png"
              alt=""
            />
          </div>
          <br>
          <h5 style="font-size: 17px">!یکی از ایده های زیر را انتخاب کنید</h5>
      <br />
          </div>
    <div class="bottomleft" style="padding: 0 8%">
      <div
        class="alert"
        @click="
          maintext = item.description;
          idea = false;
          idearesult = '';
          content3 = true;
        "
        style="
          text-align: justify;
          direction: rtl;
          cursor: pointer;
          border-radius: 10px;
          background: white;
        "
        v-for="item in idearesult"
      >
        <h5 style="font-size: 14px; line-height: 25px">{{ item.title }}</h5>
        <p style="font-size: 10px; line-height: 20px">{{ item.description }}</p>
      </div>
      <button @click="ideasubmit()" class="btn btn-outline-success">!ایده های بیشتری می خواهید ؟ دوباره امتحان کنید</button>
    </div>
  </div>
  <div v-if="result">
    <div class="topright" style="padding-top: 110px">
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
          text-align: right;
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

  <div v-if="result">
    <div style="clear: both"></div>
    <br /><br />
    <button
      @click="submit()"
      class="btn btn-success"
      style="width: 48%; margin: 1%; float: right"
    >
      نتایج جدید
    </button>
    <button
      @click="clearresult()"
      class="btn btn-warning"
      style="width: 48%; margin: 1%; float: right"
    >
      شروع مجدد
    </button>
  </div>
  <div style="height: 50px"></div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import axios from "axios";
import "ckeditor5/ckeditor5.css";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  FontFamily,
  FontSize,
  Paragraph,
  Undo,
} from "ckeditor5";

export default {
  name: "HomeView",
  components: {
    Loading,
    navbar,
  },
  mounted() {
    this.get_service();
    this.get_img_services();
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        plugins: [FontSize,FontFamily, Bold, Essentials, Italic, Mention, Paragraph, Undo],
        toolbar: ["undo", "redo", "|", "bold", "italic", 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'],
        contentsLangDirection: "rtl",
        language: "fa",
      },
      service: [],
      file: "",
      imgservices: [],
      idea: false,
      content1: false,
      content2: false,
      content3: false,
      datas: {},
      result: "",
      maintext: "",
      reslevel: false,
      ideaEntries: [],
      idearesult: "",
      ideamaintext: "",
      isLoading: false,
      mainText: "A QUICK BROWN FOX JUMPS OVER THE LAZY DOG!",
      text: "", // dynamically typed text
      counter: 0,
      delay: 30,
      service: {
        static_variables: [],
      },
    };
  },
  methods: {
    clicker() {
      document.querySelector("#file").click();
    },
    clearresult() {
      var highestTimeoutId = setTimeout(";");
      for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      this.result = "";
    },
    async get_img_services() {
      await axios
        .get("image-services")
        .then((response) => response.data)
        .then((response) => {
          this.imgservices = response;
          console.log(response);
        });
    },
    async imgsubmit(id) {
      this.$store.state.isLoading = true;
      await axios
        .post("gbuilderfile", { id: id, file: this.file })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
          console.log(response);
          this.maintext = response[0][1];
          this.content3 = true;
          this.content2 = false;
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
    async get_service() {
      var slug = this.$route.params.slug;
      await axios
        .get(`static-entries`)
        .then((response) => response.data)
        .then((response) => {
          this.service.static_variables = response;
          for (var item of this.service.static_variables) {
            item.selected = item.options[0];
          }
        });
    },
    async submit() {
      this.$store.state.isLoading = true;
      this.reslevel = true;
      var highestTimeoutId = setTimeout(";");
      for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      this.result = "";

      var aaa = {};
      var bbb = {};
      if (this.service.variables) {
        for (var item of this.service.variables) {
          aaa[item.name] = document.querySelector("#" + item.slug).value;
        }
      }

      for (var item of this.service.static_variables) {
        bbb["n" + item.id] = item.selected;
      }
      var slug = this.$route.params.slug;
      await axios
        .post(`gbuilderwrite`, { maintext: this.maintext, data: aaa, data2: bbb })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
          this.mainText = response.replace("```html", "").replace("```", "");
          while (this.mainText.includes("*") || this.mainText.includes("#")) {
            console.log(this.result);
            this.mainText = this.mainText.replace("*", "").replace("#", "");
          }

          this.content3 = false;
          this.content2 = false;
          this.content1 = false;
          this.result = " ";
          this.counter = 0;
          this.result = this.mainText;
          console.log(this.result);

          this.reslevel = false;
        })
        .catch(() => {
          this.$store.state.isLoading = false;
        });
    },
    async ideasubmit() {
      this.$store.state.isLoading = true;
      var bbb = {};

      for (var item of this.ideaEntries) {
        bbb["n" + item.id] = item.selected;
      }
      var slug = this.$route.params.slug;
      await axios
        .post(`gideabuilder`, { maintext: this.ideamaintext })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
          this.idearesult = response;
          console.log(response);
        })
        .catch(() => {
          this.$store.state.isLoading = false;
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

.mytextarea{
    margin-top: 0!important
  }
@media only screen and (min-width: 600px) {
  .mytextarea{
    margin-top: -134px!important
  }
  .topimg {
    width: 20%;
  }
  .imgserv {
    width: 21%;
    aspect-ratio: 1/1;
  }
}
</style>
