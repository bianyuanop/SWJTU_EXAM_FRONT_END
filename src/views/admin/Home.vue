<template>
    <el-card><a href="/admin/paper-gen">试卷生成</a></el-card>
    <el-card><a href="/admin/exams">试卷批改</a></el-card>
    <el-card><a href="/admin/publish">新建考试</a></el-card>
</template>

<script>
export default {
    name: "AdminHome",
}
</script>

<style scoped>
.el-card {
    margin-top: 20px;
}
</style>