import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import InputTransaksi from '../components/InputTransaksi.vue'
import ListTransaksi from '../components/ListTransaksi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView,
    children:[
      {
        path: 'input-transaksi',
        name: 'inputTransaksi',
        component: InputTransaksi
      },
      {
        path: 'list-transaksi',
        name: 'listTransaksi',
        component: ListTransaksi
      },
    ]
  },
  {
    path: '/signin',
    name: 'signIn',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
