<template>
  <div style="width: 100%;height:40px;background: white" ></div>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 0;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="height: 130px; margin: 10px;" alt="">

    </div>
    <div style="width: 50%; float: right;text-align: right;margin: 35px 25px ">
      <h5 style="font-weight: bold;font-family: 'vazir';font-size: 16px">نویسنده هوش مصنوعی</h5>
      <p style="font-family: 'vazir';font-size: 12px;">نوشته های خود را با هوش مصنوعی بنویسید</p>

    </div>
  </div>
  <div style=" overflow-x: auto ; overflow-y: hidden;margin: 1%;white-space: nowrap; text-align: right;margin-top: 10px;">
    <div style="text-align: right; max-width: 100%; overflow-x: auto;white-space: nowrap;margin-right: 10px;font-family: 'vazir';direction: rtl; overflow-y: hidden;">
  <div v-for="item in categories" @click="category = item"  style="text-align: right; max-width: 100%;display: inline-block;direction: rtl;margin-top: 10px;margin-bottom: 20px;font-family: 'vazir';">
    <i  style="font-size: 14px; color: #8479b1; background-color: white; border: solid white 2px; padding: 10px; margin-top: -8px;border-radius: 20px; cursor: pointer;margin-right: 5px;font-weight: bold; text-align: right;font-family: 'vazir';"> 
      <!-- <i class="fa-solid fa-pencil"></i> -->
       {{item.name}}</i>
  </div></div>
  <div style="clear: both;color:white; border-color: white;"></div>
  <div v-if="!category">
    <div style="text-align: right; max-width: 100%; overflow-x: auto;white-space: nowrap;margin-right: 10px;font-family: 'vazir';direction: rtl" v-for="cat in categories">
      <br><br>
      <h3 style="font-family: 'vazir';">{{ cat.name }}</h3>
    <a v-if="cat.template === 1"  v-for="item in cat.services" :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 20px; cursor: pointer;width: 47%; margin:1.5%; padding: 1.5% ;box-sizing: border-box`" :href="'services/' + item.slug">
      <i  v-bind:key="item"  style="padding: 10px;"> 
        
        <i style="float: right;margin: 10px;"><img style="width: 25%; aspect-ratio: 1/1" :src="item.get_image" alt=""></i>
        <div style="clear: both;"></div>
        <h6 v-if="item.highlight" style="float: right;margin: 0; margin-right: 10px; font-size: 14px;text-align: right;font-family: 'vazir';" v-html="item.name.replace(item.highlight, `<a style='font-weight:bold; color:black'>`+ item.highlight+`</a>` )"></h6>
        <h6 v-else style="float: right;margin: 0;font-weight:bold; color:black; margin-right: 10px; font-size: 14px;text-align: right;font-family: 'vazir'" v-html="item.name"></h6>
        <br>
        <p style="margin: 5px;text-align: justify;font-size: 12px;text-decoration: none; margin-top: 10px; white-space: break-spaces; width: 98%;margin: auto; text-align: right;font-family: 'vazir';">{{item.description}}</p>
        <br>
        <a :href="'services/' + item.slug" style="text-decoration: none; font-size: 14px;margin-right: 10px">{{item.button_name}}</a>
      </i>
    </a>

    <a v-if="cat.template === 2" v-for="item in cat.services" :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 15px; margin-top: 0px;border-radius: 20px; cursor: pointer;width: 60%; margin:1.5%; padding: 3% ;box-sizing: border-box;`" :href="'services/' + item.slug">
      <h6 style="float: right;margin: 0;font-weight:bold; color:black; margin-right: 10px; font-size: 14px;text-align: right;font-family: 'vazir'" v-html="item.name"></h6>
      <br>
      <i  v-bind:key="item"  style="padding: 10px;"> 
        
        <i style="float: right; ;float:right;width: 25%"><img style="width: 100%;margin-top: 15px;; aspect-ratio: 1/1" :src="item.get_image" alt=""></i>

        <p style="margin: 5px;text-align: justify;font-size: 12px;text-decoration: none; margin-top: 10px; white-space: break-spaces; width:70%;margin: auto; text-align: right;font-family: 'vazir'; float:left">{{item.description}}
<br>
<a :href="'services/' + item.slug" style="text-decoration: none; font-size: 14px">{{item.button_name}}</a>
        </p>
        
        <div style="clear:both"></div>
        <br>
        
      </i>
    </a>

    
    <div style="clear: both"></div>
    <br>
  </div>
  </div>
  <div v-else>
    <div style="text-align: right; max-width: 100%; overflow-x: auto;margin-right: 10px;font-family: 'vazir';direction: rtl">
      <br><br>
      <h3 style="font-family: 'vazir';">{{ category.name }}</h3>
    <a  v-for="item in category.services" :style="`text-decoration:none;;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 20px; cursor: pointer;width: 46%; margin:1.5%; padding: 1.5% ;box-sizing: border-box;float:right`" :href="'services/' + item.slug">
      <i  v-bind:key="item"  style="padding: 10px;"> 
        
        <i style="float: right;margin: 10px;"><img style="width: 25%; aspect-ratio: 1/1" :src="item.get_image" alt=""></i>
        <div style="clear: both;"></div>
        <h6 style="float: right;margin: 0; margin-right: 10px; font-size: 14px;text-align: right;font-family: 'vazir';" v-html="item.name.replace(item.highlight, `<a style='font-weight:bold; color:black'>`+ item.highlight+`</a>` )"></h6>
        <br>
        <p style="margin: 5px;text-align: justify;font-size: 12px;text-decoration: none; margin-top: 10px; white-space: break-spaces; width: 98%;margin: auto; text-align: right;font-family: 'vazir';">{{item.description}}</p>
        
        <br>
        <a :href="'services/' + item.slug" style="text-decoration: none; font-size: 14px;margin-right: 10px">{{item.button_name}}</a>
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
      categories: [],
      category: ''
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