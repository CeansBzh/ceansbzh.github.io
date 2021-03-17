import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Education from '/src/components/Education.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/formation',
    name: 'Formation',
    component: Education,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router