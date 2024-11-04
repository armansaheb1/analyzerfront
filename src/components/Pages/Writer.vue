<template>
  <div style="width: 100%;height:40px;background: white" ></div>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 0;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="height: 130px; margin: 10px;" alt="">

    </div>
    <div style="width: 50%; float: right;text-align: right;margin: 35px 25px ">
      <h5 style="font-weight: bold;font-family: 'vazir';font-size: 16px">اخبار هوش مصنوعی</h5>
      <p style="font-family: 'vazir';font-size: 12px;">اخبار مورد علاقه خود را با هوش مصنوعی دنبال کنید</p>

    </div>
  </div>
  <div style="margin: 2.5%;">
  <div v-if="!result" class="card-body" style="text-align:right">
    <label for="">متن مورد نظر خود را وارد کنید</label>
    <textarea v-model="text" class="form-control" rows="3" style="border-radius: 15px" name="" id=""></textarea>
    <h5 style="font-size: 14px; font-weight: bold; margin-top: 10px">برای دقیق تر شدن پاسخ فرم زیر را پر کنید</h5>
    <input v-model="prompt" type="text" placeholder="پرامپت خود را وارد کنین" class="form-control" style="text-align: right" name="" id="">
    <br>
    <label for="">لحن</label><br>
    <button  v-for="item in tones" @click="tone = item.name" class="btn btn-dark" style="float:right;margin: 3px">{{item.name}}</button>

    <div style="clear: both;"></div>
    <br>
    <label for="">فرمت</label><br>

    <button  v-for="item in formats" @click="format = item.name" class="btn btn-dark" style="float:right;margin: 3px">{{item.name}}</button>
<div style="clear: both;"></div><br>
  <button @click="submit()" class="btn btn-dark form-control">ثبت</button>
</div>
<div style="width: 90%; margin-left: 5%; margin-right: 5%; direction: rtl" v-else v-html="result.replace('```html','').replace('```','')" class="alert alert-success">
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
  this.get_tones()
  this.get_formats()
},
data(){
    return {
    service: [],
    datas: {},
    result: '',
    tones: [],
    prompt: '',
    text: '',
    tone: '',
    format: '',
    formats: []
    }
},
  methods: {
  async get_tones(){
    var slug = this.$route.params.slug
    await axios
    .get(`tones`)
    .then(response => response.data)
    .then(response => {
        this.tones = response
    })
    },
    async get_formats(){
    var slug = this.$route.params.slug
    await axios
    .get(`formats`)
    .then(response => response.data)
    .then(response => {
        this.formats = response
    })
    },
    async get_service(){
    var slug = this.$route.params.slug
    await axios
    .get(`services/${slug}`)
    .then(response => response.data)
    .then(response => {
        this.service = response
    })
    },
    async submit(){
      await axios
      .post(`gbuilderwrite`, {text:this.text,prompt: this.prompt, tone: this.tone, format: this.format})
      .then(response => response.data)
      .then(response => {
          this.result = response
      })

    }
}
}
</script>