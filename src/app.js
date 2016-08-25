/**
 * Created by Administrator on 2016/8/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router'
import app from './main'

Vue.config.debug=true;
//使用VueResource
Vue.use(VueResource);
Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'src/assets/data' : '/vueOldman/static/data'
Vue.http.options.emulateJSON = true
//使用vuerouter
Vue.use(VueRouter);
const router=new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
});
routeConfig(router);

router.start(app,"#app");

window.router=router;  //用来dubugging