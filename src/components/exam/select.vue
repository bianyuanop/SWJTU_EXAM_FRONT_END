<template>
    <el-card class="box-card">
        <div class="describe">{{ info.id + ". " + info.describe }}</div>
        <div class="options">
            <el-radio v-model="radio" :label="index" v-for="index in Object.keys(options).length" :key="index">{{ Object.keys(options)[index-1] + '. ' + options[Object.keys(options)[index-1]] }}</el-radio>
        </div>
    </el-card>

</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    name: "Select",
    props: ['info'],
    setup() {
        var selection = '1';
        return {
            radio: ref(selection),
        }
    },
    data() {
        return {
            options: this.info.options
        }
    },
    mounted: function() {
    }
})
</script>

<style scoped>
</style>