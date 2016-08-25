<template>
    <div class="page">
        <nav-bar v-if="isIndex">
            <nav-bar-item path="/home" label="老年大学" nav-e="AGE UNIVERSIT" class="active"></nav-bar-item>
            <nav-bar-item path="/exam" label="体检中心" nav-e="PHYSICAL CENTERS"></nav-bar-item>
            <nav-bar-item path="/health" label="中医养生" nav-e="TCM"></nav-bar-item>
            <nav-bar-item path="/travel" label="旅游" nav-e="TOUTISM"></nav-bar-item>
            <nav-bar-item path="/contact" label="联系方式" nav-e="ABOUT US"></nav-bar-item>
            <nav-bar-item path="/joinUs" label="加盟我们" nav-e="JOIN US"></nav-bar-item>
        </nav-bar>
        <router-view></router-view>
        <copy-right></copy-right>
    </div>
</template>
<script>
    import NavBar from './components/nav/navbar.vue'
    import NavBarItem from './components/nav/navbarItem.vue'
    import CopyRight from './components/copyright.vue'
    export default{
        data(){
            return{
                isIndex:true
            }
        },
        components:{
            NavBar,NavBarItem,CopyRight
        },

    }
</script>
<style>
@import './assets/css/base.css';
</style>