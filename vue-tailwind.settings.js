import {
  TInput,
  // ...Rest of the components
} from 'vue-tailwind/dist/components';

const MySettings = {
  't-input': {
    component: TInput,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  },
  // ...Rest of the components
}

// You can import these settings in your installation file:
// import MySettings from './MySettings.js';
// Vue.use(VueTailwind, MySettings)