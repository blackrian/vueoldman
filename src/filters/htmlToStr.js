/**
 * Created by Administrator on 2016/9/8.
 */
import $ from 'jquery'
module.exports=function (str) {
    var result='';
    result=$(str).text();
    return result;
}