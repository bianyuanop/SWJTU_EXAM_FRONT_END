
<template>
<el-card class="box-card">
    <div class="card-header">
      <h1>{{ exam.describe }}</h1>
      <el-button class="button" type="text" @click="direct2exam">开始考试</el-button>
    </div>
    <div class="time">开始时间: {{ start_time }}</div> 
    <div class="duration">结束时间: {{ end_time }}</div> 
</el-card>
</template>

<script>
export default {
    name: "Card",
    props: ['exam'],
    computed: {
        start_time(){
            return this.exam.start_time.getMonth() + "月" + this.exam.start_time.getDay() + "日 " + this.exam.start_time.toString().slice(15,24);
        },
        end_time() {
            var cur = new Date(this.exam.start_time); 
            cur.setHours(this.exam.start_time.getHours() + this.exam.duration.getHours());
            cur.setMinutes(this.exam.start_time.getMinutes() + this.exam.duration.getMinutes());
            return cur.getMonth() + "月" + cur.getDay() + "日 " + cur.toString().slice(15,24);
        }
    },
    methods: {
        direct2exam: function() {
            return null;
        }
    }

}
</script>

<style>
.card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
}
.box-card {
    display: flex;
    flex-direction: column;
}
 
</style>