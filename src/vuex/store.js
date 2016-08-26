/**
 * Created by Administrator on 2016/8/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'

Vue.use(Vuex)
export default{
    //组合各个模块
    modules:{
        index
    }
}