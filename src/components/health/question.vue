<template>
    <div v-for="item in question.data">
        <h3 class="qs-title">{{item.question}}</h3>
        <p class="ans-content" v-html="item.anwser"></p>
    </div>
</template>
<script>
    import {getQuestion} from '../../vuex/actions'
    import {Question} from '../../vuex/getters'
    export default{
        data(){
            return{}
        },
        vuex:{
            getters:{
                question:Question
            },
            actions:{
                getQuestion
            }
        },
        ready(){
            this.getQuestion();
        }
    }
</script>