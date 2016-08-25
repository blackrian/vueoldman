/**
 * Created by Administrator on 2016/8/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
    //放置初始状态
    list:{
        img:'',
        title:'',
        content:''
    }
}
const mutations={
    //放置状态变更的函数 
}
export default new  Vuex.store({
  state,
    mutations,
    strict:true
})