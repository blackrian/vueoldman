<style lang="sass" scoped>
    nav{width: 1170px; margin: 0 auto;
        ul{ margin-top: 25px;}
    }
.logo{
cursor: pointer;
display: inline-block;
width: 63px;
height: 59px;
    margin-top: 15px;
}
.logo::before{
content: "";
    display: block;
width: 63px;height: 59px;
background: url("../../assets/img/logo.png");

}
</style>
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
