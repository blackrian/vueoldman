<template>
    <span class="drop-group">
        <a class="drop-btn" @click="toggle"><i :class="show ? 'asc':'dsc'" ></i>{{curName}}</a>
        <div class="drop-box drop-transition" v-show="show" transition="bounce">
            <div class="drop-item"  v-for="item in drop" @click="asdfb(item)">{{item.value}}</div>
        </div>
    </span>
</template>
<script type="text/babel">
    import {getDrop} from './../../vuex/actions'
    import {DropItem} from './../../vuex/getters'
    export default{
        data(){
            return{
                show:false,
                dval:1,
                drop:[
                    {
                        key:1,
                        value:'学习型'
                    },{
                        key:2,
                        value:'休闲型'
                    },{
                        key:3,
                        value:'养老型'
                    },{
                        key:4,
                        value:'娱乐型'
                    }
                ]
            }
        },
        vuex:{
            actions:{
            },
            getters:{
            }
        },
        computed:{
            curName(){
                let cname;
                this.drop.forEach((i)=>{
                    if (i.key==this.dval){
                        cname=i.value
                    }
                })
                return cname;
            }
        },
        methods:{
            asdfb(it){
                this.dval=it.key;
                this.show=false;
            },
            toggle(){
                this.show=!this.show
            }
        }

    }
</script>
<style>
    /* vue 过渡动画 */
    .bounce-transition {
        display: block; /* 否则 scale 动画不起作用 */
    }
    .bounce-enter {
        animation: bounce-in .5s;
    }
    .bounce-leave {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
    /* vue 过渡动画结束 */
    @keyframes hoverAnim {
        0%{
            background-color: #d6d6d6;
        }
        100%{
            background-color: #e9e9e9;
        }
    }
    .asc{
        position: absolute;
        display: inline-block;
        width: 10px;height: 8px;
        background:url("../../assets/img/asc.png") center no-repeat;
        right: 20px;
        top:calc((100% - 8px)/2);
    }
    .dsc{
        position: absolute;
        display: inline-block;
        width: 10px;height: 8px;
        background:url("../../assets/img/dsc.png") center no-repeat;
        right: 20px;
        top:calc((100% - 8px)/2);
    }
    .drop-group{
        position:relative;
        .drop-box{
            background: #d6d6d6;
            margin: 0 20px;
            box-shadow: 0 0 10px 1px #999;
            padding: 10px;
        }
        .drop-item{
            display: block;
            width: 100%;
            height: 34px;line-height: 24px;
            font-size: 14px;
            cursor: pointer;
            text-decoration: none;
            padding: 5px 10px;
            box-sizing: border-box;
        }
        .drop-item:hover{
            animation:hoverAnim 1s ease-out forwards;
        }
        a.drop-btn{
            display: block; width: 100%;
            font-size: 16px;
            line-height:44px;
            color: #999;
            text-decoration: none;
            position: relative;
            text-indent: 20px;
        }
    }
</style>