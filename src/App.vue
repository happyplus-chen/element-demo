<template>
  <div id="app">
    <el-menu theme="dark"
      router
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item :key="item.path" v-for="(item,index) in $router.options.routes" :index="item.path">{{item.path}}</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu> -->
  
    </el-menu>
    <div class="line"></div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    handleSelect(){}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
