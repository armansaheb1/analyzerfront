<template>
  <div class="card">
    <div class="card-header">
      اضافه کردن سرویس
    </div>
    <div class="card-body" style="text-align: right;">
      
      
    <div>
      
      <form @submit.prevent="submit()">
        <label for="">دسته بندی</label>
        
        <select required v-model="category" style="text-align: right;" class="form-control">
          <option  style="text-align: right;" value="" selected disabled>دسته بندی</option>
          <option v-for="item in categories" style="text-align: right;" :value="item.id">{{item.name}}</option>
        </select>
        <label for="">مسیر سرویس (انگلیسی)</label>
        <input class="form-control" type="text" v-model="slug">
        <label for="">نام سرویس</label>
        <input class="form-control" type="text" v-model="name">
        <label for="">توضیحات</label>
        <input class="form-control" type="text" v-model="description">
        <label for="">قیمت</label>
        <input class="form-control" type="number" v-model="price">
        <label for="">کد رنگ</label>
        <input class="form-control" type="text" v-model="color">
        <label for="">اسم آیکون FontAwesome</label>
        <input class="form-control" type="text" v-model="icon">
<br>
      <div  class="card"><form @submit.prevent="varset=true">
        <div class="card-header"> <button type="button" @click="vars.push({type: '', slug: nextChar(count)}) ; counter= counter+1" class="btn btn-success" style="padding: 2px 5px;">+</button> متغیر ها</div>
      
        <div class="card-body">
          
          
      <div v-for="item in vars">
        <br>
        {{item.slug}}
        <input required v-model="item.name" style="text-align: right;" class="form-control" type="text" placeholder="نام ">
        <select required v-model="item.type" style="text-align: right;" class="form-control" name="" id="">
          <option style="text-align: right;" value="" selected disabled>نوع</option>
          <option style="text-align: right;" value="text">متن</option>
          <option style="text-align: right;" value="number">عدد</option>
          <option style="text-align: right;" value="select">کشویی</option>
          <option style="text-align: right;" value="textarea">پرامپت</option>
        </select>
        <input required v-if="item.type == 'select'" v-model="item.options" style="text-align: right;" class="form-control" type="text" placeholder="(-) متغیر های جدا شده با ">
        <div class="form-check">
        <input v-model="item.required" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          ضرورت
        </label>
      </div>
      </div></div><br>
    </form>
    </div>
      <label for="">پرامپت</label>
      <textarea id="per" style="text-align: right;" v-model="prompt" required class="form-control" name="" ></textarea>
      <button class="btn btn-primary" style="float: left;margin: 5px" type="button" @click="prompt = prompt + ' $' + item.slug + ' '; pert()" v-for="item in vars">{{ item.name }}</button>
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
          دسته بندی
        </th>
      <th class="col-5" style=" text-align: right">
          نام سرویس
        </th>
        
        
      </tr></thead>
      <tbody>
      <tr v-for="item in services" style="text-align: right;">
        <td style=" text-align: left; font-size: 12px;font-weight: bold;"><button @click="deletes(item.id)" style="font-size: 12px; padding: 3px 5px; margin: 3px" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        
        <td style=" text-align: right; font-size: 12px;font-weight: bold;">
          {{ item.category.name }}
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
    this.get_services()
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
      slug: '',
      count: 'a',
    }
  },
  methods: {
    nextChar(c) {
        this.count = String.fromCharCode(c.charCodeAt(0) + 1)
        return String.fromCharCode(c.charCodeAt(0))
    },
    pert(){
      document.getElementById('per').focus()
    },
    async get_services(){
      await axios
      .get('services')
      .then(response => response.data)
      .then(response => {
        this.services = response
      })
    },
    async get_categories(){
      await axios
      .get('categories')
      .then(response => response.data)
      .then(response => {
        this.categories = response
      })
    },
    async deletes(id){
      await axios
      .delete(`adminpanel/services/${id}`)
      .then(response => response.data)
      .then(response => {
        this.services = response
      })
    },
    async submit(){
      for(var item of this.vars){
        if('options' in item){
          item.options = item.options.split('-')
        }
      }
      await axios
      .post('adminpanel/services', {name:this.name, category:this.category, variables: this.vars, prompt: this.prompt, price: this.price, description: this.description, slug: this.slug, color: this.color, icon: this.icon})
      .then(response => response.data)
      .then(response => {
        this.services = response
      })
    }
  }
}
</script>