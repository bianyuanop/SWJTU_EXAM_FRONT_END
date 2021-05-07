<template>
    <el-progress :percentage="percentage" :color="customColors">{{ "还剩" + hoursLeft + "小时" + minutesLeft + "分钟" }}</el-progress>
    <Select :info="info" ref="selRes" v-for="info in selects" :key="info"/>
    <Fill :info="info" v-for="info in fills" :key="info"/>
    <Fix :info="info" v-for="info in fixs" :key="info"/>
    <Coding :info="info" v-for="info in codings" :key="info"/>

    <div class="tail-btn">
        <el-button @click="commit">提交</el-button>
    </div>
</template>

<script>
import Select from '@/components/exam/select.vue'
import Fix from '@/components/exam/fix.vue'
import Coding from '@/components/exam/coding.vue'
import Fill from '@/components/exam/fill.vue'

import $ from 'jquery'
export default {
    name: "ExamInner",
    components: {
        Select,
        Fill,
        Fix,
        Coding
    },
    mounted: function() {
        var id;
        for(let i=0; i<this.selects.length; i++) {
            id = this.selects[i].id;
            this.answerSheet.select[id] = '';
        }
        for(let i=0; i<this.fills.length; i++) {
            id = this.fills[i].id;
            this.answerSheet.fill[id] = '';
        }
        for(let i=0; i<this.fixs.length; i++) {
            id = this.fixs[i].id;
            this.answerSheet.fix[id] = '';
        }
        for(let i=0; i<this.codings.length; i++) {
            id = this.codings[i].id;
            this.answerSheet.coding[id] = '';
        }
        console.log(this.answerSheet);

        $('textarea').each(function() {
            this.addEventListener('keydown', function(e) {
                if (e.key == 'Tab') {
                    e.preventDefault();
                    var start = this.selectionStart;
                    var end = this.selectionEnd;

                    // set textarea value to: text before caret + tab + text after caret
                    this.value = this.value.substring(0, start) +
                    "\t" + this.value.substring(end);

                    // put caret at right position again
                    this.selectionStart =
                    this.selectionEnd = start + 1;
                }
            })
        })
    },
    data() {
        return {
            examConf: this.getExam(this.$route.params.id),
            customColors: [
                {color: '#f56c6c', percentage: 20},
                {color: '#e6a23c', percentage: 40},
                {color: '#5cb87a', percentage: 60},
                {color: '#1989fa', percentage: 80},
                {color: '#6f7ad3', percentage: 100}
            ],
            answerSheet: {
                'select': {},
                'fill': {},
                'fix': {},
                'coding': {}
            }
        }
    },
    methods: {
        getExam: function(id) {
            var exams = this.$store.state.exams;
            for(let i=0; i<exams.length; i++) {
                if(exams[i].id == id) return exams[i];
            }
            return null;
        },
        commit: function() {
            this.$store.commit({
                type: 'addAnswerSheet',
                answerSheet: this.answerSheet,
                id: this.$route.params.id
            });
            alert("交卷成功")
//            window.location = '/';
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
        },
        testPaperId() {
            return this.examConf.paperId;
        },
        selects() {
            var res = [];
            var selectStore = this.$store.state.select;
            var selectIds = this.$store.state.testPapers[this.testPaperId].select;

            for(let i=0; i<selectStore.length; i++) {
                for(let j=0; j<selectIds.length; j++) {
                    if(selectStore[i].id == selectIds[j]) res.push(selectStore[i]);
                }
            }
            return res;
        },
        fixs() {
            var res = [];
            var fixStore = this.$store.state.fix;
            var fixIds = this.$store.state.testPapers[this.testPaperId].fix;

            for(let i=0; i<fixStore.length; i++) {
                for(let j=0; j<fixIds.length; j++) {
                    if(fixStore[i].id == fixIds[j]) res.push(fixStore[i]);
                }
            }
            return res;
        },
        fills() {
            var res = [];
            var fillStore = this.$store.state.fill;
            var fillIds = this.$store.state.testPapers[this.testPaperId].fill;

            for(let i=0; i<fillStore.length; i++) {
                for(let j=0; j<fillIds.length; j++) {
                    if(fillStore[i].id == fillIds[j]) res.push(fillStore[i]);
                }
            }
            return res;
        },
        codings() {
            var res = [];
            var codingStore = this.$store.state.coding;
            var codingIds = this.$store.state.testPapers[this.testPaperId].coding;

            for(let i=0; i<codingStore.length; i++) {
                for(let j=0; j<codingIds.length; j++) {
                    if(codingStore[i].id == codingIds[j]) res.push(codingStore[i]);
                }
            }
            return res;
        },
    }
}
</script>

<style scoped>
.box-card {
    margin-top: 20px;
}


.tail-btn {
    margin-top: 20px;
}
    .el-button {
    float: right;
}
</style>