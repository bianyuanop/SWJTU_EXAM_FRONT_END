<template>
    <el-card class="box-card">
        <div class="describe">{{ info.id + ". " + info.describe }}</div>
        <div class="options" :id="info.id">
            <el-radio-group v-model="radio">
                <el-radio :label="Object.keys(options)[index-1]" v-for="index in Object.keys(options).length" :key="index">{{ Object.keys(options)[index-1] + '. ' + options[Object.keys(options)[index-1]] }}</el-radio>
            </el-radio-group>
        </div>
        </el-card>

</template>

<script>
import $ from 'jquery'

export default {
    name: "Select",
    props: ['info'],
    data() {
        return {
            options: this.info.options,
            radio: 0
        }
    },
    mounted: function() {
        var globalThis = this;
        $('.options#' + this.info.id).on('change', function() {
            globalThis.$parent.answerSheet.select[globalThis.info.id] = globalThis.radio;
            console.log(globalThis.radio);
        })
    }
}
</script>

<style scoped>
</style>