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
        }

    })
    router.beforeEach(({to, from, next}) => {
        document.body.scrollTop = 0
        next()
    })

    router.afterEach(({to}) => {
    })
    // router.beforeEach(({to, from, next}) => {
    //     let toPath = to.path
    //     let fromPath = from.path
    //     console.log(`to: ${toPath} from: ${fromPath}`)
    //     if (toPath.replace(/[^/]/g, '').length > 1) {
    //         router.app.isIndex = false
    //     }
    //     else {
    //         let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
    //         router.app.isIndex = depath ? 0 : 1
    //     }
    //     next()
    // })
    //
    // router.afterEach(function ({to}) {
    //     console.log(`成功浏览到: ${to.path}`)
    //     // $.refreshScroller()
    // })
}