<template>
    <div class="join-form">
        <h2 class="join-title">欢迎您的加入</h2>
        <p class="join-info">在这里您将遇见更多志同道合的朋友</p>
        <validator name="validation">
            <ul>
                <li class="form-input-item"><drop></drop></li>
                <li class="form-input-item"><input type="text" class="ipt-txt" placeholder="姓名" v-model="name" v-validate:name="{required:true}">
                    <div>
                        <p v-if="$validation.name.required">姓名不能为空</p>
                    </div>
                </li>
                <li class="form-input-item"><input type="text" class="ipt-txt" placeholder="手机号" v-model="phone" v-validate:phone="['phone']">
                    <div>
                        <p v-if="$validation.phone.phone">手机号码错误</p>
                    </div>
                </li>
            </ul>
        </validator>

        <a class="btn-join">开始报名</a>
    </div>
</template>
<script type="text/babel">
    import Drop from './selectDrop.vue'
    export default{
        data(){
            return{
                name:'',
                phone:''
            }
        },
        validators:{
          phone:{
              check(val){
                  return /^1(3|4|5|7|8)\d{9}$/.test(val);
              }
          }
        },
        components:{
            Drop
        }
    }
</script>