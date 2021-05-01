<template>
  <el-container>
    <el-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    </el-header>
    <el-main>
    <router-view/>
    </el-main>
  </el-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
