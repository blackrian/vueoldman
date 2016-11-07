/**
 * Created by Administrator on 2016/8/19.
 */
export default function (router) {
    router.map({
        "*":{
            component(resolve){
                require(['./views/home'],resolve);
            }
        },
        "/":{
            component(resolve){
                require(['./views/home'],resolve);
            }
        },
        "/home":{
            name:"home",
            component(resolve){
                require(['./views/home'],resolve)
            }
        },
        "/exam":{
            name:'exam',
            component(resolve){
                require(['./views/exam'],resolve)
            }
        },
        "/health":{
            name:'health',
            component(resolve){
                require(['./views/health'],resolve)
            }
        },
        "/travel":{
            name:'travel',
            component(resolve){
                require(['./views/travel'],resolve)
            }
        },
        "/contact":{
            name:'contact',
            component(resolve){
                require(['./views/contact'],resolve)
            }
        },
        "/joinUs":{
            name:'joinus',
            component(resolve){
                require(['./views/joinUs'],resolve)
            }
        },
        "/detail/:id":{
            name:"detail",
            component(resolve){
                require(['./views/detail'],resolve)
            }
        }

    })
    router.beforeEach(({to, from, next}) => {
        document.body.scrollTop = 0
        next()
    })

    router.afterEach(({to}) => {
    })
    //重定向路由
    router.redirect({
        '/':'/home'
    })
}