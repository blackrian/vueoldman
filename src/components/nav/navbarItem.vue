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
<style>
    .navItem{
        float: left;
        font-size: 16px;
        width:140px;
        text-align: center;
        a{color: #434343; text-decoration: none; display: block;position: relative}
        span{ display: block;
            font-size: 8px;
            font-family: Arial;
            color: #686868;

        }
    }
    .navhover.active::before{display:block;content: ""; width: 8px; height: 8px;border-radius: 50%; background-color: #8ccdbe; position: absolute; left: calc(50% - 4px); top: -10px;}
</style>