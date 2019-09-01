import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/portfolio/:catIdName/:id',
      name: 'portfolioitems',
      component: () => import('./views/portf.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
    		return savedPosition
    	} else {
      return { x: 0, y: 0 }
    }
  }
})
