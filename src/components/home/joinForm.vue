<template>
    <div class="join-main">
        <h2 class="join-title">欢迎您的加入</h2>
        <p class="join-info">在这里您将遇见更多志同道合的朋友</p>
        <ul>
            <li class="form-input-item"><drop></drop></li>
            <li class="form-input-item"><input type="text" class="ipt-txt" placeholder="姓名"></li>
            <li class="form-input-item"><input type="text" class="ipt-txt" placeholder="手机号"></li>
        </ul>
        <a class="btn-join">开始报名</a>
    </div>
</template>
<script type="text/babel">
    import Drop from './selectDrop.vue'
    export default{
        components:{
            Drop
        }
    }
</script>
<style>
    .join-title{
        font-size: 26px; color: #fff; text-indent: 1.5em;
        margin-top:30px; font-family: "Microsoft Yahei";
    }
    .join-info{
        color: #fff;
        font-size:16px;
        text-indent: 2em;
        margin-bottom:30px;
        font-family: "Microsoft Yahei";
    }
    .join-main{
        a.btn-join{
            display: block;
            width: 200px;
            height: 46px;
            line-height: 46px;
            text-align: center;
            background: #fff;
            outline: none;
            text-decoration: none;
            cursor: pointer;
            border-radius: 24px;
            margin:35px auto;
            font-size: 16px;
            color: #8ccdbe;
            font-weight: 700;
        }
        a.btn-join:hover{
            color: #439884;
            background-color: #e4e5e5;
        }
    }

.form-input-item{
    width: 300px;
    background: #fff;
    margin-bottom: 20px;
    border-radius:25px;
    margin-right: auto;
    margin-left: auto;
    height:44px;
    .ipt-txt{
        height: 24px;margin: 10px auto;
        width: 100%;
        border:0px;
        background: transparent;
        outline: none;
        padding:0 20px;
        box-sizing: border-box;
        font-size: 16px;
        color: #999;
    }
}
</style>