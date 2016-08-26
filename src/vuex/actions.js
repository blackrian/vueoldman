/**
 * Created by Administrator on 2016/8/26.
 */

// function makeAction(type) {
//     return({dispatch},...args)=>dispatch(type,...args)
// }
export const getListItem=({dispatch})=>{
    //Vue.http.get(url, { req: 'req body' }).then((res) => {
        //     // 正常返回, 别忘了处理错误
        //     dispatch(REFRESH_DATA, res.data)
        // }, (err) => {
        //     alert(err.message)
        // })
    Vue.http.get('data_list.json').then((response)=>{
        dispatch('GET_LISTITEM',response.data)
    },(err)=>{
        console.log(err);
    })
}