/**
 * Created by Administrator on 2016/10/25.
 */
import {GET_HEALTH} from '../mutation-types'
import {GET_QUESTION} from '../mutation-types'
const state={
    list:'',
    question:''

}
const mutations={
    [GET_HEALTH](state,data){
        state.list=data
    },
    [GET_QUESTION](state,data){
        state.question=data
    }
}
export default{
    state,mutations
}