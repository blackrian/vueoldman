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
                    <old-item :data="topics.data" ></old-item>
                </div>
            </div>
            <div class="model-form">
                <join-form></join-form>
            </div>
        </div>
    </div>
    <div class="old-school fn-clear">
        <div class="school-head">
            <img src="../assets/img/school.png" alt="">
            <h2>老年大学</h2>
        </div>
        <div class="school-box fn-clear">
            <div class="school-item" v-for="item in topics.data" :style="{'background-image': 'url('+ item.author.avatar_url +')'}">
                <!--<i class="school-icon" :style="{'background-image': 'url('+ lists.imgurl[$index] +')'}"></i>-->
                <h3>舞蹈</h3>
            </div>
        </div>
    </div>
    <div class="picwall">
        <h3>合作安排专业教室定期授课</h3>
        <p>开始的课目都与健康和玩乐有关，充分照顾老年人的身心健康，大大提高了老年人万年的生活质量。</p>
        <div class="picwall-box">
            <div class="picwall-item" v-for="item in imgs">
                <img :src="item.imgurl" >
            </div>
        </div>
    </div>
    <div class="exam-center">
        <div class="school-head">
            <img src="../assets/img/hospital.png" :style="{'width':'56px','height':'46px'}" alt="">
            <h2>体检中心</h2>
            <p>康体中心在为社区老人提供便利的同时，面向社会老人提供全面的体检和护理服务.</p>
        </div>
        <div class="exam-box fn-clear">
            <div class="exam-item" v-for="exam in exams">
                <img :src="exam.imgurl">
                <h3>{{exam.title}}</h3>
                <p>{{exam.desc}}</p>
            </div>
        </div>
    </div>
    <div class="good-health">
        <img src="../assets/img/old_03.png" class="health-tip" alt="">
        <div class="health-box fn-clear">
            <health-item></health-item>
        </div>
    </div>
    <div class="tour">
        <div class="contact-head">
            <img src="../assets/img/oldtour.png" :style="{'width':'54px','height':'44px'}" alt="">
            <h2>老年旅游</h2>
            <p>旅游中心充分利用崇明岛丰厚的旅游资源，吸引老人及其家属利用节假日来此地养生休息。人群的涌入为中兴镇乃至崇明岛带来勃勃生机。</p>
        </div>
        <div class="tour-map">
            <img src="../assets/img/map.png" alt="">
        </div>
        <div class="tour-show">
            <div class="tour-public">
                <p>在天热氧吧中畅游<br>领略大好崇明风光</p>
            </div>

        </div>
    </div>
    <div class="contact">
        <contact-way></contact-way>
    </div>
    <div class="join-main">
        <join-us></join-us>
    </div>

</template>
<script type="text/babel">
    import oldItem from '../components/home/oldItem.vue'
    import joinForm from '../components/home/joinForm.vue'
    import joinUs from '../components/home/joinUs.vue'
    import contactWay from '../components/home/contactWay.vue'
    import healthItem from '../components/home/health.vue'
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
        data(){
            return{
                lists:[
                    {imgurl:'../assets/icon/icon_book.png"'},
                    {imgurl:'../assets/icon/icon_computed.png'},
                    {imgurl:'../assets/icon/icon_read.png'},
                    {imgurl:'../assets/icon/icon_music.png'}
                ],
                imgs:[
                    {imgurl:'./../src/assets/img/wall-01.png'},
                    {imgurl:'./../src/assets/img/wall-02.png'},
                    {imgurl:'./../src/assets/img/wall-03.png'},
                    {imgurl:'./../src/assets/img/wall-04.png'},
                    {imgurl:'./../src/assets/img/wall-05.png'},
                    {imgurl:'./../src/assets/img/wall-06.png'},
                ],
                exams:[
                    {imgurl:'./../src/assets/img/exam-01.png',title:"护理床位",desc:'这是简洁的内容描述'},
                    {imgurl:'./../src/assets/img/exam-02.png',title:"专业理疗室",desc:'这是简洁的内容描述'},
                    {imgurl:'./../src/assets/img/exam-03.png',title:"化验室",desc:'这是简洁的内容描述'},
                ],
            }
        },
        computed:{
        },
        components:{
            oldItem,joinForm,joinUs,contactWay,healthItem
        },
        ready(){
            let params={
//                page:1,
//                tab:'all',
                limit:5
            }
            this.getTopics(params)
        },

        methods:{
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
    .old-school{
        width: 1170px;
        margin: 0 auto 60px;
    }
    .school-head{
        img{ width: 44px;height: 57px;
            display: block;
            margin:60px auto 30px;}
        h2{font-size: 35px;
            text-align: center; font-family: "Microsoft Yahei";
            color: #434343;
            margin-bottom:40px;}
        p{ text-align: center;
            font-size:16px;}
    }
.school-item{
    width:270px;height:180px; background-size:cover; float:left;margin-right:20px; margin-bottom:20px;
    h3{width: 100%;height: 100%; font-size: 22px; text-align: center;
        position: relative;z-index: 2;  line-height: 200px; color: #fff; font-weight: 500}
    h3:before{ background: #000;opacity: 0.6;content: " ";width: 100%; height: 100%; display: block;
        position: absolute;z-index: -1;
        top:0;}
    .school-icon{
        display: block;
        width:50px;
        height:50px;
    }
}
.school-item:first-child{
    width: 570px;height: 380px;
}
    .picwall{  background: url("../assets/img/bg_picwall.png") center no-repeat;
        height: 674px;
        h3{color: #fff; font-size: 35px; text-align: center;
            padding-top:60px; margin-bottom: 10px;}
        p{ color: #fff; text-align: center; font-size: 16px;}
    }
.picwall-box{ overflow: hidden; height: 380px; margin-top: 70px;}
.picwall-item{float: left; margin-right: 10px;}
.exam-center{ background-color: #f7f7f7; height: 730px; overflow: hidden;}
    .exam-box{ width: 1170px; margin: 50px auto auto;}
    .exam-item{ float: left; margin-right: 20px;padding-bottom:30px; background-color:#fff;
        h3{color:#666;font-size: 18px; padding:5px 10px; font-weight: 700;}
        p{ font-size: 14px; color: #666; padding: 0 10px;}
    }
.join-main{ background: url("../assets/img/joinbg.png") center no-repeat; background-size: cover; height: 680px;  overflow: hidden;}
    .contact{ height: 700px;}
    .tour{ background-color: #f7f7f7; overflow: hidden;}
    .tour-map{ height: 400px; background-color: #f7f7f7; width: 1170px; margin: 0 auto;}
.tour-show{ height: 500px; background: url("../assets/img/bg_oldtour.png") center no-repeat; background-size: cover;
    .tour-public{ width: 1170px; margin: 0 auto;
        p{ width: 330px; font-size: 38px; color: #fff;
            font-family:"Microsoft Yahei";
            padding-top:175px;
            margin-left:45px;
        }
    }
}
.good-health{}
.health-tip{ width: 1170px; margin: 0 auto; display: block;}
    .health-box{ width: 1170px; margin: 20px auto 50px; height: 380px; overflow: hidden;}


</style>