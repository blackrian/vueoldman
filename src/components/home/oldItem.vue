<template>
    <div class="model-item" v-for="item in data" v-link="{name:'detail',params:{id:item.id}}" >
        <img class="item-iocn" :src="item.author.avatar_url" alt="">
        <h2>{{item.title}}</h2>
        <p>{{item.content | inText }}</p>
    </div>
</template>
<script type="text/babel">
    export default{
        props:['data']
    }
</script>