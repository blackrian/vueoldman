/**
 * Created by Administrator on 2016/8/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import topics from './modules/index'

Vue.use(Vuex)
export default new Vuex.Store({
    //组合各个模块
    modules:{
        topics
    }
})