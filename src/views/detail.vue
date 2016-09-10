<template>
    <div class="detail-page">
        <!--使用v-html指令绑定html内容的数据-->
        {{{content.data.content}}}
    </div>
</template>
<script type="text/babel">
    import {getContent} from '../vuex/actions'
    import {Content} from '../vuex/getters'
    export default{
        vuex:{
            getters:{
                content:Content
            },
            actions:{
                getContent
            }
        },
//        data(){
//            return {
//                detail:{}
//            }
//        },
        created(){
//            this.fetchDetail(this.$route.params.id)
        },
        ready(){
            this.getContent(this.$route.params.id)
        },
        methods:{
//            fetchDetail: function(id) {
//                let vm = this,
//                resource = this.$resource('http://cnodejs.org/api/v1/topic/'+id);
//                resource.get()
//                        .then((response) => {
//                            vm.$set('detail',response.data)
//                        })
//                        .catch(function(response) {
//                            console.log(response)
//                        })
//            }

        }

    }
</script>
<style>
.detail-page{
     width: 1170px; margin: 20px auto; padding: 0 50px; line-height: 2em;
}
</style>