/**
 * Created by Administrator on 2016/9/9.
 */
/** 把带html标签的转换为 文本*/
import $ from 'jquery'
module.exports=function (str) {
    var result='';
    // debugger;
    let vm=this.$el;
    result=$(vm).html(str);
    return result;
}