<template>
  <div class="card-body" v-if="!idea && !content1 && !content2 && !content3 && !content4 && !result && !reslevel">
    <br><br><br>
    <div class="topright">
      <h6 style="font-size:14px">!سلام حسین عزیز </h6>
      <h6 style="font-size:16px; font-weight: bold">!از ایده تا محتوا, مسیر شما اینجاست</h6>

    </div>
    <div class="bottomleft">
      <button @click="idea = true" style="
          margin: 10px;
          background: white;
          border-radius: 20px!important;
          width: 45%;
          margin: 2.5%;
          margin-top:4%;
          float: left;
        " class="btn">
        <div style="
            margin-top: 20px;
            width: 60%;
            margin-left: 20%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/myicons/page-10.png" alt="" />
        </div>
        <br />
        <h5 style="
                  margin: 0;
                  height: 30px;
                  color: black;
                  font-size: 14px;
                  border-radius: 16px;
              line-height: 30px;
                  white-space: break-spaces;
                  text-align: center;
                  font-family: 'vazir';
                  width: 84%;
                  margin-left: 8%;
                ">ایده پردازی</h5>

        <p>برای کمک به شروع، ما ایده هایی به شما میدهیم</p>
      </button>
      <button @click="content1 = true" style="
          margin: 10px;
          background: white;
          border-radius: 20px!important;
          width: 45%;
          margin: 2.5%;
          margin-top:4%;
          float: left;
        " class="btn">
        <div style="
            margin-top: 20px;
            width: 60%;
            margin-left: 20%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/pen.png" alt="" />
          <br />
        </div>
        <br />
        <h5 style="
                  margin: 0;
                  height: 30px;
                  color: black;
                  font-size: 14px;
                  border-radius: 16px;
              line-height: 30px;
                  white-space: break-spaces;
                  text-align: center;
                  font-family: 'vazir';
                  width: 84%;
                  margin-left: 8%;
                ">تولید محتوا</h5>
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
      <br><br><br>
      <h6 style="font-size:14px">متن یاتصویر خود را انتخاب کنید؟ </h6>
      <h6 style="font-size:16px; font-weight: bold">!متن وارد کنید یا تصویر بارگذاری کنید </h6>

    </div>

    <div class="bottomleft">
      <button @click="content1 = false; content3 = true" style="
          margin: 10px;
          background: white;
          border-radius: 20px!important;
          width: 45%;
          margin: 2.5%;
          margin-top:4%;
          float: left;
        " class="btn">
        <div style="
            margin-top: 20px;
            width: 60%;
            margin-left: 20%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/myicons/page-13.png" alt="" />
        </div>
        <br />
        <h5 style="
                  margin: 0;
                  height: 30px;
                  color: black;
                  font-size: 14px;
                  border-radius: 16px;
              line-height: 30px;
                  white-space: break-spaces;
                  text-align: center;
                  font-family: 'vazir';
                  width: 84%;
                  margin-left: 8%;
                ">نوشتن متن</h5>

        <p>گر متنی داریدیا میخواهید بنویسید، این گزینه را بزنید</p>
      </button>
      <button @click="content1 = false; content2 = true" style="
          margin: 10px;
          background: white;
          border-radius: 20px!important;
          width: 45%;
          margin: 2.5%;
          margin-top:4%;
          float: left;
        " class="btn">
        <div style="
            margin-top: 20px;
            width: 60%;
            margin-left: 20%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/myicons/page-20 (2).png" alt="" />
          <br />
        </div>
        <br />
        <h5 style="
                  margin: 0;
                  height: 30px;
                  color: black;
                  font-size: 14px;
                  border-radius: 16px;
              line-height: 30px;
                  white-space: break-spaces;
                  text-align: center;
                  font-family: 'vazir';
                  width: 84%;
                  margin-left: 8%;
                ">بارگذاری تصویر</h5>
        <p>اگراز محتوای خود مطمئن هستید، اینجا شروع کنید</p>
      </button>
    </div>
  </div>

  <div v-if="content2">
    <div class="topright" style="margin-top: 100px">
      <div v-if="file">
        <div style="
          margin-top: -70px;
          margin-bottom: 30px;
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        ">
          <img style="width: 100%; height: 100%" src="/img/myicons/page-23.png" alt="" />
          <br>
        </div>
        <h5>انتخاب کنید چه کاری انجام شود</h5>
        <p>یکی از گزینه های زیر را انتخاب کنید تا فرایند انجام شود</p>
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
          <div @click="clicker()" style="
              cursor: pointer;
              margin-top: 0px;
              width: 50%;
              margin-left: 25%;
              aspect-ratio: 1/1;
              background: none;
              border-radius: 50%;
            ">
            <div class="foldercontainer">
              <div class="folder">
                <div class="front-side">
                  <div class="tip"></div>
                  <div class="cover"></div>
                </div>
                <div class="back-side cover"></div>
              </div>
              <label class="custom-file-upload">
                Choose a file
              </label>
            </div>
          </div>

          <div style="width: 50%; margin-left: 25%">
            <p style="text-align: right;font-size: 8px;margin-bottom: 0">فقط بخشنامه ها و اسناد رسمی ✅</p>
            <p style="text-align: right;font-size: 8px;margin-bottom: 0">حجم فایل: ۱۰۰ کیلوبایت تا ۵ مگابایت ✅</p>
            <p style="text-align: right;font-size: 8px;margin-bottom: 0">فرمتهای پشتیبانیشده: JPG و PNG ✅</p>
          </div>
          <input @input="upload()" type="file" hidden accept="image/png, image/gif, image/jpeg,application/pdf"
            name="file" class="form-control" id="file" /><br />
        </div>

        <div v-if="file" class="card-body" style="text-align: right">
          <div style="clear: both"></div>

          <button v-if="file" v-for="itemm in imgservices" @click="imgsubmit(itemm.id)" style="
              margin: 10px;
              background: white;
              border-radius: 10px;
              width: 45%;
              margin: 2.5%;
              float: left;
            " class="btn">
            <h5 style="font-size: 14px">{{ itemm.name }}</h5>

            <p style="font-size: 12px">{{ itemm.description }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="content3">
    <div>
      <div style="margin-top: 50px">
        <div style="
            margin-top: 0px;
            width: 24%;
            margin-left: 38%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/pen.png" alt="" />
        </div>
      </div>
      <div class="card-body" style="text-align: right">
        <div class="">
          <h6 for="" style="text-align: center; width: 100%; font-weight: bold; font-size: 12px">
            متن خود را این زیر بنویسید</h6>
          <h6 style="text-align: center; width: 100%; font-size: 16px ; font-weight: bold">متن هوشمند تحویل بگیرید</h6>

          <br />
          <textarea rows="12" style="font-size: 10px;border: none; border-radius: 15px!important; width: 84%; margin: 0 8%"
            placeholder="اینجا متن یا موضوع دلخواه خود را وارد کنید.&#10;مثال : برای روز دختر یک پیام خلاقانه میخواهم"
            v-model="maintext" class="form-control" id="maintext"></textarea>
        </div>
        <div class="bottomleft" style="">

          <button @click="content3 = false;" class="btn btn-outline-success"
            style=" border-radius: 10px; width: 48%; margin: 1%; font-size: 14px">
            بازگشت

          </button>
          <button @click="content3 = false; content4 = true" class="btn btn-success"
            style=" border-radius: 10px; width: 48%; margin: 1%; font-size: 14px">
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
        <div class=" card-body" style="">
          <div style="margin-bottom: 5px" v-for="item in service.static_variables">

            <label style="font-size: 12px" for=""> {{ item.name }}</label>
            <div style="clear: both"></div>

            <button class="btn" style="
                float: right;
                margin: 3px;
                border-radius: 10px !important;
                font-size: 10px;
                background : white;
                padding: 10px
              " v-for="items in item.options" :style="[
                items !== item.selected
                  ? { color: 'red', color: 'black' }
                  : { color: 'black', color: 'red' },
              ]" @click="item.selected = items" :value="items">
              {{ items }}
            </button>
            <div style="clear: both"></div>
          </div>
          <div v-for="item in service.variables">
            <label for=""> {{ item.name }}</label><br />
            <textarea class="form-control" :id="item.slug" v-if="item.type == 'textarea'"></textarea>
            <select class="form-control" v-else-if="item.type == 'select'" :id="item.slug">
              <option :value="item.options" v-for="items in item.options">
                {{ items }}
              </option>
            </select>
            <input :id="item.slug" v-else class="form-control" :type="item.type" /><br />
          </div>

          <button @click="content3 = false; submit()" class="btn btn-success form-control"
            style=" border-radius: 10px; font-size: 16px">
            متن هوشمند را بنویس

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
          <div style="
              margin-top: 0px;
              width: 24%;
              margin-left: 38%;
              aspect-ratio: 1/1;
              border-radius: 50%;
            "><br>
            <img style="width: 100%; height: 100%" src="/img/myicons/page-10.png" alt="" />
          </div>
          <br>
          <label for="" style="text-align: center; width: 100%">
            درباره چه موضوعی نیاز به ایده دارید؟</label><br /><br>
        </div>
        <div class="bottomleft" style="padding: 0 10% ">
          <textarea placeholder="
اینجا بنویسید... (مثال: ایده برای  روز درختکاری)" rows="10"
            style="border: none; border-radius: 15px!important; font-size: 10px; border-radius: 15px!important"
            v-model="ideamaintext" class="form-control"></textarea>

          <div v-for="item in ideaEntries">
            <br />
            <label for=""> {{ item.name }}</label><br />

            <button class="btn" style="
                float: right;
                margin: 3px;
                border-radius: 10px;
                font-size: 11px;
                width: 24%;
                margin: 0.5%;
              " v-for="items in item.options" :style="[
                items == item.selected
                  ? { background: '#8479b1', color: 'white' }
                  : { background: 'white', color: '#8479b1' },
              ]" @click="item.selected = items" :value="items">
              {{ items }}
            </button>
            <div style="clear: both"></div>
          </div>

          <div v-for="(item, idx) in service.variables">
            <label for=""> {{ item.name }}</label>
            btn
            <br />
            <textarea class="form-control" :id="item.slug" v-if="item.type == 'textarea'"></textarea>
            <select class="form-control" v-else-if="item.type == 'select'" :id="item.slug">
              <option :value="item.options" v-for="items in item.options">
                {{ items }}
              </option>
            </select>
            <input :id="item.slug" v-else class="form-control" :type="item.type" /><br />
          </div>
          <br />
          <button @click="ideasubmit()" class="btn btn-success form-control"
            style="background: green; border-radius: 10px">
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
      <div style="
              margin-top: 0px;
              width: 24%;
              margin-left: 38%;
              aspect-ratio: 1/1;
              border-radius: 50%;
            "><br>
        <img style="width: 100%; height: 100%" src="/img/myicons/page-10.png" alt="" />
      </div>
      <br>
      <h5 style="font-size: 17px">!یکی از ایده های زیر را انتخاب کنید</h5>
      <br />
    </div>
    <div class="bottomleft" style="padding: 0 8%">
      <div class="alert" @click="
        maintext = item.description;
      idea = false;
      idearesult = '';
      content3 = true;
      " style="
          text-align: justify;
          direction: rtl;
          cursor: pointer;
          border-radius: 10px;
          background: white;
        " v-for="item in idearesult">
        <h5 style="font-size: 14px; line-height: 25px">{{ item.title }}</h5>
        <p style="font-size: 10px; line-height: 20px">{{ item.description }}</p>
      </div>
      <button @click="ideasubmit()" class="btn btn-outline-success">!ایده های بیشتری می خواهید ؟ دوباره امتحان
        کنید</button>
    </div>
  </div>
  <div v-if="result">
    <div class="topright" style="padding-top: 30px">
      <div>
        <div style="
            margin-top: 0px;
            width: 24%;
            margin-left: 38%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          ">
          <img style="width: 100%; height: 100%" src="/img/myicons/MOBILE VER (19).png" alt="" />
        </div>
        <br />
        <h5 style="font-size:15px">متن هوشمند شما آماده شد</h5>
      </div>
    </div>
    <div class="bottomleft card-body">
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
        " v-if="result" v-html="result" class="result-box"> </div>
    </div>
  </div>

  <div v-if="result" style="padding: 6% 12%; background: white; position: fixed; left: 0; bottom: 0; width: 100%;">
    <div style="clear: both;"></div>

    <button @click="clearresult()" class="btn btn-outline-success"
      style=" border-radius: 10px; width: 48%; margin: 1%; font-size: 14px">
      بازگشت

    </button>
    <button @click="saveText(result)" class="btn btn-success"
      style=" border-radius: 10px; width: 48%; margin: 1%; font-size: 13px">
      ذخیره و اشتراک گذاری

    </button>
    <br>
    <h6 for="" style="text-align: right; width: 100%; font-weight: bold; font-size: 14px">
      تغییرات مجدد</h6>

      <button @click="afterSubmitRebuild()" class="btn" style="background: white; float: right" v-for="item in rebuildServices">
        {{item.name}}

      </button>

      <br>
    <h6 for="" style="text-align: right; width: 100%; font-weight: bold; font-size: 14px">
      تبدیل متن به فرمت های مختلف</h6>

      <button @click="afterSubmitFormat()" class="btn" style="background: white; float: right" v-for="item in fromatServices">
        {{item.name}}

      </button>

  </div>
  
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import axios from "axios";



export default {
  name: "HomeView",
  components: {
    Loading,
    navbar,
  },
  mounted() {
    this.get_service();
    this.get_idea_entries();
    this.get_img_services()
  },
  data() {
    return {

      service: [],
      idea: false,
      datas: {},
      imgservices: [],
      file: '',
      result: "",
      maintext: "",
      idea: false,
      content1: false,
      content2: false,
      content3: false,
      content4: false,
      ideaEntries: [],
      idearesult: "",
      ideamaintext: "",
      isLoading: false,
      mainText: "A QUICK BROWN FOX JUMPS OVER THE LAZY DOG!",
      text: "", // dynamically typed text
      counter: 0,
      delay: 30,
    };
  },
  methods: {

    saveText(text) {
      var data = new Blob([text], { type: 'application/msword' });
      var textFile = window.URL.createObjectURL(data);
      if (document.getElementById('download') !== null) {
        document.body.removeChild(document.getElementById('download'));
      }
      var a = document.createElement("a");
      a.setAttribute("id", "download");
      a.setAttribute("href", textFile);
      a.setAttribute("download", "");
      a.textContent = "Click here to download the test for the students";
      document.body.appendChild(a);
      a.click()
      a.remove()
    }, clicker() {
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
         window.scrollTo(0, 0);
          console.log(response);
          this.maintext = response[0][1];
          this.content3 = true;
          this.content2 = false;
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
    async get_idea_entries() {
      var slug = this.$route.params.slug;
      await axios
        .get(`idea-entries`)
        .then((response) => response.data)
        .then((response) => {
          this.ideaEntries = response;
          for (var item of this.ideaEntries) {
            item.selected = item.options[0];
          }
        });
    },
    async get_service() {
      var slug = this.$route.params.slug;
      await axios
        .get(`services/${slug}`)
        .then((response) => response.data)
        .then((response) => {
          this.service = response;
          if (response.category.template === 3) {
            this.content4 = true
          }
          for (var item of this.service.static_variables) {
            item.selected = item.options[0];
          }
        });
    },
    async submit() {
      this.$store.state.isLoading = true;
      var aaa = {};
      var bbb = {};
      if (this.service.variables) {
        for (var item of this.service.variables) {
          aaa[item.slug] = document.querySelector("#" + item.slug).value;
        }
      }
      console.log(aaa)

      for (var item of this.service.static_variables) {
        bbb["n" + item.id] = item.selected;
      }
      var slug = this.$route.params.slug;
      await axios
        .post(`gbuilder/${slug}`, { maintext: this.maintext, data: aaa, data2: bbb })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          this.mainText = response.replace("```html", "").replace("```", "");
          while (this.mainText.includes("*") || this.mainText.includes("#")) {
            console.log(this.result);
            this.mainText = this.mainText.replace("*", "").replace("#", "");
          }
          this.result = this.mainText
        })
        .catch(() => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
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
        .post(`gideabuilder`, { maintext: this.ideamaintext, data: bbb })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          this.idearesult = response;
          console.log(response);
        })
        .catch(() => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
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

@media only screen and (min-width: 600px) {
  .topimg {
    width: 20%;
  }
}
</style>
