<template>
    <el-table :data="scoreTable">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="start_time" label="start_time"></el-table-column>
        <el-table-column prop="score" label="score"></el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "Score",
    data() {
        var examStartTimes = {};
        this.$store.state.exams.forEach(exam => {
            examStartTimes[exam.id] = exam.start_time;
        });
        var myScore = {};
        for(let index in this.$store.state.score) {
            let examScores = this.$store.state.score[index];
            for(let user in examScores) {
                if(user == this.$route.params.username) {
                    myScore[index] = examScores[user].total;                    
                }
            } 
        }
        var scoreTable = [];
        for(let index in myScore) {
            scoreTable.push({
                id: index,
                start_time: examStartTimes[index],
                score: myScore[index]
            });
        }
        return {
            scoreTable
        }
    },
    mounted: function() {
        console.log(this.scoreTable);
    },
    methods: {
    }
}
</script>