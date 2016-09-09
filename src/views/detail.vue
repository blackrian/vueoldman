<template>
    <div class="detail-page">
        {{detail.data.content | inHtmls}}
    </div>
</template>
<script type="text/babel">
    export default{
        data(){
            return {
                detail:{}
            }
        },
        created(){
            debugger;
            this.fetchDetail(this.$route.params.id)
        },
        methods:{
            fetchDetail: function(id) {

                var resource = this.$resource('http://cnodejs.org/api/v1/topic/'+id),
                vm = this;
                resource.get()
                        .then((response) => {
                            debugger;
                            vm.$set('detail',response.data)
                        })
                        .catch(function(response) {
                            console.log(response)
                        })
            }

        }

    }
</script>
<style>
.detail-page{
     width: 1170px; margin: 20px auto; padding: 0 50px; line-height: 2em;
}
</style>