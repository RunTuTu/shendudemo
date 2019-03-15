import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home/Home'
import TopBottom from '../components/Home/TopBottom'
import MeStudent from '../components/Home/MeStudent'
import Search from '../components/Search/Search'
import Employment from '../components/Employment/Employment'
import Me from '../components/Me/Me'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path : '',
      redirect : '/home'
    },
    {
      path: '/home',
      name: 'home',
      component :Home
    },
    {
      path: '/search',
      name: 'search',
      component:Search 
    },
    {
      path: '/employment',
      name: 'employment',
      component:Employment 
    },
    {
      path: '/me',
      name: 'me',
      component:Me 
    },
    {
      path: '/topbottom',
      name: 'topbottom',
      component:TopBottom 
    },
    {
      path: '/mestudent',
      name: 'mestudent',
      component:MeStudent 
    },
  ],
  mode:"history"
})
