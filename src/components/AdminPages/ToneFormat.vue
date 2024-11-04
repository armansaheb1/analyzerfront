<template>
  <div class="card" style="width:48%;float:left">
    <div class="card-header">
      اضافه کردن لحن
    </div>
    <div class="card-body" style="text-align: right;">
      

    <div >
      <form @submit.prevent="tsubmit()">
        
        <label for="">نام لحن</label>
        <input class="form-control" type="text" v-model="tname">
      <div style="clear: both;"></div>
      <br>
      <button class="btn btn-dark form-control">Submit</button></form>
    </div>
    
    </div>
  </div>
  <div class="card" style="width:48%;float:left">
    <div class="card-header">
      اضافه کردن فرمت
    </div>
    <div class="card-body" style="text-align: right;">
      

    <div >
      <form @submit.prevent="fsubmit()">
        
        <label for="">نام فرمت</label>
        <input class="form-control" type="text" v-model="fname">
      <div style="clear: both;"></div>
      <br>
      <button class="btn btn-dark form-control">Submit</button></form>
    </div>
    
    </div>
  </div>
  <div style="clear:both"></div>
  
  <br>
  <div class="card" style="width:48%;float:left">
    <div class="card-header">
      لحن ها
    </div>
    <div class="card-body" style="text-align: right;">
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th class="col-2" style=" text-align: left">
          عملیات
        </th>

      <th class="col-5" style=" text-align: right">
          نام 
        </th>
        
        
      </tr></thead>
      <tbody>
      <tr v-for="item in tones" style="text-align: right;">
        <td style=" text-align: left; font-size: 12px;font-weight: bold;"><button style="font-size: 12px; padding: 3px 5px; margin: 3px" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
</td>
        <td style=" text-align: right; font-size: 12px;font-weight: bold;">
          {{ item.name }}
        </td>

      </tr></tbody>
    </table>
    </div>
  </div>
  </div>

  <div class="card" style="width:48%;float:left">
    <div class="card-header">
      فرمت ها
    </div>
    <div class="card-body" style="text-align: right;">
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th class="col-2" style=" text-align: left">
          عملیات
        </th>

      <th class="col-5" style=" text-align: right">
          نام 
        </th>
        
        
      </tr></thead>
      <tbody>
      <tr v-for="item in formats" style="text-align: right;">
        <td style=" text-align: left; font-size: 12px;font-weight: bold;"><button style="font-size: 12px; padding: 3px 5px; margin: 3px" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
</td>
        <td style=" text-align: right; font-size: 12px;font-weight: bold;">
          {{ item.name }}
        </td>

      </tr></tbody>
    </table>
    </div>
  </div>
  </div>
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
      counter: 0,
      vars: [],
      tname: '',
      fname: '',
      category: '',
      services: [],
      categories: [],
      varset: false,
      prompt: '',
      description: '',
      price: '',
      slug: '',
      formats: [],
      tones: []
    }
  },
  methods: {
    pert(){
      document.getElementById('per').focus()
    },
    async get_tones(){
      await axios
      .get('tones')
      .then(response => response.data)
      .then(response => {
        this.tones = response
      })
    },
    async tsubmit(){
      await axios
      .post('adminpanel/tones', {name:this.tname})
      .then(response => response.data)
      .then(response => {
        this.tones = response
      })
    },
    async get_formats() {
      await axios
      .get('formats')
      .then(response => response.data)
      .then(response => {
        this.formats = response
      })
    },
    async fsubmit(){
      await axios
      .post('adminpanel/formats', {name:this.fname})
      .then(response => response.data)
      .then(response => {
        this.formats = response
      })
    }
  }
}
</script>