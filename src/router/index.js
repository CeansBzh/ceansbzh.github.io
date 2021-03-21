import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Education from '/src/components/Education.vue'
import Projects from '/src/components/Projects.vue'
import Experiences from '/src/components/Experiences.vue'

const routes = [
  {
    path: '/', component: Home,
    children: [
      { path: 'formation', name: 'formation', component: Education, alias: '/formation' },
      { path: 'projets', name: 'projets', component: Projects, alias: '/projets' },
      { path: 'experiences', name: 'experiences', component: Experiences, alias: '/experiences' }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router