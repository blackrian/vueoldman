<template>
    <nav>
        <a @click="gohome" class="logo"></a>
        <ul class="fn-right">
            <slot>没有内容则显示我</slot>
        </ul>
    </nav>
</template>
<script>
    export default{
        methods:{
            gohome(){
                this.$route.router.go('home')
            }
        }
    }
</script>
