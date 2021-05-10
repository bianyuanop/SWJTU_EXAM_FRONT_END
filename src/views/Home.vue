<template>
    <el-card><a href="/exams">考试</a></el-card>
    <el-card><a :href="toScore">成绩</a></el-card>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  setup() {
    if(window.sessionStorage.getItem('username') == null) {
      alert("not login.");
      window.location = '/login';
    } 
  },
  data() {
    var username = window.sessionStorage.getItem('username');
    return {
      username,
      toScore: "/score/" + username
    }
  }
}
</script>
