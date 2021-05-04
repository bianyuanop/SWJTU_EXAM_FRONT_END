<template>
    <el-card class="box-card">
        <div class="describe">{{ info.id + '. ' + info.describe }}</div>
        <el-input placeholder="Please input" v-model="input"></el-input>
    </el-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
import $ from 'jquery'
export default defineComponent({
    name: "Fill",
    props: ['info'],
    setup: function() {
        return {
            input: ref('')
        }
    },
    mounted: function() {
        var globalThis = this;
        $('.el-input__inner').on('change', function() {
            globalThis.$parent.answerSheet.fill[globalThis.info.id] = globalThis.input;
        })
    }
})
</script>

