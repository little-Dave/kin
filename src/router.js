import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Kin from './views/Kin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Login},
    { path: "/kin", component: Kin}
  ]
})
