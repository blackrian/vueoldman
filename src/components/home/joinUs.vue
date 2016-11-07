<template>
    <h2 class="join-us-title">加入我们</h2>
    <validator name="validation">
        <form novalidate>
            <ul>
                <li class="form-input-item join-item">
                    <input class="ipt-txt" type="text" placeholder="姓名" v-model="name" v-validate:name="{required:true}">
                    <div>
                        <p v-if="$validation.name.required">名称不能为空</p>
                    </div>
                </li>
                <li class="form-input-item join-item"><input class="ipt-txt" type="text" placeholder="公司" v-model="company"></li>
                <li class="form-input-item join-item"><input class="ipt-txt" type="text" placeholder="手机号" v-model="phoneNum"></li>
                <li class="form-input-item join-item">
                    <input class="ipt-txt" type="text" placeholder="邮箱" v-model="mail" v-validate:address="['email']">
                    <div>
                        <p v-if="$validation.address.email">邮箱格式不正确</p>
                    </div>
                </li>
                <li class="form-input-item join-item join-area"><textarea class="txt-area" placeholder="留言" v-model="leaveMsg"></textarea></li>
            </ul>
        </form>
    </validator>
    <a class="submit-info">提交信息</a>
</template>
<script>
    export default{
        data(){
            return{
                name:'',
                company:'',
                phoneNum:'',
                mail:'',
                leaveMsg:''
            }
        },
        methods:{
            send(){
                this.name=this.name.trim();

            }
        },
        validators:{
            email:{
                message:'邮箱格式不正确',
                check(val){
                    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)
                }
            }
        }
    }
</script>