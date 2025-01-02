<template>
  <div v-if="level === 1" style="margin: 2.5%">
    <div class="topright">
      <div style="
          
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        ">
        <img style="width: 100%; height: 100%" src="/img/myicons/page-1.png" alt="" />
      </div>
      <br />
      <h6 style="font-weight: bolder">شروع شخصی سازی با اطلاعات اولیه</h6>
      <p style="font-size: 10px">این اطلاعات برای ایجاد محتوای دقیق تر استفاده میشود</p>
    </div>
    <div class="bottomleft">
      <div class="card-body" style="text-align: left; width: 90%; margin: 5%">
        <input v-model="name" type="text" class="form-control"
          style="width: 56%; float: left; font-size: 12px; text-align: center" />

        <div class="form-control" style="float: right; width: 42%; font-size: 12px; text-align: center">
          نام و نام خانوادگی
        </div>

        <div style="clear: both"></div>

        <br />
        <input autocomplete="false" v-model="age" type="number" class="form-control"
          style="width: 56%; float: left; font-size: 12px; text-align: center" />
        <div class="form-control" style="float: right; width: 42%; font-size: 12px; text-align: center">
          سن شما
        </div>

        <div style="clear: both"></div>
        <br />
        <input v-model="mobile" type="number" class="form-control"
          style="width: 56%; float: left; font-size: 12px; text-align: center" />
        <div class="form-control" style="float: right; width: 42%; font-size: 12px; text-align: center">
          شماره تماس
        </div>
        <br /><br />

        <input v-model="password" type="password" class="form-control"
          style="width: 56%; float: left; font-size: 12px; text-align: center" />
        <div class="form-control" style="float: right; width: 42%; font-size: 12px; text-align: center">
          کلمه عبور
        </div>

        <div style="clear: both"></div>
        <br /><br />
        <button style="border-radius: 0" @click="level = level + 1" class="btn btn-success form-control">
          ثبت نام و ادامه فرایند
        </button>
        <p style="text-align: right; margin-top: 14px; text-align: center">
          حساب کاربردی دارید؟
        </p>
        <a style="border-radius: 0" href="/login" class="btn btn-dark form-control">
          ورود
        </a>
      </div>
    </div>
    <br />
    <div v-if="result" class="alert alert-success">
      {{ result }}
    </div>
  </div>

  <div v-if="level === 2" style="margin: 2.5%">
    <div class="topright">
      <div style="
          
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        ">
        <img style="width: 100%; height: 100%" src="/img/myicons/page-2.png" alt="" />
      </div>
      <br />
      <h6 style="font-weight: bolder">سبک و لحن محتوای خود را انتخاب کنید</h6>
      <p style="font-size: 10px">
        لحن موردنظر خود را مشخص کنیدتا محتوای شما دقیق ترتنظیم شود
      </p>
    </div>
    <div class="bottomleft">
      <div class="card-body" style="text-align: left; width: 90%; margin: 5%">
        <div @click="l1 = 1" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l1 === 1 ? 'active' : '']">
          (مانند پیامک) کوتاه و سریع
        </div>
        <br /><br />
        <div @click="l1 = 2" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l1 === 2 ? 'active' : '']">
          (مانند مقاله) توضیحی و کامل
        </div>
        <br /><br />
        <div @click="l1 = 3" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l1 === 3 ? 'active' : '']">
          (مانند پست) خالصه و کاربردی
        </div>
        <br /><br />
        <div @click="l1 = 4" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l1 === 4 ? 'active' : '']">
          تمامی موارد
        </div>
        <br /><br /><br /><br />

        <button style="border-radius: 0; width: 46%; margin: 2%; float: right" @click="level = level + 1"
          class="btn btn-success form-control">
          ادامه
        </button>
        <button style="
            border-radius: 0;
            width: 46%;
            margin: 2%;
            float: right;
            background: white !important;
            color: #2dca67;
            box-sizing: border-box;
          " @click="level = level - 1" class="btn btn-success form-control">
          بازگشت
        </button>
        <div style="clear: both"></div>
        <p style="text-align: right; margin-top: 10px">
          زمانبندی دلخواه شما، ارسال محتوا را به موقع و با دقت تضمین میکند
        </p>
      </div>
    </div>
    <br />
    <div v-if="result" class="alert alert-success">
      {{ result }}
    </div>
  </div>

  <div v-if="level === 3" style="margin: 2.5%">
    <div class="topright">
      <div style="
          
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        ">
        <img style="width: 100%; height: 100%" src="/img/myicons/page-3.png" alt="" />
      </div>
      <br />
      <h6 style="font-weight: bolder">چه نوع محتوایی بیشتر برای شما مناسب است؟</h6>
      <p style="font-size: 10px">انتخاب کنیدتا محتوای مرتبط به طور دقیق تولید شود</p>
    </div>
    <div class="bottomleft">
      <div class="card-body" style="text-align: left; width: 90%; margin: 5%">
        <div @click="l2 = 1" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l2 === 1 ? 'active' : '']">
          محتوای شبکه های اجتماعی
        </div>
        <br /><br />
        <div @click="l2 = 2" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l2 === 2 ? 'active' : '']">
          تحلیل ها و مقالات تخصصی
        </div>
        <br /><br />
        <div @click="l2 = 3" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l2 === 3 ? 'active' : '']">
          نامه ها و مکاتبات رسمی
        </div>
        <br /><br />
        <div @click="l2 = 4" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l2 === 4 ? 'active' : '']">
          تمامی موارد
        </div>
        <br /><br /><br /><br />

        <button style="border-radius: 0; width: 46%; margin: 2%; float: right" @click="level = level + 1"
          class="btn btn-success form-control">
          ادامه
        </button>
        <button style="
            border-radius: 0;
            width: 46%;
            margin: 2%;
            float: right;
            background: white !important;
            color: #2dca67;
            box-sizing: border-box;
          " @click="level = level - 1" class="btn btn-success form-control">
          بازگشت
        </button>
        <div style="clear: both"></div>
        <p style="text-align: right; margin-top: 10px">
          زمانبندی دلخواه شما، ارسال محتوا را به موقع و با دقت تضمین میکند
        </p>
      </div>
    </div>
    <br />
    <div v-if="result" class="alert alert-success">
      {{ result }}
    </div>
  </div>
  <div v-if="level === 4" style="margin: 2.5%">
    <div class="topright">
      <div style="
          
          width: 24%;
          margin-left: 38%;
          aspect-ratio: 1/1;
          background: white;
          border-radius: 50%;
        ">
        <img style="width: 100%; height: 100%" src="/img/myicons/page-4.png" alt="" />
      </div>
      <br />
      <h6 style="font-weight: bolder">بازه زمانی تولید محتوای تولیدی را مشخص کنید</h6>
      <p style="font-size: 10px">
        زمانبندی دلخواه خود را برای دریافت محتوای آماده تنظیم کنید
      </p>
    </div>
    <div class="bottomleft">
      <div class="card-body" style="text-align: left; width: 90%; margin: 5%">
        <div @click="l3 = 1" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l3 === 1 ? 'active' : '']">
          ارسال محتوا هر روز
        </div>
        <br /><br />
        <div @click="l3 = 2" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l3 === 2 ? 'active' : '']">
          ارسال محتوا یکبار در هفته
        </div>
        <br /><br />
        <div @click="l3 = 3" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l3 === 3 ? 'active' : '']">
          ارسال محتوا در بازه های ماهانه
        </div>
        <br /><br />
        <div @click="l3 = 4" class="form-control" style="float: right; width: 100%; font-size: 12px; text-align: center"
          :class="[l3 === 4 ? 'active' : '']">
          انتخاب همه موارد
        </div>
        <br /><br /><br /><br />

        <button style="border-radius: 0; width: 46%; margin: 2%; float: right" @click="level = level + 1"
          class="btn btn-success form-control">
          تایید زمانبندی
        </button>
        <button style="
            border-radius: 0;
            width: 46%;
            margin: 2%;
            float: right;
            background: white !important;
            color: #2dca67;
            box-sizing: border-box;
          " @click="level = level - 1" class="btn btn-success form-control">
          بازگشت
        </button>
        <div style="clear: both"></div>
      </div>
    </div>
    <br />
  </div>

  <div v-if="level === 5" style="margin: 2.5% 25%;width: 50%;">
    <div class="">
      <div style="margin-top: 0px; width: 100%"></div>
      <br /><br><br><br><br><br>
     
    </div>
    <div style="clear: both"></div>

    <div class="">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div><br><br>

      <h6 style="font-weight: bolder"> به اکسیژن خوش آمدید</h6>
      <p style="font-size: 10px">!به سامانه هوشمندتولید محتوا</p>
      <a style="border-radius: 0; width: 96%; margin: 2%; float: right" href="/services"
        class="btn btn-success form-control">
        شروع
      </a>
    </div>
    <div class="topright" stlye="margin: 0; padding: 0">
      <div class="card-body" style="width: 90%; margin: 5%">
        <p style="font-size: 10px">!حالا وقتش رسیده که تولید محتوای خود را شروع کنید</p>



        <div style="clear: both"></div>
      </div>
    </div>
    <br />
  </div>
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
  mounted() { },
  data() {
    return {
      mobile: "",
      password: "",
      result: "",
      level: 1,
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    };
  },
  methods: {
    async submit() {
      const formData = {
        mobile: this.mobile,
        password: this.password,
      };
      await axios
        .post("auth/users/", formData)
        .then((response) => {
          setTimeout(() => {
            const toPath = this.$route.query.to || "/login";
            this.$router.push(toPath);
          }, 2000);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else if (error.message) {
            this.errors.push(error.message);
          }
        });
    },
    async lsubmit() {
      await axios
        .post(`auth/token/login/`, { mobile: this.mobile, password: this.password })
        .then((response) => response)
        .then((response) => {
          this.myerror = "";
          const token = response.data.auth_token;
          this.$store.commit("setToken", token);
          axios.defaults.headers.common.Authorization = "Token " + token;
          this.$store.state.isAuthenticated = true;
          localStorage.setItem("token", token);
          this.$store.state.loginpop = false;
          this.$store.state.loginpopmini = false;
          this.$store.state.registerpop = false;
          axios.defaults.headers.common["Authorization"] = "Token " + token;
          this.$router.push(this.$route.go || "/");
        });
    },
  },
};
</script>
<style>
.spinner {
  position: static;
  border-radius: 50%;
  width: 30%;
  aspect-ratio: 1/1;
  margin-left: 50%;
  margin-top: 100px;
  animation: rotate_3922 1.2s linear infinite;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
}

.spinner div {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
}

.spinner div:nth-of-type(1) {
  filter: blur(5px);
}

.spinner div:nth-of-type(2) {
  filter: blur(10px);
}

.spinner div:nth-of-type(3) {
  filter: blur(25px);
}

.spinner div:nth-of-type(4) {
  filter: blur(50px);
}

.spinner::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #fff;
  border: solid 5px #ffffff;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@media only screen and (min-width: 1023px) {
  .spinner {
    margin-top: -60px;
  }
}

.active {
  color: red !important
}
</style>
