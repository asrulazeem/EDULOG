import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Week from '../views/Week.vue'
import Form from '../views/Form.vue'
import ClassesInfo from '../views/ClassesInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classes',
    name: 'Classes',
    component: () => import('../views/Classes.vue')
  },
  {
    path: '/logbook',
    name: 'Logbook',
    component: () => import('../views/Logbook.vue')
  },
  {
    path: '/week/:weekNumber',
    name: 'Week',
    component: Week
  },
  {
    path: '/form/:day',
    name: 'form',
    component: Form
  },
  {
    path: '/classes-info/:index',
    name: 'classes-info',
    component: ClassesInfo,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
