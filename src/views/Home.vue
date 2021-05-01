<template>
  <div class="home" @click="interact">
    This is sweet home.
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      data: "something"
    }
  },
  methods: {
    interact: function() {
      $.post({
        url: 'exam.shinenet.cn/api/auth/register',
        data: {username: "chan", password: "test", student_id: 2019112256},
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      })
    }
  }
}
</script>
