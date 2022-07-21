import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';

import v_menu from './ui/vMenu'
import vContainer from './ui/vContainer'
import vFooter from './ui/vFooter'

axios.defaults.baseURL = 'https://nasar.a-lux.dev'

const app = createApp(App)

app.use(store)

app.component('vMenu', v_menu)
app.component('vContainer', vContainer)
app.component('vFooter', vFooter)


app.config.globalProperties.axios = axios

app.use(store)
    .use(router, axios, vue3PhotoPreview)
    .mount('#app')