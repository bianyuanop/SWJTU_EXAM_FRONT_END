import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Exam from '../views/Exam.vue'
import ExamInner from '../views/ExamInner.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name : 'Login',
    component: Login
  },
  {
    path: '/register',
    name : 'Register',
    component: Register
  },
  {
    path: '/exams',
    name : 'Exams',
    component: Exam
  },
  {
    path: '/exam/:id',
    name : 'Exam',
    component: ExamInner
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
