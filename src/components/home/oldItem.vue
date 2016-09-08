<template>
    <!--<div class="model-item">-->
        <!--<img class="item-iocn" src="../../../static/img/item1.png" alt="">-->
        <!--<h2>老年大学</h2>-->
        <!--<p>老年开放大学，教育养老，一颗养心。...老年旅行“国标”9月起实施。老年人旅游产品或将调整老年开放大学，教育养老，一颗养心。...老年旅行“国标”9月起实施。老年人旅游产品或将调整老年开放大学，教育养老，一颗养心。...老年旅行“国标”9月起实施。老年人旅游产品或将调整老年开放大学，教育养老，一颗养心。...老年旅行“国标”9月起实施。老年人旅游产品或将调整老年开放大学，教育养老，一颗养心。...老年旅行“国标”9月起实施。老年人旅游产品或将调整！</p>-->
    <!--</div>-->
    <div class="model-item" v-for="item in data">
        <img class="item-iocn" src="{{item.author.avatar_url}}" alt="">
        <h2>{{item.title}}</h2>
        <p>{{item.content | inText }}</p>
    </div>
</template>
<script type="text/babel">
    export default{
        props:['data']
    }
</script>
<style lang="sass" scoped>
.model-item{
    float: left;
width:370px; margin-left:30px;margin-bottom:70px; height:100px;
    img{float: left; width: 56px; height: 56px;}
    h2{margin-left: 75px; font-size: 16px; font-weight: 700;}
    p{ margin-left: 75px; font-size: 16px; height: 75px; display:-webkit-box !important;
        overflow:hidden;
        text-overflow:ellipsis;
        word-break:break-all;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;}
}
</style>