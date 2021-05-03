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
            $('.el-alert').show();
            console.log("Running.");
        },
    },
    mounted: function() {
        $('.el-alert').hide();
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
</style>