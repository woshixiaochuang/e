// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import VueAxios from "vue-axios";
import VueTouch from 'vue-touch';
//引入vuex封装模块
import store from "./store";
import $ from "jquery";
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAxios,axios);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
