<template>
    <el-alert
    title="登陆失败"
    type="error">
    </el-alert>
    <el-alert
    title="登陆成功"
    type="success">
    </el-alert>
    <el-input placeholder="请输入用户名" v-model="username"></el-input>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <el-button round @click="login">Login</el-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
import $ from 'jquery'

export default defineComponent ({
    name: "Login",
    data() {
        return {}
    },
    setup() {
        return {
            password: ref(''),
            username: ref('')
        }
    },
    methods: {
        login: async function() {
            var isIn = await this.checkExists();
            if(isIn == false) {
                $('.el-alert').hide();
                $('.el-alert--error').show();
            }else {
                $('.el-alert').hide();
                var pass = await this.checkPassword(this.username, this.password);
                if(pass) {
                    $('.el-alert--success').show();
                    this.$store.commit({
                        type:'userLogin',
                        username: this.username,
                        password: this.password
                    })
                    window.sessionStorage.setItem('username', this.username);
                    await this.sleep(500);
                    window.location = '/';
                }else {
                    $('.el-alert--error').show();
                }
                console.log("is in");
            }
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
        checkPassword: async function(username, password) {
            var users = this.$store.state.users;
            for(let i=0; i<users.length; i++) {
                if(users[i].username == username && users[i].password == password) return true;
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