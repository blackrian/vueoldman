<template>
    <div class="img-container">
        <p v-for="item in health.data">
            <img :src="item.url" alt="">
            <!--<span>{{item.title}}</span>-->
        </p>
    </div>
    <div class="qs-main">
        <answer></answer>
    </div>
</template>
<script>
    import Answer from '../components/health/question.vue'
import { getHealth } from '../vuex/actions'
import { Health } from '../vuex/getters'
    export default{
        vuex:{
            getters:{
                health:Health
            },
            actions:{
                getHealth
            }
        },
        data(){
            return{
            }
        },
        ready(){
            this.getHealth();
        },
        components:{
            Answer
        }
    }
</script>
