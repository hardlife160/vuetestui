import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '图书管理',
    component: Index,
    show: true,
    redirect:"/bookManage",
    children: [
      {
        path: '/bookManage',
        name: '查询图书',
        component: () => import(/* webpackChunkName: "about" */ '../views/BookManage.vue')
      },
      {
        path: '/AddBook',
        name: '添加图书',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddBook.vue')
      }
    ]
  },
  {
    path: '/bookUpdate',
    name: '更新图书',
    show: false,
    component: () => import(/* webpackChunkName: "about" */ '../views/BookUpdate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
