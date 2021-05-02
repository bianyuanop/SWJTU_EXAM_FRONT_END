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
  width: 100%;
  height: 100%;
}

html, body {
  height: 100%;
}
</style>
