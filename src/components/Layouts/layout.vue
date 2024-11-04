<template>
	<div v-if="!$store.state.isAuthenticated" style="position: absolute; top : 0; width: 40%; left: 30%; border-radius: 0 0 15px 15px; background:#ededed; padding: 10px">
    <a class="as" href="/login" style="text-decoration: none;width: 50%; float: right; color: #444; border-left: solid #444 1px">
      ورود
    </a>
    <a class="as" href="/register" style="text-decoration: none;width: 50%; float: right; color: #444">
      ثبت نام
    </a>
  </div>
  
  <div v-else style="position: fixed; top : 0; width: 40%; left: 30%; border-radius: 0 0 15px 15px; background:#ededed; padding: 10px; border:solid 1px grey">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Layer_1" viewBox="0 0 291.764 291.764" xml:space="preserve">
<g>
	<path style="fill:#EFC75E;" d="M145.882,0c80.573,0,145.882,65.319,145.882,145.882s-65.31,145.882-145.882,145.882   S0,226.446,0,145.882S65.31,0,145.882,0z"/>
	<path style="fill:#CC9933;" d="M145.882,27.353c-65.465,0-118.529,53.065-118.529,118.529s53.065,118.529,118.529,118.529   s118.529-53.065,118.529-118.529S211.347,27.353,145.882,27.353z M145.882,246.176c-55.39,0-100.294-44.904-100.294-100.294   S90.493,45.588,145.882,45.588s100.294,44.904,100.294,100.294S201.281,246.176,145.882,246.176z M158.009,138.269   c-5.452-2.289-25.493-5.452-25.493-14.214c0-6.464,7.495-8.334,11.99-8.334c4.094,0,8.999,1.295,11.589,3.875   c1.641,1.577,2.316,2.726,2.854,4.313c0.684,1.869,1.094,3.875,3.684,3.875h13.357c3.136,0,3.957-0.574,3.957-4.021   c0-14.789-11.589-23.122-24.809-25.994V86.28c0-2.58-0.821-4.167-3.957-4.167h-10.64c-3.136,0-3.957,1.577-3.957,4.167v11.051   c-14.178,2.726-26.031,11.634-26.031,27.718c0,18.235,12.683,23.979,26.441,28.566c11.589,3.884,23.724,4.021,23.724,12.063   s-5.99,9.765-13.357,9.765c-5.051,0-10.631-1.304-13.366-4.741c-1.769-2.152-2.453-4.021-2.58-5.89   c-0.274-3.592-1.769-4.021-4.914-4.021H113.28c-3.136,0-3.957,0.729-3.957,4.021c0,16.366,13.093,26.286,27.262,29.441v11.206   c0,2.58,0.821,4.167,3.957,4.167h10.64c3.136,0,3.957-1.586,3.957-4.167v-10.905c16.084-2.453,27.125-12.209,27.125-29.441   C182.28,145.591,167.829,141.424,158.009,138.269z"/>
</g>
</svg>
1000
  </div>
  
    <div class="home">
        <!-- <navbar/>
         -->
      
        <router-view />
        <div style="height: 90px;border-radius: 25px;padding: 10px 0;background-color: white;width: 90%;position: fixed; bottom: 10px;left:5%">
    <div style="width: 100%;z-index: 1;height: 50px;border-radius: 25px;" class="btn-group" role="group" aria-label="Basic example">
        <a style="text-decoration: none;" href="/" class="svgbox"  >
          
          <div style="height: 35px;width: 35px;border-radius: 50%;background-color: #8479b2;margin:auto " :style="[roout == '/' ? {'height': '45px','width': '45px','border-radius': '50%','margin':'auto', 'padding': '3px'} : {'height': '35px','width': '35px','border-radius': '50%','margin':'auto'}]">
            <svg fill="#ffffff" style="" :height="[roout == '/' ? 24 : 21]" :width="[roout == '/' ? 24 : 21]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 324.143 324.143" xml:space="preserve">
<g>
	<g>
		<g>
			<circle cx="88.071" cy="164.571" r="19"/>
			<circle cx="162.071" cy="164.571" r="19"/>
			<path d="M162.071,0C73.162,0,0.83,72.332,0.83,161.241c0,37.076,12.788,73.004,36.1,101.677
				c-6.65,16.756-17.788,31.245-32.401,42.089c-2.237,1.66-3.37,4.424-2.94,7.177c0.429,2.754,2.349,5.042,4.985,5.942
				c11.683,3.992,23.856,6.017,36.182,6.017c19.572,0,38.698-5.093,55.569-14.763c20.158,8.696,41.584,13.104,63.747,13.104
				c88.909,0,161.241-72.333,161.241-161.242S250.98,0,162.071,0z M162.071,307.483c-21.32,0-41.881-4.492-61.11-13.351
				c-2.292-1.057-4.959-0.891-7.102,0.443c-15.313,9.529-32.985,14.566-51.104,14.566c-6.053,0-12.065-0.564-17.981-1.684
				c12.521-12.12,22.014-26.95,27.788-43.547c0.878-2.525,0.346-5.328-1.398-7.354C28.378,230.07,15.83,196.22,15.83,161.241
				C15.83,80.604,81.434,15,162.071,15s146.241,65.604,146.241,146.241C308.313,241.88,242.709,307.483,162.071,307.483z"/>
			<circle cx="236.071" cy="164.571" r="19"/>
		</g>
	</g>
</g>
</svg>
<br>
          <a style="position: relative; text-decoration: none; color: #333; top: 12px; font-size: 8px; font-weight: bold; width: 100%;display: block;; width: 130%; margin-left: -15%;">AI Writer</a>
          </div>
        </a>
        <a style="text-decoration: none;" href="/news" class="svgbox"  >
          
          <div style="height: 35px;width: 35px;border-radius: 50%;background-color: #97caab;margin:auto " :style="[roout == '/news' ? {'height': '45px','width': '45px','border-radius': '50%','margin':'auto', 'padding': '0px'} : {'height': '35px','width': '35px','border-radius': '50%','margin':'auto'}]">
            <svg style="fill:white; border-radius: 60%;" :height="[roout == '/news' ? 26 : 20]" :width="[roout == '/news' ? 26 : 20]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path xmlns="http://www.w3.org/2000/svg" d="M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>			</svg>


<br>
          <a style="position: relative; text-decoration: none; color: #333; top: 12px; font-size: 8px; font-weight: bold; width: 100%;display: block;; width: 130%; margin-left: -15%;"> AI News</a>
          </div>
        </a><a class="svgbox" href="/writer"  style="text-decoration: none;">
          
          <div style=" " :style="[roout == '/writer' ? {'height': '45px','width': '45px','border-radius': '50%','background-color': 'black','margin':'auto', 'padding': '0px'} : {'height': '35px','width': '35px','border-radius': '50%','background-color': 'black','margin':'auto',}]">
            <svg style="fill:white" :height="[roout == '/writer' ? 26 : 20]" :width="[roout == '/writer' ? 26 : 20]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>
            <br>
          <a href='/analysis' style="position: relative; text-decoration: none; color: #333; top:12px;font-size: 8px; font-weight: bold; width: 100%;display: block;"> Write</a>
          </div>
        </a> <a href='/analysis' class="svgbox"  style="text-decoration: none;">
          
          <div style="height: 35px;width: 35px;border-radius: 50%;background-color: #818dc5;margin:auto " :style="[roout == '/analysis' ? {'height': '45px','width': '45px','border-radius': '50%','margin':'auto', 'padding': '3px'} : {'height': '35px','width': '35px','border-radius': '50%','margin':'auto', 'padding' : '1px'}]">
            
            <svg :height="[roout == '/analysis' ? 24 : 18]" :width="[roout == '/analysis' ? 24 : 18]" style="fill: white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
<g id="XMLID_11_">
	<path id="XMLID_12_" d="M195,150c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S167.43,150,195,150z"/>
	<path id="XMLID_13_" d="M315,0H15C6.716,0,0,6.716,0,15v239.804c0,0.01,0,0.02,0,0.03V315c0,8.284,6.716,15,15,15h300   c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0z M300,209.636l-32.957-44.388c-2.829-3.811-7.296-6.058-12.043-6.058   s-9.214,2.247-12.043,6.058l-47.531,64.016l-78.093-112.802C114.531,112.415,109.922,110,105,110s-9.531,2.415-12.333,6.462   L30,206.981V30h270V209.636z"/>
</g>
</svg>
<br>
          <a href='/profile' style="position: relative; text-decoration: none; color: #333; top: 12px; font-size: 8px; font-weight: bold; width: 100%;display: block;; width: 130%; margin-left: -15%;">AI Image</a>
          </div>
        </a> <a href='/profile' style="text-decoration: none;" class="svgbox"  >
          
          <div style="height: 35px;width: 35px;border-radius: 50%;background-color: #ed8794;margin:auto " :style="[roout == '/profile' ? {'height': '45px','width': '45px','border-radius': '50%','margin':'auto', 'padding': '3px'} : {'height': '35px','width': '35px','border-radius': '50%','margin':'auto'}]">
           <svg style="fill: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320l-189.4 0z"/></svg>
<br>
          <a style="position: relative; text-decoration: none; color: #333; top: 12px; font-size: 8px; font-weight: bold; width: 100%;display: block;; width: 130%; margin-left: -15%;"> Profile</a>
          </div>
        </a>
    </div>
  </div>
    </div>
	<div style="height:60px"></div>
  </template>
  
  <script>
  // @ is an alias to /src
  import navbar from '@/components/Layouts/navbar.vue'
import { useRoute } from "vue-router";
  export default {
    name: 'HomeView',
    components: {
      navbar
    },
	data(){
		return{
			roout : null
		}
	},
	mounted(){
		var route = useRoute()
		this.roout = route.path
	}
    
  }
  </script>
  <style>
.svgbox{
  height: 50px;width: 25%;; border-radius: 25px;border: none; box-shadow: none; background-color: transparent;
}
.svgbox svg{
  margin: 7px
}
</style>