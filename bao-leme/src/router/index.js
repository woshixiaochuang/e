import Vue from 'vue'
import Router from 'vue-router'
import footGuide from '../components/footer/footGuide.vue'
import Profile from '../page/profile/profile.vue' 
import Search from '../page/search/search.vue'
import Balance from "../page/balance/balance.vue"
import Detailbalance from "../page/balance/children/detail.vue"
import Points from "../page/points/points.vue"
import Detailpoints from "../page/points/children/detail.vue"
import Login from "../page/login/login.vue"
import Info from "../page/profile/children/info.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",
    component:footGuide  
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/balance",
      component:Balance
    },
    {
      path:"/balance/detail",
      component:Detailbalance
    },
    {
      path:"/points",
      component:Points
    },
    {
      path:"/points/detail",
      component:Detailpoints
    },
    {
      path:"/profile/info",
      component:Info
    }
  ]
})
