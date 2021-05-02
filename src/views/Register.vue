<template>
    <el-alert
    title="success alert"
    type="success">
  </el-alert>
    <el-input placeholder="Please input" v-model="username"></el-input>
    <el-input placeholder="Please input" v-model="student_id"></el-input>
    <el-input placeholder="Please input password" v-model="password" show-password></el-input>
    <el-button round @click="register">Register</el-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
import $ from 'jquery'
export default defineComponent ({
    name: "Register",
    setup() {
        return {
            password: ref(''),
            username: ref(''),
            student_id: ref('')
        }
    },
    methods: {
        register: async function() {
            var isIn = await this.checkExists();
            if( isIn == false ) {
                this.$store.commit({
                    type: 'addUser',
                    username: this.username,
                    password: this.password,
                    student_id: this.student_id
                });
                $('.el-alert').show();
                await this.sleep(500);
                window.location = '/login';
            }else{
                $('.el-alert')[0].classList.remove('el-alert--success');
                $('.el-alert')[0].classList.add('el-alert--error');
                $('.el-alert').show();
            }
            console.log(this.$store.state.users);
        },
        checkExists: async function() {
            var users = this.$store.state.users;
            for(let i=0; i<users.length; i++) {
                if(users[i].username == this.username) {
                    return true;
                }
            }
            return false;
        },
        sleep: function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    mounted: function() {
        $('.el-alert').hide();
    }
})
</script>