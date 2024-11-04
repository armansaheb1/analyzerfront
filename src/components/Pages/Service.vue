<template>
  <div style="width: 100%;height:40px" ></div>

  <img src="/wrobot.png" style="width: 50%; margin:0.5%;margin-bottom:-15px" alt="">
  <div style="clear:both"></div>
  <button v-if="!idea" @click="idea=true" class="btn btn-success" style="background : #8479b1; border-radius: 10px;margin-top:10px">برای ساخت ایده کلید کنید</button>
  <div v-if="!idea" style="margin: 2.5%;">
  <div  >
    <div class="card-body" style="text-align: right;">
       <label for="" style="text-align:center; width: 100%"> ایده خود را در باکس زیر کپی کنید</label><br>
      <textarea rows="6" style="border:none; border-radius: 15px" v-model="maintext" class="form-control" id="maintext" ></textarea>

  <div v-for="item in service.static_variables">
    <br>
    <label for=""><a style="color:red">*</a> {{ item.name }}</label><br>

    <button class="btn" style="float:right;margin: 3px;border-radius:10px; font-size: 11px; width: 24%; margin: 0.5%"  v-for="items in item.options" :style="[items == item.selected ? {'background': '#8479b1', 'color': 'white'}: {'background': 'white', 'color': '#8479b1'}]" @click="item.selected= items" :value="items">{{ items }}</button>
    <div style="clear:both"></div>
  
</div><br>
  <div v-for="item in service.variables">
    <label for=""><a v-if="item.required" style="color:red">*</a> {{ item.name }}</label><br>
  <textarea class="form-control" :id="item.slug" v-if="item.type == 'textarea'"></textarea>
  <select class="form-control" v-else-if="item.type == 'select'" :id="item.slug">
    <option :value="item.options" v-for="items in item.options">{{ items }}</option>
  </select>
  <input :id="item.slug" v-else class="form-control" :type="item.type"><br>
  
</div><br><br>
<button @click="submit()" class="btn btn-success form-control" style="background : green; border-radius: 10px">شروع نوشتن</button>
</div>
</div>
<br>
<div v-if="result" v-html="result" class="alert alert-success">
</div></div>


<div v-if="idea" style="margin: 2.5%;">
  <div  >
    <div class="card-body" style="text-align: right;">
       <label for="" style="text-align:center; width: 100%"> موضوع خود را برای ساخت ایده وارد کنید</label><br>
      <textarea rows="6" style="border:none; border-radius: 15px" v-model="ideamaintext" class="form-control"  ></textarea>

  <div v-for="item in ideaEntries">
    <br>
    <label for=""><a style="color:red">*</a> {{ item.name }}</label><br>

    <button class="btn" style="float:right;margin: 3px;border-radius:10px; font-size: 11px; width: 24%; margin: 0.5%"  v-for="items in item.options" :style="[items == item.selected ? {'background': '#8479b1', 'color': 'white'}: {'background': 'white', 'color': '#8479b1'}]" @click="item.selected= items" :value="items">{{ items }}</button>
    <div style="clear:both"></div>
  
</div>

  <div v-for="(item, idx) in service.variables">
    <label for=""><a v-if="item.required" style="color:red">*</a> {{ item.name }}</label>
    btn
    <br>
  <textarea class="form-control" :id="item.slug" v-if="item.type == 'textarea'"></textarea>
  <select class="form-control" v-else-if="item.type == 'select'" :id="item.slug">
    <option :value="item.options" v-for="items in item.options">{{ items }}</option>
  </select>
  <input :id="item.slug" v-else class="form-control" :type="item.type"><br>
  
</div><br><br><br>
<button @click="ideasubmit()" class="btn btn-success form-control" style="background : green; border-radius: 10px">شروع نوشتن</button>
</div>
</div>
<br>
<div v-if="result" v-html="result" class="alert alert-success">
</div>

<div v-if="idearesult" >
  <div class="alert alert-success" @click="maintext=item.description; idea=false" v-for="item in idearesult">
    <h5>{{item.title}}</h5>
    <p>{{item.description}}</p>
  </div>
</div>

</div>

<div style="height: 150px"></div>

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
    this.get_service()
    this.get_idea_entries()
},
data(){
    return {
    service: [],
    idea: false,
    datas: {},
    result: '',
    maintext: '',
    ideaEntries: [],
    idearesult: '',
    ideamaintext: ''
    }
},
  methods: {
    
  async get_idea_entries(){
    var slug = this.$route.params.slug
    await axios
    .get(`idea-entries`)
    .then(response => response.data)
    .then(response => {
        this.ideaEntries = response
      for (var item of this.ideaEntries) {
          
          item.selected= item.options[0]
        }
    })
    },
    async get_service(){
    var slug = this.$route.params.slug
    await axios
    .get(`services/${slug}`)
    .then(response => response.data)
    .then(response => {
        this.service = response
      for (var item of this.service.static_variables) {
          item.selected= item.options[0]
        }
    })
    },
    async submit(){
      var aaa= {}
      var bbb= {}
      if(this.service.variables){
        for (var item of this.service.variables){
          aaa[item.name] = document.querySelector('#' + item.slug).value
        }
      }
      
      for (var item of this.service.static_variables){
        bbb['n' + item.id] = item.selected
      }
      var slug = this.$route.params.slug
      await axios
      .post(`gbuilder/${slug}`, {maintext: this.maintext, data:aaa, data2: bbb})
      .then(response => response.data)
        .then(response => {
          this.result = response
          while (this.result.includes("*") || this.result.includes("#")) {
            console.log(this.result)
            this.result = this.result.replace('*','').replace('#','')
          }
      })

    },
    async ideasubmit(){
      var bbb= {}

      for (var item of this.ideaEntries){
        bbb['n' + item.id] = item.selected
      }
      var slug = this.$route.params.slug
      await axios
      .post(`gideabuilder`, {maintext: this.ideamaintext, data: bbb})
      .then(response => response.data)
      .then(response => {
          this.idearesult = response
      })

    }
}
}
</script>