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
  <div style="margin: 2.5%">
    <div class="alert alert-danger" v-if="errors">{{ errors }}</div>
    <div v-if="!file" class="card-body" style="text-align: right">
      <label for="file">ابتدا عکس خود را وارد کنید</label>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        name="file"
        class="form-control"
        id="file"
      /><br />
      <button @click="upload()" class="btn btn-dark form-control">آپلود</button>
    </div>

    <div v-else class="card-body" style="text-align: right">
      <div style="clear: both"></div>
      <br />
      <div>
        <div
          v-if="!result"
          @click="submit(itemm.id)"
          class="card-body imgserv"
          v-for="itemm in services"
          style="
            direction: rtl;
            float: right;
            cursor: pointer;
            margin-top: 10px;
            font-family: 'vazir';
            text-align: center;
            margin: 3% 2%;
            background: white;
            box-shadow: 2px 2px lightgrey;
            border-radius: 10px;
          "
        >
          <a style="text-decoration: none">
            <svg
              :height="50"
              :width="50"
              style="fill: rgb(129, 141, 197)"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 330 330"
              xml:space="preserve"
            >
              <g id="XMLID_11_">
                <path
                  id="XMLID_12_"
                  d="M195,150c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S167.43,150,195,150z"
                />
                <path
                  id="XMLID_13_"
                  d="M315,0H15C6.716,0,0,6.716,0,15v239.804c0,0.01,0,0.02,0,0.03V315c0,8.284,6.716,15,15,15h300   c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0z M300,209.636l-32.957-44.388c-2.829-3.811-7.296-6.058-12.043-6.058   s-9.214,2.247-12.043,6.058l-47.531,64.016l-78.093-112.802C114.531,112.415,109.922,110,105,110s-9.531,2.415-12.333,6.462   L30,206.981V30h270V209.636z"
                />
              </g></svg
            ><br /><br />
            <h5 style="font-weight: bold">
              <!-- <i class="fa-solid fa-pencil"></i> -->
              {{ itemm.name }}
            </h5>
            <p style="font-size: 12px">{{ itemm.description }}</p>
          </a>
        </div>
      </div>
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
    this.get_services();
  },
  data() {
    return {
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
          this.mainText = response[0][1];
          this.counter = 0;
          for (let i = 0; i < this.mainText.length; i++) {
            setTimeout(() => {
              // append next character
              this.result = this.result + this.mainText[i];
            }, this.delay * this.counter); // equal delay between characters

            this.counter += 1;
          }
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
</style>
