<template>
  <div style="width: 100%; height: 150px; background-color: white; border-radius:  0 0 35px 35px ;padding: 10% 5%;">
    <div style="width: 35%; float: left;">
      <img src="/bot.png" style="width: 100%;" alt="">

    </div>
    <div style="width: 65%; float: left;text-align: right;margin-top: 10px">
      <h4 style="font-weight: bold;font-family: 'vazir';">اخبار هوش مصنوعی</h4>
      <p style="font-family: 'vazir';">اخبار مرتبط با کار خود را دنبال کنید</p>

    </div>
  </div>
  <div style=" overflow-x: auto;margin: 1%;white-space: nowrap; text-align: right;margin-top: 10px;">
  <div style="clear: both;color:white; border-color: white;"></div>
  <br>
  <div>
    <div style="text-align: right; max-width: 100%; overflow-x: auto;margin-right: 10px;font-family: 'vazir';">
    <a  v-for="item in reports" :style="`display: block;text-decoration:none;font-size: 16px; color: #333; background-color: white;  padding: 8px; margin-top: 0px;border-radius: 10px; cursor: pointer;width: 97%; margin:1.5%; padding: 1.5% ;box-sizing: border-box;`">
      <div style="width: 30%; height: 90%; float: right;">
        <img :src="item.pic" style="width: 100%; border-radius: 10px; aspect-ratio: 1/1;" alt="">
      </div>
      <div style="width: 70%; float: left; text-align: right; white-space: normal; padding:2%">
        <h3 style="font-size: 12px; font-weight: bold;">{{ item.title }}</h3>
        <p style="font-size: 10px;">{{ item.text }}</p>
      </div>
      <div style="clear: both;"></div>
      
    </a>
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
    this.get_reports()
  },
  data(){
    return {
      reports: [],
      categories: []
    }
  },
  methods: {
    async get_reports(){
      await axios
      .get('reports')
      .then(response => response.data)
      .then(response => {
        this.reports = response
      })
    },
  }
}
</script>