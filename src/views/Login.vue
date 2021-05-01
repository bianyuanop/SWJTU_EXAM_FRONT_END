<template>
    <el-input placeholder="Please input" v-model="username"></el-input>
    <el-input placeholder="Please input password" v-model="password" show-password></el-input>
    <el-button round @click="login">Login</el-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    name: "Login",
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
        },
        checkState: function() {
        }
    }
})
</script>