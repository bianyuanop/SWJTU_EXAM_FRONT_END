<template>
    <el-card class="box-card">
        <div class="describe">{{ info.id + '. ' + info.describe }}</div>
        <el-input placeholder="Please input" v-model="input"></el-input>
    </el-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: "Fill",
    props: ['info'],
    setup() {
        return {
            input: ref('')
        }
    }
})
</script>

