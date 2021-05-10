<template>
  <el-container>
    <el-header>
    <el-menu :default-active="activeIndex" class="nav-user" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/exams">考试</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/score/chan">分数</router-link>
        </el-menu-item>
        <el-menu-item index="4" style="float: right;">
          <router-link to="/login">登录</router-link>
        </el-menu-item>
        <el-menu-item index="5" style="float: right;">
          <router-link to="/register">注册</router-link>
        </el-menu-item>
        <el-menu-item index="6" style="float: right;">
          <router-link to="/admin/login">管理员登录</router-link>
        </el-menu-item>
    </el-menu>
    <el-menu :default-active="activeIndexAdmin" class="nav-admin" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/admin">AdminHome</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/admin/exams">批卷</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/admin/paper-gen">新增试卷</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/admin/publish">新增考试</router-link>
        </el-menu-item>
    </el-menu>

    </el-header>
    <el-main>
    <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import $ from 'jquery'
export default {
  name: "App",
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {
      activeIndex: '1',
      activeIndexAdmin: '1',
    }
  },
  mounted: function() {
    if(window.location.pathname.startsWith("/admin")) {
      $('.nav-user').hide();
    } else {
      $('.nav-admin').hide();
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}

html, body {
  height: 100%;
}
</style>
