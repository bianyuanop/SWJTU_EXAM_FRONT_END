<template>
    <div class="exams">
        <el-card v-for="exam in exams" :key="exam">{{ exam.describe }}
            <a :href="directTo + exam.id">查看</a>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "AdminExams",
    data() {
        return {
            exams: this.$store.state.exams,
            directTo: '/admin/judgelist/'
        }
    },
}
</script>

<style scoped>
.el-card {
    margin-top: 10px;
}
.el-card__body a {
    float: right;
}
</style>