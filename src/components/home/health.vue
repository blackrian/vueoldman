<template>
    <div class="health-item" v-for="(index,health) in healths"  @click="ms(index)">
        <img :src="health.imgurl" alt="">
        <div class="health-layer" :class="{'layer-page':open===index}">
            <h2>{{health.title}}</h2>
            <p>{{health.desc}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                healths:[
                    {imgurl:'./../src/assets/img/pic1.png',title:'中医养生',desc:'这是简洁的描述内容，这是简洁的描述内容，这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容'},
                    {imgurl:'./../src/assets/img/pic2.png',title:'中医养生',desc:'这是简洁的描述内容，这是简洁的描述内容，这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容'},
                    {imgurl:'./../src/assets/img/pic3.png',title:'中医养生',desc:'这是简洁的描述内容，这是简洁的描述内容，这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容'},
                    {imgurl:'./../src/assets/img/pic4.png',title:'中医养生',desc:'这是简洁的描述内容，这是简洁的描述内容，这是简洁的描述内容这是简洁的描述内容这是简洁的描述内容'}
                ],
                open: false,
            }
        },
        methods:{
            ms(index){
//                this.open=!this.open
                if (this.open!==index) {
                    this.open=index
                }
                else{
                    this.open=false
                }
            }
        }
    }
</script>
<style>
    .health-item{ width: 270px; height: 380px; margin-right: 30px; float: left; position: relative;}
    .health-item:last-child{ margin-right: 0;}
    .health-layer{position: absolute;top:0;left: 0; width: 270px;height: 380px; z-index: 9; background-color: rgba(0,0,0,.5); color: #fff;padding-left:20px; padding-right:20px; box-sizing:border-box;
    h2{color: #fff; font-size: 25px; font-family: "Microsoft Yahei";  position: absolute; bottom: 110px;}
    p{font-size: 14px;font-family:simsun; position: absolute; bottom: 40px;
        display: -webkit-box !important;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;
        margin-right: 20px;
    }
    }
    .health-layer{ display: none;}
    .layer-page{display: block;}
</style>