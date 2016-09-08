// /**
//  * Created by Administrator on 2016/8/28.
//  */
// //数据请求封装
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// import {API_ROOT} from '../config'
// // import { getCookie,signOut } from '../utils/authService'
//
// Vue.use(VueResource);
//
// //HTTP
//  Vue.http.options.emulateHTTP=true; //发送PUT, PATCH, DELETE请求时以HTTP POST的方式发送，并设置请求头的X-HTTP-Method-Override
// Vue.http.options.emulateJSON=true;   //将request body以application/x-www-form-urlencoded content type发送
// Vue.http.options.crossOrigin = true //跨域
// Vue.http.options.credientials=true;  //跨域请求是否需要凭证
//
// // Vue.http.interceptors.push((request, next) => {
// //     // ...
// //     // 请求发送前的处理逻辑
// //     // ...
// //     next((response) => {
// //         // ...
// //         // 请求发送后的处理逻辑
// //         // ...
// //         // 根据请求的状态，response参数会返回给successCallback或errorCallback
// //         return response
// //     })
// // })
//
// Vue.http.interceptors.push((request,next)=>{
//     //对请求体进行处理
//     request.headers=request.headers||{};
//     // if (getCookie('token')) {
//     //     request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
//     // }
//     next((response)=>{
//         // 这里可以对响应的结果进行处理
//         if (response.status === 401) {
//             // signOut()
//             // window.location.pathname = '/login'
//             console.log("请求成功")
//         }
//     })
// })
// export const ListResource=Vue.resource(API_ROOT+'topics');
// export default{
//     getTopics:(params)=>{
//         return Vue.resource(ListResource).get(params);
//     }
// }