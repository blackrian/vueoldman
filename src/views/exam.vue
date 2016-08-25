<template>
    <h1>{{msg}}</h1>
    <button @click="gohome">点击回到首页</button>
</template>
<script>
    export default{
        data(){
            return{
                msg:'这是体检中心'
            }
        },
        methods:{
            gohome(){
                this.$route.router.go({name:'home'})
            }
        }
    }
</script>