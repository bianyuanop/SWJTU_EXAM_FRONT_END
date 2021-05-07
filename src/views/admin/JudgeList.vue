<template>
    <div class="answers">
        <el-empty description="没有答卷"></el-empty>
        <el-card v-for="username in Object.keys(answerSheets)" :key="username">{{ username }}
            <a :href="directTo+examId+'/'+username" class="">批改</a>
        </el-card>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "JudgeList",
    data() {
        if(!(this.$route.params.id in this.$store.state.answerSheet)) {
            console.log("No such exam");
            this.$store.state.answerSheet[ this.$route.params.id ] = {};
            console.log(this.$store.state.answerSheet);
        }
        return {
            answerSheets: this.$store.state.answerSheet[ this.$route.params.id ],
            directTo: '/admin/judgedetail/',
            examId: this.$route.params.id
        }
    },
    mounted: function() {
        console.log(this.answerSheets);
        if( this.answerSheets ) {
            $('.el-empty').hide();
        }else {
            console.log("empty");
        }
    }
}
</script>

<style scoped>
.el-card a {
    float: right;
}
</style>