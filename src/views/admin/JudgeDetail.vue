<template>
    <div class="mark">
        

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
        return {
            username: username,
            examId: examId,
            examConf: examConf,
            testPaper: testPaper,
            answerSheet: this.$store.state.answerSheet[ examId ][ username ]
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
        }
    },
    mounted: function() {
        console.log(this.examConf);
        console.log(this.testPaper);
        console.log(this.answerSheet);
    }
}
</script>