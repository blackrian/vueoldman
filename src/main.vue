<template>
    <div class="page">
        <nav-bar>
            <nav-bar-item path="/home" label="老年大学" nav-e="AGE UNIVERSIT" class="active"></nav-bar-item>
            <nav-bar-item path="/exam" label="体检中心" nav-e="PHYSICAL CENTERS"></nav-bar-item>
            <nav-bar-item path="/health" label="中医养生" nav-e="TCM"></nav-bar-item>
            <nav-bar-item path="/travel" label="旅游" nav-e="TOUTISM"></nav-bar-item>
            <nav-bar-item path="/contact" label="联系方式" nav-e="ABOUT US"></nav-bar-item>
            <nav-bar-item path="/joinUs" label="加盟我们" nav-e="JOIN US"></nav-bar-item>
        </nav-bar>
        <router-view></router-view>
        <!--keep-alive  保持一个链接通信，减少渲染次数。目前遇到问题， 数据缓存在内存中，无法刷新数据。-->
        <copy-right></copy-right>
    </div>
</template>
<script>
    import './assets/css/base.css'
    import './assets/sass/main.scss'
    import NavBar from './components/nav/navbar.vue'
    import NavBarItem from './components/nav/navbarItem.vue'
    import CopyRight from './components/copyright.vue'
    import store from './vuex/store'
    export default{
        data(){
            return{
//                isIndex:true
            }
        },
        store,
        components:{
            NavBar,NavBarItem,CopyRight
        },

    }
</script>