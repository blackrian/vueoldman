/**
 * Created by Administrator on 2016/8/26.
 */
import {GET_TOPICS_FAIL,GET_TOPICS_SUCCESS} from '../mutation-types'

// 初始状态
const state={
    topics:''
}
//状态变更
const mutations={
    [GET_TOPICS_SUCCESS](state,data){
        state.topics=data
    },
    [GET_TOPICS_FAIL](state,err){
        console.log(err);
    }
}
export default{
    state,mutations
}

