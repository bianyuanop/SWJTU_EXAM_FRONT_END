<template>
    <div v-for="(exam, index) in exams" :key="index">
        <Card :exam="exam"/>
    </div>
    <div class="add">
        <el-card>
            <el-input placeholder="考试标题" v-model="input"></el-input>
            <el-select v-model="value" placeholder="选择试卷">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-date-picker
                v-model="examDate"
                type="datetimerange"
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间">
            </el-date-picker>
        <el-button @click="addExam">add</el-button>
        </el-card>
    </div>
</template>

<script>
import Card from '@/components/exam/card.vue'
export default {
    name: "Publish",
    data() {
        var papers = this.$store.state.testPapers;
        var options = [];
        Object.keys(papers).forEach(elem => {
            options.push({value: elem, label: elem});
        });

        return {
            exams: this.$store.state.exams,
            value: null,
            options: options,
            examDate: null,
            input: null
        }
    },
    components: {
        Card
    },
    methods: {
        addExam: function() {
            var duration = new Date();
            var hours, minutes;
            var end_time = this.examDate[1];
            var start_time = this.examDate[0];
            hours = end_time.getHours() - start_time.getHours();
            minutes = end_time.getMinutes() - start_time.getMinutes();
            duration.setHours(hours);
            duration.setMinutes(minutes);
            var exam = {
                id: 1,
                descirbe: this.input,
                start_time: this.examDate[0],
                duration: duration
            }
            console.log(exam);
            this.exams.push(exam);

            //alert("Exam added.");
        }
    }
}
</script>
<style scoped>
.el-button {
    float: right;
}
.el-card {
    margin-top: 20px;
}
.el-input {
    width: 20%;
    margin-right: 5px;
}
.el-select {
    margin-right: 5px;
}
</style>
