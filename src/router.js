import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "signup" */ './views/Signup.vue')
    },
    {
      path: '/articles/create',
      name: 'createarticle',
      component: () => import(/* webpackChunkName: "createarticle" */ './views/CreateArticle.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ './views/Article.vue')
    }
    
  ]
})
