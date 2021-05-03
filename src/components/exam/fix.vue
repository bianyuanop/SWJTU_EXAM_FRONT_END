<template>
    <el-card class="box-card">
        {{ info.id + ". " + info.describe }}
        <div class="inner-wrapper">
            <div class="question">
                {{ info.codePiece }}
            </div>
            <div class="answer-sheet">
                Answer sheet
                <el-input type="textarea" v-model="fixRes" rows="10"></el-input>
            </div>
        </div>
    </el-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    name: "Fix",
    props: ['info'],
    setup() {
        return {
            fixRes: ref('')
        }
    }
})
</script>

<style scoped>
.inner-wrapper {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
}
.question {
    white-space: pre-line;
    width: 48%;
    background-color: rgb(82,51,51,0.1);
    padding-left: 10px;
}
.answer-sheet {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: green;
    padding-left: 20px;
}
</style>
