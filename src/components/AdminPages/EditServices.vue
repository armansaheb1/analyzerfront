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
        <label for="">کلمه هایلایت</label>
        <input class="form-control" type="text" v-model="highlight">
        <label for="">قیمت</label>
        <input class="form-control" type="number" v-model="price">
        <label for="">کد رنگ</label>
        <input class="form-control" type="text" v-model="color">
        <label for=""> آیکون</label>
        <input class="form-control" type="file" id='file'>
<br>
      <div  class="card"><form @submit.prevent="varset=true">
        <div class="card-header"> <button type="button" @click="vars.push({type: '', slug: nextChar(count)}) ; counter= counter+1" class="btn btn-success" style="padding: 2px 5px;">+</button> متغیر ها</div>
      
        <div class="card-body">
          
          
      <div v-for="item in vars">
        <br>
        {{item.slug}}
        <button type="button" @click="vars.splice(index, 1); counter= counter+1" class="btn btn-danger" style="padding: 2px 5px;float:left">-</button>
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
    <br>
    <button type="button" @click="buttoner(item.id)" v-for="item in staticEnteries" class="btn  form-control" style="margin: 5px" :class="[statics.includes(item.id) ? 'btn-success': 'btn-danger']">{{item.id}}{{item.name}}</button>
    <br><br>
      <label for="">پرامپت</label>
      <textarea rows="5" id="per" style="text-align: right;" v-model="prompt" required class="form-control" name="" ></textarea>
      <button class="btn btn-primary" style="float: left;margin: 5px" type="button" @click="set_var('$' + item.slug)" v-for="item in vars">{{ item.name }}</button>
      <button class="btn btn-primary" style="float: left;margin: 5px" type="button" @click="set_var('متن اصلی داده شده')">متن اصلی داده شده</button>
      <div style="clear: both;"></div>
      <br>
      <button class="btn btn-dark form-control">ثبت تغییرات</button></form>
    </div>
    
    </div>
  </div><br>
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
    this.get_statics()
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
      staticEnteries: [],
      statics: [],
      count: 'a',
      highlight: ''
    }
  },
  
  methods: {
    set_var(vars) {
      if (window.getSelection) {
        var sel = window.getSelection();
        this.prompt = this.prompt.replace(sel, vars)
      } else {
        this.prompt = vars
      }
    },
    nextChar(c) {
        this.count = String.fromCharCode(c.charCodeAt(0) + 1)
        return String.fromCharCode(c.charCodeAt(0))
    },
    buttoner(item) {
      if (this.statics.includes(item)) {
        const index = this.statics.indexOf(item);
        if (index > -1) { // only splice array when item is found
          this.statics.splice(index, 1); // 2nd parameter means remove one item only
        }
      } else {
        this.statics.push(item)
      }
    },
    pert(){
      document.getElementById('per').focus()
    },
    async get_services(){
      var slug = this.$route.params.slug
      await axios
      .get(`adminpanel/services/${slug}`)
      .then(response => response.data)
      .then(response => {
        console.log(response)
        this.services = response
        if(response.variables){
          if (response.variables.length) {
            this.vars = response.variables
            this.count = String.fromCharCode(this.vars[this.vars.length-1].slug.charCodeAt(0) + 1)
          }
        }
        
        this.category = response.category.id
        this.slug = response.slug
        this.name = response.name
        this.description = response.description
        this.price = response.price
        this.color = response.color
        this.icon = response.icon
        this.prompt = response.prompt
        this.statics = []
        for (var item of response.static_variables) {
          this.statics.push(item)
        }
        console.log(this.statics)
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
    async get_statics(){
      await axios
      .get('static-entries')
      .then(response => response.data)
      .then(response => {
        console.log(response)
        this.staticEnteries = response
      })
    },
    async submit(){
      var slug = this.$route.params.slug
      for(var item of this.vars){
        if('options' in item){
          item.options = item.options.split('-')
        }
      }
      const formdata = new FormData()
      formdata.append('name', this.name)
      formdata.append('category', this.category)
      formdata.append('variables', JSON.stringify(this.vars)) 
      formdata.append('prompt', this.prompt) 
      formdata.append('price', this.price)
      formdata.append('highlight', this.highlight)
      formdata.append('description', this.description)
      formdata.append('slug', this.slug)
      formdata.append('color', this.color)
      for (var item of this.statics) {
        formdata.append('static_variables', item)
      }
      
      if (document.getElementById('file').files.length) {
        var img = document.getElementById('file').files[0]
        formdata.append('icon_image', img, img.name)
      }
      await axios
      .put(`adminpanel/services/${slug}`, formdata)
      .then(response => response.data)
      .then(response => {
        this.services = response
        this.$router.push('/admin/manage-services')
        
      })
    }
  }
}
</script>