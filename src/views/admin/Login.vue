<template>
    <el-input placeholder="Please input" v-model="username"></el-input>
    <el-input placeholder="Please input password" v-model="password" show-password></el-input>
    <el-button round @click="login">Login</el-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    name: "AdminLogin",
    data() {
    },
    setup() {
        return {
            password: ref(''),
            username: ref('')
        }
    },
    methods: {
        login: function() {
            var verified = this.checkState();
            if(verified) {
                alert("登陆成功.");
                this.$store.commit({
                    type: 'adminLogin',
                    password: this.password,
                    username: this.username
                })
                window.location = '/admin'
            }else {
                alert("登陆失败.");
            }
        },
        checkState: async function() {
            var admins = this.$store.state.admins;
            for(let i=0; i<admins.length; i++) {
                if(admins[i].adminname == this.username && admins[i].password == this.password) return true;
            }

            return false;
        }
    }
})
</script>