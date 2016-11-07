/**
 * Created by Administrator on 2016/8/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './router'
import VueValidator from 'vue-validator'
import app from './main'

Vue.config.debug=true;

//使用VueResource
// Vue.use(VueResource);
// Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'src/assets/data' : '/vueOldman/static/data'
// Vue.http.options.emulateJSON = true
// filters
Vue.filter('inText',require('./filters/htmlToStr'));
//使用表单验证插件
Vue.use(VueValidator);
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