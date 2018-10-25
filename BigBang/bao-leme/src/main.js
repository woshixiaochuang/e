// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vue-awesome-swiper模块
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入vuex封装模块
import store from "./store"

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper, /* { default global options } */);
// Vue.use(ElementUI);
// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  data:{
    Bus:new Vue()
  },
})
