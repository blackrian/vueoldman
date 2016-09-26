<template>
    <h2 class="join-us-title">加入我们</h2>
    <ul>
        <li class="form-input-item join-item"><input class="ipt-txt" type="text" placeholder="姓名"></li>
        <li class="form-input-item join-item"><input class="ipt-txt" type="text" placeholder="公司"></li>
        <li class="form-input-item join-item"><input class="ipt-txt" type="text" placeholder="手机号"></li>
        <li class="form-input-item join-item"><input class="ipt-txt" type="text" placeholder="邮箱"></li>
        <li class="form-input-item join-item join-area"><textarea class="txt-area" placeholder="留言"></textarea></li>
    </ul>
    <a class="submit-info">提交信息</a>
</template>
<script>
    export default{

    }
</script>
<style>
.join-us-title{text-align: center; font-size: 35px; color: #fff; margin: 30px auto;}
    .join-item{
        width:590px;}
    a.submit-info{
        display: block; width: 186px; text-align: center; height: 50px; line-height: 50px; color: #fff; font-size: 20px; background-color: #8ccdbe; margin: 50px auto;
        border-radius: 25px; text-decoration: none;
        cursor: pointer;
    }
a.submit-info:hover{ text-decoration: none;background-color: #6fb6a6;}
    .txt-area{
         height: 100%; width: 100%; box-sizing: border-box;padding:10px 15px; font-size: 16px; outline: none; resize: none; color: #999; border: 0;
    }
    .join-area{ height: 100px; border-radius: 15px; overflow: hidden;}
</style>