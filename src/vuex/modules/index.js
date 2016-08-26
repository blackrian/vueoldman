/**
 * Created by Administrator on 2016/8/26.
 */
import {GET_LISTITEM} from '../mutation-types'

// 初始状态
const state={
    Item:{
        id:"1",
        title:'老年大学',
        content:'这是一个老年大学的内容',
        imgUlr:'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png'
    },
    list:[Item]
}
const mutations={
    [GET_LISTITEM](state,item){
        state.Item=item;
    }
}
export default{
    state,mutations
}