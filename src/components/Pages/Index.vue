<template>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 10% 5%;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="width: 100%;" alt="">

    </div>
    <div style="width: 65%; float: left;text-align: right;margin-top: 10px">
      <h4 style="font-weight: bold;font-family: 'vazir';">نویسنده هوش مصنوعی</h4>
      <p style="font-family: 'vazir';">نوشته های خود را با هوش مصنوعی بنویسید</p>

    </div>
  </div>
  <div style=" overflow-x: auto;margin: 1%;white-space: nowrap; text-align: right;margin-top: 10px;">
  <div v-for="item in categories" style="text-align: right; max-width: 100%;display: inline-block;direction: rtl;margin-top: 10px;font-family: 'vazir';">
    <i  style="font-size: 14px; color: #8479b1; background-color: white; border: solid white 2px; padding: 10px; margin-top: -8px;border-radius: 20px; cursor: pointer;margin-right: 5px;font-weight: bold; text-align: right;font-family: 'vazir';"> 
      <!-- <i class="fa-solid fa-pencil"></i> -->
       {{item.name}}</i>
  </div>
  <div style="clear: both;color:white; border-color: white;"></div>
  <br>
  <div>
    <div style="text-align: right; max-width: 100%; overflow-x: auto;white-space: nowrap;margin-right: 10px;font-family: 'vazir';" v-for="cat in categories">
      <h3 style="font-family: 'vazir';">{{ cat.name }}</h3>
    <a  v-for="item in cat.services" :style="`text-decoration:none;display: inline-block;font-size: 16px; color: white; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 20px; cursor: pointer;width: 47%; margin:1.5%; padding: 1.5% ;box-sizing: border-box;`" :bref="'services/' + item.slug">
      <i  v-bind:key="item"  style="padding: 10px;"> 
        
        <i style="float: right;margin: 2px;margin: 10px;" :class="item.icon + ' fa-4x'"></i>
        <div style="clear: both;"></div>
        <h5 style="float: right;margin: 0; margin-right: 10px; font-size: 16px;text-align: right;font-weight: bold;font-family: 'vazir';">{{item.name}}</h5>
        <br>
        <p style="margin-right: 10px;text-align: justify;font-size: 12px;text-decoration: none; margin-top: 10px; white-space: break-spaces; width: 85%;margin: auto; text-align: right;font-family: 'vazir';">{{item.description}}</p>
      </i>
    </a>
    <div style="clear: both"></div>
    <br>
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
    this.get_services()
    this.get_categories()
  },
  data(){
    return {
      services: [],
      categories: []
    }
  },
  methods: {
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
    }
  }
}
</script>