import Vue from 'vue'
import Router from 'vue-router'
// import footGuide from '../components/footer/footGuide.vue'
import Profile from '../page/profile/profile.vue' 
import Search from '../page/search/search.vue'
import Balance from "../page/balance/balance.vue"
import Detailbalance from "../page/balance/children/detail.vue"
import Points from "../page/points/points.vue"
import Detailpoints from "../page/points/children/detail.vue"
import Login from "../page/login/login.vue"
import Info from "../page/profile/children/info.vue"
import home from '../page/home/Home-app'
import City from '../page/city/city'
import Forget from '../page/forget/forget'
import Msite from '../page/msite/Msite'
import shopsDange from '@/components/shop/children/shopsDange'
import shopdetail from '@/components/shop/children/shopdetail'
import Setusername from "../page/profile/children/setusername.vue"
import Chooseaddress from "../page/confirmOrder/children/chooseAddress.vue"
import Addaddress from "../page/confirmOrder/children/children/addAddress.vue"
import Searchaddress from "../page/confirmOrder/children/children/children/searchAddress.vue"
import Order from "../page/order/order"
import Vipcard from "../page/vipcard/vipcard.vue"
import Payment from "../page/confirmOrder/children/payment.vue"
import Benefit from "../page/benefit/beneit"
import Foot from "../page/foot/foot"
import hbDescription from "../page/benefit/children/hbDescription"
import hbHistory from "../page/benefit/children/hbHistory"
import Exchange from "../page/benefit/children/exchange"
import Commend from "../page/benefit/children/commend"
import Download from "../page/download/download"
import Coupon from "../page/benefit/children/coupon"
import Service from  "../page/service/service"
import Invoice from "../components/shop/children/invoice"
import Remark from "../components/shop/children/remark"
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
      path:'/msite/:id?',
      name:"msite",
      component:Msite
    },
    {
      path:'/order',
      name:"order",
      component:Order
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
      name:"search",
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
    },
    {
      path: '/shopsLiebiao/:id?',
      name: 'shopsDange',
      component: shopsDange
    },
    {
      path:"/profile/info/setusername",
      component:Setusername
    },
    {
      path:"/profile/info/address",
      component:Chooseaddress
    },
    {
      path:"/profile/info/address/add",
      component:Addaddress
    },
    {
      path:"/profile/info/address/add/addDetail",
      component:Searchaddress
    },
    {
      path:"/vipcard",
      component:Vipcard
    },
    {
      //付款路由
      path:"/confirmOrder/payment",
      component:Payment},
     { path: '/shopsLiebiao/shopdetail',
      name:"shopdetail",
      component: shopdetail
    },
    {
      path:'/benefit',
      component:Benefit
    },
    //foot
    {
      path:'/foot',
      name:"foot",
      component:Foot
    },  
    {
      path:'/benefit/hbDescription',
      component:hbDescription
    },
    {
      path:"/benefit/hbHistory",
      component:hbHistory
    },
    {
      path:"/benefit/exchange",
      component:Exchange
    },{
    path:"/benefit/commend",
      component:Commend
    },
    {
      path:"/download",
      component:Download
    },
    {
      path:"/benefit/coupon",
      component:Coupon
    },
    {
      path:"/service",
      component:Service
    },
    //发票页
    {
      path:"/invoice",
      name:"invoice",
      component:Invoice
    },
    //备注页
    {
      path:"/remark",
      name:"remark",
      component:Remark
    },
  ]
})
