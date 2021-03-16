import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTailwind from 'vue-tailwind'
import VueTailwindSettings from './vue-tailwind.settings.js';
import './index.css'

createApp(App).use(router).use(VueTailwind, VueTailwindSettings).mount('#app')
