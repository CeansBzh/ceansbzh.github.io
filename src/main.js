import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

createApp(App).use(router).use(VueTippy, {
  directive: 'tippy', // => v-tippy
  component: 'tippy', // => <tippy/>
  componentSingleton: 'tippy-singleton', // => <tippy-singleton/>
  defaultProps: { placement: 'left' },
}).mount('#app')
