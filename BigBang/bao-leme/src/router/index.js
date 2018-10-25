import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home-app'
import Login from '../components/login'
import City from '../components/city'
import Forget from '../components/forget'
import Msite from '../components/Msite'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },{
      path:"/home",
      name:"app",
      component:home
    },{
      path:'/login',
      name:"login",
      component:Login
    },{
      path:'/city',
      name:"city",
      component:City
    },{
      path:'/forget',
      name:"forget",
      component:Forget
    },{
      path:'/city/:id',
      component:City
    },{
      path:'/msite',
      name:"msite",
      component:Msite
    }
  ]
})
