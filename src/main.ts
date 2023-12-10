import { createApp } from 'vue'
import './styles/global.scss'
import App from './App.vue'
import 'highlight.js/styles/vs2015.min.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import router from './router'

createApp(App)
.use(router)
.use(hljsVuePlugin)
.mount('#app')
