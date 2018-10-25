import Vue from "vue"
//导入vuex模块
import Vuex from 'vuex';
//导入状态
//state
import state from './state'
Vue.use(Vuex)
//配置vuex
const store = new Vuex.Store({
    //共享状态:类似data
    state,
//     //类似组建中的computed,依赖state
//     getters,
//     //修改状态的方法:类似组件methods
//     //处理同步操作.....action处理异步操作
//     mutations,
//     /*
//   Action 类似于 mutation，不同在于,类似store对象：
//   Action 提交的是 mutation，而不是直接变更状态。
//   Action 可以包含任意异步操作。
//     */
//     actions
  })
  // alert(store.state.count)
  export default store
  