<template>
    <div class="imghead"></div>
    <div class="home-one">
        <div class="model-main">
            <div class="model-list">
                <div class="model-title">
                    <h3>社区居家养老</h3>
                    <p>已社区服务中心为依托，整合社区内各种服务资源，为老人提供家政，医疗，休闲，娱乐等服务</p>
                </div>
                <div class="model-box">
                    <old-item :data="topics.data"></old-item>
                </div>
            </div>
            <div class="model-form">
                <join-form></join-form>
            </div>
        </div>
    </div>
    <div class="old-school">

    </div>
</template>
<script type="text/babel">
    import oldItem from '../components/home/oldItem.vue'
    import joinForm from '../components/home/joinForm.vue'
    import { getTopics } from '../vuex/actions'
    import { Topics } from '../vuex/getters'
    export default{
        vuex:{
            getters:{
                topics:Topics
            },
            actions:{
                getTopics
            }
        },
        components:{
            oldItem,joinForm
        },
        ready(){
            let params={
//                page:1,
//                tab:'all',
                limit:4
            }
            this.getTopics(params)
        }
    }
</script>
<style lang="sass" scoped>
.imghead{
    height: 500px;
    background:url("../assets/img/pensioner.png") center;
    background-size: cover;
    min-width: 1170px;
}
.home-one{ background: #f7f7f7; height: 510px; position: relative;}
    .model-main{ width: 1170px; background: #fff;
        position: absolute;
        top: -80px;left: calc((100% - 1170px)/2); height: 500px;}
    .model-title{
    margin:20px 30px;
        h3{ font-size: 26px; font-family: "Microsoft Yahei"}
        p{ font-size: 16px; font-family:'simsun'}
    }
.model-list{ float: left; width: 810px;}
    .model-form{ float: left; background: #8ccdbe; width: 360px; height: 500px;}
</style>