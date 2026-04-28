import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Cart from '../views/Cart.vue'
import ThankYou from '../views/ThankYou.vue'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/cart', component: Cart },
  { path: '/thank-you', component: ThankYou },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router