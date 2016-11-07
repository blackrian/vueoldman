/**
 * Created by Administrator on 2016/8/29.
 */
// import { getTopics } from './resource'
// export default{
//
//     getListResource:getTopics
// }
'use strict'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const baseUrl = 'http://cnodejs.org/api/v1/'
const jsonUrl='../static/data/img.json'
const jsonQs='../static/data/question.json'
// http://cnodejs.org/api/v1/topic/
// http://cnodejs.org/api/v1/topic/
export default{
    getTopics:(params)=>{
        return Vue.resource(baseUrl + 'topics').get(params);
    },
    getContent:(id)=>{
        return Vue.resource(baseUrl+'topic'+'/'+id);
    },
    getHealth:()=>{
        return Vue.resource(jsonUrl).get();
    },
    getQeustion:()=>{
        return Vue.resource(jsonQs).get();
    }
}