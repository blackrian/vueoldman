<template>
        <li class="navItem">
            <a v-link="{path: path,activeClass:'active',replace:true}" v-text="label" class="navhover"></a>
            <span v-text="navE"></span>
        </li>
</template>
<script>
    export default{
        props:{
            path:'',
            label:'',
            navE:''
        }
    }
</script>