/**
 * Created by Administrator on 2016/8/19.
 */
export default function (router) {
    router.map({
        "*":{
            component(resolve){
                require(['./main'],resolve);
            }
        }
    })
}