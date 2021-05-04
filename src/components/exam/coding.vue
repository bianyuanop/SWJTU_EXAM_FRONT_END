<template>
    <el-card class="box-card">
        <div class="question">{{ info.id + '. ' + info.describe }}
            <el-select v-model="value" placeholder="Language">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="highlight">
            <el-input type="textarea" placeholder="" v-model="code" rows="15"></el-input>
        </div>
        <div class="btn-group">
            <el-button type="primary" @click="run">Run</el-button>
        </div>
        <div class="res">
        </div>
    </el-card>
</template>

<script>
import $ from 'jquery'
export default {
    name: "Coding",
    props: ['info'],
    methods: {
        run: function() {
            this.runningResul = "Running";
            $('.res').show();
            $('.res')[0].innerText = this.code;
            console.log("Running.");
        },
    },
    mounted: function() {
        var globalThis = this;
        $('.highlight > .el-textarea > textarea').on('keydown', function() {
            globalThis.$parent.answerSheet.coding[globalThis.info.id] = globalThis.code;
        })
    },
    data() {
      return {
        options: [{
          value: 'c',
          label: 'c'
        },
        {
          value: 'cpp',
          label: 'cpp'
        }, 
        {
          value: 'python',
          label: 'python'
        },
        {
          value: 'go',
          label: 'go'
        }
        ],
        value: '',
        runningResul: '',
        code: ''
      }
    }
}
</script>

<style scoped>
.el-select {
    float: right;
    width: 25%;
}
.highlight {
    padding-top: 20px;
}
.btn-group {
    padding-top: 20px;
    float: right;
}
.res {
    background-color: rgba(149, 160, 224, 0.527);
    margin-top: 13%;
    border-style: dashed;
    padding: 20px;
}
</style>