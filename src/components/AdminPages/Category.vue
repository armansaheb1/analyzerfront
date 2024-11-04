<template>
  <div class="card">
    <div class="card-header">
      اضافه کردن دسته بندی
    </div>
    <div class="card-body" style="text-align: right;">
    <div>
      <form @submit.prevent="submit()">
        <label for="">نام دسته بندی</label>
        <input class="form-control" type="text" v-model="name">
       
    
      <button class="btn btn-primary" style="float: left;margin: 5px" type="button" @click="prompt = prompt + ' $' + item.name + ' '; pert()" v-for="item in vars">{{ item.name }}</button>
      <div style="clear: both;"></div>
      <br>
      <button class="btn btn-dark form-control">Submit</button></form>
    </div>
    
    </div>
  </div><br>
  <div class="card">
    <div class="card-header">
      Manage Services
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
          نام سرویس
        </th>
        
        
      </tr></thead>
      <tbody>
      <tr v-for="item in categories" style="text-align: right;">
        <td style=" text-align: left; font-size: 12px;font-weight: bold;"><button @click="deletes(item.id)" style="font-size: 12px; padding: 3px 5px; margin: 3px" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
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
    this.get_categories()
  },
  data(){
    return {
      counter: 0,
      vars: [],
      name: '',
      category: '',
      services: [],
      categories: [],
      varset: false,
      prompt: '',
      description: '',
      price: '',
      color: '',
      icon: '',
      slug: ''
    }
  },
  methods: {
    pert(){
      document.getElementById('per').focus()
    },
    async get_categories(){
      await axios
      .get('adminpanel/categories')
      .then(response => response.data)
      .then(response => {
        this.categories = response
      })
    },
    async submit(){
      await axios
      .post('adminpanel/categories', {name:this.name})
      .then(response => response.data)
      .then(response => {
        this.categories = response
      })
    },
    async deletes(id){
      await axios
      .delete(`adminpanel/categories/${id}`)
      .then(response => response.data)
      .then(response => {
        this.categories = response
      })
    }
  }
}
</script>