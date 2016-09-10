/**
 * Created by Administrator on 2016/8/26.
 */
import api from '../api/home'
import * as types from './mutation-types.js'

export const getTopics=({dispatch},params)=>{
    api.getTopics(params).then(response=>{
        // console.log(response.data);
        dispatch(types.GET_TOPICS_SUCCESS,response.data);
    },err=>{
        // console.log(err);
        dispatch(types.GET_TOPICS_FAIL,err);
    })
}
export const getContent=({dispatch},id)=>{
    api.getContent(id).get().then(response=>{
        dispatch(types.GET_CONTENT,response.data);
    },err=>{
        console.log(err);
    })
}

