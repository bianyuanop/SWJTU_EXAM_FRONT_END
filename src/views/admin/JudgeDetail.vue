<template>
    <div class="mark">
        <el-collapse>
            <el-collapse-item :title="index" v-for="(content, index) in answerSheet" :key="index">
                <el-row>
                    <el-col :span="8">正确答案</el-col>
                    <el-col :span="8">他的答案</el-col>
                    <el-col :span="8">给分</el-col>
                </el-row>
                <div class="mark-row" v-for="(answer, problemId) in answerSheet[index]" :key="problemId">
                    <el-row>
                        <el-col :span="8">{{ $store.state[ index ][ problemId - 1].answer }}</el-col>
                        <el-col :span="8">{{ answerSheet[index][problemId] }}</el-col>
                        <el-col :span="8">
                            <el-input-number v-model="scoreSheet[index][problemId]" :min="0" :max="100"></el-input-number>
                        </el-col>
                    </el-row>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
    <div class="commit" style="margin-top: 20px;">
        <el-button style="float: right;" @click="commit">提交</el-button>
    </div>
</template>

<script>
export default {
    name: "JudgeDetail",
    data() {
        var examId = this.$route.params.examId;
        var examConf = this.getExam(examId);
        var testPaper = this.$store.state.testPapers[ examConf.paperId ];
        var username = this.$route.params.username;
        var answerSheet = this.$store.state.answerSheet[ examId ][ username ];
        var scoreSheet = {};
        Object.keys(answerSheet).forEach(elem => {
            scoreSheet[elem] = {};            
            testPaper[ elem ].forEach(problemId => {
                scoreSheet[elem][problemId] = 60;
            });
        });
        return {
            username: username,
            examId: examId,
            examConf: examConf,
            testPaper: testPaper,
            answerSheet: answerSheet,
            scoreSheet: scoreSheet
        }
    },
    methods: {
        getExam: function(id) {
            var res = null;
            this.$store.state.exams.forEach(exam => {
                if(exam.id == parseInt(id)){
                    res = exam;
                }
            });
            return res;
        },
        commit: function() {
            alert("Commited");
            window.location = '/admin/judgelist/' + this.$route.params.examId;
        }
    },
    mounted: function() {
    }
}
</script>

<style scoped>
.mark div {
    margin-top: 20px;
}

.label {
    display: flex;
    flex-direction: row;
    align-content: space-between;
} 
.el-col {
    font-family: "PingFang SC";
}

</style>