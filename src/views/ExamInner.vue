<template>
    <el-progress :percentage="percentage" :color="customColors">{{ "还剩" + hoursLeft + "小时" + minutesLeft + "分钟" }}</el-progress>
    <Select :info="info" v-for="info in selects" :key="info"/>
    <Fill :info="info" v-for="info in fills" :key="info"/>
    <Fix :info="info" v-for="info in fixs" :key="info"/>
    <Coding :info="info" v-for="info in codings" :key="info"/>
</template>

<script>
import Select from '@/components/exam/select.vue'
import Fix from '@/components/exam/fix.vue'
import Coding from '@/components/exam/coding.vue'
import Fill from '@/components/exam/fill.vue'

export default {
    name: "ExamInner",
    components: {
        Select,
        Fill,
        Fix,
        Coding
    },
    mounted: function() {
    },
    data() {
        return {
            selects: this.$store.state.select,
            fills: this.$store.state.fill,
            fixs: this.$store.state.fix,
            codings: this.$store.state.coding,
            examConf: this.getExam(this.$route.params.id),
            customColors: [
                {color: '#f56c6c', percentage: 20},
                {color: '#e6a23c', percentage: 40},
                {color: '#5cb87a', percentage: 60},
                {color: '#1989fa', percentage: 80},
                {color: '#6f7ad3', percentage: 100}
            ]
        }
    },
    methods: {
        getExam: function(id) {
            var exams = this.$store.state.exams;
            for(let i=0; i<exams.length; i++) {
                if(exams[i].id == id) return exams[i];
            }
            return null;
        }   
    },
    computed: {
        percentage() {
            var cur = new Date();
            var hoursTotal = this.examConf.duration.getHours();
            var minutesTotal = this.examConf.duration.getMinutes() + hoursTotal * 60;
            var hoursLeft = cur.getHours() - this.examConf.start_time.getHours() - 1;
            var minutesLeft =  60 - cur.getMinutes() + hoursLeft * 60;
            return (1 - minutesLeft/minutesTotal)*100>0 ? (1 - minutesLeft/minutesTotal)*100 : 0;
        },
        hoursLeft() {
            var cur = new Date();
            var hoursLeft = cur.getHours() - this.examConf.start_time.getHours() - 1;
            return hoursLeft;
        },
        minutesLeft() {
            var cur = new Date();
            var minutesLeft = 60 - cur.getMinutes();
            return minutesLeft;
        }
    }
}
</script>

<style scoped>
.box-card {
    margin-top: 20px;
}
</style>