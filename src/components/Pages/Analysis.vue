<template>
  <div style="width: 100%;height:40px;background: white" ></div>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 0;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="height: 130px; margin: 10px;" alt="">

    </div>
    <div style="width: 50%; float: right;text-align: right;margin: 35px 25px ">
      <h5 style="font-weight: bold;font-family: 'vazir';font-size: 16px">اخبار هوش مصنوعی</h5>
      <p style="font-family: 'vazir';font-size: 14px;">اخبار مورد علاقه خود را با هوش مصنوعی دنبال کنید</p>

    </div>
  </div>
  <div style="margin: 2.5%;">
  <div v-if="!file" class="card-body" style="text-align:right">
    <label for="file">ابتدا عکس خود را وارد کنید</label>
    <input type="file" name="file" class="form-control" id="file"><br>
    <button @click="upload()" class="btn btn-dark form-control">آپلود</button>
  </div>
  
  <div v-else class="card-body" style="text-align:right">
    <button type="button" v-for="item in staticEnteries" @click="statics = item.id"  class="btn  form-control" style="margin: 5px;float:right; width: 48%; margin: 1%" :class="[statics === item.id ? 'btn-success': 'btn-danger']">{{item.name}}</button>
    <div style="clear: both"></div>
    <br>
    <div v-if="statics === 0">
    <div v-for="itemm in services" style="text-align: right; max-width: 100%;display: inline-block;direction: rtl;margin-top: 10px;font-family: 'vazir';">
    <a style="text-decoration: none" @click="submit(itemm.id)">
    <i  style="font-size: 14px; color: #8479b1; background-color: white; border: solid white 4px; padding: 10px; margin-top: -8px;border-radius: 20px; cursor: pointer;margin-right: 5px;font-weight: bold; text-align: right;font-family: 'vazir';"> 
      <!-- <i class="fa-solid fa-pencil"></i> -->
       {{itemm.name}}</i></a>
  </div>
  </div>
   <div v-else>
     <label for="" style="text-align:center; width: 100%"> عملی که دوست دارید روی عکس انجام شود را وارد کنید</label><br>
      <textarea rows="4" style="border:none; border-radius: 15px" v-model="maintext" class="form-control" id="maintext" ></textarea>
      <br>
      <button class="btn btn-dark form-control" @click="msubmit()">ارسال</button>
  </div>
</div>
<div style="width: 90%; margin-left: 5%; margin-right: 5%; direction: rtl;margin-top: 15px" v-if="result" v-html="result" class="alert alert-success">
</div>
<br>
</div>

<div style="height: 60px"></div>
</template>


<script>
// @ is an alias to /src
import navbar from '@/components/Layouts/navbar.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    navbar
  },
  mounted(){
    this.get_reports()
    this.get_services()
  },
  data(){
    return {
      reports: [],
      services: [],
      noint: false,
      file: '',
      result: '',
      staticEnteries: [{ 'name': 'پرامپ های أماده', 'id': 0},{ 'name': 'پرامپت دستی', 'id': 1}],
      statics: 0,
      maintext: ''
    }
  },
  methods: {
    async get_reports(){
      await axios
      .get('social-reports')
      .then(response => response.data)
      .then(response => {
        if (response === 1){
          this.noint = true
          return
        }else{
          this.reports = response
        }
        
      })
    },
    async get_services(){
      await axios
      .get('image-services')
      .then(response => response.data)
      .then(response => {
        this.services = response
      })
    },
    async submit(id){
      await axios
      .post('gbuilderfile', {id: id, file: this.file})
      .then(response => response.data)
      .then(response => {
        console.log(response)
        this.result = response[0][1]
      })
    },
    async msubmit(id){
      await axios
      .post('gbuilderfilemanual', {maintext: this.maintext, file: this.file})
      .then(response => response.data)
      .then(response => {
        console.log(response)
        this.result = response[0][1]
      })
    },
    async upload(){
      var img = document.getElementById('file').files[0]
      var formdata = new FormData()
      formdata.append('file', img, img.name)
      await axios
      .post('uploader', formdata)
      .then(response => response.data)
        .then(response => {
          console.log(response)
          this.file = response.get_image
      })
    },
  }
}
</script>
<style>

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: white
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: none; 
  border-radius: 10px;
  width: 4px;
  height: 4px
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(132, 121, 177); 
  border-radius: 10px;
  width: 4px;
  height: 4px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: lightgrey; 
}
</style>