/**
 * Created by Administrator on 2016/8/19.
 */
//action 收到store 作为它的第一个参数
/// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
// export const names=function ({dispatch}, state) {
//     dispatch('变更函数名称',state)
// }