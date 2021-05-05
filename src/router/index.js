import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Exam from '../views/Exam.vue'
import ExamInner from '../views/ExamInner.vue'
import AdminLogin from '../views/admin/Login.vue'
import AdminExams from '../views/admin/Exams.vue'
import JudgeDetail from '../views/admin/JudgeDetail.vue'
import JudgeList from '../views/admin/JudgeList.vue'

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
  {
    path: '/admin/login',
    name : 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/exams',
    name : 'AdminExmas',
    component: AdminExams
  },
  {
    path: '/admin/judgelist/:id',
    name : 'JudgeList',
    component: JudgeList
  },
  {
    path: '/admin/judgedetail',
    name : 'JudgeDetail',
    component: JudgeDetail
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
