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