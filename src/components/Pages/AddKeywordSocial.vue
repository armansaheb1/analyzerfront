<template>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 0;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="height: 130px; margin: 10px;" alt="">

    </div>
    <div style="width: 50%; float: right;text-align: right;margin: 35px 25px ">
      <h5 style="font-weight: bold;font-family: 'vazir';font-size: 16px">اخبار هوش مصنوعی</h5>
      <p style="font-family: 'vazir';font-size: 14px;">اخبار مورد علاقه خود را با هوش مصنوعی دنبال کنید</p>

    </div>
  </div>
  <div style=" overflow-x: auto;margin: 1%;white-space: nowrap; text-align: right;margin-top: 10px;">
  <div style="clear: both;color:white; border-color: white;"></div>
  <br>
  <div>
    <div style="text-align: right; max-width: 100%; overflow-x: auto;margin-right: 10px;font-family: 'vazir';">
      <div style="text-align: center" class="card">
        <div class="card-header">
          اضافه کردن کلید واژه
        </div>
        <div class="card-body" style="text-align: right">
          <form @submit.prevent="submit()">
            <input v-model="subject" required type="text" placeholder="کلید واژه" class="form-control"><br>
            <div class="form-check">
  <input v-model="twitter" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    تویتر
  </label>
</div>
            <div class="form-check">
  <input v-model="telegram" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    تلگرام
  </label>
</div>
<div v-if="telegram">
  <label for="">کانال های تلگرام (با "," جدا شوند)</label><br>
  <input v-model="channels" type="text" class="form-control">
</div><br><br>
            
            <button class="btn btn-dark" style="margin: 5px" href="/add-keyword">اضافه کردن  </button>
            <a href="/analysis" class="btn btn-warning" style="margin: 5px">بازگشت به صفحه اخبار  </a>
          </form>
          
        </div>

        
      </div>
      <div v-for="item in reports" style="margin: 5px" class="btn btn-light">
        <button @click="deletes(item.id)" style="width: 18px;height: 18px ;padding: 0 ; border-radius: 50%;font-size: 12px" class="btn btn-danger">X</button>
        {{item.subject}}

        
      </div>
    </div>
  </div>
</div>
<div style="height: 200px;"></div>
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
  },
  data(){
    return {
      reports: [],
      services: [],
      noint: false,
      subject: '',
      telegram: false,
      twitter: false,
      channels: ''
    }
  },
  methods: {
    async get_reports(){
      await axios
      .get('intrests-social')
      .then(response => response.data)
      .then(response => {
        this.reports = response
      })
    },
    async submit(){
      await axios
      .post('intrests-social', {subject:this.subject, telegram: this.telegram, twitter: this.twitter, channels: this.channels.split(',')})
      .then(response => response.data)
      .then(response => {
        this.reports = response
      })
    },
    async deletes(id){
      await axios
      .delete(`intrests-social/${id}`)
      .then(response => response.data)
      .then(response => {
        this.reports = response
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