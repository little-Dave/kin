import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Kin from './components/Kin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/login", component: Login},
    { path: "/kin", component: Kin}
  ]
})
