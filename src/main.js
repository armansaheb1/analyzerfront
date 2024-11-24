import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';


axios.defaults.baseURL = 'http://217.69.3.68/api/v1/'

createApp(App).use(store).use(router).use( CkeditorPlugin ).mount('#app')
