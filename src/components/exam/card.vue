
<template>
<el-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>{{ exam.title }}</span>
      <el-button class="button" type="text">开始考试</el-button>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>
</template>

<script>
  
</script>

<style>
.card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
    
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>