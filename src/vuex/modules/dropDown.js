/**
 * Created by Administrator on 2016/9/11.
 */
import { GET_DROP_VAL } from '../mutation-types'

const state={
    //分组值
    dropGroup:'1',
    // 分组项
    dropGroupItem:[
        {
            key:1,
            value:'学习型'
        },{
            key:2,
            value:'休闲型'
        },{
            key:3,
            value:'养老型'
        },{
            key:4,
            value:'娱乐型'
        }
    ]
}
const mutations={
    [GET_DROP_VAL](state,dropGroup){
        state.dropGroupItem
    }
}
export default{
    state,mutations
}
