/**
 * Created by Administrator on 2016/9/10.
 */
// import {GET_CONTENT} from '../mutation-types'
// const state={
//     content:''
// }
// const mutations={
//     [GET_CONTENT](state,data){
//         state.content=data;
//     }
// }
// export default{
//     state,mutations
// }
import {GET_CONTENT} from '../mutation-types'

// 初始状态
const state={
    content:''
}
//状态变更
const mutations={
    [GET_CONTENT](state,data){
        state.content=data
    }
}
export default{
    state,mutations
}

